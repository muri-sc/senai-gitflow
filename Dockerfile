FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY divisao.js index.js multi.js raizQuadrada.js ./
COPY tests/ ./tests/

CMD ["npm", "test"]
