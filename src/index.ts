import { Elysia } from "elysia";
import { rank, RankArgsType } from "./ranking";

const app = new Elysia()
    .get("/", () => "Hello Elysia")
    .get("/api/rank", ({ query }) => rank(query), {
        query: RankArgsType,
    })
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
