import { useState } from "react";

function Login() {
	const [loginData, setLoginData] = useState({
		userName: "",
		password: "",
		confirmpassword: "",
	});
	const [error, SetError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (loginData.password === loginData.confirmpassword) {
			console.log(loginData);
			if (loginData.password.length < 8) {
				SetError("Password length is not enough");
			}
		} else {
			SetError("Password does not match !");
			console.log("Password does not match !");
		}
	};

	return (
		<>
			<h1>Sign up</h1>
			<p style={{ color: "red" }}>{error}</p>
			<form onSubmit={handleSubmit}>
				<label>
					User name:
					<input
						required
						type="text"
						onChange={(e) =>
							setLoginData({
								...loginData,
								userName: e.target.value,
							})
						}
					></input>
				</label>
				<label>
					Password:
					<input
						type="password"
						onChange={(e) =>
							setLoginData({
								...loginData,
								password: e.target.value,
							})
						}
					></input>
				</label>
				<label>
					Confirm Password:
					<input
						type="password"
						onChange={(e) =>
							setLoginData({
								...loginData,
								confirmpassword: e.target.value,
							})
						}
					></input>
				</label>
				<input type="submit"></input>
			</form>
		</>
	);
}

export default Login;
