FROM node:4-onbuild

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --production

# Bundle app source
COPY ./out /usr/src/app

# Expose
EXPOSE 8000

# Start
CMD [ "npm", "start" ]