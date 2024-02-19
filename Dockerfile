FROM node:18-alpine

ENV BACKEND_PORT = 3000
ENV FRONTEND_PORT = 4200

WORKDIR /usr/src/app

COPY . . 

RUN npm i -g pnpm

RUN pnpm install @nrwl/cli

RUN pnpm install

RUN npx nx run-many --target=build --all

# deploy backend
CMD cd dist/apps/backend && node main.js
