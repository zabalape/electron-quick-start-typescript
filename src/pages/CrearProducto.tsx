/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { ProductoController } from 'src/db/controllers/producto.controller'
import { Producto } from 'src/types/Producto.type'
import { productSchema } from 'src/validations/validations.schemas'
import Formulario from 'src/components/Formulario'

export interface IProducto {
  id: number
  nombre: string
  categoria: string
  proveedor: string
  costo: number
  precio_venta: number
  cantidad: number
  fecha_ingreso: Date
}
const CrearProducto: React.FC = () => {
  const [productoCreado, setProductoCreado] = useState<Producto | null>(null)
  const productoController = new ProductoController()

  const handleSubmit = async (producto: Producto) => {
    const nuevoProducto = await productoController.crearProducto(producto)
    setProductoCreado(nuevoProducto)
  }

  return (
    <div>
      <h2>Crear Producto</h2>
      <Formulario
        type={{} as Producto}
        onSubmit={handleSubmit}
        validationSchema={productSchema}
      />
      {productoCreado && (
        <div>
          <h3>Producto Creado:</h3>
          <pre>{JSON.stringify(productoCreado, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default CrearProducto
