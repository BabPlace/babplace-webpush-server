import { Router } from 'express';
import { NotifyController, SubscriptionController } from '@/controllers';

const router = Router();

// subscription router
router.post('/subscription', SubscriptionController.addSubscription);
router.delete('/subscription', SubscriptionController.removeSubscription);

// notify router
router.post('/notify/all', NotifyController.notifyAll);
router.post('/notify/one', NotifyController.notifyAll);

export default router;
