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

// INFO: `Object.keys()` doesn't return the keys as type for reasons,
// but it should be safe here so we're overridding the type
const RANKING_TYPE_KEYS = Object.keys(RANKING_TYPES) as unknown as Array<
    keyof typeof RANKING_TYPES
>;

export const RankArgs = t.Object({
    type: t.Optional(t.Union(RANKING_TYPE_KEYS.map((k) => t.Literal(k)))),
    text: t.String(),
});
export type RankArgs = Static<typeof RankArgs>;

export function rank({ type = "quote", text }: RankArgs): object {
    let ranking = RANKING_TYPES[type];
    return {
        text: `${ranking.name}評比\n\n「${text}」\n\n${ranking.options.join("\n")}`
    };
}
