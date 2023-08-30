import { publicProcedure, router } from '../trpc/builder';

export const userRouter = router({
  me: publicProcedure.query((_req) => "hello, it's me"),
});
