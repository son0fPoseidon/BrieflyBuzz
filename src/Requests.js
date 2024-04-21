import API_KEY from './API_KEY';

const requests = {
    fetchTopHeadlinesIndia: `top-headlines?country=in&pageSize=40&apiKey=${API_KEY}`,
    fetchTopHeadlinesUS: `top-headlines?country=us&apiKey=${API_KEY}`,
    fetchTopHeadlinesDutch: `top-headlines?country=nl&apiKey=${API_KEY}`,
    fetchTopHeadlinesKorea: `top-headlines?country=kr&apiKey=${API_KEY}`,
    fetchTopHeadlinesBusiness: `top-headlines?category=business&language=en&apiKey=${API_KEY}`,
}

export default requests;