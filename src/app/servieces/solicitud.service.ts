import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from 'src/model/Solicitud';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  private hosting: string = 'http://127.0.0.1:8000/';
  private action: string = 'api/solicitud';
  constructor(private http: HttpClient) {}
  getList(): Observable<any> {
    //http://127.0.0.1:8000/api/solicitud
    return this.http.get(this.hosting + this.action);
  }
  delete(id: number): Observable<any> {
    //delete http://127.0.0.1:8000/api/solicitud/40
    return this.http.delete(this.hosting + this.action + '/' + id);
  }
  create(solicitud: Solicitud): Observable<any> {
    return this.http.post(this.hosting + this.action, solicitud);
  }
  update(id: number, solicitud: Solicitud): Observable<any> {
    return this.http.put(this.hosting + this.action + '/' + id, solicitud);
  }
  get(id: number): Observable<any> {
    return this.http.get(this.hosting + this.action + '/' + id);
  }
}
