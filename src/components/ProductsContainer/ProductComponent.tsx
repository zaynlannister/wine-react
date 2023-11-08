import React from "react";
import styled from "styled-components";

const imageStyle: React.CSSProperties = {
  width: "100%",
  maxHeight: "355px",
  objectFit: "contain",
};

const ProductComponent = (props: any) => {
  return (
    <ProductStyled className="product p-4 relative cursor-pointer">
      <div className="absolute top-[40px] left-[17px] bg-[#E2B024] px-2 py-1">
        <p className="text-[14px] text-[#000]">{props.discount}</p>
      </div>
      <div className="product__img py-2 rounded border-[1px] border-[#3e3e3e]">
        <img
          style={imageStyle}
          src={`/assets/wines/${props.img}`}
          alt="wine-image"
        />
      </div>
      <p className="text-[24px] custom-font mt-2">{props.name}</p>
      <div className="flex items-center">
        <span className="text-[16px] text-[#E2B024] line-through mr-2">
          ${props.prevPrice}
        </span>{" "}
        <span className="text-[24px]">${props.currentPrice}</span>
      </div>
    </ProductStyled>
  );
};

const ProductStyled = styled.div`
  .product__img {
    transition: 150ms all;
  }
  &:hover {
    .product__img {
      border-color: #a6a6a6;
    }
  }
`;

export default ProductComponent;
