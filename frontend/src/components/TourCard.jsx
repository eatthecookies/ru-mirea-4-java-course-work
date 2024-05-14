import React, { useState, useEffect } from 'react';
import './styles/TourCard.css';
import Button from "./Button";
import api from '../api/axiosConfig';
import RequireAuth from "../hoc/RequireAuth";
import { useLocation, Navigate } from "react-router-dom";

const TourCard = ({ tour, imageUrl }) => {
    const location = useLocation();
    const [authStatus, setAuthStatus] = useState(null);
    const token = localStorage.getItem('token')
    const checkAuthStatus = async () => {
        try {
            const response = await api({ method: 'get', url: '/api/check-auth', headers: { Authorization: `Bearer ${token}` } })
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
    const makeOrder = async () => {
        console.log("puk");
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Токен аутентификации не найден');
                return;
            }
            console.log(token);
            const response = await api.post(`/api/newOrder?tour_id=${tour.id}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Заказ успешно создан:', response.data);
        } catch (error) {
            console.error('Тур уже был заказан!',error);
        }
    }

    const isAccountPage = location.pathname === '/account';

    return (
        <div className="tour-card-vertical">
            <div className="tour-card-vertical__image">
                <img src={imageUrl} alt="Tour" />
            </div>
            <div className="tour-card-vertical__details">
                <h3 className="tour-card-vertical__name">{tour.title}</h3>
                <p className="tour-card-vertical__country">Страна: {tour.country}</p>
                <p className="tour-card-vertical__country">Дата: {tour.date}</p>
                <p className="tour-card-vertical__rating">Рейтинг: {tour.rate}</p>
                <p className="tour-card-vertical__price">Цена: {tour.price + ' руб'}</p>
            </div>
            <div className="button-container">
                {!isAccountPage && authStatus && <Button onChange={makeOrder}>Оформить заказ!</Button>}
            </div>
        </div>
    );
};

export default TourCard;
