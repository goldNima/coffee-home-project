
export interface SyrupsINT {
    id: number,
    img: string,
    name: string,
    price: number,
}

export const apiSyrups: SyrupsINT [] = [
    {id: 1 , img: require("../images/image-syrups1.png") , name: "سیروپ نارگیل سی سیب" , price: 332860},
    {id: 2 , img: require("../images/image-syrups2.png") , name: "سیروپ کارامل سی سیب" , price: 332860},
    {id: 3 , img: require("../images/image-syrups3.png") , name: "سیروپ آیریش سی سیب" , price: 332860},
    {id: 4 , img: require("../images/image-syrups4.png") , name: "سیروپ توت فرنگی سی سیب" , price: 332860},
    {id: 5 , img: require("../images/image-syrups5.png") , name: "سیروپ فندق سی سیب" , price: 332861},
    {id: 6 , img: require("../images/image-syrups6.png") , name: "سیروپ وانیل بارتینی" , price: 348000},
    {id: 7, img: require("../images/image-syrups7.png") , name: "سیروپ بلوکاراسائو سی سیب" , price: 332860},
    {id: 8 , img: require("../images/image-syrups8.png") , name: "سیروپ شکلات سی سیب" , price: 332860},
    {id: 9 , img: require("../images/image-syrups9.png") , name: "سیروپ کارامل بارتینی" , price: 348000},
]