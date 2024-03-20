

// import PropTypes from 'prop-types';

import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis,  Tooltip, Legend } from 'recharts';
import { Audio } from 'react-loader-spinner'

const Phones = () => {

    // useState
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect

    useEffect(()=>{

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;

            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name : phone.phone_name,
                    price : parseInt(phone.slug.split('-')[1])
                }
                return obj
            })

            setPhones(phonesWithFakeData)

            setLoading(false)
        });

    }, [])

    console.log(phones)




    return (
        <div>

            {
                loading && <Audio></Audio>
            }

            <h3 className="text-5xl"> The length of phones : {phones.length} </h3>

            <div>

                <BarChart width={1200} height={400} data={phones}>

                    <Bar dataKey={"price"} fill='green' />
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
         

                </BarChart>


            </div>

            
        </div>
    );
};

Phones.propTypes = {
    
};

export default Phones;