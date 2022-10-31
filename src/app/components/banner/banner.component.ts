import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona: persona = null;

  constructor(public personaService: PersonaService,
    private tokenService: TokenService) { }

  isLogged =false;
ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
  }
}
  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {
      this.persona = data
    })
  }
  }


