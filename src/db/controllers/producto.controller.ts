import { dbProductos } from '../nedb.config'
import { Producto } from 'src/types/Producto.type'
import { GestorDb } from '../gestorDb.db'

export class ProductoController {
  private db: GestorDb<Producto>

  constructor() {
    this.db = new GestorDb<Producto>(dbProductos)
  }

  async crearProducto(producto: Producto): Promise<Producto> {
    return this.db.guardarDocumento(producto)
  }

  async actualizarProducto(
    id: string,
    update: Partial<Producto>,
  ): Promise<Producto | null> {
    return this.db.actualizarDocumento(id, update)
  }

  async obtenerProducto(id: string): Promise<Producto | null> {
    return this.db.obtenerDocumento(id)
  }

  async listarProductos(): Promise<Producto[]> {
    return this.db.listarDocumentos()
  }

  async eliminarProducto(id: string): Promise<number> {
    return this.db.eliminarDocumento(id)
  }

  async buscarProductos(query: Partial<Producto>): Promise<Producto[]> {
    return this.db.buscarDocumentos(query)
  }
}
