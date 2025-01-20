FROM node:latest
WORKDIR /app
ENV NODE_OPTIONS --openssl-legacy-provider
COPY emoji-search-master  .
CMD ["npm", "start"]