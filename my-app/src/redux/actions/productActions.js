import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";


export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.FETCH_SELECTED_PRODUCTS, payload: response.data })
}

// export const setProduct = (products) => {
//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload: products
//     }
// }
// export const selectProduct = (product) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCTS,
//         payload: product
//     }
// }