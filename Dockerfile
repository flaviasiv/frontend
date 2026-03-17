# ==========================================
# STAGE 1: Base
# ==========================================
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# ==========================================
# STAGE 2: Development
# ==========================================
FROM base AS development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# ==========================================
# STAGE 3: Builder (for Production)
# ==========================================
FROM base AS builder
COPY . .
RUN npm run build

# ==========================================
# STAGE 4: Production
# ==========================================
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]