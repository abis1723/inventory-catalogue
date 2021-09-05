FROM node:14.16-buster-slim

WORKDIR /opt
COPY . .
RUN yarn install 
ENV PORT 5000
WORKDIR /opt
EXPOSE  5000

RUN echo "ok" > /tmp/healthy

CMD ["npm", "start"]