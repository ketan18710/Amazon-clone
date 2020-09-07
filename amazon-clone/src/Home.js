import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
                alt="kk"
            />

            <div className="home__row">
                <Product
                    id="12345633"
                    title="Legend of Suheldev: The King Who Saved India"
                    price={283}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51UNiQJBLEL._AC_SX184_.jpg"
                />
                <Product
                    id="12345633"
                    title="The India Way: Strategies for an Uncertain World"
                    price={557}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41uvn2XDdQL._AC_SX184_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12345633"
                    brand="Amazon Brand - Symbol"
                    title="Men's Solid Regular Fit Full Sleeve Cotton T-Shirt"
                    price={400}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71VTLb6KQGL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="12345633"
                    title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
                    brand_sub = "OnePlus"
                    price={11.98}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/412Yk7LIQzL._AC_US240_FMwebp_QL65_.jpg"
                    />
                <Product
                    id="12345633"
                    title="The Body Shop Olive Shower Gel, 250ml"
                    brand_sub = "The Body Shop"
                    price={11.98}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/4103w0bJnJL._AC_US240_FMwebp_QL65_.jpg"
                />
            </div>
            {/* Product id,title,pricing,rating,image */}
        </div>
    )
}

export default Home
