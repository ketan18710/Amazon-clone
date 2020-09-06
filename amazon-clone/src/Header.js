import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'  
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (  
        <div className="header">
            {/**logo on the left->img */}
            <Link to="/">
                <img className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
                />
            </Link>
            {/*Search box*/}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/*4 links*/}
            <div className="header__nav">
                {/**href causes refresh link doesn't */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Sign In</span>
                        <span className="header__optionLineTwo">Hello Ketan</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Oders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/*Basket icon with number*/}
                        <ShoppingBasketIcon />
                        <span  className="header__optionLineTwo header_basketCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
