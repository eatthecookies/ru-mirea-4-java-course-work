package ru.mirea4.faraway.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.mirea4.faraway.entity.Order;
import ru.mirea4.faraway.service.OrderService;

import java.util.List;

@RestController
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/api/orders")
    public ResponseEntity<List<Order>> giveOrders() {
        return ResponseEntity.ok(orderService.getUserOrders());
    }
    @GetMapping("/api/check-auth")
    public ResponseEntity<String> check() {
        return ResponseEntity.ok("ok!");
    }
    @PostMapping ("/api/newOrder")
    public ResponseEntity<String> newOrder(@RequestParam int tour_id) {

        orderService.makeNewOrder(tour_id);
        return ResponseEntity.ok("ok!");
    }
}
