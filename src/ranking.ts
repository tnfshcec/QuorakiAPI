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
    school: {
        name: "學校",
        options: [
            "❤️（十分優質 無論男女都該考上）",
            "⛽️（還蠻不錯 考上感覺真好）",
            "😮（普普通通 沒啥感覺）",
            "😭（沒啥邏輯 但有一點點道理在）",
            "😆（狗屁不通 不知道哪個白癡會考進來）",
        ],
    },
    degree: {
        name: "學歷",
        options: [
            "❤️（頂到瘋掉，就算四科60也會選）",
            "⛽️（還蠻划算的，應該會考慮一下）",
            "😮（普普通通沒啥感覺）",
            "😭（不太便宜，但還可以接受）",
            "😆（哪來的SB學店，怎麼不去搶）",
        ],
    },
    behaviour: {
        name: "行為",
        options: [
            "❤️（十分優質 人人都該這樣做）",
            "⛽️（還蠻不錯 這樣很好玩）",
            "😮（普普通通 沒啥感覺）",
            "😭（沒啥邏輯 但有一點點道理在）",
            "😆（狗屁不通 不知道哪個白癡會做）",
        ],
    },
    difficulty: {
        name: "難度",
        options: [
            "❤️（輕鬆如喝水，辦不到都是菜雞）",
            "⛽️（蠻簡單的，沒什麼大問題）",
            "😮（普普通通沒啥感覺）",
            "😭（有點難，要有一定的實力和運氣）",
            "😆（難如登天，我這sb還是洗洗睡吧）",
        ],
    },
    music: {
        name: "音樂",
        options: [
            "❤️（十分好聽，是一生必聽的優質音樂）",
            "⛽️（蠻不錯的，推薦改天來聽）",
            "😮（普普通通沒啥感覺）",
            "😭（蠻無聊的，但很無聊時可以聽一下）",
            "😆（超級爛歌不知道哪個sb會聽）",
        ],
    },
    song: {
        name: "歌曲",
        options: [
            "❤️（十分好聽，是不聽會後悔的神曲）",
            "⛽️（蠻不錯的，推薦去聽聽看）",
            "😮（普普通通沒啥感覺）",
            "😭（蠻無聊的，但很無聊時可以聽一下）",
            "😆（超級爛歌不知道哪個sb會聽）",
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
        text: `${ranking.name}評比\n\n「${text}」\n\n${ranking.options.join("\n")}`,
    };
}
