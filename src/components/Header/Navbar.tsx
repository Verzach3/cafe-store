import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import "./header.css";
import useCart from "../../hooks/useCart";
import { coffeeApi } from "../../api/poketbaseApi";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/types";

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
  const [search, setSearch] = useState("");

  const toggleMenu = () => {
    setIsActive(!isActive);
    setCartIsOpen(false);
    setSearchIsOpen(false);
  };

  function searchProduct(product: string) {
    const products: Product[] = [];
    coffeeApi
      .get(`/api/collections/items/records`)
      .then((response) => {
        products.push(...response.data.items);
      })
      .finally(() => {
        if (!products) return;

        const data = products.map((product) => {
          return {
            name: product.name,
            price: product.price,
            description: product.description,
            images: window.pb.files.getUrl(product, product.images[0]),
            id: product.id,
          };
        });

        const item = data.filter((item) =>
          item.name.toLowerCase().includes(product.toLowerCase())
        );
        if (!item) return;

        navigate(`/products`);
      });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (search === "") return;
    e.preventDefault();
    searchProduct(search);
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>
      </div>
    </>
  );
}
