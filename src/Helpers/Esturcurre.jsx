import React from 'react'
import Cards from './Cards';
import '../Helpers/estructure.css'

const Esturcurre = ({ forCard }) => {
    const { libra_cobre, tasa_desempleo, imacec, euro, dolar, dolar_intercambio, uf, utm, bitcoin } = forCard;

    const result = [libra_cobre, tasa_desempleo, imacec, euro, dolar, dolar_intercambio, uf, utm, bitcoin]
    console.log(result);


    console.log(forCard);
    return (
        <div id="estructure">
            {
                <ul class="flex-container">
                    {result.map(item => (
                        <div class="flex-item" key={item.id}>
                            <Cards data={item} /> <br />
                        </div>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Esturcurre