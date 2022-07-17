import axios from 'axios';
//constantes  estados
const dataInicial = {
    array: [],
    offset: 0,
    limit: 30

}

//types
const GET_DATA = 'GET_DATA'
const GET_DATA_ERROR = 'GET_DATA_ERROR'



//reducer
export default function financesReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_DATA:

            return { ...state, array: action.payload };

        default:
            return state;
    }
}

//acciones
export const obtenerDataAccion = () => async (dispatch, getState) => {


    try {
        const res = await axios.get(`https://mindicador.cl/api`)
        dispatch({
            type: GET_DATA,
            // payload: res.data.results
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_DATA_ERROR,
            // payload: res.data.results
            payload: "ERROR"
        })
    }
}

