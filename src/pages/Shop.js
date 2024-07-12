import React, { useEffect, useState } from "react";
import "../styles/Shop.css";
import { products } from "../api";
import ProductCard from "../components/ProductCard";
import WarrantyBanner from "../components/WarrantyBanner";
function Shop() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const [shownProducts, setShownProducts] = useState(16);

  const [totalProducts, setTotalProducts] = useState(32);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalProducts / shownProducts);
  useEffect(() => {
    setTotalProducts(products.length);
  }, []);
  // Toggle function
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);

    console.log("Filter button clicked");
  };

  // Event handler for 'Show' dropdown
  const handleShowChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setShownProducts(totalProducts); // Assuming 32 is your total count
    } else {
      setShownProducts(Number(value));
    }
    setCurrentPage(1); // Reset to the first page
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="shopBanner">
        <h2>Shop</h2>
        <p>
          <span>Home {">"} </span>
          Shop
        </p>
      </div>
      <div className="filter-container">
        <div className="filter-header" id="filterToggle" onClick={toggleMenu}>
          <i className="fa-solid fa-sliders"></i>
          <p>Filters</p>
        </div>

        <div
          className="filter-menu"
          id="burgerMenu"
          style={{ display: isMenuVisible ? "flex" : "none" }}
        >
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter1" />
            <label htmlFor="filter1">Filter 1</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter2" />
            <label htmlFor="filter2">Filter 2</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter3" />
            <label htmlFor="filter3">Filter 3</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter4" />
            <label htmlFor="filter4">Filter 4</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter5" />
            <label htmlFor="filter5">Filter 5</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter6" />
            <label htmlFor="filter6">Filter 6</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter7" />
            <label htmlFor="filter7">Filter 7</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter8" />
            <label htmlFor="filter8">Filter 8</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter9" />
            <label htmlFor="filter9">Filter 9</label>
          </div>
          <div className="filter-item-row">
            <input type="radio" name="filter" id="filter10" />
            <label htmlFor="filter10">Filter 10</label>
          </div>
        </div>

        <div className="showingProducts">
          <p>
            Showing {shownProducts} products of {totalProducts}
          </p>
        </div>

        <div className="showCounter">
          <p>Show:</p>
          <select id="showCount" defaultValue="16" onChange={handleShowChange}>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="all">All</option>
          </select>
        </div>

        <div className="sortBy">
          <p>Sort by:</p>
          <select id="sortBy">
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="alpha-asc">Alphabetical (A-Z)</option>
            <option value="alpha-desc">Alphabetical (Z-A)</option>
            <option value="rating">Ratings</option>
          </select>
        </div>
      </div>
      <div>
        <div className="productsContainer">
          {products
            .slice(
              (currentPage - 1) * shownProducts,
              currentPage * shownProducts
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        <div className="pagination">
          {currentPage > 1 && (
            <button className="page-button" onClick={handlePrevPage}>
              Previous
            </button>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button className="page-button" onClick={handleNextPage}>
              Next
            </button>
          )}
        </div>
      </div>
      <WarrantyBanner />
    </div>
  );
}

export default Shop;
