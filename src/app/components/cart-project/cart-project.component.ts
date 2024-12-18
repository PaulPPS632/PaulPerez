import { Component, Input } from '@angular/core';
import { TECHNOLOGIES } from '../../static/technologies';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart-project',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-project.component.html',
  styleUrl: './cart-project.component.css'
})
export class CartProjectComponent {
  @Input() project: Project | null = null;
  technologyMap = TECHNOLOGIES.reduce((map, tech) => {
    map[tech.label] = tech.Component;
    return map;
  }, {} as { [key: string]: any });

  getTechnologyComponent(label: string) {
    return this.technologyMap[label];
  }
}
