const MainContainer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Vintage", href: "#vintage" },
    { name: "Imperial", href: "#imperial" },
    { name: "Sparkling", href: "#sparkling" },
    { name: "Accessories", href: "#accessories" },
    { name: "Blog", href: "#blog" },
    { name: "Product Details", href: "#details" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="container">
      <div className="header text-[14px] flex justify-between items-center py-4">
        <div className="w-[33%]">
          <p>We Ship Everywhere! Free In The Us!</p>
        </div>
        <div className="w-[33%] flex justify-center">
          <img src="src/assets/icons/logoIcon.svg" alt="logo" />
        </div>
        <div className="w-[33%] flex justify-end">
          <a className="mr-4" href="#login">
            Login
          </a>
          <a href="#register">Register</a>
        </div>
      </div>
      <div className="nav custom-font flex justify-between border-y-[1px] border-y-[#ccc] py-3">
        {navLinks.map((item, index) => (
          <a key={index} className="custom-link" href={item.href}>
            {item.name}
          </a>
        ))}
      </div>
      <div className="text-center mt-32">
        <p className="custom-font text-[24px]">The Experlence of Generations</p>
        <p className="custom-font uppercase text-[70px]">
          In each <span className="text-[#E2B024]">bottle</span>
        </p>
        <p className="w-[740px] mx-auto leading-7 font-[300]">
          Experience a true “American Dream” at Winehouse and visit the first
          tasting room in the United States established by a former European
          mirgant vineyard worker and his family.
        </p>
        <div className="mt-20 w-fit mx-auto">
          <img src="src/assets/bottles.png" alt="bottles" />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
