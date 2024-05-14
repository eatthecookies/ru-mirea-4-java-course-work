import { useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../api/axiosConfig'

const RequireAuth = ({children}) => {
    const token = localStorage.getItem('token')
    const location = useLocation();
    const [authStatus, setAuthStatus] = useState(null);
    const checkAuthStatus = async () => {
        try {
            const response = await api({ method: 'get', url: '/api/check-auth', headers: { Authorization: `Bearer ${token}` } })
            if (response.status === 200) {
                setAuthStatus(true); // Установить статус аутентификации в true
            } else if (response.status === 401) {
                setAuthStatus(false); // Установить статус аутентификации в false
            }
        } catch (error) {
            setAuthStatus(false);
        }
    };
    useEffect(() => {
        checkAuthStatus();
    }, []);
    if (authStatus===false){
        return <Navigate to='/login' />
    }
    return children;
}
export default RequireAuth;