export interface imgObject{
    id:number,
    title:string,
    text:string,
    src:string,
};

export interface cardObject{
    id: number,
    src: string,
    text: string,
    childCards: imgObject[],
    isExpanded: Boolean,
}