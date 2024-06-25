import Nedb from 'nedb'
import { Cliente } from 'src/types/Cliente.type'
import { DetalleReparacion } from 'src/types/DetalleReparacion.type'
import { DetalleVenta } from 'src/types/DetalleVenta.type'
import { Producto } from 'src/types/Producto.type'
import { Proveedor } from 'src/types/Proveedor.type'
import { Reparacion } from 'src/types/Reparacion.type'
import { Usuario } from 'src/types/Usuario.type'
import { Venta } from 'src/types/Ventas.type'

const dbProductos = new Nedb<Producto>({
  filename: 'productos.db',
  autoload: true,
})
const dbVentas = new Nedb<Venta>({
  filename: 'ventas.db',
  autoload: true,
})
const dbDetallesVenta = new Nedb<DetalleVenta>({
  filename: 'detalles_venta.db',
  autoload: true,
})
const dbReparaciones = new Nedb<Reparacion>({
  filename: 'reparaciones.db',
  autoload: true,
})
const dbDetallesReparacion = new Nedb<DetalleReparacion>({
  filename: 'detalles_reparacion.db',
  autoload: true,
})
const dbClientes = new Nedb<Cliente>({
  filename: 'clientes.db',
  autoload: true,
})
const dbProveedores = new Nedb<Proveedor>({
  filename: 'proveedores.db',
  autoload: true,
})
const dbUsuarios = new Nedb<Usuario>({
  filename: 'usuarios.db',
  autoload: true,
})

// Exportar bases de datos y tipos
export {
  dbProductos,
  dbVentas,
  dbDetallesVenta,
  dbReparaciones,
  dbDetallesReparacion,
  dbClientes,
  dbProveedores,
  dbUsuarios,
}
