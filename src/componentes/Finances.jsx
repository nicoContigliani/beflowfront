import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion } from '../redux/FinancesDucks';
import datas from '../Helpers/data.json'
import Esturcurre from '../Helpers/Esturcurre';
import axios from 'axios';

import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
const Finances = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");



    const dispatch = useDispatch()
    const getData = () => { dispatch(obtenerPokemonesAccion()) }

    const dataFinances = useSelector(store => store.finances.array)
    const [data, setData] = useState(datas)
    const [loadings, setLoadings] = useState(true)
    useEffect(async () => {
        getData()
    }, [])
    const x = Object.entries(dataFinances).length === 0; // true
    return (
        <div>
            {
                (x === true) ? (<ClipLoader color={color} loading={loading} cssOverride={override} size={300} />) : (<Esturcurre forCard={dataFinances} />)
            }
        </div>
    )
}

export default Finances