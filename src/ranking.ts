import { t, type Static } from "elysia";

export const RANKING_TYPES = {
    quote: {
        name: "語錄",
        options: [
            "❤️（十分中肯 可以當作人生座右銘）",
            "⛽️（蠻有道理的 生活中很常會用到）",
            "😮（普普通通沒啥感覺）",
            "😭（沒啥邏輯 但有一點點道理在）",
            "😆（狗屁不通不知道哪個sb發明的）",
        ],
    },
    game: {
        name: "遊戲",
        options: [
            "❤️（十分好玩，是一生必玩的優質遊戲）",
            "⛽️（蠻不錯的，推薦下載來玩）",
            "😮（普普通通沒啥感覺）",
            "😭（蠻無聊的，但很無聊時可以玩一下）",
            "😆（超級糞game不知道哪個sb會玩）",
        ],
    },
};

const RANKING_TYPE_KEYS = Object.keys(RANKING_TYPES) as unknown as Array<
    keyof typeof RANKING_TYPES
>;

export const RankArgsType = t.Object({
    type: t.Optional(t.Union(RANKING_TYPE_KEYS.map((type) => t.Literal(type)))),
    text: t.String(),
});

export type RankArgs = Static<typeof RankArgsType>;

export function rank({ type = "quote", text }: RankArgs) {
    let ranking = RANKING_TYPES[type];
    return `
${ranking.name}評比

「${text}」

${ranking.options.join("\n")}
`.trim();
}
