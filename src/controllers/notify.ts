import db from '@/db';
import { sendNotifications } from '@/utils';
import type { Request, Response } from 'express';

async function notifyAll(request: Request, response: Response) {
  console.log('Notifying all subscribers');
  const subscriptions = db.get('subscriptions').cloneDeep().value();
  if (subscriptions.length > 0) {
    sendNotifications(subscriptions);
    response.sendStatus(200);
  } else {
    response.sendStatus(409);
  }
}

const NotifyController = {
  notifyAll,
};

export default NotifyController;
