import { useState } from "react";

function MyForm() {
	const [formData, setFormData] = useState({
		userName: "",
		birthday: "",
		age: "",
		email: "",
	});

	const handleChangeName = (e) => {
		setFormData({ ...formData, userName: e.target.value });
	};
	const handleBirthday = (e) => {
		setFormData({ ...formData, birthday: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.log(formData);
	};

	return (
		<>
			<h1>My Form</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input type="text" onChange={handleChangeName} />
				</label>

				<label>
					Birthday:
					<input type="date" onChange={handleBirthday} />
				</label>
				<label>
					Age:
					<input type="number"></input>
				</label>
				<label>
					Email:
					<input type="email"></input>
				</label>
				<input type="submit"></input>
			</form>
		</>
	);
}

export default MyForm;
