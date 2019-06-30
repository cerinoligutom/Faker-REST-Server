import { MaintenanceController } from '@app/controllers';
import express from 'express';

const maintenanceController = new MaintenanceController();

const router = express.Router();

router.get('/maintenance/health-check', maintenanceController.healthCheck);
router.get('/maintenance/server-time', maintenanceController.serverTime);

export const maintenanceRouter = router;
