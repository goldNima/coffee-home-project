
export interface newProductsINT {
    id: number,
    img: string,
    price: number,
    name: string,
}

export const apiNewProducts: newProductsINT [] = [
    {id: 1 , img: require("../images/newProduct1.png") , price: 144000, name: "دانه قهوه اسپرسو جیورنو بن مانو"},
    {id: 2 , img: require("../images/newProduct2.png") , price: 128000, name: "دانه قهوه اسپرسو جیورنو بن مانو"},
    {id: 3 , img: require("../images/newProduct3.png") , price: 350000, name: "دانه قهوه اسپرسو جیورنو بن مانو"},
    {id: 4 , img: require("../images/newProduct4.png") , price: 320000, name: "دانه قهوه اسپرسو جیورنو بن مانو"}
]
