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
  private options:any;
  private authSecretKey:string="Token_Bearer";
  constructor(private http: HttpClient) {
    this.options={
      headers:new Headers({
        Accept:'application/json',
        'Content-type':'application/json',
        Authorization:'Bearer '+localStorage.getItem(this.authSecretKey)
      })
    };
  }
  getList(): Observable<any> {
    //http://127.0.0.1:8000/api/solicitud
    return this.http.get(this.hosting + this.action,this.options);
  }
  delete(id: number): Observable<any> {
    //delete http://127.0.0.1:8000/api/solicitud/40
    return this.http.delete(this.hosting + this.action + '/' + id,this.options);
  }
  create(solicitud: Solicitud): Observable<any> {
    return this.http.post(this.hosting + this.action, solicitud,this.options);
  }
  update(id: number, solicitud: Solicitud): Observable<any> {
    return this.http.put(this.hosting + this.action + '/' + id, solicitud,this.options);
  }
  get(id: number): Observable<any> {
    return this.http.get(this.hosting + this.action + '/' + id,this.options);
  }
}
