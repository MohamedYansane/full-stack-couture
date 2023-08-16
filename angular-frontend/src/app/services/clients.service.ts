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
  addClient(client: Client): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,client)

  }
  updateClient(id:number, data:any): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,data)
  }
  getClientById(id:number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseUrl}/${id}`);
  }
  deleteClientById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);

  }

}
