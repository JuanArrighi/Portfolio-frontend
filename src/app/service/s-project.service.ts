import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../model/project';


@Injectable({
  providedIn: 'root'
})
export class SProjectService {
  URL = environment.URL + '/projects/'

  constructor(private httpClient: HttpClient) { }

  
    public lista(): Observable<Project[]>{
      return this.httpClient.get<Project[]>(this.URL +'lista');
   }

   public detail(id: number): Observable<Project>{
    return this.httpClient.get<Project>(this.URL + `detail/${id}`);
  } 

  public save(project: Project): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', project);
  }

  public update(id: number, project: Project): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, project);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}

