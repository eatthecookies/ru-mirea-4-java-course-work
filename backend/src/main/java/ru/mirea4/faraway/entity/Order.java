package ru.mirea4.faraway.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="orders")
public class Order {
    @Id
    @SequenceGenerator(name  =  "order_seq",  sequenceName  = "orders_sequence", allocationSize = 1)
    @GeneratedValue(generator  =  "order_seq",  strategy  = GenerationType.SEQUENCE)
    private int id;
    @JsonIgnore
    @ManyToOne
    private User user;

    @ManyToOne
    private Tour tour;
}

