import base from '../productsDB.json'
//cte
const dataInitial = {
    products: [],
    error: null,
    loading: false,

}
//type
const TAKE_PRODUCTS = 'TAKE_PRODUCTS';
// const TAKE_PRODUCTS_SUCCES = 'TAKE_PRODUCTS_SUCCES';
const TAKE_PRODUCTS_ERROR = 'TAKE_PRODUCTS_ERROR';






//reducer
export default function productsReducer(state = dataInitial, action) {
    switch (action.type) {
        case TAKE_PRODUCTS:

            return { ...state, products: action.payload };


        default:
            return state;
    }
}
//action
export const getProductsAction = (valor) => async (dispatch, getState) => {

    try {
        dispatch({
            type: TAKE_PRODUCTS,
            payload: base,

        })
    } catch (error) {
        dispatch({
            type: TAKE_PRODUCTS_ERROR,
            payload: "error",

        })
    }


}



