import React from "react";
import ProductComponent from "./ProductComponent";

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

const types = ["All", "Red", "Rose", "White"];
const ProductsContainer = () => {
  const [type, setType] = React.useState("all");
  const [products, setProducts] = React.useState<
    {
      name: string;
      currentPrice: number;
      prevPrice: number;
      type: string;
      img: string;
      discount: string;
    }[]
  >([]);

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
        {types.map((type) => (
          <a
            className="custom-link"
            onClick={() => setType(type.toLowerCase())}
            href={`#${type.toLowerCase()}`}
          >
            {type}
          </a>
        ))}
      </div>
      <div className="flex justify-between flex-wrap">
        {products.map((item, index) => (
          <ProductComponent key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
