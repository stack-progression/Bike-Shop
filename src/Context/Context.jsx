import React, { useEffect, useReducer, useState } from "react";
import { ShopContext } from "./ShopContext";
import { useProducts } from "../Hooks/useProducts.js";
import { CART_ACTIONS, cartReducer } from "../Reducer/cartReducer.js";

const initialState = [];

const initializer = (initialValue) => {
  const saved = localStorage.getItem("cart");
  return saved ? JSON.parse(saved) : initialValue;
};

const Context = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState, initializer);
  console.log(cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (p) =>
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: { p } });

  const removeFromCart = (id) =>
    dispatch({ type: CART_ACTIONS.REMOVE_ONE, payload: { id } });

  const deleteProduct = (id) =>
    dispatch({ type: CART_ACTIONS.DELETE_PRODUCT, payload: { id } });

  const clearCart = () => dispatch({ type: CART_ACTIONS.CLEAR_CART });

  const { data: products, isPending: productsLoading } = useProducts();

  const [image, setImage] = useState(0);

  const [openSearch, setOpenSearch] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const scrollToTop = () => {
    window.scrollY(0, 0);
  };

  const [heightContainer, setHeightContainer] = useState(0);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalQuantity = cart.reduce(
    (total, items) => total + items.quantity,
    0,
  );

  const getCategory = (e) => {
    if (e === 1) {
      return "Electrice";
    } else if (e === 2) {
      return "De Munte";
    } else if (e === 3) {
      return "Rutiere";
    } else if (e === 4) {
      return "De Oras";
    } else if (e === 5) {
      return "De Pietris";
    } else if (e === 6) {
      return "Pentru Copii";
    } else if (e === 7) {
      return "BMX";
    }
  };

  const stars = (e) => {
    if (e === 1 || (e > 1 && e < 1.5)) {
      return (
        <div className="stars">
          <img src="../../public/image/icons/star.png" alt="star" />
        </div>
      );
    } else if (e === 2 || (e > 2 && e < 2.5)) {
      return (
        <div className="stars">
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
        </div>
      );
    } else if (e === 3 || (e > 3 && e < 3.5)) {
      return (
        <div className="stars">
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
        </div>
      );
    } else if (e === 4 || (e > 4 && e < 4.5)) {
      return (
        <div className="stars">
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
        </div>
      );
    } else if (e === 5 || (e > 4.5 && e <= 5)) {
      return (
        <div className="stars">
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
          <img src="../../public/image/icons/star.png" alt="star" />
        </div>
      );
    }
  };

  if (productsLoading) return "Loading...";

  const AppValue = {
    search,
    setSearch,
    scrollToTop,
    openSearch,
    setOpenSearch,
    openFilter,
    setOpenFilter,
    searchResults,
    setSearchResults,
    getCategory,
    stars,
    image,
    setImage,
    heightContainer,
    setHeightContainer,
    addToCart,
    removeFromCart,
    deleteProduct,
    clearCart,
    cart,
    products,
    totalAmount,
    totalQuantity,
  };

  return (
    <ShopContext.Provider value={AppValue}>{children}</ShopContext.Provider>
  );
};

export default Context;
