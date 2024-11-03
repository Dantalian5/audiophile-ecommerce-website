FROM node:lts 
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 3030
CMD ["node", "server.js"]