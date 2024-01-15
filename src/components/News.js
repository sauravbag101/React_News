import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
static defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}
static propTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category: PropTypes.string,

}
 capitalizeFirstLetter = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props){
    super(props);
    console.log("I'm constructor");
    this.state = {
             articles :[],
             loading: false,
             page: 1,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - newsMoney`;
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/everything?country=${this.props.country}&category=${this.props.category}
    &from=2023-11-18&sortBy=publishedAt&apiKey=6d74a92d5c914e578fb6722c7a2a9201&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    // https://newsapi.org/v2/everything?q=tesla&from=2023-11-18&sortBy=publishedAt&apiKey=
    // 6d74a92d5c914e578fb6722c7a2a9201
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({article: parsedData.articles, totalResults:parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount(){
    console.log("cdm")
    this.updateNews();
    
  }
  handlePreviousClick=async()=>{
    console.log("Previous Mode");

    // let url = `https://newsapi.org/v2/everything?country=${this.props.country}&category=${this.props.category}&from=2023-12-11&to=2023-12-11&sortBy=popularity&apiKey=6d74a92d5c914e578fb6722c7a2a9201&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json()
    //   console.log(parsedData);
    //   // this.setState({article: parsedData.articles }) 
      
    //   this.setState({
    //     page: this.state.page - 1,
    //     article: parsedData.articles,
    //     loading: false
    //   })
    this.setState({page: this.state.page - 1})
    this.updateNews();
}
  handleNextClick=async()=>{
      console.log("Next Mode");
      // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

      
      
      // let url = `https://newsapi.org/v2/everything?country=${this.props.country}&category=${this.props.category}&from=2023-12-11&to=2023-12-11&sortBy=popularity&apiKey=6d74a92d5c914e578fb6722c7a2a9201&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true});
      // let data = await fetch(url);
      // let parsedData = await data.json()
      // console.log(parsedData);
      // // this.setState({article: parsedData.articles }) 
      
      // this.setState({
      //   page: this.state.page + 1,
      //   article: parsedData.articles,
      //   loading: false
      // })
    this.setState({page: this.state.page + 1})
    this.updateNews();
    }
  
  render() {
    console.log("render")
    return (
      <div className="container my-3">
        {/* this is a News component */}
        <h2>News Update - top headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((Element)=>{
            
          
        return <div className="col-md-3 my-3" key={Element.url}>
        <NewsItem title={Element.title?Element.title.slice(0,45):""} description={Element.description?Element.description.slice(0,88):""} imageUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.datenn}/>
        </div>
        })}
       
     
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>

      </div>
      </div>
    )
  }
}

export default News
