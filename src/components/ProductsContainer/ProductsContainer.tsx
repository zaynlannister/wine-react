import React from "react";
import ProductComponent from "./ProductComponent";
import styled from "styled-components";

const productsList = [
  {
    name: "Silver Oak",
    currentPrice: 450.0,
    prevPrice: 500.0,
    type: "red",
    img: "cabernet.png",
    discount: "20% off",
  },
  {
    name: "2015 Woodenhead",
    currentPrice: 450.0,
    prevPrice: 500.0,
    type: "white",
    img: "jacobs.png",
    discount: "30% off",
  },
  {
    name: "2014 red hills",
    currentPrice: 450.0,
    prevPrice: 500.0,
    type: "rose",
    img: "mazzei.png",
    discount: "20% off",
  },
  {
    name: "2012 Chardonnay",
    currentPrice: 450.0,
    prevPrice: 500.0,
    type: "red",
    img: "penfolds.png",
    discount: "20% off",
  },
  {
    name: "2008  Cabernet",
    currentPrice: 450.0,
    prevPrice: 500.0,
    type: "rose",
    img: "redHills.png",
    discount: "10% off",
  },
  {
    name: "Mazzei Siepi 2016",
    currentPrice: 450.0,
    prevPrice: 500.0,
    type: "white",
    img: "silverOak.png",
    discount: "40% off",
  },
  {
    name: "Penfolds uncorks",
    currentPrice: 450.0,
    prevPrice: 500.0,
    type: "red",
    img: "wooden.png",
    discount: "15% off",
  },
  {
    name: "2012 Jacob's",
    currentPrice: 450.0,
    prevPrice: 500.0,
    type: "red",
    img: "jacobs.png",
    discount: "25% off",
  },
];

interface Product {
  name: string;
  currentPrice: number;
  prevPrice: number;
  type: string;
  img: string;
  discount: string;
}

const ProductsContainer = () => {
  const [type, setType] = React.useState("all");
  const [products, setProducts] = React.useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = React.useState<number>(6);
  const types = ["all", "red", "rose", "white"];

  const getFilteredProducts = () => {
    const filteredProducts = productsList.filter((item) => item.type === type);
    if (type !== "all") {
      return filteredProducts;
    }
    return productsList;
  };
  React.useEffect(() => {
    setProducts(getFilteredProducts());
  }, [type]);
  return (
    <div className="container feature">
      <p className="text-[40px] custom-font text-center">
        Futured <span className="text-[#E2B024]">Products</span>
      </p>
      <div className="feature__types max-w-[300px] flex justify-between mx-auto my-4">
        {types.map((item) => (
          <a
            key={item}
            className={`custom-link ${item === type ? "active" : ""}`}
            onClick={() => setType(item.toLowerCase())}
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </div>
      <ProductsStyledBox>
        {products.slice(0, visibleProducts).map((item, index) => (
          <ProductComponent key={index} {...item} />
        ))}
      </ProductsStyledBox>
      {products.length > visibleProducts && (
        <div className="text-center mt-2">
          <a
            onClick={() => setVisibleProducts(products.length)}
            className="custom-link custom-font text-[20px]"
          >
            Show more
          </a>
        </div>
      )}
    </div>
  );
};

const ProductsStyledBox = styled.div`
  display: grid;
  --auto-grid-min-size: 300px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`;

export default ProductsContainer;
