import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import axios from "axios";
const label =[]
const defaultValue =[]
const data = {
    labels:label,
    datasets:[
        {
            label: '# of Votes',
            data: defaultValue,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }
    ]
}

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};
const TheCurves = () => {
    const [datas,setData]=useState([])
    useEffect(()=>{
        axios.get(`/sonde?room=alpha`).then((response)=> setData(response.data))
    },[])
    datas.map(r=>{
        label.push(r.date)
        defaultValue.push(r.value)

    })

    return (
        <div>

            <Line data={data} options={options}/>

        </div>
    );
};

export default TheCurves;