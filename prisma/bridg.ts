import { DbRules } from 'bridg/server';

// https://github.com/bridg-db/bridg#database-rules
export const rules: DbRules = {
  // global default, allow/block non-specified queries, set to true only in development
  default: false,
  // tableName: false | true,       - block/allow all queries on a table
  user: {
    // find: (uid) => ({ id: uid }) - query based authorization
    find: (uid) => true,
    update: (uid, data) => false,
    create: (uid, data) => false,
    delete: (uid) => false,
  },
};
