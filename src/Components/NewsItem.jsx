import React from 'react'

function NewsItem({ title, description, imageUrl, newsUrl }) {

  return (
    <div>
      <div className='container my-3'>
        
        
              <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt="News Image" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href={newsUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
             
          </div>
      </div>
    </div>
  )
}

export default NewsItem
