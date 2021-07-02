import React, { useEffect } from "react";

import { useSelector } from 'react-redux';
import Footer from "../Common/Footer.js";
import Header from "./../Common/Header.js";
import HeaderREGISTERED from "./../Common/HeaderREGISTERED.js";
import Avto from "./Avto.js";
import "./../../styles/ChooseAvto/ChooseAvto.scss"
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_CARS_BY_NAME } from "./../../utils/graphql-requests.ts";
import { useState } from "react";

function ChooseAvto(props) {
    const [ name, setName ] = useState('');
    const getSearch = () => {
        sendRequest();
        props.car_name_filter_request(data.data.getFilterByName);
    }
    
    const [sendRequest, data] = useMutation(GET_CARS_BY_NAME, {
        variables: {
            name: name
        }
    });
    sendRequest();
    return (
        <>
            {useSelector(state => state.authorization.user) ? <HeaderREGISTERED/> : <Header/>}
                <body>
                    <h2 className="RentHeader">Арендуйте автомобиль</h2>
                    <div className="filters">
                        <div className="carName">
                            <span>Название</span>
                            <input onChange={ (evt) => setName(evt.target.value) } type="text" id="carNameIN"></input>
                        </div>
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
                        <button onClick={ getSearch } className="findButton">Найти</button>
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