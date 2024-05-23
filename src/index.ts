import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { rank, RankArgs } from "./ranking";

const app = new Elysia()
    .use(swagger())
    .get("/api/rank", ({ query }) => rank(query), {
        query: RankArgs,
    })
    // Process 404 error
   .onError(({ code }) => {
        if (code === 'NOT_FOUND') {
           return { error: '😆狗屁不通不知道哪個sb想到的路徑😆' };
        }
    })
    .listen(3000);

console.log(
    `🦊 QuorakiAPI is running at ${app.server?.hostname}:${app.server?.port}`,
);
