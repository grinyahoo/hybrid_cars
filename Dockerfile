FROM node:11.10.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@1.5.2 -g

CMD ["npm", "start"]
