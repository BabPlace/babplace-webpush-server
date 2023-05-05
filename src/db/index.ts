import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import type { PushSubscription } from 'web-push';

type Data = {
  subscriptions: PushSubscription[];
};

const adapter = new FileSync<Data>('.data/db.json');
const db = low(adapter);

db.defaults({
  subscriptions: [],
}).write();

export default db ;
