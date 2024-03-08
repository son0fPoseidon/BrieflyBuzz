from dataclasses import dataclass

@dataclass
class News:
    category: str
    heading: str
    link: str
    date: int
    top_news: bool
    summary: str
