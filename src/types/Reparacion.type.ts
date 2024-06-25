export type Reparacion = {
  _id: number
  fecha_recibido: string
  cliente_id: number
  dispositivo: string
  problema: string
  estado: string
  costo: number
  fecha_entrega?: string
}
