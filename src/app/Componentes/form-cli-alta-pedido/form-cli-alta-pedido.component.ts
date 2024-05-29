import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { ImpresoraService } from 'src/app/Services/impresora.service';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-form-cli-alta-pedido',
  templateUrl: './form-cli-alta-pedido.component.html',
  styleUrls: ['./form-cli-alta-pedido.component.css']
})
export class FormCliAltaPedidoComponent implements OnInit {

  userRole: string = '';
  error: string = '';
  success: boolean = false;
  equipos: any[] = [];
  equipo: number = 0;
  productos: any[] = [];
  producto: number = 0;
  marca: string = '';
  cestaArray: any[] = [];
  cantidad: number = 0;

  constructor(
    public userService: UserService,
    public impresoraService: ImpresoraService,
    public productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
    this.getEquiposLista();
    
  }

  altaPedido() {}

  

  getEquiposLista() {
    this.impresoraService.getEquiposLista().subscribe({
      next: (data: any[]) => {
        this.equipos = data;
      },
      error: (err) => {
        this.error = err;
      }
    });
  }

  productosByMarca(marca: string) {
    console.log('Buscando productos para la marca:', marca);
    this.productoService.getProductosPorMarcaTecnico(marca).subscribe({
      next: (data: any[]) => {
        this.productos = data;
        console.log('Productos recibidos:', this.productos);
      },
      error: (err) => {
        this.error = err;
        console.log('Error al buscar productos:', err);
      }
    });
  }

  onEquipoChange() {
    console.log('Equipo seleccionado:', this.equipo);
    const equipoSeleccionado = this.equipos.find(e => e.serialNumber.toString() === this.equipo);
    console.log(equipoSeleccionado)
    if (equipoSeleccionado) {
      this.marca = equipoSeleccionado.marca;
      console.log('Equipo seleccionado:', equipoSeleccionado);
      console.log('Marca del equipo:', this.marca);
      this.productosByMarca(this.marca);
    } else {
      console.log('No se encontró el equipo seleccionado');
    }
  }

  agregarACesta() {
    // Obtener el producto seleccionado del array de productos
    const productoSeleccionado = this.productos.find(producto => producto.idProducto === this.producto);

    // Verificar si el producto ya está en la cesta
    const productoExistente = this.cestaArray.find(item => item.idProducto === productoSeleccionado.idProducto);

    // Obtener la cantidad seleccionada
    const cantidadSeleccionada = Number(this.cantidad);

    // Si el producto ya está en la cesta, simplemente actualizamos su cantidad
    if (productoExistente) {
      productoExistente.cantidad += cantidadSeleccionada;
    } else {
      // Si no está en la cesta, lo añadimos junto con su cantidad
      this.cestaArray.push({
        idProducto: productoSeleccionado.idProducto,
        nombre: productoSeleccionado.nombre,
        cantidad: cantidadSeleccionada
      });
    }
  }

}