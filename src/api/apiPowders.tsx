export interface PowdersINT {
    id: number,
    img: string,
    name: string,
    price: number,
}

export const apiPowders: PowdersINT [] = [
    {id: 1 , img: require("../images/image-powders1.png") , name: "کاپوچینو جاموکا" , price: 232500},
    {id: 2 , img: require("../images/image-powders2.png") , name: "کاپوچینو رژیمی گوددی" , price: 516000},
    {id: 3 , img: require("../images/image-powders3.png") , name: "کاپوچینو مولتی کافه" , price: 284000},
    {id: 4 , img: require("../images/image-powders4.png") , name: "کاپوچینو تورابیکا" , price: 365000},
    {id: 5 , img: require("../images/image-powders5.png") , name: "کاپوچینو تاپریکا" , price: 304000},
    {id: 6 , img: require("../images/image-powders6.png") , name: "پودر قهوه عربی" , price: 232000},
    {id: 7 , img: require("../images/image-powders7.png") , name: "قهوه هسته خرما ممتاز سرمد" , price: 74000},
    {id: 8 , img: require("../images/image-powders8.png") , name: "قهوه دان لاواتزا" , price: 2336000},
    {id: 9 , img: require("../images/image-powders9.png") , name: "شکلات داغ فوری ونزکافه" , price: 99000},
    {id: 10 , img: require("../images/image-powders10.png") , name: "پودر هات چاکلت کلاسیک سی تاج" , price: 363210}
]