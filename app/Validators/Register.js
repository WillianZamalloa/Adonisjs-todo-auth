'use strict'

class Register {
  get rules () {
    return {
      // validation rules
      email : 'required|email|unique:users',
      password : 'required|min:5|confirmed'
    }
  }

  get messages () {
    return {
      // messages
      'email.required' : 'El email es un campo requerido',
      'email.email' : 'Ingrese un correo valido',
      'email.unique' : 'Este correo ya fue registrado, ingrese otro',
      'password.required' : 'El password es un campo requerido',
      'password.min' : 'El nombre debe tener mas de 5 caracteres',
      'password.confirmed' : 'Las contraseñas ingresadas son diferentes',
    }
  }
}

module.exports = Register
