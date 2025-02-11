FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build

ENV PORT=5173

EXPOSE 5173


CMD ["bun", "run", "dev", "--host"]
