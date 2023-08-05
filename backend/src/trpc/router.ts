import { router } from './builder';
import { healthcheck } from '../healthcheck/router';
import { userRouter } from '../user/router';

export const appRouter = router({
  healthcheck,
  users: userRouter,
});

export type AppRouter = typeof appRouter;
