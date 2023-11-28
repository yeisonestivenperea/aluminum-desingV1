package com.projects.aluminumdesign.controller;

import com.projects.aluminumdesign.controller.model.Recicle;
import com.projects.aluminumdesign.service.RecicleService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Yeison Perea
 */
@Controller
public class RecicleController {
    
    @Autowired
    private RecicleService recicleService;

    @GetMapping("/recicle")
    public String quote(Model model) {
        model.addAttribute("message_page", "Residuos");
        return "page_recicle";
    }

    @PostMapping("/save-recicle")
    @ResponseBody
    public String saveRecicle(@RequestBody Recicle recicle) {
        recicle.setState(false);
        recicleService.save(recicle);
        return "OK";
    }
    
    @GetMapping("/recicle-list")
    public String viewRecicle() {
        return "page_recicle_list";
    }
    
    @GetMapping("/recicle-list-all")
    @ResponseBody
    public List<Recicle> listRecicle() {
        return recicleService.getAllRecicle();
    }
}
