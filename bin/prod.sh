#!/bin/bash

set -eux
pnpm run ci
pnpm run test
pnpm run prisma:migrate:deploy
pnpm run build
