export class Producto {
  public nombre!: string;
  public imgUrl!: string;
  public precio!: number;
  public cantidad!: number;
  constructor(nombre: string, imgUrl: string, precio: number) {
    this.nombre = nombre;
    this.imgUrl = imgUrl;
    this.precio = precio;
    this.cantidad = 0;
  }
}
