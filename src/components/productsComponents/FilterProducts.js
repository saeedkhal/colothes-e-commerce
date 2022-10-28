import React, { useEffect, useState } from "react";
import { useContextProvider } from "../../context/context";
import { UPDATE_FILTERED_PRODUCTS } from "../../assets/contsntants/constants";
function FilterProducts(props) {
  const { dispatch, getProducts, products } = useContextProvider();
  const [filterObject, SetFilterObject] = useState({
    category: null, //0 - winter 1- summer
    price: "",
    color: "",
    freeShipping: false,
    channel: "",
  });
  const filterProducts = () => {
    console.log("products");
    console.log(products);

    const newProducts = products?.filter((product) => {
      return product?.fields?.category[2] * 1 === filterObject?.category * 1;
    });
    dispatch({ type: UPDATE_FILTERED_PRODUCTS, payload: newProducts });
  };
  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterObject]);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main className="container fiterproduct-contaoner">
      <div className="container-filter">
        <section className="cateogry">
          <h3 className="header-filter">Cateogry</h3>
          <button
            className="cateory-active"
            onClick={() => {
              SetFilterObject({ ...filterObject, category: null });
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              SetFilterObject({ ...filterObject, category: 0 });
            }}
          >
            Winter
          </button>
          <button
            onClick={() => {
              SetFilterObject({ ...filterObject, category: 1 });
            }}
          >
            Summer
          </button>
        </section>
        <section className="channel">
          <h3 className="header-filter">Channel</h3>
          <select>
            <option value="channel1">All</option>
            <option value="channel1">Channne1</option>
            <option value="channel1">Channne2</option>
          </select>
        </section>
        <section className="price">
          <h3 className="header-filter">Price</h3>
          <div className="price-container">
            <input className="price-input" type="range" min="0" max="100" />{" "}
            <span className="price-output">300$</span>
          </div>
        </section>
        <section className="color">
          <h3 className="header-filter">Color</h3>
          <button className="All">All</button>
          <button style={{ background: "black" }} className="active">
            ✔
          </button>
          <button style={{ background: "red" }}>&#160;</button>
          <button style={{ background: "green" }}>&#160;</button>
          <button style={{ background: "blue" }}>&#160;</button>
        </section>
        <section className="shipping">
          <h3 className="header-filter">Free Shipping </h3>
          <input type="checkbox" />
        </section>
      </div>
      <section className="product-found">
        23 product found
        <div className="h-line">
          <hr />
        </div>
        <span>
          sorted by
          <select>
            <option value="min-pirce">min-price</option>
            <option value="max-pirce">max-price</option>
            <option value="name">name asce</option>
            <option value="name">name desc</option>
          </select>
        </span>
      </section>
      <input placeholder="Search" className="search-products" />
    </main>
  );
}

export default FilterProducts;
