import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from 'src/model/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private hosting: string = 'http://127.0.0.1:8000/';
  private action: string = 'api/empleados';
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
  delete(EmpleadoID: number): Observable<any> {
    //delete http://127.0.0.1:8000/api/solicitud/40
    return this.http.delete(this.hosting + this.action + '/' + EmpleadoID,this.options);
  }
  create(empleado: Empleado): Observable<any> {
    return this.http.post(this.hosting + this.action, empleado,this.options);
  }
  update(EmpleadoID: number, empleado: Empleado): Observable<any> {
    return this.http.put(this.hosting + this.action + '/' + EmpleadoID, empleado,this.options);
  }
  get(EmpleadoID: number): Observable<any> {
    return this.http.get(this.hosting + this.action + '/' + EmpleadoID,this.options);
  }
}
