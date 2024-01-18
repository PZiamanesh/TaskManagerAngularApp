import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  Projects!: Project[];

  constructor(private projectsService : ProjectsService) { }

  ngOnInit(): void {

    this.projectsService.getAll().subscribe(
      (data:Project[]) => {
        this.Projects = data;
      },
      (error) => {},
      () => {},
    );
  }

}
