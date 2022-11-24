'use strict'

class StoreContact {
  get rules () {
    return {
      // validation rules
      nombre : 'required|min:3',
      telefono : 'required'
    }
  }

  get messages () {
    return {
      // messages
      'nombre.required' : 'El nombre es un campo requerido',
      'nombre.min' : 'El nombre debe tener mas de 3 caracteres',
      'telefono.required' : 'El telefono es un campo requerido',
    }
  }
}

module.exports = StoreContact
