
import { useState } from 'react'
import './header.css'
import CartContainer from './CartContainer';
import Navbar from './Navbar';
export default function Header() {
    const [carIsOpen, setCartIsOpen] = useState(false);
    const [searchIsOpen, setSearchIsOpen] = useState(false);
  return (
    <header className="header">
        <a href="#" className="logo">
            <img src="../../../public/Logo.png" alt="" />
        </a>
        <Navbar carIsOpen={carIsOpen} setCartIsOpen={setCartIsOpen} searchIsOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen}/>
        <CartContainer carIsOpen={carIsOpen} />
    </header>
  )
}
