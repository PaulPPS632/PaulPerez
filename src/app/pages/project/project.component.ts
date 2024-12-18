import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from '../../static/data';
import { TECHNOLOGIES } from '../../static/technologies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  @Input('nombre') nombre: string = '';
  Projecto: Project | null = null;



  ngOnInit(): void {
    this.Projecto =
      PROJECTS.find((project) => project.name === this.nombre) || null;
      console.log(this.nombre)
  }

  technologyMap = TECHNOLOGIES.reduce((map, tech) => {
    map[tech.label] = tech.Component;
    return map;
  }, {} as { [key: string]: any });

  getTechnologyComponent(label: string) {
    return this.technologyMap[label];
  }
}
