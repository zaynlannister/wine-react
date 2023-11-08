import FooterSection from "./components/FooterSection/FooterSection";
import MainContainer from "./components/MainContainer/MainContainer";
import ProductInfoContainer from "./components/ProductInfo/ProductInfoContainer";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";

const App = () => {
  return (
    <>
      <div className="bg-[#000]">
        <MainContainer />
      </div>
      <div className="bg-[#18191A] py-20">
        <ProductInfoContainer />
      </div>
      <div className="bg-[#000] pt-20">
        <ProductsContainer />
      </div>
      <div className="bg-[#000] pt-20 pb-6">
        <FooterSection />
      </div>
    </>
  );
};

export default App;
