FROM node:7.4.0-alpine
MAINTAINER Artit Kiuwilai "first087@gmail.com"

# RUN apt-get update \
#     && apt-get install -y git \
#     && git clone https://github.com/first087/node-getip.git \
#     && apt-get remove -y git \
#     && apt-get clean \
#     && apt-get autoclean \
#     && rm -rf /node-getip/.gitignore \
#     && rm -rf /node-getip/.git \
#     && rm -rf /node-getip/test
ADD . /node-getip
WORKDIR /node-getip
RUN npm install
EXPOSE 3000

CMD ["node", "index.js"]
