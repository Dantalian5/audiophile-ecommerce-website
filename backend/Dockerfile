FROM node:lts 
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
