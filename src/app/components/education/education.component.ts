import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private educationS: EducationService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducation();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducation(): void{
    this.educationS.lista().subscribe(
      data =>{
        this.education = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.educationS.delete(id).subscribe(
        data => {
          this.cargarEducation();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}