import webpush from 'web-push';
import type { PushSubscription } from 'web-push';
import { vapidDetails, removeUndefinedFromVapidDetails } from '@/config/options';

function sendNotifications(subscriptions: Array<PushSubscription>) {
  // Create the notification content.
  const notification = JSON.stringify({
    title: 'Hello, Notifications!',
    options: {
      body: `ID: ${Math.floor(Math.random() * 100)}`,
    },
  });

  const options = {
    TTL: 10000,
    vapidDetails: removeUndefinedFromVapidDetails(vapidDetails),
  };
  // Send a push message to each client specified in the subscriptions array.
  subscriptions.forEach((subscription) => {
    const endpoint = subscription.endpoint;
    const id = endpoint.substring(endpoint.length - 8, endpoint.length);
    webpush
      .sendNotification(subscription, notification, options)
      .then((result) => {
        console.log(`Endpoint ID: ${id}`);
        console.log(`Result: ${result.statusCode}`);
      })
      .catch((error) => {
        console.log(`Endpoint ID: ${id}`);
        console.log(`Error: ${error} `);
      });
  });
}

export default sendNotifications;
