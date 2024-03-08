from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from newsapi import NewsApiClient
from dateutil import parser
from news import News
from mysql_connect import Connection
from s3_client import upload_blob
import urllib.request



def summarize_news(article):
    instruct_tokenizer = AutoTokenizer.from_pretrained("dakshasinghal/news-summarization-big-data")
    instruct_model = AutoModelForSeq2SeqLM.from_pretrained("dakshasinghal/news-summarization-big-data")

    device="cuda:0"
    article = article

    prompt = f"""
    Summarize the following article.

    {article}

    Summary:
    """
    inputs = instruct_tokenizer(article,  max_length=1024,return_tensors="pt",truncation=True)
    output = instruct_tokenizer.decode(
        instruct_model.generate(
        inputs["input_ids"],
        max_new_tokens=256,
        )[0],
        skip_special_tokens=True
    )

    return output


def scrape_top_news(newsapi, sql_conn):
    
    news_list = newsapi.get_top_headlines()["articles"]
    # news_list = news_list[0:min(100,len(news_list))]
    news_list = news_list[0:5]

    for headline in news_list[1:2]:
        print(headline)
        news = News(
            "TOP_NEWS",
            headline["title"].split("-")[0],
            headline["url"],
            parser.parse(headline["publishedAt"]).timestamp(),
            True,
            summarize_news(headline["content"])[1:]
        )
        news_id = sql_conn.create_news(news)
        image_source_url = headline["urlToImage"]
        image_extension = image_source_url.split(".")[-1]
        download_image_loc = str(news_id)+"."+image_extension
        urllib.request.urlretrieve(image_source_url, download_image_loc)
        upload_blob("news-summarizer-images", download_image_loc, download_image_loc)

        


sql_conn = Connection("voltaic-space-416502:us-central1:news-summarizer-db",
                          "root",
                          "news-summarizer",
                          "newssummarizerdb"
                          )
newsapi = NewsApiClient(api_key='a5dbf181ef7449e7a1afb6f5f8ec0d03')
scrape_top_news(newsapi, sql_conn)






