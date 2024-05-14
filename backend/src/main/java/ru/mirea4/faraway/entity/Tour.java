package ru.mirea4.faraway.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="tours")
public class Tour {
    @Id
    @SequenceGenerator(name  =  "tour_seq",  sequenceName  = "tours_sequence", allocationSize = 1)
    @GeneratedValue(generator  =  "tour_seq",  strategy  = GenerationType.SEQUENCE)
    private int id;

    @Column(name="title")
    private String title;
    @Column(name="country")
    private String country;
    @Column(name="rate")
    private int rate;
    @Column(name="price")
    private int price;
    @Column(name = "date")
    private LocalDate date;
    @Column(name="duration")
    private int duration;


    @JsonIgnore
    @OneToMany(mappedBy = "tour")
    private List<Order> orders;

    public Tour(String title, String country, int rate, int price, LocalDate date, int duration) {
        this.title = title;
        this.country = country;
        this.rate = rate;
        this.price = price;
        this.date = date;
        this.duration = duration;
    }



}
