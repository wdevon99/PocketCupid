/* eslint-disable prettier/prettier */

export const AskChatGtp = async (message) => {
    const CHAT_GPT_API_KEY = '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';
    const CHAT_GPT_API_URL = 'https://api.openai.com/v1/chat/completions';

    const response = await fetch(CHAT_GPT_API_URL, {
        method: 'POST',
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
        }),
        headers: {
            Authorization: `Bearer ${CHAT_GPT_API_KEY}`,
            'Content-Type': 'application/json',
        },
    });

    const payload = await response.json();
    const choices = payload?.choices;

    return choices;
};
