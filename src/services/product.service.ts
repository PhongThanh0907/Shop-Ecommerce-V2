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
    getProductList: () => {
        return axiosClient.get<Product[]>(PRODUCT_API.GET_LIST_PRODUCT)
    },
    getProductByType: (searchValue: string | undefined ,brand: string[] | undefined, min:number | undefined, max: number | undefined, sort: string | undefined) => {
        return axiosClient.get<unknown, Product[]>(`/products/?searchValue=${searchValue}&brands=${brand?.map((item) => (item))}&min=${min || 0}&max=${max || 1000000000}&sort=${sort || ""}`)
    },
    // getBrandList: () => {
    //     return axiosClient.get<unknown, Brand[]>("/brands");
    // },
    // getBrand: (brandID: string | undefined) => {
    //     return axiosClient.get<unknown, Brand>(`/brands/${brandID}`)
    // }
}

export default productService