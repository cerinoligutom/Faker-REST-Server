import { JsonSchema, RelationMappings } from 'objection';
import { Model } from './common/Model';
import { User } from './user.model';

export class Todo extends Model {
  static tableName = 'todos';

  description!: string;
  ownerId!: string;
  isDone!: boolean;

  // Optional eager relations
  owner?: User;

  getDto() {
    return {
      id: this.id,
      isDone: this.isDone,
      ownerId: this.ownerId,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }

  async $beforeInsert() {
    super.$beforeInsert();
    this.isDone = false;
  }

  static get jsonSchema() {
    const schema: JsonSchema = {
      type: 'object',
      required: ['description', 'ownerId', 'isDone'],
      properties: {
        id: { type: 'string' },
        description: { type: 'string' },
        ownerId: { type: 'string' },
        isDone: { type: 'boolean' }
      }
    };
    return schema;
  }

  static get relationMappings() {
    const mappings: RelationMappings = {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'todos.ownerId',
          to: 'users.id'
        }
      }
    };
    return mappings;
  }
}
