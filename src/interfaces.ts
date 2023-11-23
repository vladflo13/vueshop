
export interface productDTO{
    productId:number,
    name:string,
    description: string,
    imgSrc: string,
    price: number
}
export interface productTagDTO{
    productId:number,
    tagId:number,
    tagName:string
}
export interface productTag{
    tagId:number,
    tagName:string,
    productId:number[],
}
export interface product{
    id:number,
    title:string,
    text?:string,
    src?:string,
    price?:number,
}
export interface orderProduct extends product{
    numberProducts: number,
}

export interface bakeryMenu{
    id: number,
    src: string,
    text: string,
    childCards: product[],
}