import { GET_RECOMMENDATIONS } from "./actions"

const INITIAL_STATE = { cars: [] }

export const ChooseAvto = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_RECOMMENDATIONS:
            state = {
                cars: [
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/412189765866225667/847637882779729920/unknown.png",
                        imgAvatar: "https://cdn.discordapp.com/attachments/646409261479493682/847806703525560320/herrfloppa_20210528_14.png",
                        name: "111111111",
                        price: "4454351",
                        id: 1
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/412189765866225667/847648511654887424/unknown.png",
                        imgAvatar: "https://cdn.discordapp.com/attachments/646409261479493682/847806555801911347/IMG_20210527_145356.png",
                        name: "2222222222",
                        price: "465131",
                        id: 2
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/412189765866225667/847422428007366656/unknown.png",
                        imgAvatar: "https://cdn.discordapp.com/attachments/646409261479493682/847804880840425502/babe-know-everything-about-me-right-of-course-baby-why-28405081.png",
                        name: "33333333333333333",
                        price: "34534533",
                        id: 3
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "https://cdn.discordapp.com/attachments/646409261479493682/847804160085721128/unknown.png",
                        name: "444444444444444",
                        price: "465454",
                        id: 4
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "",
                        name: "5555555555555555",
                        price: "554535",
                        id: 5
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "",
                        name: "66666666666",
                        price: "66453453",
                        id: 6
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "",
                        name: "7777777777777",
                        price: "74537",
                        id: 7
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "",
                        name: "888888888888",
                        price: "8453458",
                        id: 8
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "",
                        name: "99999999",
                        price: "453499",
                        id: 9
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "",
                        name: "0000000000",
                        price: "045450",
                        id: 10
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "",
                        name: "aaaaaaaaa",
                        price: "1616",
                        id: 11
                    },
                    {
                        imgCar: "https://cdn.discordapp.com/attachments/781177167769632777/847195318478569542/G8Hath1norU.jpg",
                        imgAvatar: "",
                        name: "bbbbbbbbbbbb",
                        price: "6165",
                        id: 12
                    },
                ]
            }
            return state;
        default:
            return state;
    }
}