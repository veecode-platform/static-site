# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY .yarn ./.yarn
COPY .yarnrc.yml ./
COPY package.json yarn.lock ./

# Enable Corepack
RUN corepack enable

# Set the Yarn version to match the one specified in package.json
RUN corepack prepare yarn@4.5.0 --activate

# Install dependencies
RUN yarn

# Copy the rest of the application code to the working directory
COPY . .

# Build the project
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]