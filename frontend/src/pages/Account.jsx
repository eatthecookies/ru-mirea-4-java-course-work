import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import '../components/styles/Account.css'
import TourCard from '../components/TourCard';
import api from '../api/axiosConfig'
import { useEffect, useState } from 'react';

function Account() {
    const [searchedTours, setSearchedTours] = useState(null);
    const handleSearching = (tours) => {
        setSearchedTours(tours);
    }
    const token = localStorage.getItem('token');
    const getTours = async () =>{
        try{
            console.log(`Bearer ${token}`);
            const response = await api({ method: 'get', url: '/api/orders', headers: { Authorization: `Bearer ${token}` } })
            setSearchedTours(response.data);
            console.log(response.data)
        } catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getTours();
    }, [])
      
    return (
      <div className="Account">
        <Header />   
        <h2>Это твой личный кабинет!</h2>
        <div className="placeholder">
            {
                searchedTours && 
                searchedTours.map((tour, index) => (
                    <TourCard
                      key={index}
                      tour={tour.tour}
                      imageUrl={"https://i.pinimg.com/236x/fb/fa/c1/fbfac1c997f7bf83d34b87082d7e9615.jpg"}
                    />
                  ))
            }
        </div>
        <Footer />    
      </div>
    );
  }
  
  export default Account;