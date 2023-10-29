import { Link } from "react-router-dom";

function NavBar() {
	return (
		<>
			<div style={{ display: "flex" }}>
				<p style={{ margin: "20px" }}>
					<Link to={"/"}>Home</Link>
				</p>
				<p style={{ margin: "20px" }}>
					<Link to={"/about"}>About</Link>
				</p>
				<p style={{ margin: "20px" }}>
					<Link to={"/contact"}>Contact Us</Link>
				</p>
			</div>
		</>
	);
}

export default NavBar;
