import { healthcheck } from '../healthcheck/router';
import { userRouter } from '../user/router';
import { router } from './builder';

export const appRouter = router({
  healthcheck,
  users: userRouter,
});

export type AppRouter = typeof appRouter;
