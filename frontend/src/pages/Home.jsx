import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/Home/SearchBar'
import TourCard from '../components/TourCard'
import '../components/styles/Home.css'
import {useState, React} from "react";

function Home() {
    const [searchedTours, setSearchedTours] = useState(null);
    const handleSearching = (tours) => {
        setSearchedTours(tours);
    }
    return (
      <div className="Home">
        <Header />   
        <SearchBar onSearchedTour={handleSearching}/>
        <div className="placeholder">
            {
                searchedTours && 
                searchedTours.map((tour, index) => (
                    <TourCard
                      key={index}
                      tour={tour}
                      imageUrl={"https://i.pinimg.com/236x/fb/fa/c1/fbfac1c997f7bf83d34b87082d7e9615.jpg"}
                    />
                  ))
            }
        </div>
        <Footer />    
      </div>
    );
  }
  
  export default Home;