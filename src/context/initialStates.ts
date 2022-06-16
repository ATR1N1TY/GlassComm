import { FilterState } from "../types/types";

export const filterInitialState: FilterState = {
  search_query: "",
  min_price: "0",
  max_price: "999999999",
  by_order: null, //null | "highToLow" | "lowToHigh"
  include_out_of_stock: true,
  include_fast_delivery_only: false,
  by_ratings: 3,
};
