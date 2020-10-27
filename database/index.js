const cassandra = require('cassandra-driver');
// const Promise = require('bluebird');

const { PlainTextAuthProvider } = cassandra.auth;

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'main',
  authProvider: new PlainTextAuthProvider('dayglowSuperUser', PASSWORD),
});

client.connect()
  .then(() => {
    console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
  })
  .catch((err) => {
    console.log('[ERROR] Connection error when connection to Cassandra: ', err);
    return client.shutdown().then(() => { throw err; });
  });

module.exports = client;

// connect Cassandra db to server

// connect
// export

// const cassandra = require('cassandra-driver');
// const distance = cassandra.types.distance;

// const options = {
//   contactPoints,
//   localDataCenter,
//   pooling: {
//     coreConnectionsPerHost: {
//       [distance.local]: 2,
//       [distance.remote]: 1
//     }
//   }
// };

// const client = new Client(options);

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://database/rei_questions', { useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// module.exports = db;
