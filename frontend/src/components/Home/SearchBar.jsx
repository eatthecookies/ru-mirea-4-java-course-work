import { useState, useEffect } from 'react';
import '../styles/SearchBar.css';
import CustomSelect from "../CustomSelect";
import Button from "../Button";
import CustomDatePicker from "../CustomDatePicker";
import api from '../../api/axiosConfig';

function SearchBar({onSearchedTour}) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countries, setCountries] = useState([]);
    
    const handleDateChange = date => {
        setSelectedDate(date.toLocaleDateString());
    };

    const handleCountryChange = country => {
        setSelectedCountry(country);
    };

    const handleClickButton = (selectedCountry, selectedDate) => {
        if (selectedCountry !== '' && selectedDate !== null) {
            api.get("/tours/search_tours", {
                params:{
                    country: selectedCountry,
                    date: selectedDate
                }
            }).then(response=>{
                console.log(response.data);
                onSearchedTour(response.data);
            }).catch(error=> {
                console.log("Ошибка при поиске туров");
            })
        }
    };

    useEffect(() => {
        api.get("/tours/countries")
        .then(response => {
            setCountries(response.data)
        })
        .catch(error => {
            console.error("Ошибка при получении списка стран", error)
        })
    }, []);

    return (
        <div className='searchBars'>
            <CustomSelect onChange={handleCountryChange} selectors={countries}/>
            <CustomDatePicker onDateChange={handleDateChange}/>
            <Button onChange={() => handleClickButton(selectedCountry, selectedDate)}>Найти тур!</Button>
        </div>
    );
}

export default SearchBar;
