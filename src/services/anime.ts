import { api } from "../services/api";

export const list = () => api.get("/v1/anime");

export const getItem = (id: number) => api.get(`/v1/anime/${id}`);

// #region DEFAULT_PARAMS
const defaultQuery = {
  filter: "",
  index: 1,
  perPage: 10,
};

export default {
  list,
  getItem,
};
