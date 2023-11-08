import "./burger_menu.css";

interface BurgerMenuInterface {
  toggleMenu: () => void;
  menuOpen: boolean;
}

const BurgerMenu = (props: BurgerMenuInterface) => {
  return (
    <svg
      onClick={props.toggleMenu}
      className={`vbp-header-menu-button__svg vbp-header-menu-button ${
        props.menuOpen ? "menu-open" : ""
      }`}
    >
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        className={`top ${props.menuOpen ? "top-open" : ""}`}
        shapeRendering="crispEdges"
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        className={`middle ${props.menuOpen ? "middle-open" : ""}`}
        shapeRendering="crispEdges"
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        className={`bottom ${props.menuOpen ? "bottom-open" : ""}`}
        shapeRendering="crispEdges"
      />
    </svg>
  );
};

export default BurgerMenu;
