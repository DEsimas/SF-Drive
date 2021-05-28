import { GET_RECOMMENDATIONS } from "./actions"

const INITIAL_STATE = { cars: [] }

export const ChooseAvto = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RECOMMENDATIONS:
            state = {
                cars: [
                    {
                        imgCar: "",
                        imgAvatar: "https://cdn.discordapp.com/attachments/646409261479493682/847806703525560320/herrfloppa_20210528_14.png",
                        name: "1",
                        price: "11",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "https://cdn.discordapp.com/attachments/646409261479493682/847806555801911347/IMG_20210527_145356.png",
                        name: "2",
                        price: "22",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "https://cdn.discordapp.com/attachments/646409261479493682/847804880840425502/babe-know-everything-about-me-right-of-course-baby-why-28405081.png",
                        name: "3",
                        price: "33",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "https://cdn.discordapp.com/attachments/646409261479493682/847804160085721128/unknown.png",
                        name: "4",
                        price: "44",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "",
                        name: "5",
                        price: "55",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "",
                        name: "6",
                        price: "66",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "",
                        name: "7",
                        price: "77",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "",
                        name: "8",
                        price: "88",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "",
                        name: "9",
                        price: "99",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "",
                        name: "0",
                        price: "00",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "",
                        name: "a",
                        price: "aa",
                    },
                    {
                        imgCar: "",
                        imgAvatar: "",
                        name: "b",
                        price: "bb",
                    },
                ]
            }
            return state;
        default:
            return state;
    }
}