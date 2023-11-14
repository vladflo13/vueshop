export interface imgObject{
    id:number,
    title:string,
    text?:string,
    src?:string,
    price?:number,
}
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
export interface cardObject{
    id: number,
    src: string,
    text: string,
    childCards: imgObject[],
    isExpanded: boolean,
}
export interface orderProduct extends imgObject{
    numberProducts: number,
}