export interface Product {
    _id: string
    nameProduct: string,
    productCode: string,
    brand: string,
    price: number,
    imageProduct: string[],
    type: string,
    bestSeller: boolean,
    description: string,
    oldPrice: number,
    quantity: number
}