# Use Node.js LTS version as base image
FROM node:14-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production environment
FROM nginx:alpine

# Copy build files from the builder stage to nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
