import React from 'react'
const Newsitem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div>
      <div className="card " style={{}}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
          <span className="badge rounded-pill bg-danger">{source}
          </span>
        </div>
        <img src={!imageurl ? "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc=" : imageurl} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...<span className="badge bg-success">New</span></h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {date}</small></p>
          <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary pd-1">Read More</a>
        </div>
      </div>
    </div>
  )
}
export default Newsitem