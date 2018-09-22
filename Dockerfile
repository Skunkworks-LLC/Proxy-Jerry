FROM node:8

# App directory where the source code lives
WORKDIR /server

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm","start"]