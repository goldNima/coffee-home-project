

export interface CoffeeBeansINT {
    id: number,
    img: string,
    name: string,
    price: number,
}

export const apiCoffeeBans: CoffeeBeansINT [] = [
    {id: 1 , img: require("../images/image-coffeBeans1.png") , name: "دانه قهوه اتیوپی عربیکا شاران" , price: 465000},
    {id: 2 , img: require("../images/image-coffeBeans2.png") , name: "دانه قهوه سینگل اورجین اتیوپی گوجی دلکینی" , price: 480000},
    {id: 3 , img: require("../images/image-coffeBeans3.png") , name: "دانه قهوه عربیکا دلکینی" , price: 351000},
    {id: 4 , img: require("../images/image-coffeBeans4.png") , name: "دانه قهوه لئو قهوه ست" , price: 292000},
    {id: 5 , img: require("../images/image-coffeBeans5.png") , name: "دانه قهوه کافی کریما طلایی قهوه ست" , price: 362720}
]