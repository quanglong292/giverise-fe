import axiosInstance from "@/plugins/axios";

export const getUser = async (params: any) => {
  return await axiosInstance.get("/", { params });
};
