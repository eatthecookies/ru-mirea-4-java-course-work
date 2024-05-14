package ru.mirea4.faraway.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.mirea4.faraway.entity.Tour;
import ru.mirea4.faraway.service.TourService;

import java.text.ParseException;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/tours")
public class TourController {
    private final TourService tourService;

    @Autowired
    public TourController(TourService tourService) {
        this.tourService= tourService;
    }

    @GetMapping("/all")
    public @ResponseBody List<Tour> giveTours(){
        return tourService.getTours();
    }

    @GetMapping("/countries")
    public @ResponseBody List<String> giveCountries(){
        return tourService.getCountries();
    }
    @GetMapping("/search_tours")
    public @ResponseBody List<Tour> giveTours(@RequestParam String date,
                               @RequestParam String country) throws ParseException {
        return tourService.getTours(date, country);
    }
}
