import { DELETE_DRAGON, SHUFFLE } from "../constants/actions";


export const deleteDragon = payload => {
    return {
        type: DELETE_DRAGON, payload
    }
};


export const shuffle = () => {
    return {
        type: SHUFFLE
    }
};