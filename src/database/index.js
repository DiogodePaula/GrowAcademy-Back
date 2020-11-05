import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Growdever from '../app/models/Growdever';
import Classe from '../app/models/Classe';
import ClassUser from '../app/models/ClassUser';

const models = [User, Growdever, Classe, ClassUser];

class DataBase {
  constructor() {
    console.log('E AI!');
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new DataBase();
