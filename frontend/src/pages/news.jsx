import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/navbar';
import './news.css'
import Footer from '../components/footer/footer';
import NewsGrid from '../components/newscomponent/NewsGrid';

const NewsPage = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=354297b48bcb465eb0e544f7d607490b')
        .then(res=> res.json())
        .then(data => setItems(data.articles))
    }, [])

    return(
        <div className='news-container'>
            <Navbar />
            <div className='content'>
                <div className='main-area'>
                    <h1 className='new-title'>See the Latest News</h1>
                    {/* <Menu active={active} setActive={setActive} setCategory={setCategory} /> */}
                    <NewsGrid items={items}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewsPage;