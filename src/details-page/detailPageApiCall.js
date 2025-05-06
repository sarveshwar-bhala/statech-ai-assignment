import axios from "axios";

export const getPostsByID = async (id) => {
  const response = axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  console.log(response.data);

  return (await response).data;
};
