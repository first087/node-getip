FROM node:7.9.0-alpine
MAINTAINER Artit Kiuwilai "first087@gmail.com"

ADD . /node-getip
WORKDIR /node-getip
RUN npm install
EXPOSE 3000

CMD ["node", "index.js"]
