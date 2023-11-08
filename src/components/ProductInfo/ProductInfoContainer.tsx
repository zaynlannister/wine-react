import React from "react";
import styled from "styled-components";

const newProducts = [
  {
    name: "Silver Oak",
    description:
      "Silver Oak loved for its boisterous black cherry flavors, supple tannins, and chocolatey finish. On the high end, it’s often mistaken with Cabernet Sauvignon.",
    img: "penfolds.png",
  },
  {
    name: "Woodenhead",
    description:
      "Woodenhead loved for its boisterous black cherry flavors, supple tannins, and chocolatey finish. On the high, it’s often mistaken with Cabernet.",
    img: "wooden.png",
  },
  {
    name: "Red Hills",
    description:
      "Red Hills loved for its boisterous black flavors, supple tannins, and chocolatey finish. On the high end, it’s mistaken with Cabernet Sauvignon.",
    img: "redHills.png",
  },
];

const ProductInfoContainer = () => {
  const [number, setNumber] = React.useState<number>(0);
  const [newProduct, setNewProduct] = React.useState(newProducts[number]);

  const getOneProduct = React.useCallback(() => {
    if (number > newProducts.length - 1 || number < 0) {
      setNumber(0);
    } else {
      setNewProduct(newProducts[number]);
    }
  }, [number]);

  React.useEffect(() => {
    getOneProduct();
  }, [getOneProduct]);
  return (
    <ProfuctsInfoStyled className="container flex gap-8">
      <div className="product__info-wine w-[50%]">
        <div>
          <p className="text-[20px] tracking-widest">New Wines</p>
          <p className="product__info-name custom-font text-[74px] text-[#E2B024]">
            {newProduct.name}
          </p>
          <p className="text-[36px] mb-4">Winehouse Vineyard</p>
        </div>
        <div>
          <p className="leading-10">{newProduct.description}</p>
        </div>
        <div className="product__info-buttons flex gap-8 mt-6">
          <button className="custom-button">Learn more</button>
          <button className="custom-button">View more</button>
        </div>
      </div>
      <div className="product__info-box w-[50%] border-[5px] border-[#E2B024] relative">
        <a
          onClick={() => setNumber(number - 1)}
          className="absolute left-[-20px] top-[170px] custom-link hover:text-[#ffff] hover:border-[#ffff] bg-[#18191A]"
        >
          Prev
        </a>
        <a
          onClick={() => setNumber(number + 1)}
          className="absolute right-[-20px] top-[170px] custom-link hover:text-[#ffff] hover:border-[#ffff] bg-[#18191A]"
        >
          Next
        </a>
        <div className="relative z-20">
          <img
            className="absolute top-[-65px] left-[170px]"
            style={{ width: "160px", height: "500px", objectFit: "cover" }}
            src={`/assets/wines/${newProduct.img}`}
            alt="wine"
          />
        </div>
        <div className="circle absolute w-[350px] h-[350px] left-[80px] top-[25px] rounded-full bg-[#E2B024] z-10"></div>
      </div>
    </ProfuctsInfoStyled>
  );
};

const ProfuctsInfoStyled = styled.div`
  @media (max-width: 1045px) {
    .product__info-wine {
      width: 100%;
      text-align: center;
    }
    .product__info-buttons {
      justify-content: center;
    }
    .product__info-box {
      display: none;
    }
  }

  @media (max-width: 535px) {
    .product__info-name {
      font-size: 40px;
    }
  }
`;

export default ProductInfoContainer;
