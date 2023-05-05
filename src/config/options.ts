const vapidDetails = {
  publicKey: process.env.VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
  subject: process.env.VAPID_SUBJECT,
};

const corsOptions = {
  origin: true,
};

function removeUndefinedFromVapidDetails(vapidDetails: {
  publicKey: string | undefined;
  privateKey: string | undefined;
  subject: string | undefined;
}):
  | {
      publicKey: string;
      privateKey: string;
      subject: string;
    }
  | never {
  if (!vapidDetails.publicKey || !vapidDetails.privateKey || !vapidDetails.subject) {
    throw new Error('Key is Undefined');
  }
  return {
    publicKey: vapidDetails.publicKey,
    privateKey: vapidDetails.privateKey,
    subject: vapidDetails.subject,
  };
}

export { vapidDetails, corsOptions, removeUndefinedFromVapidDetails };
