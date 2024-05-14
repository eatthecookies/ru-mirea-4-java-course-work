package ru.mirea4.faraway.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import ru.mirea4.faraway.entity.Order;
import ru.mirea4.faraway.entity.User;
import ru.mirea4.faraway.repos.OrderRepository;
import ru.mirea4.faraway.repos.TourRepository;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final TourRepository tourRepository;
    private final JavaMailSender mailSender;

    public List<Order> getOrders(){
        return orderRepository.findAll();
    }

    public void makeNewOrder(int tourId){
        Order order = new Order();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof User) {
                User user = (User) principal;
                // Используйте объект user по вашему усмотрению
                order.setUser(user);


            }
        }
        order.setTour(tourRepository.findTourById(tourId));
        orderRepository.save(order);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("sasha.vorobevxx@gmail.com");
        message.setTo(order.getUser().getEmail());
        message.setText(
                "Добрый день, " + order.getUser().getUsername() + "!\n" +
                "\n" +
                "Поздравляем вас с успешным бронированием тура \"" + order.getTour().getTitle() + "\". " +
                "Мы рады, что вы выбрали наше турагентство для вашего путешествия!\n" +
                "\n" +
                "Детали вашего заказа:\n" +
                "- Тур: " + order.getTour().getTitle() + "\n" +
                "- Страна: " + order.getTour().getCountry() + "\n" +
                "- Дата начала тура: " + order.getTour().getDate() + "\n" +
                "- Рейтинг: " + order.getTour().getRate() + "\n" +
                "- Цена: " + order.getTour().getPrice() + " рублей\n" +
                "\n" +
                "Если у вас возникнут вопросы или пожелания, не стесняйтесь обращаться к нашей команде. " +
                "Мы готовы помочь вам в любое время!\n" +
                "\n" +
                "Спасибо за выбор нашего турагентства! Желаем вам ярких впечатлений и незабываемого отдыха!\n" +
                "\n" +
                "С наилучшими пожеланиями,\n" +
                "Команда За Тридевять Земель"
        );
        message.setSubject("Заказ №" + order.getId() + " - Подтверждение бронирования тура");
        mailSender.send(message);


    }

    public List<Order> getUserOrders(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String username = userDetails.getUsername();
            return orderRepository.findAllByUserUsername(username);
        } else {
            // Обработка случая, когда пользователь не авторизован
            return Collections.emptyList();
        }
    }

}
