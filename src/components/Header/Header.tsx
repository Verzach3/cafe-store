
import { useState } from 'react'
import './header.css'
import CartContainer from './CartContainer';
import Navbar from './Navbar';
import {rem} from "@mantine/core";
export default function Header() {
    const [carIsOpen, setCartIsOpen] = useState(false);
    const [searchIsOpen, setSearchIsOpen] = useState(false);
  return (
    <header className="header" style={{ height: rem("120px")}}>
        <a href="#" className="logo">
            
        </a>
        <Navbar carIsOpen={carIsOpen} setCartIsOpen={setCartIsOpen} searchIsOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen}/>
        <CartContainer carIsOpen={carIsOpen}/>
    </header>
  )
}
