# Base image
FROM node:20-alpine

# Tạo thư mục app trong container
WORKDIR /app

# Copy package.json trước (tối ưu cache layer)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port
EXPOSE 3000

# Chạy app
CMD ["npm", "start"]