import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
/*
    most modern way of deling with asychronus data is to use async 
    it deals with api request the same way as promises does but it's more
    easier to read and write 
*/
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
                
        return { confirmed, recovered, deaths, lastUpdate };  
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        
        return modifiedData;
    } catch (error) {
        
    }
}

/*
Here we are doing destructuring of data if we don't do the destructuring it will
show undefined { data } - thats the way of destructuring provided in React

{ data: { confirmed, recovered, deaths, lastUpdate } } - this is the way of 
further destructuring the data
this line takes on confirmed, recovered, deaths, lastUpdate values from data object

*/