import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        
        
        fetchAPI();
    }, [dailyData]);

    const lineChart = (
        dailyData.length
        ?
        (<Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
        />) : null
        
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;


/*
    useEffect(() => { use effect is a hook, need to take closer look at it
        const fetchAPI = async () => {
            here if we directly put data that we want to put in setDailyData(this location) then we can say that we put it inside it's just a way of doing things in React
            setDailyData(await fetchDailyData()); 
         }

        fetchAPI();
    });
*/