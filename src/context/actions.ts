//describing enums for using in useReducer hooks, this is the style used in redux

export enum CART_ACTIONS {
  ADD_PRODUCT = "add_product",
  REMOVE_PRODUCT = "remove_product",
  CHANGE_QTY = "change_qty",
}

export enum CURRENCY_ACTIONS {
  CHANGE_CURRENCY = "change_currency",
}

export enum FILTER_ACTIONS {
  SEARCH_BY_QUERY = "search_by_query",
  REMOVE_PRICES_BELOW = "remove_prices_below",
  REMOVE_PRICES_UPPER = "remove_prices_upper",
  SORT_BY_PRICE = "sort_by_price",
  SORT_BY_RATINGS = "sort_by_ratings",
  INCLUDE_OUT_OF_STOCK = "include_out_of_stock",
  SHOW_FAST_DELIVERY_ONLY = "show_fast_delivery_only",
  CLEAR_FILTER = "clear_filter",
}
