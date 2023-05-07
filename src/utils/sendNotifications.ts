import webpush from 'web-push';
import type { PushSubscription } from 'web-push';
import { vapidDetails, removeUndefinedFromVapidDetails } from '@/config/options';

function createNotification({teamName, teamId}:any) {
  return JSON.stringify({teamName, teamId});
}

function sendNotifications(subscriptions: Array<PushSubscription>, teamId: string, teamName: string) {

  const options = {
    TTL: 10000,
    vapidDetails: removeUndefinedFromVapidDetails(vapidDetails),
  };
  // Send a push message to each client specified in the subscriptions array.
  subscriptions.forEach((subscription) => {
    const endpoint = subscription.endpoint;
    const id = endpoint.substring(endpoint.length - 8, endpoint.length);
    webpush
      .sendNotification(subscription, createNotification({teamName,teamId}), options)
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
