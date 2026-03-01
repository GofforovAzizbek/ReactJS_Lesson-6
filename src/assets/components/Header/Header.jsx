import logo from "../../images/logo.svg";
import pac from "../../images/pac.svg";
import "../../../index.css";

function Header() {
  return (
    <>
      {/* Header */}
      <header className="pt-[30px] bg-[#FBF8F5]">
        <div className="container">
          {/* Header Navigation */}
          <nav className="flexses justify-between">
            <ul className="flexses gap-[45px]">
              <li className="">
                <a href="" className="link-hover">
                  Furniture
                </a>
              </li>
              <li className="">
                <a href="" className="link-hover">
                  Why Feather
                </a>
              </li>
              <li className="">
                <a href="" className="link-hover">
                  Feather for Business
                </a>
              </li>
            </ul>

            {/* Logo */}
            <a href="/" className="">
              <img src={logo} alt="" className="" />
            </a>

            <ul className="flexses gap-[45px]">
              <li className="">
                <a href="" className="link-hover">
                  Check if We Deliver
                </a>
              </li>
              <li className="">
                <a href="" className="link-hover">
                  Search
                </a>
              </li>
              <li className="">
                <a href="" className="link-hover">
                  Account
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  <img src={pac} alt="" className="" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
