package ru.mirea4.faraway.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.mirea4.faraway.entity.Order;
import ru.mirea4.faraway.entity.User;

import java.util.List;

public interface OrderRepository  extends JpaRepository<Order, Integer> {
    public List<Order> findAllByUser(User user);

    List<Order> findAllByUserUsername(String username);
}
