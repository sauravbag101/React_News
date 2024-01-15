import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let{title,description,imageUrl,newsUrl,author,date} = this.props
   
    return (
      <div>
        <div className="card" style={{width: "18rem;"}}>
        <img src={ !imageUrl?"https://m-cdn.phonearena.com/images/article/153340-wide-two_1200/Apple-Podcasts-to-come-to-Tesla-vehicles-in-upcoming-holiday-update.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">by {!author?"unkown": author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="blank" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    )
  }
}

export default NewsItem
