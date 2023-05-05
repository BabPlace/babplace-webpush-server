import db from '@/db';
import type { Request, Response } from 'express';
import type { PushSubscription } from 'web-push';

async function addSubscription(request: Request<{}, {}, PushSubscription>, response: Response) {
  console.log(`Subscribing ${request.body.endpoint}`);
  db.get('subscriptions').push(request.body).write();
  response.sendStatus(200);
}

async function removeSubscription(request: Request<{}, {}, PushSubscription>, response: Response) {
  console.log(`Unsubscribing ${request.body.endpoint}`);
  db.get('subscriptions').remove({ endpoint: request.body.endpoint }).write();
  response.sendStatus(200);
}

const SubscriptionController = {
  addSubscription,
  removeSubscription,
};

export default SubscriptionController;
