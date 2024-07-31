# Use the official Node.js image as the base image
FROM node:18-alpine

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy local code to the container image
COPY . .

# Build the Next.js application
RUN npm run build

# Run the Next.js application
CMD ["npm", "start"]
