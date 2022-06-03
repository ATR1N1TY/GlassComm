import { filterState } from "../types/types";

export const filterInitialState: filterState = {
  search_query: "",
  min_price: 1,
  max_price: 99999999999999,
  by_order: null, //null | "highToLow" | "lowToHigh"
  include_out_of_stock: true,
  include_fast_delivery_only: false,
  by_ratings: 3,
};
