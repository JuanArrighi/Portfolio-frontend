import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { SProjectService } from 'src/app/service/s-project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  
    constructor(private sProject: SProjectService, private tokenService: TokenService) { }
    isLogged = false;
  
    ngOnInit(): void {
      this.cargarProjects();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }

    
  cargarProjects(): void{
    this.sProject.lista().subscribe(
      data => {
        this.projects = data;
      }
    )
  }
  
  delete(id: number){
    if(id != undefined){
      this.sProject.delete(id).subscribe(
        data => {
          this.cargarProjects();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

}



