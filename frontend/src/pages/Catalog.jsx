import Header from '../components/Header'
import Footer from '../components/Footer'
import TourCard from '../components/TourCard'
import api from '../api/axiosConfig'
import {useState, useEffect } from 'react';
function Home() {
    const [tours, setTours] = useState([]);

    const getTours = async () =>{
        try{
            const response = await api.get("/tours/all")
            setTours(response.data)
            console.log(response.data)
        } catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getTours();
    }, [])

    return (
      <div className="Home">
        <Header />
        <h2>Лучшие туры</h2>
        {tours.map((tour, index) => (
        <TourCard
          key={index}
          tour={tour}
          imageUrl={"https://i.pinimg.com/236x/fb/fa/c1/fbfac1c997f7bf83d34b87082d7e9615.jpg"}
        />
      ))}
        <Footer />    
      </div>
    );
  }
  
  export default Home;