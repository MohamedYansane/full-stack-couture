import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesures } from '../mesures';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MesuresService {
  private baseUrl = 'http://localhost:8080/api/v1/mesures';

  constructor(private httpMesure: HttpClient) {}
  getListOfAllMesures(): Observable<Mesures[]> {
    return this.httpMesure.get<Mesures[]>(`${this.baseUrl}`);
  }
  addMesure(Mesure: Mesures): Observable<Object> {
    return this.httpMesure.post(`${this.baseUrl}`, Mesure);
  }
  updateMesure(id: number, data: any): Observable<Object> {
    return this.httpMesure.put(`${this.baseUrl}/${id}`, data);
  }
  getMesureById(id: number): Observable<Mesures> {
    return this.httpMesure.get<Mesures>(`${this.baseUrl}/${id}`);
  }
  deleteMesureById(id: number): Observable<Object> {
    return this.httpMesure.delete(`${this.baseUrl}/${id}`);
  }
}
