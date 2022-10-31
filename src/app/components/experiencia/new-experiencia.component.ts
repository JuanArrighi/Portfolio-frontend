import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '' ;
  empresaE: string = '' ;
  descripcionE: string = '' ;
  inicioE: string = '' ;  
  finE: string = '' ;
  logoE: string = '' ;

  constructor(private activatedRouter: ActivatedRoute, private sExperiencia: SExperienciaService, private router: Router,public imageService: ImageService,) { }

  ngOnInit(): void {
    
    const id = this.activatedRouter.snapshot.params['id'];

  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.empresaE, this.descripcionE, this.inicioE, this.finE, this.logoE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
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
