import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { html } from "@elysiajs/html";
import { rank, RankArgs } from "./ranking";
import { frontendPage } from "./frontend";

const app = new Elysia()
    .use(html())
    .use(
        swagger({
            documentation: {
                info: {
                    title: "QuorakiAPI",
                    version: "1.0.0",
                    description:
                        "QuorakiAPI documentation, made with 🐔 in TNFSHCEC.",
                    license: {
                        name: "MIT License",
                        url: "https://github.com/tnfshcec/QuorakiAPI/blob/main/LICENSE",
                    },
                },
            },
        }),
    )
    .get("/", () => frontendPage())
    .get("/api/rank", ({ query }) => rank(query), {
        query: RankArgs,
    })
    // Process 404 error
    .onError(({ code }) => {
        if (code === "NOT_FOUND") {
            return { error: "😆狗屁不通不知道哪個sb想到的路徑😆" };
        }
    })
    .listen(3000);

console.log(
    `🦊 QuorakiAPI is running at ${app.server?.hostname}:${app.server?.port}`,
);
