const BASE_URL ="http://192.168.29.82:3001/api"


export const LOGIN_ADMIN =BASE_URL +"/users/login";
export const ADD_PRODUCT= BASE_URL +'/product/createProduct';
export const GET_ALL_PRODUCTS = BASE_URL +'/products/getAllProductDataDetails';
export const DELETE_PRODUCT =BASE_URL +'/products/deleteAdminProductDetailById';
export const GET_HOME_FORM =BASE_URL +'/homeForm/getAllHomeFormData'
export const GET_CONTACT_FORM =BASE_URL +'/contactForm/getAllContactFormData'
export const GET_PRODUCT_FORM =BASE_URL +'/productForm/getAllProductFormData'

export const GET_ALL_TOGGLE = BASE_URL +'/showCase/getAllShowCase'
export const UPDATE_SHOW_CASE = BASE_URL +'/showCase/updateShowCaseById'
