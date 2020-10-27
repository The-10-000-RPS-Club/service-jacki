const cassandra = require('cassandra-driver');

const { PlainTextAuthProvider } = cassandra.auth;

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'main',
  authProvider: new PlainTextAuthProvider('dayglowSuperUser', 'which8eerIs$tronger11'),
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
