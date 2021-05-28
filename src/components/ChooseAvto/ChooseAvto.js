import React, { useEffect } from "react";

import { useSelector } from 'react-redux';
import Footer from "../Common/Footer.js";
import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import Avto from "./Avto.js";
import "./../../styles/ChooseAvto/ChooseAvto.scss"

function ChooseAvto(props) {

    return (
        <>
            {useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
                <body>
                    <h2 className="RentHeader">Арендуйте автомобиль</h2>
                    <div className="filters">
                        <div className="place">
                            <span>Местоположение</span>
                            <input type="text"></input>
                        </div>
                        <div className="rentPeriod">
                            <span>Период аренды</span>
                            <input type="date"></input>
                        </div>
                        <div className="category">
                            <span>Категория</span>
                            <input type="text"></input>
                        </div>
                        <button className="findButton">Найти</button>
                    </div>
                    <h3 className="recomendationHeader">Рекомендуем поблизости</h3>
                        <div className="cars">
                            { useSelector(state => state.ChooseAvto.cars).map((elem, index) => (
                                <Avto key={index} imgCar={elem.image} imgAvatar={elem.avatar} name={elem.name} price={elem.price}/>
                            ))}
                    </div>
                </body>
            <Footer/>
        </>
    )
}

export default ChooseAvto;