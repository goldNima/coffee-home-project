

export interface offProductsINT {
    id: number,
    img: string,
    price: number,
    offPrice: string,
    name: string,
}

export const apiOffProducts: offProductsINT [] = [
    {id: 1 , img: require("../images/newProduct1.png") , price: 148000, offPrice: "168,000", name: "دانه قهوه اسپرسو جیورنو بن مانو"},
    {id: 2 , img: require("../images/newProduct2.png") , price: 128000, offPrice: "138,000", name: "دانه قهوه اسپرسو جیورنو بن مانو"},
    {id: 3 , img: require("../images/newProduct3.png") , price: 350000, offPrice: "365,000", name: "دانه قهوه اسپرسو جیورنو بن مانو"},
    {id: 4 , img: require("../images/newProduct4.png") , price: 320000, offPrice: "350,000", name: "دانه قهوه اسپرسو جیورنو بن مانو"}
]