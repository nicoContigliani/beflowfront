import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../redux/ProductDucks'

import { motion } from "framer-motion"


const ProductsList = () => {
    const dispatch = useDispatch();
    const [productArray, setProductsArray] = useState([
        {
            id: 0,
            description: "algo",
            code: 1
        }
    ])
    // const [findElement, setFindElement] = useState("")
    useEffect(() => {
        getAllproducts()
    }, []);

    const products = useSelector(store => store.product.products)
    dispatch(getProductsAction())

    const getAllproducts = () => {
        setProductsArray(products)

    }

    const onchangeFind = (e) => {
        const resultProduct = productArray.find(item => item.description == (e.target.value).toLowerCase().trim() || item.code == (e.target.value).toLowerCase().trim())
        if (resultProduct !== undefined) {
            setProductsArray([resultProduct]);
        }
    }

    // const findCodeOrDescription = () => {

    //     const r = productArray.find(item => item.description == findElement || item.code == findElement)
    //     console.log(r);
    // }


    return (
        <div >
            <div className="container">


                <div class="input-group mb-3">
                    <motion.button class="btn btn-outline-secondary" type="button" onClick={getAllproducts}>Get All</motion.button>
                    {/* <button class="btn btn-outline-secondary" type="button" onClick={findCodeOrDescription}>Find</button> */}

                    <motion.input name="finds" onChange={onchangeFind} type="text" class="form-control btn-outline-danger" placeholder="find" aria-label="find "
                        animate={{
                            scale: [1, 1.2, 1.1, 1, 1],

                            borderRadius: ["0%", "5%", "-15%", "5%", "0%"],
                        }}
                        whileTap={{ scale: 0.9 }}
                        minlength="3" required
                    ></motion.input>
                </div>
                <div className="center">
                    <ul>
                        {productArray.map(item => (
                            <motion.div class="card" key={item.id}
                                whileHover={{ scale: 1.7 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div class="card-body btn-sm text-center">
                                    <span>description: </span>{item.description} <br />
                                    <span>code: </span> {item.code}
                                </div>
                            </motion.div>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default ProductsList;
