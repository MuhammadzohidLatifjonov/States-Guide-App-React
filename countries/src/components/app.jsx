import React, { useState } from "react";

// ====================== CSS =========================
import './componet.css'

const Myapp = () => {
    const [value, setValue] = useState('');


    const runFunction = () => {
        let result = document.getElementById('result')
        let finalURL = `https://restcountries.com/v3.1/name/${value}?fullText=true`

        fetch(finalURL)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data[0].name.common);
    result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Poytaxti: </h4>
            <span>${data[0].capital[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Qit'a: </h4>
            <span>${data[0].continents[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Valyuta: </h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>Umumiy tillar: </h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
    </div>`;
        })
        .catch((err) => {
            result.innerHTML = `<p style='color: #f00; margin-top: 10px'>${err.message}</p>`
        })
    }



    return (
        <div className="container">
            <div className="search_wrapper">
                <input
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    id="country_inp"
                    placeholder="Search by typing the name of the country"
                />
                <button id="search_btn" onClick={runFunction}>🔍 Qidirish</button>
            </div>
            <div id="result"></div>
        </div>
    )
}

export default Myapp;