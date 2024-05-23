export const RANKING_TYPES = {
    quote: "語錄",
};

export const RANKING_OPTS = [
    "❤️（十分中肯 可以當作人生座右銘）",
    "⛽️（蠻有道理的 生活中很常會用到）",
    "😮（普普通通沒啥感覺）",
    "😭（沒啥邏輯 但有一點點道理在）",
    "😆（狗屁不通不知道哪個sb發明的）",
];

export type RankArgs = {
    type: keyof typeof RANKING_TYPES;
    text: string;
};

export function rank({ type = "quote", text }: RankArgs) {
    return `
${RANKING_TYPES[type]}評比

「${text}」

${RANKING_OPTS[0]}
${RANKING_OPTS[1]}
${RANKING_OPTS[2]}
${RANKING_OPTS[3]}
${RANKING_OPTS[4]}
`.trim();
}
