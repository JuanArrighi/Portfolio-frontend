import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { SProjectService } from 'src/app/service/s-project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  proje: Project = null;

  constructor( 
    private projectS: SProjectService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
    this.projectS.detail(id).subscribe(
      data => {
        this.proje = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectS.update(id, this.proje).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }
}