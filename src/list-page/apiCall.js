import axios from "axios"

export const getPosts = async () => {
    const response = axios.get("https://jsonplaceholder.typicode.com/posts");

    console.log(response.data)

    return (await response).data
}
