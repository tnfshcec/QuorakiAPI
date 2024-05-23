import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { rank, RankArgs } from "./ranking";

const app = new Elysia()
    .use(swagger())
    .get("/api/rank", ({ query }) => rank(query), {
        query: RankArgs,
    })
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
