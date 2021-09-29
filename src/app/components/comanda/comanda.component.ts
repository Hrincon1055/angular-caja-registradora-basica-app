import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css'],
})
export class ComandaComponent implements OnInit {
  @Input() arrProductos!: Producto[];

  // Metodo
  calculaTotal(): number {
    let resultado: number = 0;
    for (let producto of this.arrProductos) {
      resultado += producto.precio * producto.cantidad;
    }
    return resultado;
  }
  onClickBorrar(i: number): void {
    if (this.arrProductos[i].cantidad === 1) {
      this.arrProductos.splice(i, 1);
    } else {
      this.arrProductos[i].cantidad--;
    }
  }
  // Ciclo de vida
  constructor() {}

  ngOnInit(): void {}
}
