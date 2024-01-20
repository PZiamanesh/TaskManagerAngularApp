import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects!: Project[];
  createProject: Project = new Project();
  projectForEdit: Project = new Project();
  indexForEditProject: number | null = null;
  projectForDelete: Project = new Project();
  indexForDeleteProject: number | null = null;

  filterBy: string = '';
  filterValue: string = '';

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {

    this.projectsService.getProjects(this.filterBy, this.filterValue).subscribe(
      {
        next: (data: Project[]) => {
          this.projects = data;
        },
        error: (error) => { 
          console.log(error);
          alert('attempt failed')
        },
        complete: () => { },
      }
    );
  }

  onCreateProject() {

    this.projectsService.add(this.createProject).subscribe({
      next: (result: Project) => {
        this.projects.push(result);
        this.createProject = new Project();
      },
      error: (error) => { console.error('internal server error') },
      complete: () => { }
    });
  }

  onEditClick($event: any, index: number) {

    this.indexForEditProject = index;
    // get editing project
    this.projectForEdit.projectId = this.projects[index].projectId;
    this.projectForEdit.projectName = this.projects[index].projectName;
    this.projectForEdit.dateOfStart = this.projects[index].dateOfStart;
    this.projectForEdit.teamSize = this.projects[index].teamSize;
  }

  onEditConfirm() {

    this.projectsService.update(this.projectForEdit).subscribe({
      next: (result: Project) => {
        if (this.indexForEditProject != null) {
          this.projects[this.indexForEditProject].projectName = result.projectName;
          this.projects[this.indexForEditProject].dateOfStart = result.dateOfStart;
          this.projects[this.indexForEditProject].teamSize = result.teamSize;
          this.indexForEditProject = null;
        }
      },
      error: (error) => { console.error('internal server error') },
      complete: () => { }
    });
  }

  onDeleteClick($event: any, index: number) {

    this.indexForDeleteProject = index;
    // get deleting project
    this.projectForDelete.projectId = this.projects[index].projectId;
    this.projectForDelete.projectName = this.projects[index].projectName;
  }

  onDeleteConfirm() {

    this.projectsService.delete(this.projectForDelete.projectId).subscribe({
      next: (result: number) => {
        if (result != -1) {
          this.projects.splice(this.indexForDeleteProject!, 1)
        }
      },
      error: (error) => { console.error('internal server error') },
      complete: () => { }
    });
  }

  onFilterClick(){
    this.projectsService.getProjects(this.filterBy, this.filterValue).subscribe(
      {
        next: (data: Project[]) => {
          this.projects = data;
        },
        error: (error) => { },
        complete: () => { },
      }
    );
  }




}
