# Step 1: Base image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Step 4: Copy code
COPY . .

# Step 5: Expose port
EXPOSE 3000

# Step 6: Run server
CMD ["node", "server.js"]
