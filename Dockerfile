FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN yarn install
COPY . .
RUN yarn build

FROM node:14 AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./
RUN yarn install --production
RUN yarn prisma:generate
CMD ["yarn", "start"]