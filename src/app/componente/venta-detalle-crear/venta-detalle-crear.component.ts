import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VentadetalleService } from 'src/app/servieces/ventadetalle.service';
import { VentaDetalle } from 'src/model/VentaDetalle';
import { Producto } from 'src/model/Producto';
import { ProductoService } from 'src/app/servieces/producto.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-venta-detalle-crear',
  templateUrl: './venta-detalle-crear.component.html',
  styleUrls: ['./venta-detalle-crear.component.css'],
})
export class VentaDetalleCrearComponent {
  public ventadetalle!: VentaDetalle;
  public listaProductos: Producto[] = [];
  public productoSeleccionado!: string; // ID del producto seleccionado
  public idproducto!: number; // ID del producto seleccionado

  public mensaje?: string;
  cargando: boolean = false;
  imagenProductoSeleccionado!: string; // URL de la imagen del producto seleccionado
  producto: any;
  IDproducto!: number;

  constructor(
    private solicitudService: VentadetalleService,
    private productoServicio: ProductoService, // Inyecta el servicio de productos
    private activaRouter: ActivatedRoute
  ) {
    //tener el id parametro
    //en caso que sea null

    if (activaRouter.snapshot.paramMap.get('id') != null) {
      this.cargando = true;
      solicitudService
        .get(Number(activaRouter.snapshot.paramMap.get('id')))
        .subscribe({
          next: (resp) => {
            this.ventadetalle = resp.data as VentaDetalle;
            this.cargando = false;
            //this.solicitud = new Solicitud(resp.data.id, resp.data.titulo_corto, resp.data.descripcion, 0);
          },
          error: (err) => {
            console.log(err.error.msg);
            this.cargando = false;
          },
        });
    } else {
      this.ventadetalle = new VentaDetalle(-1, new Date(), '', 0, 0, 0,0, '');
      productoServicio.getList().subscribe({
        next: (resp) => {
          console.log(resp);
          this.listaProductos = Producto.mapParseListJson(resp.data);
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }
  }

  onProductoChange() {
    // const productoSeleccionado = this.listaProductos.find(
    //   (p) => p.imagen === this.productoSeleccionado
    // );
    // if (productoSeleccionado) {
    //   this.imagenProductoSeleccionado = productoSeleccionado.imagen;
    //   //this.idproducto = productoSeleccionado.ProductoID;
    // } else {
    //   this.imagenProductoSeleccionado = ''; // O una imagen por defecto si prefieres
    // }

    // console.log(
    //   'Imagen del producto seleccionado:',
    //   this.imagenProductoSeleccionado
    // );
    // console.log("Imagen del producto seleccionado:", this.idproducto);
    console.log("ID del producto seleccionado:", this.productoSeleccionado);

  }

  getProductoValue(producto: Producto) {
    return JSON.stringify({ id: producto.ProductoID, imagen: producto.imagen });
  }

  submit() {
    //servidor.crearSolicitud(this.solicitud);
    //this.ventadetalle.DetalleVentaID = -1;
    if (this.ventadetalle.DetalleVentaID < 0) {
      this.solicitudService.create(this.ventadetalle).subscribe({
        next: (resp) => {
          console.log(resp);
          this.mensaje = 'VentaDetalle Creada';
        },
        error: (err) => {
          console.log(err.error.msg);
          this.mensaje = 'Error al crear la VentaDetalle';
          this.mensaje = err.error.msg;
        },
      });
    } else {
      this.solicitudService
        .update(this.ventadetalle.DetalleVentaID, this.ventadetalle)
        .subscribe({
          next: (resp) => {
            console.log(resp);
            this.mensaje = 'VentaDetalle Actualizada';
            this.hideMessageAfterDelay(3000);
          },
          error: (err) => {
            console.log(err.error.msg);
            this.mensaje = err.error.msg;
          },
        });
    }
    //modificar para que si tiene definido id elemento solicitud se actualice si no
    //se crea nuevo
  }

  hideMessageAfterDelay(delay: number) {
    setTimeout(() => {
      this.mensaje = undefined;
    }, delay);
  }
}
