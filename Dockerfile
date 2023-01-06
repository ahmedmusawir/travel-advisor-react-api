FROM node:16.17.1-alpine

WORKDIR /app

COPY package.json .

RUN npm config set legacy-peer-deps true

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3001

CMD ["npm", "start"]
