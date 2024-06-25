/* eslint-disable prettier/prettier */
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

interface FormProps<T extends Yup.AnyObject> {
  type: T
  onSubmit: (value: T) => void
  validationSchema: Yup.ObjectSchema<T>
}

const Formulario = <T extends Yup.AnyObject>({
  type,
  onSubmit,
  validationSchema,
}: FormProps<T>): JSX.Element => {
  const initialValues = {} as T

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: T, { setSubmitting }) => {
        onSubmit(values)
        setSubmitting(false)
      }}
    >
      {() => (
        <Form>
          {Object.keys(type).map((key, index) => (
            <div key={index}>
              <label>
                {key}:
                {typeof (type as any)[key] === 'number' ? (
                  <Field type="number" name={key} />
                ) : (
                  <Field type="text" name={key} />
                )}
                <ErrorMessage name={key} component="div" />
              </label>
            </div>
          ))}
          <button type="submit">Crear {Object.keys(type)[0]}</button>
        </Form>
      )}
    </Formik>
  )
}

export default Formulario
