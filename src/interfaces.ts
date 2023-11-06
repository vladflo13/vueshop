export interface imgObject{
    id:number,
    title:string,
    text:string,
    src:string,
    price?:number,
};

export interface cardObject{
    id: number,
    src: string,
    text: string,
    childCards: imgObject[],
    isExpanded: Boolean,
}