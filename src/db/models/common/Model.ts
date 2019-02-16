import objection, { compose } from 'objection';
import shortid from 'shortid';
import knex from '../../knex-config';

// Attach knex to objection model
objection.Model.knex(knex);

// Insert plugins if there's any, e.g. objection-timestamps
// but timestamps should be generated
// in the DB level instead of app level.
const enhancedModel = compose([])(objection.Model);

export class Model extends enhancedModel {
  id!: string;
  createdAt!: string;
  updatedAt!: string;

  $beforeInsert() {
    const date = new Date().toISOString();
    this.id = shortid.generate();
    this.createdAt = date;
    this.updatedAt = date;
  }

  $beforeUpdate() {
    const date = new Date().toISOString();
    this.updatedAt = date;
  }
}
