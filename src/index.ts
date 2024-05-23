import { Elysia, t } from "elysia";
import { rank } from "./ranking";

const app = new Elysia()
    .get("/", () => "Hello Elysia")
    .get("/api/rank", ({ query }) => rank({ text: query.text }), {
        query: t.Object({ text: t.String() }),
    })
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
