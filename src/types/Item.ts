import { Product } from "./product.type"


export interface Item extends Product{
    numberCount: number
    totalCount: number
}