'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments()
      table.string('user_id').notNullable()
      table.string('nombre').notNullable()
      table.string('telefono').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
