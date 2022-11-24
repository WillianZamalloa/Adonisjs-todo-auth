'use strict'

class Login {
  get rules () {
    return {
      // validation rules
      email : 'required|email',
      password : 'required|min:5'
    }
  }

  get messages () {
    return {
      // messages
      'email.required' : 'El email es un campo requerido',
      'email.email' : 'Ingrese un correo valido',
      'password.required' : 'El password es un campo requerido',
      'password.min' : 'El nombre debe tener mas de 5 caracteres',
    }
  }
}

module.exports = Login
