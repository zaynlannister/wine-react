interface Link {
  name: string;
  href: string;
}

interface MobileMenuInterface {
  links: Link[];
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = (props: MobileMenuInterface) => {
  return (
    <div
      className={`bg-[#fff] absolute flex flex-col text-[22px] w-[100%] left-0 bottom-0 right-0 top-[100px] px-4 z-50 ${
        props.menuOpen ? "" : "hidden"
      }`}
    >
      {props.links.map((item: any, index: any) => (
        <a
          onClick={props.toggleMenu}
          className={`text-[#000] py-4 ${
            index === props.links.length - 1
              ? "border-b-0"
              : "border-b-[1px] border-b-[#ccc]"
          }`}
          key={index}
          href={item.href}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
