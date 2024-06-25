import Nedb from 'nedb'

export class GestorDb<T> {
  private db: Nedb<T>
  private generateUniqueID(): number {
    return Math.floor(Math.random() * 1000000000)
  }
  constructor(db: Nedb<T>) {
    this.db = db
  }

  async guardarDocumento(documento: T): Promise<T> {
    const documentoConID = {
      _id: this.generateUniqueID(),
      ...documento,
    }
    return new Promise((resolve, reject) => {
      this.db.insert(documentoConID, (err: Error | null, newDocs: T) => {
        if (err) {
          reject(err)
        }
        resolve(newDocs)
      })
    })
  }

  async actualizarDocumento(id: string, update: Partial<T>): Promise<T | null> {
    return new Promise((resolve, reject) => {
      this.db.update(
        { _id: id },
        { $set: update },
        {},
        (err: Error | null, numReplaced: number) => {
          if (err) {
            reject(err)
          } else if (numReplaced === 0) {
            resolve(null)
          } else {
            this.db.findOne(
              { _id: id },
              (findErr: Error | null, doc: T | null) => {
                if (findErr) {
                  reject(findErr)
                }
                resolve(doc)
              },
            )
          }
        },
      )
    })
  }

  async obtenerDocumento(id: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      this.db.findOne({ _id: id }, (err: Error | null, doc: T | null) => {
        if (err) {
          reject(err)
        }
        resolve(doc)
      })
    })
  }

  async eliminarDocumento(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.db.remove(
        { _id: id },
        {},
        (err: Error | null, numRemoved: number) => {
          if (err) {
            reject(err)
          }
          resolve(numRemoved)
        },
      )
    })
  }

  async listarDocumentos(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.find({}, (err: Error | null, docs: T[]) => {
        if (err) {
          reject(err)
        }
        resolve(docs)
      })
    })
  }

  async buscarDocumentos(query: Partial<T>): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.find(query, (err: Error | null, docs: T[]) => {
        if (err) {
          reject(err)
        }
        resolve(docs)
      })
    })
  }
}
