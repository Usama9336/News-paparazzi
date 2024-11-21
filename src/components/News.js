import React, { useState,useEffect} from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'
const News =(props)=> {
  const [articles, setarticles] = useState([])
  const [page, setpage] = useState(1)
  const [loading, setloading] = useState(false)
  const [totalResults, settotalResults] = useState(0)
    //document.title=`${props.category}`-'NewsPaparazzi';//747431a5242541a8a6a2bad50362cc47
  const updateNews=async()=>{
    props.setProgress(10);
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}`;
  setloading(true);
  let data= await fetch(url);
  props.setProgress(30);
  let parsedata=await data.json();
  console.log(parsedata.articles);
  props.setProgress(50);
  setarticles(parsedata.articles)
  settotalResults(parsedata.totalResults)
  setloading(true)
  props.setProgress(70);
  props.setProgress(100);
  console.log(articles);
}

useEffect(() => {
  updateNews();
}, [])

{/* const handleprevclick=async()=>{
  setpage(page-1);
  updateNews();
}
const handlenextclick=async()=>{ 
  setpage(page+1);  
  updateNews();
  }*/}
   const fetchMoreData=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page+1}`;
    setpage(page+1)
    setloading(true);
    let data= await fetch(url);
    let parsedata=await data.json();
    console.log(parsedata.articles);
    setarticles(articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults)
    console.log(articles);
  }
    return (
      <>
      <div className='container mx-6 my-6'>
        <h1 className='text-center '  style={{color:'black', margin:'56px 0px', marginBottom:'0px', paddingTop:'2rem'}}>
          NewsPaparazzi-Top Headlines
        </h1>
        {/*{.loading && <Loading/>}*/}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Loading/>}
        >
          
<div className="container">
        <div className="row my-5">
          {articles?articles.map((element) => {
            return <div className="col-md-4 p-2" key={element.url}>
              <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div>
          }):""}
        </div>
        </div>
        </InfiniteScroll>
        {/*<div className="container d-flex justify-content-between">
        <button disabled={.page<=1} type="button" className="btn btn-success" onClick={.handleprevclick}>&larr; Previous </button>
        <button disabled={.page+1 > Math.ceil(.totalResults/20)} type="button" className="btn btn-success"onClick={.handlenextclick}>Next &rarr;</button>
        </div>*/}
      </div>
      </>
    )
}

export default News
