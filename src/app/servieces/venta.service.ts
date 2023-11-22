import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from 'src/model/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private hosting: string = 'http://127.0.0.1:8000/';
  private action: string = 'api/ventas';
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
  delete(VentaID: number): Observable<any> {
    //delete http://127.0.0.1:8000/api/solicitud/40
    return this.http.delete(this.hosting + this.action + '/' + VentaID,this.options);
  }
  create(venta: Venta): Observable<any> {
    return this.http.post(this.hosting + this.action, venta,this.options);
  }
  update(VentaID: number, venta: Venta): Observable<any> {
    return this.http.put(this.hosting + this.action + '/' + VentaID, venta,this.options);
  }
  get(VentaID: number): Observable<any> {
    return this.http.get(this.hosting + this.action + '/' + VentaID,this.options);
  }
}
