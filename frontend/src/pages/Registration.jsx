import Header from '../components/Header'
import Footer from '../components/Footer'
import RegistrationForm from '../components/RegistrationForm'
import '../components/styles/Registration.css'

function Registration() {
    return (
      <div className="Registration">
        <Header />   
        <div className="placeholder">
        <RegistrationForm/>
        
        </div>
        <Footer />    
      </div>
    );
  }
  
  export default Registration;