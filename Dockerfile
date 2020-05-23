FROM amazonlinux
LABEL Description="MB3"

ENV PORT 3000
EXPOSE 3000

RUN yum update -y
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
# CMD sudo amazon-linux-extras install docker
#FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY build/*.js /usr/src/app/
ADD package.json .
ADD package-lock.json .
RUN yum install -y nodejs
# RUN node -v
# RUN npm -v
RUN npm install

CMD [ "node", "index.js" ]