import MainContainer from "./components/MainContainer/MainContainer";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";

const App = () => {
  return (
    <>
      <div className="bg-[#000]">
        <MainContainer />
      </div>
      <div className="bg-[#000] pt-20">
        <ProductsContainer />
      </div>
    </>
  );
};

export default App;
