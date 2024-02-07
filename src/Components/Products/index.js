import { Link, useParams } from "react-router-dom";
import { addToCart, getDataByCategory, getDataById } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { FaCartPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import Section from "../Layout/Section";
import ProductCard from "./Card";
import RatingStars from "./RatingStars";

const MergeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: between;
  flex-wrap: wrap;
`;
const InnerCarousel = styled.div`
  @media (min-width: 509px) {
    height: 20rem;
    width: 30rem;
  }
`;
export default function Product() {
  const { identify } = useParams();
  const dispatch = useDispatch();
  const [range, setRange] = useState(1);

  useEffect(() => {
    if (identify) {
      dispatch(getDataById(identify));
    }
  }, [dispatch, identify]);

  const product = useSelector((state) => state.prods.product);
  const inCartIds = useSelector((state) => state.inCartIds.inCartIdentifies);

  useEffect(() => {
    if (product && product.category) {
      dispatch(getDataByCategory(product.category, { limit: 4 }));
    }
  }, [dispatch, product]);

  const products = useSelector((state) => state.prods.products);

  useEffect(() => {
    return () => {
      setRange(1);
    };
  }, []);

  if (!product) {
    return (
      <Section
        className="d-flex justify-content-center align-items-center"
        style={{ color: "#BFEAF5" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Section>
    );
  }

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    images,
  } = product;

  const handleAddToCart = () => {
    if (inCartIds.some((i) => i.id === id)) {
      alert("Product already in CART!");
    } else {
      dispatch(addToCart({ id, quantity: Number(range) }));
    }
  };

  return (
    <Section
      className="col-lg-8 col-md-9 mb-2 rounded mx-auto"
      style={{ backgroundColor: "#BFEAF5" }}
    >
      <div>
        <span className="text-center fs-1 d-block mt-3">{title}</span>
        <span className="text-center fs-4 d-block mt-3 text-muted">
          {description}
        </span>
      </div>
      <MergeDiv className="mt-3">
        <div className="mx-auto">
          <div
            id={`carouselProductImage${id}`}
            className="carousel slide carousel-fade shadow"
          >
            <InnerCarousel className="carousel-inner rounded">
              <div className="carousel-item active">
                <img className="card-img" src={thumbnail} alt="thumbnail" />
              </div>
              {images.map((image) => (
                <div className="carousel-item" key={image}>
                  <img className="card-img" src={image} alt="Product" />
                </div>
              ))}
            </InnerCarousel>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselProductImage${id}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carouselProductImage${id}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="m-auto">
          <div
            className="text-center rounded px-2 py-3 w-100"
            style={{ backgroundColor: "#BFEAF5", borderColor: "#91D8E4" }}
          >
            <span className="fs-2 text-dark m-3">
              {price}$-
              <span className="fs-4 text-danger text-decoration-line-through">
                {discountPercentage}%
              </span>
            </span>
            <div className="d-flex w-100 mt-3">
              <span className="w-50 m-auto">Quantity : </span>
              <button
                className="p-3 rounded border"
                onClick={() => range > 1 && setRange((prev) => prev - 1)}
              >
                <SlArrowLeft />
              </button>
              <span className="m-auto px-3">{range}</span>
              <button
                className="p-3 rounded border"
                onClick={() => range < stock && setRange((prev) => prev + 1)}
              >
                <SlArrowRight />
              </button>
            </div>
            <div className="mt-3">
              {stock > 0 ? `in stock : ${stock}` : "not in stock"}
            </div>
            <div className="mt-3">
              <RatingStars rating={rating} /> ({rating})
            </div>
            <div className="d-flex justify-content-center mt-3 w-100">
              <button
                className="btn btn-outline-primary me-2"
                onClick={handleAddToCart}
              >
                Add to CART <FaCartPlus />
              </button>
              <Link to={"/cart"} className="btn btn-outline-success">
                Go to CART <FaShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </MergeDiv>
      <div className="mb-3">
        <p className="text-center fs-3 mt-3">More like this..</p>
        <div className="d-flex justify-content-center">
          <hr className="mx-4 w-50 " />
        </div>
        <div className="row justify-content-evenly">
          {products ? (
            products.products.map((p, index) => (
              p.id !== id && <ProductCard prodData={p} key={index} />
            ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
