import React from "react";
import styled from "styled-components";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MobileMenu from "../BurgerMenu/MobileMenu";

const MainContainer = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }
  };

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
    <StyledDiv className="container">
      <div className="header text-[14px] flex justify-between items-center py-4">
        <div className="header__first-block w-[33%]">
          <p>We Ship Everywhere! Free In The Us!</p>
        </div>
        <div className="header__logo w-[33%] flex justify-center">
          <img src="/assets/img/logoIcon.svg" alt="logo" />
        </div>
        <div className="header__login w-[33%] flex justify-end">
          <a className="mr-4" href="#login">
            Login
          </a>
          <a href="#register">Register</a>
        </div>
        <div className="header__burger-menu hidden">
          <BurgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <MobileMenu
            links={navLinks}
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
      <div className="nav custom-font flex justify-between border-y-[1px] border-y-[#ccc] py-3 mb-32">
        {navLinks.map((item, index) => (
          <a key={index} className="custom-link" href={item.href}>
            {item.name}
          </a>
        ))}
      </div>
      <div className="main-content text-center pt-8">
        <p className="main-content__first-text custom-font text-[24px]">
          The Experlence of Generations
        </p>
        <p className="main-content__second-text custom-font uppercase text-[70px]">
          In each <span className="text-[#E2B024]">bottle</span>
        </p>
        <p className="main-content__third-text w-[740px] mx-auto leading-7 font-[300]">
          Experience a true “American Dream” at Winehouse and visit the first
          tasting room in the United States established by a former European
          mirgant vineyard worker and his family.
        </p>
        <div className="main-content__image mt-20 w-fit mx-auto">
          <img src="/assets/img/bottles.png" alt="bottles" />
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  @media (max-width: 1025px) {
    .header__first-block {
      display: none;
    }
    .header__logo {
      justify-content: start;
    }
  }

  @media (max-width: 840px) {
    .header {
      border-bottom: 1px solid #ccc;
    }
    .header__burger-menu {
      display: block;
    }
    .header__login {
      display: none;
    }
    .nav {
      display: none;
    }
    .main-content__first-text {
      font-size: 18px;
    }
    .main-content__second-text {
      font-size: 40px;
    }
    .main-content__third-text {
      width: 100%;
    }
  }

  @media (max-width: 535px) {
    .main-content__image {
      width: 300px;
    }
  }

  @media (max-width: 490px) {
    .main-content__first-text {
      font-family: Poppins, Arial, sans-serif;
      font-size: 16px;
      margin-bottom: 10px;
    }
    .main-content__second-text {
      font-size: 25px;
    }
  }
`;

export default MainContainer;
