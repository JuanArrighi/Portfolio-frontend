import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducationComponent } from './components/education/editeducation.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { LoginComponent } from './components/login/login.component';
import { EditAboutComponent } from './components/aboutme/edit-about.component';
import { WorkingComponent } from './components/working/working.component';
import { EditprojectComponent} from './components/projects/editproject.component';
import { NewprojectComponent } from './components/projects/newproject.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducationComponent},
  { path: 'editedu/:id', component: EditeducationComponent},
  { path: 'newskill', component: NewSkillsComponent},
  { path: 'editskill/:id', component: EditSkillsComponent},
  { path: 'editabout/:id', component: EditAboutComponent},
  { path: 'working', component: WorkingComponent},
  {path: 'newproject', component: NewprojectComponent},
  {path: 'editproject/:id', component: EditprojectComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
