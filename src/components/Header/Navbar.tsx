import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import "./header.css";
import useCart from "../../hooks/useCart";

import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { searchAtom } from "../../lib/atoms";

export default function Navbar({
  carIsOpen,
  setCartIsOpen,
  searchIsOpen,
  setSearchIsOpen,
}: {
  carIsOpen: boolean;
  setCartIsOpen: (value: boolean) => void;
  searchIsOpen: boolean;
  setSearchIsOpen: (value: boolean) => void;
}) {

 

  const [isActive, setIsActive] = useState(false);
  const { totalQuantity } = useCart();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useAtom(searchAtom);

  const toggleMenu = () => {
    setIsActive(!isActive);
    setCartIsOpen(false);
    setSearchIsOpen(false);
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (inputValue === "") return;
    e.preventDefault();
    setValue(inputValue);
    navigate("/products",{ state: { value } });
  };

  return (
    <>
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <a href="/">Inicio</a>
        <a href="/products">Productos</a>
        <a href="/about">Sobre nosotros</a>
      </nav>
      <div className="icons">
        <div>
          <FaSearch
            id="search-btn"
            onClick={() => {
              setSearchIsOpen(!searchIsOpen);
              setCartIsOpen(false);
              setIsActive(false);
            }}
          />
        </div>
        <div>
          <FaShoppingCart
            id="cart-btn"
            onClick={() => {
              setCartIsOpen(!carIsOpen);
              setSearchIsOpen(false);
              setIsActive(false);
            }}
          />
          {totalQuantity > 0 && (
            <span className="cart-item-count">{totalQuantity}</span>
          )}
        </div>

        <div>
          <IoMdMenu id="menu-btn" onClick={toggleMenu} />
        </div>
      </div>

      <div className={`search-form ${searchIsOpen ? "active" : ""}`}>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            id="search-box"
            placeholder="Buscar producto...."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
      </div>
    </>
  );
}
