const FooterList = (props: any) => {
  return (
    <div>
      <p className="custom-font text-[24px] text-[#E2B024]">{props.title}</p>
      <div className="mt-4">
        {props.text.map((item: any, index: any) => (
          <div key={index} className="mb-2">
            <a className="custom-link">{item}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterList;
