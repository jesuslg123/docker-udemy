# Use an existing docker image as a base
FROM alpine


# Download and install dependencies
RUN apk add --update gcc
RUN apk add --update redis


# Start up command
CMD ["redis-server"]