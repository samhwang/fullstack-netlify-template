import { inferAsyncReturnType } from '@trpc/server';
import { CreateNetlifyContextOptions } from 'trpc-netlify-functions';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function createContext({ event, context }: CreateNetlifyContextOptions) {
  return { event, context, prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;
