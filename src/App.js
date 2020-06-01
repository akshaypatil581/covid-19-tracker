import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// Instead of having many imports it's better to have one import like in following line

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData } );
        
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        this.setState({ data: fetchedData, country: country } );
        // fetch the data
        // set the state 

    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="corona virus" />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;

/* 
    writing this way ensures where we are getting our style from 
    <div className={styles.container}>

    here we are writing async in front of componentDidMount coz it's 
    built in way of doing it but generally for other functions we write it as 
    function_name async() {}

*/