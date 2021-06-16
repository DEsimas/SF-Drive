import React from 'react';

function AddCar1(props) {
    function saveData() {
        let Data = {};
        let shit = ["mark", "model", "year", "number", "VIN", "color", "engineType", "volume", "powerLS", "powerKVT", "transmission", "mileage", "PTS", "STS", "price", "price3", "price5"];
        shit.forEach((el) => {
            Data[el] = document.getElementById(el).value;
        });
        console.log(Data);
        props.saveData(Data);
    };
    return (
        <>
            <datalist id="markList">
                <option value="" />
            </datalist>
            <div className="AddCar1">
                <div className="stepSpan"><span>Шаг 1 из 4</span></div>
                <div className="headerWrapper"><h1>Новый автомобиль</h1></div>
                <div className="main">
                    <div className="avtoInfoBlok">
                        <h3>Информация об автомобиле</h3>
                        <div className="inputs">
                            <div className="group1">
                                <div className="mark row">
                                    <span className="fieldSpan">Марка</span>
                                    <input id="mark" list="markList" type="text"></input>
                                </div>
                                <div className="model row">
                                    <span className="fieldSpan">Модель</span>
                                    <input id="model" list="" type="text"></input>
                                </div>
                                <div className="year row">
                                    <span className="fieldSpan">Год выпуска</span>
                                    <input id="year" type="number"></input>
                                </div>
                                <div className="number row">
                                    <span className="fieldSpan">Гос. номер</span>
                                    <input id="number" type="number"></input>
                                </div>
                                <div className="VIN row">
                                    <span className="fieldSpan">VIN</span>
                                    <input id="VIN" list="" type="text"></input>
                                </div>
                                <div className="color row">
                                    <span className="fieldSpan">Цвет</span>
                                    <input id="color" list="" type="text"></input>
                                </div>
                            </div>
                            <div className="group2">
                                <div className="engineType row">
                                    <span className="fieldSpan">Тип двигателя</span>
                                    <input id="engineType" list="" type="text"></input>
                                </div>
                                <div className="volume row">
                                    <span className="fieldSpan">Объём</span>
                                    <input id="volume" type="text"></input>
                                </div>
                                <div className="power row">
                                    <span className="fieldSpan">Мощность</span>
                                    <div className="powerInput">
                                        <input id="powerLS" placeholder="100 л.с." type="text"></input>
                                        <input id="powerKVT" placeholder="73,5499 кВт" type="text"></input>
                                    </div>
                                </div>
                                <div className="transmission row">
                                    <span className="fieldSpan">Трансмиссия</span>
                                    <input id="transmission" list="" type="text"></input>
                                </div>
                            </div>
                            <div className="group3">
                                <div className="mileage row">
                                    <span className="fieldSpan">Пробег</span>
                                    <input id="mileage" type="number"></input>
                                </div>
                                <div className="PTS row">
                                    <span className="fieldSpan">Серия и номер ПТС</span>
                                    <input id="PTS" type="text"></input>
                                </div>
                                <div className="STS row">
                                    <span className="fieldSpan">Серия и номер СТС</span>
                                    <input id="STS" type="text"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="priceBlok">
                        <h3>Стоимость аренды</h3>
                        <div className="inputs">
                            <div className="price row">
                                <span className="fieldSpan">Обычная цена</span>
                                <input id="price" type="text"></input>
                            </div>
                            <div className="price3 row">
                                <span className="fieldSpan">Цена при аренде на 3 дня</span>
                                <input id="price3" type="text"></input>
                            </div>
                            <div className="price5 row">
                                <span className="fieldSpan">Цена при аренде более 5 дней</span>
                                <input id="price5" type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className="insuranceBlok">
                        <h3>Страхование</h3>
                        <div className="inputs">
                            <div className="OSAGO row">
                                <span className="fieldSpan">Полис ОСАГО</span>
                                <input id="OSAGO" type="text"></input>
                            </div>
                            <div className="KASKO row">
                                <span className="fieldSpan">Полис КАСКО (если есть)</span>
                                <div className="kaskoWrapper">
                                    <input id="KASKO" type="text"></input>
                                    <a className="buy">Купить каско</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btnWrap">
                    <button onClick={ saveData } className="contButton">Продолжить</button>
                </div>
            </div>
        </>
    );
};

export default AddCar1;