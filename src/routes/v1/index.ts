import { authRouter } from './auth.routes';
import { maintenanceRouter } from './maintenance.routes';
import { todoRouter } from './todo.routes';
import { userRouter } from './user.routes';

export const routes = [authRouter, maintenanceRouter, todoRouter, userRouter];
