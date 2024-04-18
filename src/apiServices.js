const BASE_URL ="http://192.168.29.82:3001/api"


export const LOGIN_ADMIN =BASE_URL +"/users/login";
export const ADD_PRODUCT= BASE_URL +'/product/createProduct';
export const GET_ALL_PRODUCTS = BASE_URL +'/products/getAllProductDataDetails';
export const DELETE_PRODUCT =BASE_URL +'/products/deleteAdminProductDetailById';


export const CREATE_CONTACT_FORM = BASE_URL + '/contactForm/createContactForm'
export const CREATE_HOME_FORM =BASE_URL + '/homeForm/createHomeForm'
export const CREATE_PRODUCT_FORM = BASE_URL +'/productForm/createProductForm'