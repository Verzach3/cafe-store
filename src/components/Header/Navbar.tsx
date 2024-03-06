import { useState } from 'react'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

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
            <a href="/">Inicio</a>
            <a href="/products">Productos</a>
            <a href="/about">Sobre nosotros</a>
            <a href="#">Contacto</a>
        </nav>
        <div className="icons">
            <div>
                <FaSearch  id='search-btn' onClick={()=> {
                setSearchIsOpen(!searchIsOpen);
                setCartIsOpen(false);
                setIsActive(false);
            }}/>
            </div>
            <div >
                <FaShoppingCart id='cart-btn' onClick={ ()=> {
                    setCartIsOpen(!carIsOpen);
                    setSearchIsOpen(false);
                    setIsActive(false);
                }}/>
            </div>
            
            <div>
                <IoMdMenu id='menu-btn' onClick={ toggleMenu }/>
            </div>
        </div>
        <div className={`search-form ${searchIsOpen ? 'active' : ''}`}>
            <input type="search" id='search-box' placeholder='search product'/>
            <label htmlFor='search-box' className='fas fa-search'></label>
        </div>
    </>
  )
}
