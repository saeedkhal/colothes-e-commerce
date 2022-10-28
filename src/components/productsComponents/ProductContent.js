import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../context/context";
function ProductContent(props) {
  const { getProducts, filteredProducts } = useContextProvider();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main className="container productcontent-container">
      <section className="feature-content grid-4">
        {filteredProducts?.map((product, index) => {
          const { id, fields } = product;
          return (
            <article key={index}>
              <Link to={`/products/${id}`}>
                <div className="feature-img-container">
                  <img src={fields?.attachments[0].url} alt="" />
                  <div className="search">
                    <AiOutlineSearch />
                  </div>
                </div>
                <div className="product-info">
                  <p>{fields?.name}</p>
                  <span className="price">$599.99</span>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default ProductContent;
