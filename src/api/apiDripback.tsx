


export interface DripBackINT {
    id: number,
    img: string,
    name: string,
    price: number,
}

export const apiDripBack: DripBackINT [] = [
    {id: 1 , img: require("../images/image-dripBack1.png") , name: "قهوه دمی چکه ای Samba دونیسی" , price: 140000},
    {id: 2 , img: require("../images/image-dripBack2.png") , name: "قهوه دمی چکه ای Good Evening دونیسی" , price: 110000},
    {id: 3 , img: require("../images/image-dripBack3.png") , name: "قهوه دمی چکه ای Good Evening دونیسی" , price: 126000},
    {id: 4 , img: require("../images/image-dripBack4.png") , name: "قهوه دمی هرمی تک خاستگاه کنیا پپتینا" , price: 145000}
]