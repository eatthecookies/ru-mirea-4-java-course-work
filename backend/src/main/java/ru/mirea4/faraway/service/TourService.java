package ru.mirea4.faraway.service;

import lombok.RequiredArgsConstructor;
import org.springframework.expression.ParseException;
import org.springframework.stereotype.Service;
import ru.mirea4.faraway.entity.Tour;
import ru.mirea4.faraway.repos.TourRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TourService {
    private final TourRepository tourRepository;

    public List<Tour> getTours(){
        return tourRepository.findAll();
    }

    public List<String> getCountries() {
        List <Tour> tours = tourRepository.findAll();
        List <String> countries = new ArrayList<>();
        for (Tour tour: tours){
            countries.add(tour.getCountry());
        }
        return countries;
    }

    public List<Tour> getTours(String stringDate, String country) throws ParseException {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
        LocalDate date = LocalDate.parse(stringDate, formatter);
        return tourRepository.findByDateAndAndCountry(date, country);
    }
}
