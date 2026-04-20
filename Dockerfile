# syntax=docker/dockerfile:1.7

# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# ---------- Runtime stage ----------
FROM nginx:1.27-alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html

RUN printf '%s\n' \
    'server {' \
    '  listen 80;' \
    '  server_name _;' \
    '  root /usr/share/nginx/html;' \
    '  index index.html;' \
    '  location / {' \
    '    try_files $uri $uri/ /index.html;' \
    '  }' \
    '  location /assets/ {' \
    '    expires 1y;' \
    '    add_header Cache-Control "public, immutable";' \
    '  }' \
    '}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
