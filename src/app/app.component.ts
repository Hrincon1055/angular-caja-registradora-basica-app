import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public arrComidas!: Producto[];
  public arrBebidas!: Producto[];
  public productosSeleccionados: Producto[] = [];
  // Metodos
  onProductoSeleccionado($event: Producto) {
    const productoEncontrado = this.productosSeleccionados.find(
      (producto) => producto.nombre === $event.nombre
    );
    if (productoEncontrado) {
      productoEncontrado.cantidad++;
    } else {
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
    }
  }
  // Ciclo de vida
  constructor() {
    this.arrComidas = [
      new Producto(
        'Paisa',
        'https://elviajerofeliz.com/wp-content/uploads/2020/01/Comida-t%C3%ADpica-de-Colombia-Platos-Imprescindibles.jpg',
        10.5
      ),
      new Producto(
        'Lechona',
        'https://elviajerofeliz.com/wp-content/uploads/2020/01/Comida-t%C3%ADpica-de-Colombia-Platos-Imprescindibles.jpg',
        11.5
      ),
      new Producto(
        'Costillas',
        'https://elviajerofeliz.com/wp-content/uploads/2020/01/Comida-t%C3%ADpica-de-Colombia-Platos-Imprescindibles.jpg',
        20
      ),
    ];
    this.arrBebidas = [
      new Producto(
        'Margarita',
        'https://www.cocinayvino.com/wp-content/uploads/2016/08/Cocteles-de-moda.jpg',
        10.5
      ),
      new Producto(
        'Cuba libre',
        'https://www.cocinayvino.com/wp-content/uploads/2016/08/Cocteles-de-moda.jpg',
        15.5
      ),
      new Producto(
        'Mojito',
        'https://www.cocinayvino.com/wp-content/uploads/2016/08/Cocteles-de-moda.jpg',
        20.5
      ),
    ];
  }
}
