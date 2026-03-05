import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem.jsx'

function News() {
    const [news, setNews] = useState([]);

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

  return (
      <>
      <h2>Top headlines news today</h2>
      <div className='container my-3'>
            <div className='row'>
                {news.map((element) => {
                    return (
                        <div className='col-md-3' key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    )
                })}
           </div>
       </div>   
      </>
  )
}

export default News
