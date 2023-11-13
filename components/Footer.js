import data from "../data/footerSection.json";

const Footer = () => {
  return (
    <footer>
      <div className="header-footer">
        <h4>{data.title}</h4>
        <h4>{data.description}</h4>
      </div>
    </footer>
  );
};

export default Footer;
