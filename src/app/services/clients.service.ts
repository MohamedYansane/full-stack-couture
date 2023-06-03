import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private baseUrl = "http://localhost:8080/api/v1/clients";

  constructor(private httpClient: HttpClient) { }
  getListOfAllClients(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseUrl}`)
  }
}
