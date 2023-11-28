package com.projects.aluminumdesign.controller.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Yeison Perea
 */
@Getter
@Setter
@Entity
@Table(name = "recicle")
public class Recicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "heigth")
    private float heigth;

    @Column(name = "width")
    private float width;
    
    @Column(name = "state")
    private boolean state;
}
