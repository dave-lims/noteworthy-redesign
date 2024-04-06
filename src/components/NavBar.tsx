import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div id="nav-bar">
        <Link className={"link"} to="/">
          HOME
        </Link>
        <Link className={"link"} to="/members">
          PEOPLE OF NOTE
        </Link>
        <Link className={"link"} to="/hire-us">
          HIRE US
        </Link>
        <Link className={"link"} to="/auditions">
          AUDITIONS
        </Link>
      </div>
    </>
  );
}

export default NavBar;
