FROM node:20

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY tsconfig.json .

COPY src ./src

RUN npm run build

ENV PORT=3000

CMD ["npm", "start"]