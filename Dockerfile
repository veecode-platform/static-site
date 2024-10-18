# Use a smaller base image for the builder stage
FROM node:20-alpine AS builder

# ARG NEXT_PUBLIC_ANALYTICS_ID
# ARG NEXT_PUBLIC_ANALYTICS_ID_ADS
# ARG NEXT_PUBLIC_LAMBDA_BASE_URL
# ARG NEXT_PUBLIC_LAMBDA_API_KEY 
# ARG NEXT_PUBLIC_GOOGLE_TAG_MANAGER
# ARG NEXT_PUBLIC_NEUROLEAD_ID

# ENV NEXT_PUBLIC_ANALYTICS_ID $NEXT_PUBLIC_ANALYTICS_ID
# ENV NEXT_PUBLIC_ANALYTICS_ID_ADS $NEXT_PUBLIC_ANALYTICS_ID_ADS
# ENV NEXT_PUBLIC_LAMBDA_BASE_URL $NEXT_PUBLIC_LAMBDA_BASE_URL
# ENV NEXT_PUBLIC_LAMBDA_API_KEY $NEXT_PUBLIC_LAMBDA_API_KEY
# ENV NEXT_PUBLIC_GOOGLE_TAG_MANAGER $NEXT_PUBLIC_GOOGLE_TAG_MANAGER
# ENV NEXT_PUBLIC_NEUROLEAD_ID $NEXT_PUBLIC_NEUROLEAD_ID

WORKDIR /app

# Copy only the necessary files for installing dependencies
COPY .yarn/ .yarn/
COPY package.json yarn.lock .yarnrc.yml ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Use a smaller base image for the runner stage
FROM node:20-alpine AS runner
WORKDIR /app

# Update system and clean up package manager cache to reduce image size
RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

# Copy the built application from the builder stage
COPY --from=builder --chown=node:node /app/.next/standalone/ .
COPY --from=builder --chown=node:node /app/.next/static/ ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

# Use a non-root user for security
USER node

# Command to run the application
CMD [ "node", "server.js" ]