export const UPDATE_IMAGES = "UPDATE_IMAGES";
export const CHOOSE_IMAGE = "CHOOSE_IMAGE";

export const updateImages = (payload) => ({
    type: UPDATE_IMAGES,
    payload
}) 

export const chooseImages = (payload) => ({
    type: CHOOSE_IMAGE,
    payload
}) 