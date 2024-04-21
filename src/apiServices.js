// const BASE_URL = "http://192.168.29.82:3001/api"
const BASE_URL ="http://localhost:3001/api"


export const LOGIN_ADMIN = BASE_URL + "/users/login";

export const ADD_PRODUCT = BASE_URL + '/product/createProduct';
export const GET_ALL_PRODUCTS = BASE_URL + '/products/getAllProductDataDetails';
export const DELETE_PRODUCT = BASE_URL + '/products/deleteAdminProductDetailById';
export const UPDATE_PRODUCT = BASE_URL + '/products/updateAdminProductDetailById';

export const CREATE_CONTACT_FORM = BASE_URL + '/contactForm/createContactForm'
export const CREATE_HOME_FORM = BASE_URL + '/homeForm/createHomeForm'
export const CREATE_PRODUCT_FORM = BASE_URL + '/productForm/createProductForm'
export const GET_HOME_FORM = BASE_URL + '/homeForm/getAllHomeFormData'
export const GET_CONTACT_FORM = BASE_URL + '/contactForm/getAllContactFormData'
export const GET_PRODUCT_FORM = BASE_URL + '/productForm/getAllProductFormData'

export const GET_ALL_TOGGLE = BASE_URL + '/showCase/getAllShowCase'
export const UPDATE_SHOW_CASE = BASE_URL + '/showCase/updateShowCaseById'
export const IMAGE_UPLOAD = BASE_URL + '/upload/uploadImage'
export const CREATE_BLOG = BASE_URL + '/blog/createBlog'

export const CREATE_TESTIMONIALS = BASE_URL + '/testimonials/createTestimonialData'
export const GET_ALL_TESTIMONIALS = BASE_URL + '/testimonials/getAllTestimonialsDataDetails'
export const UPDATE_TESTIMONIALS = BASE_URL + '/testimonials/updateTestimonialsDetailById'
export const DELETE_TESTIMONAILS = BASE_URL + '/testimonials/deleteTestimonialsDetailById'

export const GET_ALL_BLOG = BASE_URL +'/blog/getAllBlog'
export const DELETE_BLOG = BASE_URL +'/blog/deleteAdminProductDetailById'