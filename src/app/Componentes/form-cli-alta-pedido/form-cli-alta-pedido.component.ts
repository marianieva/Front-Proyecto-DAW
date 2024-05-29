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
  success:boolean = false;

  equipos:  any[] = [];
  equipo:number =0;

  productos:  any[] = [];
  producto:number =0;

  marca:string = '';

  constructor(public userService: UserService, public impresoraService: ImpresoraService,
    public productoService: ProductoService) { }

  ngOnInit(): void {
    this.userRole = this.userService.getUserRole();
    this.getEquiposLista();
    this.productosByMarca(this.marca);
  }

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

  productosByMarca(marca:string) {
    this.productoService.getProductosPorMarcaTecnico(marca).subscribe({
      next: (data: any[]) => {
        this.productos = data;
      },
      error: (err) => {
        this.error = err;
      }
    });
  }

  onUsuarioChange(){
    this.productosByMarca(this.marca);
  }

}
