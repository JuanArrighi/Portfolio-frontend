import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { SProjectService } from 'src/app/service/s-project.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  inicioP: string;
  finP: string;
  linkP: string;

  constructor(private activatedRouter: ActivatedRoute, private projects: SProjectService, private router: Router) {  }

  ngOnInit(): void {
  }
  onCreate(): void{
    const project = new Project(this.nombreP, this.descripcionP, this.inicioP, this.finP, this.linkP);
    this.projects.save(project).subscribe(
      data => {
        alert("proyecto creado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir el proyecto");
        this.router.navigate(['']);
      }
    )
  }
}

 