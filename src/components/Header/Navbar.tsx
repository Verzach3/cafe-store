import { useState } from 'react'
import './header.css'

export default function Navbar({ carIsOpen, setCartIsOpen, searchIsOpen, setSearchIsOpen } : { carIsOpen: boolean, setCartIsOpen: (value: boolean) => void, searchIsOpen: boolean, setSearchIsOpen: (value: boolean) => void}) {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        setCartIsOpen(false);
        setSearchIsOpen(false);
    };

  return (
    <>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
            <a href="#">Contact</a>
        </nav>
        <div className="icons">
            <div className='fas fa-search' id='search-btn' onClick={()=> {
                setSearchIsOpen(!searchIsOpen);
                setCartIsOpen(false);
                setIsActive(false);
            }}></div>
            <div className='fas fa-shopping-cart' id='cart-btn' onClick={ ()=> {
                setCartIsOpen(!carIsOpen);
                setSearchIsOpen(false);
                setIsActive(false);
            } }></div>
            <div className='fas fa-bars' id='menu-btn' onClick={ toggleMenu }></div>
        </div>
        <div className={`search-form ${searchIsOpen ? 'active' : ''}`}>
            <input type="search" id='search-box' placeholder='search product'/>
            <label htmlFor='search-box' className='fas fa-search'></label>
        </div>
    </>
  )
}
