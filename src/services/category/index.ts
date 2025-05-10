import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../axiosConfig";

const categoryMenu = async () => {
  const res = await httpClient.get("/products/categories");
  return res.data;
};

const useCategoryMenu = () => {
  return useQuery({
    queryKey: ["categoryMenu"],
    queryFn: categoryMenu,
  });
};

export { useCategoryMenu };
