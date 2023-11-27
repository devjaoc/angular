import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VentaDetalle } from 'src/model/VentaDetalle';

@Injectable({
  providedIn: 'root'
})
export class VentadetalleService {
  private hosting: string = 'http://127.0.0.1:8000/';
  private action: string = 'api/ventasdetalles';
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
  delete(DetalleVentaID: number): Observable<any> {
    //delete http://127.0.0.1:8000/api/solicitud/40
    return this.http.delete(this.hosting + this.action + '/' + DetalleVentaID,this.options);
  }
  create(ventadetalle: VentaDetalle): Observable<any> {
    return this.http.post(this.hosting + this.action, ventadetalle,this.options);
  }
  update(DetalleVentaID: number, ventadetalle: VentaDetalle): Observable<any> {
    return this.http.put(this.hosting + this.action + '/' + DetalleVentaID, ventadetalle,this.options);
  }
  get(DetalleVentaID: number): Observable<any> {
    return this.http.get(this.hosting + this.action + '/' + DetalleVentaID,this.options);
  }
}
