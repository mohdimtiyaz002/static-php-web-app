# Use an official web server image as the base image
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the local contents of your web application to the container
COPY index.html .
COPY style.css .
COPY script.js .

# Expose the default HTTP port
EXPOSE 80

# Command to start the web server
CMD ["nginx", "-g", "daemon off;"]
