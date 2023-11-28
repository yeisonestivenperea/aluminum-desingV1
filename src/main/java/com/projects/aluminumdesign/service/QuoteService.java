package com.projects.aluminumdesign.service;

import com.projects.aluminumdesign.controller.model.Quote;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Yeison Perea
 */
@Service
public class QuoteService {

    private final QuoteRepository quoteRepository;

    @Autowired
    public QuoteService(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    public Quote save(Quote quote) {
        return quoteRepository.save(quote);
    }

    // Método para consultar toda la tabla
    public List<Quote> getAllQuotes() {
        return quoteRepository.findAll();
    }

    // Método para consultar por ID
    public Optional<Quote> getQuoteById(Long id) {
        return quoteRepository.findById(id);
    }
}
