#!/bin/bash

set -eux
pnpm run msw:init
pnpm run prisma:generate
vite --config client/vite.config.ts
