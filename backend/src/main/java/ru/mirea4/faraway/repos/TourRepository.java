package ru.mirea4.faraway.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.mirea4.faraway.entity.Tour;

import java.time.LocalDate;
import java.util.List;

public interface TourRepository extends JpaRepository<Tour, Integer> {
    List<Tour> findByDateAndAndCountry(LocalDate date, String country);
    Tour findTourById(int id);
}
