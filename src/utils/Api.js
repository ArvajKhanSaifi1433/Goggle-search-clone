import axios from "axios";
// c5b249b05ba4b4ddf

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyBwAZAtxsXkPpHcJhUDXcf1CLl6D47QYGc",
  cx: "00f1ae6be201645b1",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
