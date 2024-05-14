package ru.mirea4.faraway;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.mirea4.faraway.entity.Tour;
import ru.mirea4.faraway.repos.TourRepository;

import java.time.LocalDate;

@Component
public class TourInitializer {

    @Autowired
    private TourRepository tourRepository;

    @PostConstruct
    public void init() {
        tourRepository.save(new Tour("Экскурсия в горы", "Италия", 4, 2500, LocalDate.of(2024, 6, 15), 7));
        tourRepository.save(new Tour("Путешествие на море", "Франция", 5, 3800, LocalDate.of(2024, 7, 20), 10));
        tourRepository.save(new Tour("Отдых на острове", "Греция", 3, 1800, LocalDate.of(2024, 8, 10), 5));
        tourRepository.save(new Tour("Гастрономический тур", "Испания", 4, 3200, LocalDate.of(2024, 9, 5), 6));
        tourRepository.save(new Tour("Поход по замкам Европы", "Франция", 5, 4200, LocalDate.of(2024, 7, 15), 9));
        tourRepository.save(new Tour("Поход в горы", "Норвегия", 4, 2900, LocalDate.of(2024, 6, 25), 8));
        tourRepository.save(new Tour("Отдых на море", "Испания", 5, 3600, LocalDate.of(2024, 8, 5), 7));
        tourRepository.save(new Tour("Туристический поход", "Япония", 4, 4000, LocalDate.of(2024, 9, 10), 12));
        tourRepository.save(new Tour("Поездка в деревню", "Россия", 3, 1500, LocalDate.of(2024, 7, 30), 4));
        tourRepository.save(new Tour("Экскурсия в замок", "Франция", 5, 3500, LocalDate.of(2024, 8, 20), 6));
    }
}
