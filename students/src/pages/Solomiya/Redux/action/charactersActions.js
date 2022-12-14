import {getCharacter, getMoreCharacters} from "../../api/apiCalls";
import { charactersReducerTypes } from "../../../../redux/reducers/actionTypes";


export const charactersActions = {
    addCharacter: (data) => ({type: charactersReducerTypes.ADD_CHARACTERS, data}),
    addMoreCharacters: (data) => ({type: charactersReducerTypes.ADD_MORE_CHARACTERS, data}),
    setLoading: (loading) => ({type: charactersReducerTypes.SET_LOADING, loading}),
    setError: (error) => ({type: charactersReducerTypes.SET_ERROR, error}),
}

export const getCharactersThunk = () => async (dispatch) => {
    dispatch(charactersActions.setLoading(true))
    await getCharacter()
        .then((data ) => {
            dispatch(charactersActions.addCharacter(data.data))
            dispatch(charactersActions.setError(null))
        })
        .catch((e) => {
            dispatch(charactersActions.setError(e))
        })
        .finally( () => {
            dispatch(charactersActions.setLoading(false))
        })
}

export const getMoreCharactersThunk = (url) => async (dispatch) => {
    dispatch(charactersActions.setLoading(true))
    await getMoreCharacters(url)
        .then((data) => {
            dispatch(charactersActions.addMoreCharacters(data.data))
            dispatch(charactersActions.setError(null))
        })
        .catch((e) => {
            dispatch(charactersActions.setError(e))
        })
        .finally(() => {
            dispatch(charactersActions.setLoading(false))
        })
}

