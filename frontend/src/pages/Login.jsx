import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import '../components/styles/Login.css'

function Login() {
    return (
      <div className="Login">
        <Header />   
        <div className="placeholder">
        <LoginForm/>
        
        </div>
        <Footer />    
      </div>
    );
  }
  
  export default Login;