const harperive = require('harperive');

const config = {
  harperHost: process.env.INSTANCE_URL,
  username: process.env.INSTANCE_USERNAME,
  password: process.env.INSTANCE_PASSWORD,
  schema: process.env.INSTANCE_SCHEMA,
};

const Client = harperive.Client;
const db = new Client(config);

module.exports = db;