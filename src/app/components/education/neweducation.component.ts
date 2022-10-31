import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-neweducation',
  templateUrl: './neweducation.component.html',
  styleUrls: ['./neweducation.component.css']
})
export class NeweducationComponent implements OnInit {
  nombreE: string = '';
  institucionE: string = '';
  descripcionE: string = '';
  inicioE: string = '';
  finE: string = '';
  logoE: string = '';

  constructor(private activatedRouter: ActivatedRoute, private educationS: EducationService, private router: Router, public imageService: ImageService,) { }

  ngOnInit(): void {
    
    const id = this.activatedRouter.snapshot.params['id'];
  }

  onCreate(): void{
    const education = new Education(this.nombreE, this.institucionE, this.descripcionE, this.inicioE, this.finE, this.logoE);
    this.educationS.save(education).subscribe(
      data =>{
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
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