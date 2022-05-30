import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'src/app/profiles/interfaces/auth.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  private baseUrl: string = environment.baseUrl;
  private auth: Auth | undefined;

  constructor( private http: HttpClient) { }

  login(body: Auth ){
    return this.http.post(`${this.baseUrl}/login`, body, {responseType: 'text'});
  }
}
