import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem.jsx';

function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 8; // number of articles per page

  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < Math.ceil(news.length / pageSize)) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=bbeb1c86d60a48a78e62025ca3c633c4";
        let response = await fetch(url);
        let data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchData();
  }, []);

  // Calculate which articles to show
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = news.slice(startIndex, endIndex);

  return (
    <>
      <h2>Top headlines news today</h2>
      <div className='container my-3'>
        <div className='row'>
          {currentArticles.map((element) => (
            <div className='col-md-3' key={element.url}>
              <NewsItem 
                title={element.title} 
                description={element.description} 
                imageUrl={element.urlToImage} 
                newsUrl={element.url} 
              />
            </div>
          ))}
        </div>
        <div className='btn d-flex justify-content-between my-3'>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={handlePreviousClick} 
            disabled={page === 1}
          >
            Previous
          </button>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={handleNextClick} 
            disabled={page >= Math.ceil(news.length / pageSize)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default News;