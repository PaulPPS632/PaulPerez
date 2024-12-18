import { Component } from '@angular/core';
import { CartProjectComponent } from "../../components/cart-project/cart-project.component";
import { PROJECTS } from '../../static/data';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  imports: [CartProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
