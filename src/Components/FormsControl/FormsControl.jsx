import React from 'react'
import formsStyles from './formsControl.module.css'

export const TextArea = ({input, meta, ...props}) => {
   return (
      <div className={formsStyles.formControl + " " + (meta.touched && meta.error ? formsStyles.error : ' ')}>
         <textarea {...input} {...props} />
         {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
   )
}

export const Input = ({input, meta, ...props}) => {
   return (
      <div className={formsStyles.formControl + " " + (meta.touched && meta.error ? formsStyles.error : ' ')}>
         <input {...input} {...props} />
         {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
   )
}

export const Select = ({input, meta, ...props}) => {
   return (
      <div>
         <select {...input} {...props} />
      </div>
   )
}
