import { Product } from "../types/product.type";
import { axiosClient } from "./axiosClient";

const PRODUCT_API = {
    GET_LIST_PRODUCT: '/products/',
    GET_PRODUCT_DETAIL: (id: string) => `/products/${id}`
}

const productService =  {
    getProduct: (productID: string) => {
        return axiosClient.get<Product>(PRODUCT_API.GET_PRODUCT_DETAIL(productID))
    },

}

export default productService