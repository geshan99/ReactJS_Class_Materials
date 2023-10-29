import axios from "axios";

const BASE_API = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
	timeout: 3000,
});

export async function getBlogPost() {
	const _res = await BASE_API.get("/posts/15");
	return _res;
}

export async function createBlogPost(content) {
	const _res = await BASE_API.post("/posts", content);
	return _res;
}

export async function deleteBlogPost() {
	const _res = await BASE_API.delete("/posts/1");
	return _res;
}
