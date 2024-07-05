import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/book/${id}`);
  };

  const images = [
    { url: props.url, id: 1, price: "Rs350" },
    { url: props.url1, id: 2, price: "Rs299" },
    { url: props.url2, id: 3, price: "Rs734" },
    { url: props.url3, id: 4, price: "Rs490" },
    { url: props.url4, id: 5, price: "Rs650" },
    { url: props.url5, id: 6, price: "Rs368" },
    { url: props.url6, id: 7, price: "Rs500" },
    { url: props.url7, id: 8, price: "Rs489" },
  ];

  return (
    <div className="Card">
      {images.map((image) => (
        <div
          key={image.id}
          className="imgcontainer"
          onClick={() => handleClick(image.id)}
        >
          <img src={image.url} alt="" />
        </div>
      ))}
    </div>
  );
}
