import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  @Input() titulo?: string;
  @Input() productos!: Producto[];
  @Output() productoSeleccionado: EventEmitter<Producto> = new EventEmitter();
  // Metodos
  onClick(producto: Producto) {
    this.productoSeleccionado.emit(producto);
  }
  // Ciclo de vida
  constructor() {}

  ngOnInit(): void {}
}
