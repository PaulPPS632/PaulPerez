import { Component } from '@angular/core';
import { PROJECTS } from '../../static/data';
import { Project } from '../../models/project';
import { CartProjectComponent } from "../../components/cart-project/cart-project.component";
import { TECHNOLOGIES } from '../../static/technologies';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CartProjectComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
projects: Project[] = PROJECTS;
technologies = TECHNOLOGIES;
technologyMap = TECHNOLOGIES.reduce((map, tech) => {
  map[tech.label] = tech.Component;
  return map;
}, {} as { [key: string]: any });

getTechnologyComponent(label: string) {
  return this.technologyMap[label];
}
}