import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input('currentProject') project: Project | any = null;
  @Input('recordIndex') i: number = 0;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick(event: any, index: number) {
    this.editClick.emit(event)
  }

  onDeleteClick(event: any, index: number) {
    this.deleteClick.emit({event, index})
  }

}
