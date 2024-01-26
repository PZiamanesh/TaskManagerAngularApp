import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  doHide: boolean = false;

  @Input('currentProject') project: Project | any = null;
  @Input('recordIndex') i: number = 0;
  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(event: any, index: number) {
    this.editClick.emit(event)
  }

  onDelete(event: any, index: number) {
    this.deleteClick.emit({event, index})
  }

  toggleDetails(){
    this.doHide = !this.doHide;
  }

}
