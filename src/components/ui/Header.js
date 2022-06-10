import logo from "../../assets/kimitsu-logo.png";

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__content">
        <h1>Kimitsu~</h1>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
