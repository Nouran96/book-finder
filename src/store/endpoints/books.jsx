import axiosInstance from "../../network/apis/axios";

export const fetchBooks = async (query) => {
  if (query) {
    const response = await axiosInstance.get(`?q=${query}`);

    if (response.status === 200 && response.data.items)
      return response.data.items;
  }

  return [];
};
