import "./style.css";
import { Link } from "react-router-dom";
import hamburgerIcon from "../constant";
const Left = () => {
  return (
    <div className="left-bar">
      <div className="logo">
        <img
          src="https://media.licdn.com/dms/image/C510BAQEZKzh8Yidjaw/company-logo_200_200/0/1630596230002?e=2147483647&v=beta&t=JN6h3VmIkDcJuph3rwe5qqTkFPl-6CFAUFGCmNVwzSs"
          alt=""
        />
        <p>KUSHUB SOLUTION</p>
        {/* <h1 className="cross active">❌</h1> */}
        {/* <h1 className="ham active">
          <img src={hamburgerIcon} alt="" />
        </h1> */}
      </div>
      <ul className="sidebar-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
        <li>
          <Link to="/more">More</Link>
        </li>
        {/* <li className="logout">
          <Link to="/logout">Logout</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Left;
