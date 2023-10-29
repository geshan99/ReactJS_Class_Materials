import { useState } from "react";
import { createBlogPost } from "./api";

function App() {
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleCreatePost() {
		try {
			setLoading(true);
			const _res = await createBlogPost({
				title: "",
				userId: 10,
				body: "dhgh",
			});
			setLoading(false);
			setSuccess("Succefully Created !");
			console.log(_res);
		} catch (error) {
			setError(error.message);
			console.log(error.message);
		}
	}
	return (
		<>
			<h1>Create Blog Post</h1>
			<p style={{ color: "red" }}>{error}</p>
			<p style={{ color: "green" }}>{loading ? "Loading..." : success}</p>
			<button onClick={handleCreatePost}>Create Post</button>
		</>
	);
}

export default App;
