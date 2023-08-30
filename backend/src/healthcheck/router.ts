import { publicProcedure, router } from '../trpc/builder';

export const healthcheck = router({
  info: publicProcedure.query(() =>
    JSON.stringify({
      ok: true,
    })
  ),
});
