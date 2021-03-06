
///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77
///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77
///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77
///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77
///77/////7/////7//777//7//77

///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77
///77/////7/////7//777//7//77///77/////7/////7//777//7//77///77/////7/////7//777//7//77

'use strict'

const env = require('./config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host : env.host,
  dialect : env.dialect,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models / tables
db.Maps = require('./models/map.model')(sequelize, Sequelize);
db.Accounts = require('./models/account')(sequelize, Sequelize);
db.Locations = require('./models/location')(sequelize, Sequelize);

module.exports = db;

