import * as yup from 'yup'

export const productSchema = yup.object().shape({
  _id: yup
    .number()
    .positive('El ID debe ser un número positivo')
    .integer('El ID debe ser un número entero')
    .optional(),
  nombre: yup.string().required('El nombre es obligatorio'),
  categoria: yup.string().required('La categoría es obligatoria'),
  proveedor: yup.string().required('El proveedor es obligatorio'),
  costo: yup
    .number()
    .required('El costo es obligatorio')
    .min(0, 'El costo debe ser mayor o igual a 0'),
  precio_venta: yup
    .number()
    .required('El precio de venta es obligatorio')
    .min(0, 'El precio de venta debe ser mayor o igual a 0'),
  cantidad: yup
    .number()
    .required('La cantidad es obligatoria')
    .min(0, 'La cantidad debe ser mayor o igual a 0'),
  fecha_ingreso: yup.date().required('La fecha de ingreso es obligatoria'),
})

export const ventaSchema = yup.object().shape({
  _id: yup
    .number()
    .positive('El ID debe ser un número positivo')
    .integer('El ID debe ser un número entero')
    .optional(),
  fecha: yup.date().required('La fecha es obligatoria'),
  cliente_id: yup
    .number()
    .positive('El ID del cliente debe ser un número positivo')
    .integer('El ID del cliente debe ser un número entero')
    .required('El ID del cliente es obligatorio'),
  total: yup
    .number()
    .required('El total es obligatorio')
    .min(0, 'El total debe ser mayor o igual a 0'),
})

export const detalleVentaSchema = yup.object().shape({
  _id: yup
    .number()
    .positive('El ID debe ser un número positivo')
    .integer('El ID debe ser un número entero')
    .optional(),
  venta_id: yup
    .number()
    .positive('El ID de la venta debe ser un número positivo')
    .integer('El ID de la venta debe ser un número entero')
    .required('El ID de la venta es obligatorio'),
  producto_id: yup
    .number()
    .positive('El ID del producto debe ser un número positivo')
    .integer('El ID del producto debe ser un número entero')
    .required('El ID del producto es obligatorio'),
  cantidad: yup
    .number()
    .required('La cantidad es obligatoria')
    .min(1, 'La cantidad debe ser mayor o igual a 1'),
  precio_unitario: yup
    .number()
    .required('El precio unitario es obligatorio')
    .min(0, 'El precio unitario debe ser mayor o igual a 0'),
})

export const reparacionSchema = yup.object().shape({
  _id: yup
    .number()
    .positive('El ID debe ser un número positivo')
    .integer('El ID debe ser un número entero')
    .optional(),
  fecha_recibido: yup.date().required('La fecha recibido es obligatoria'),
  cliente_id: yup
    .number()
    .positive('El ID del cliente debe ser un número positivo')
    .integer('El ID del cliente debe ser un número entero')
    .required('El ID del cliente es obligatorio'),
  dispositivo: yup.string().required('El dispositivo es obligatorio'),
  problema: yup.string().required('El problema es obligatorio'),
  estado: yup.string().required('El estado es obligatorio'),
  costo: yup
    .number()
    .required('El costo es obligatorio')
    .min(0, 'El costo debe ser mayor o igual a 0'),
  fecha_entrega: yup.date(),
})

export const detalleReparacionSchema = yup.object().shape({
  _id: yup
    .number()
    .positive('El ID debe ser un número positivo')
    .integer('El ID debe ser un número entero')
    .optional(),
  reparacion_id: yup
    .number()
    .positive('El ID de la reparación debe ser un número positivo')
    .integer('El ID de la reparación debe ser un número entero')
    .required('El ID de la reparación es obligatorio'),
  producto_id: yup
    .number()
    .positive('El ID del producto debe ser un número positivo')
    .integer('El ID del producto debe ser un número entero')
    .required('El ID del producto es obligatorio'),
  cantidad: yup
    .number()
    .required('La cantidad es obligatoria')
    .min(1, 'La cantidad debe ser mayor o igual a 1'),
  costo: yup
    .number()
    .required('El costo es obligatorio')
    .min(0, 'El costo debe ser mayor o igual a 0'),
})

export const clienteSchema = yup.object().shape({
  _id: yup
    .number()
    .positive('El ID debe ser un número positivo')
    .integer('El ID debe ser un número entero')
    .optional(),
  nombre: yup.string().required('El nombre es obligatorio'),
  apellido: yup.string().required('El apellido es obligatorio'),
  telefono: yup.string(),
  email: yup.string().email('El email debe ser válido'),
  direccion: yup.string(),
})

export const proveedorSchema = yup.object().shape({
  _id: yup
    .number()
    .positive('El ID debe ser un número positivo')
    .integer('El ID debe ser un número entero')
    .optional(),
  nombre: yup.string().required('El nombre es obligatorio'),
  telefono: yup.string(),
  email: yup.string().email('El email debe ser válido'),
  direccion: yup.string(),
})

export const usuarioSchema = yup.object().shape({
  _id: yup
    .number()
    .positive('El ID debe ser un número positivo')
    .integer('El ID debe ser un número entero')
    .optional(),
  nombre: yup.string().required('El nombre es obligatorio'),
  apellido: yup.string().required('El apellido es obligatorio'),
  username: yup.string().required('El nombre de usuario es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  rol: yup.string().required('El rol es obligatorio'),
})
