import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/navbar';
import './news.css'
import Footer from '../components/footer/footer';
import Menu from '../components/newscomponent/Menu';
import NewsGrid from '../components/newscomponent/NewsGrid';

const NewsPage = () => {
    const [items, setItems] = useState([])
    const [active, setActive] = useState(1)
    const [category, setCategory] = useState('general')

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=354297b48bcb465eb0e544f7d607490b')
        .then(res=> res.json())
        .then(data => setItems(data.articles))
    }, [category])

    return(
        <div className='news-container'>
            <Navbar />
            <div className='content'>
                <div className='main-area'>
                    <h1 className='title'>See the Latest News</h1>
                    {/* <Menu active={active} setActive={setActive} setCategory={setCategory} /> */}
                    <NewsGrid items={items}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewsPage;