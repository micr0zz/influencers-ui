FROM node:latest
WORKDIR /app
ENV NODE_OPTIONS --openssl-legacy-provider
COPY influencers-ui  .
CMD ["npm", "start"]