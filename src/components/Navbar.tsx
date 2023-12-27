import logo from "../assets/logoLaputa.jpg";
import { Link } from "react-router-dom";

const styleLink = {
  color: "white",
};

export default function Navbar() {
  return (
    <nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          padding: "8px",
          height: "3rem",
          backgroundColor: "#343d76",
          color: "white",
        }}
      >
        <img
          src={logo}
          placeholder="Logo"
          style={{ height: "2rem", width: "2rem" }}
        />
        <Link to="/" style={styleLink}>
          Home
        </Link>
        {/* <Link to="/info" style={styleLink}>
          Info
        </Link> */}
        <Link to="/map" style={styleLink}>
          Map
        </Link>
        <Link to="/quests" style={styleLink}>
          Quests
        </Link>
        {/* <Link to="/ranking" style={styleLink}>
          Ranking
        </Link> */}
      </div>
    </nav>
  );
}
