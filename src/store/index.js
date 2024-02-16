import { configureStore } from "@reduxjs/toolkit";
import { UPDATE_IMAGES, CHOOSE_IMAGE } from './actions';

const initialState = {
    images: [],
    currentImage: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_IMAGES:
            return {
                ...state,
                images: [...action.payload]
            };
        
        case CHOOSE_IMAGE:
            return {
                ...state,
                currentImage: action.payload
            };

        default:
            return state;
    }
}

const store = configureStore({ reducer });

export default store