import { useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../api/axiosConfig';

const RequireAuth = ({children}) => {
    const token = localStorage.getItem('token');
    const location = useLocation();
    const [authStatus, setAuthStatus] = useState(null);

    const checkAuthStatus = async () => {
        try {
            const response = await api({ method: 'get', url: '/api/check-auth', headers: { Authorization: `Bearer ${token}` } });
            if (response.status === 200) {
                setAuthStatus(true); // Установить статус аутентификации в true
            } else if (response.status === 401) {
                setAuthStatus(false); // Установить статус аутентификации в false
            }
        } catch (error) {
            console.error('Ошибка при проверке статуса аутентификации:', error);
            setAuthStatus(false);
        }
    };

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const logout = async () => {
        try {
            const response = await api({ method: 'get', url: '/logout', headers: { Authorization: `Bearer ${token}` } });
            setAuthStatus(false);
            console.log("Успешно вышел");
            // После успешного выхода, обновляем статус аутентификации
            checkAuthStatus();
        } catch (error) {
            console.error('Ошибка при проверке выхода', error);
        }
    };
    
    if (authStatus === true){
        return (
            <div>
                <NavLink to="/" className="item" onClick={logout}> Выйти</NavLink>
                <NavLink to="/account" className="item"> ЛК </NavLink>
            </div>
        );
    } else{
         return children;
    }
}

export default RequireAuth;
