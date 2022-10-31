import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-editeducation',
  templateUrl: './editeducation.component.html',
  styleUrls: ['./editeducation.component.css']
})
export class EditeducationComponent implements OnInit {
  education: Education = null;
  
  constructor(
    private educationS: EducationService,
    private activatedRouter : ActivatedRoute,
    private router: Router, 
    public imageService: ImageService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationS.detail(id).subscribe(
      data =>{
        this.education = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationS.update(id, this.education).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    )
  }

  
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "Logo" + id;
    this.imageService.uploadImage($event, name)
  }
}