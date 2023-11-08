import FooterList from "./FooterList";
import GoogleIcon from "../../../public/assets/icons/GoogleIcon";
import TwitterIcon from "../../../public/assets/icons/TwitterIcon";
import LinkedInIcon from "../../../public/assets/icons/LinkedInIcon";
import FacebookIcon from "../../../public/assets/icons/FacebookIcon";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <FooterStyledList className="container">
      <FooterList
        title="company"
        text={[
          "About Us",
          "Contact Us",
          "Privacy Policy",
          "Terms & Conditions",
          "Support Center",
        ]}
      />
      <FooterList
        title="question?"
        text={[
          "Help Support",
          "Track Order",
          "Return",
          "Shipping Info",
          "History",
        ]}
      />
      <FooterList
        title="useful links"
        text={[
          "Gift Cards",
          "Size Chart",
          "My Account",
          "Our Locations",
          "FAQS",
        ]}
      />
      <div className="flex flex-col justify-between footer-list">
        <p className="custom-font text-[24px] text-[#E2B024]">
          connect with us
        </p>
        <div className="flex gap-8 footer-list__icons">
          <GoogleIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <FacebookIcon />
        </div>
        <div className="mt-2 flex flex-col gap-2 pb-[10px] footer-list__info">
          <div className="flex items-center gap-2">
            <img src="/assets/img/Call.png" />
            <p>+998332488838</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/img/Message.png" />
            <p>zaynlannister@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/img/Location.png" />
            <p>Tashkent, Uzbekistan</p>
          </div>
        </div>
      </div>
    </FooterStyledList>
  );
};

const FooterStyledList = styled.div`
  display: grid;
  --auto-grid-min-size: 210px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;

  @media (max-width: 1025px) {
    & {
      display: block;
      text-align: center;
    }

    .footer-list {
      justify-content: center;
      align-items: center;
    }

    .footer-list__icons {
      margin: 10px 0;
    }
    .footer-list__info {
      margin-left: 40px;
    }
  }
`;

export default FooterSection;
