package com.projects.aluminumdesign.service;

import com.projects.aluminumdesign.controller.model.Recicle;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Yeison Perea
 */
@Service
public class RecicleService {
    
    
    private final RecicleRepository recicleRepository;

    @Autowired
    public RecicleService(RecicleRepository recicleRepository) {
        this.recicleRepository = recicleRepository;
    }

    public Recicle save(Recicle recicle) {
        return recicleRepository.save(recicle);
    }
    
    // Método para consultar toda la tabla
    public List<Recicle> getAllRecicle() {
        return recicleRepository.findAll();
    }
}
