export interface AccesoryINT {
    id: number,
    img: string,
    name: string,
    price: number,
}

export const apiAccesory: AccesoryINT [] = [
    {id: 1 , img: require("../images/image-accesory1.png") , name: "چای و قهوه ساز بویانت مدل Stylish Plus" , price: 12000000},
    {id: 2 , img: require("../images/image-accesory2.png") , name: "قهوه ساز اسمگ مدل DCF02CREU" , price: 20848000},
    {id: 3 , img: require("../images/image-accesory3.png") , name: "قهوه ساز سیج مدل SDC450BSS" , price: 32854000},
    {id: 4 , img: require("../images/image-accesory4.png") , name: "اسپرسو ساز نوا مدل 168" , price: 8500000},
    {id: 5 , img: require("../images/image-accesory5.png") , name: "قهوه جوش مدل 2 Cup" , price: 256895}
]