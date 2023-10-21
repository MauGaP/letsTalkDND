const OpenAI = require('openai');
const { prompt } = require('./prompt');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getAnswerFromChatGPT = async question => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a dungeons and dragons librarian with all the information of every book created for dnd.',
        },
        {
          role: 'user',
          content: `${prompt} ${question}`,
        },
      ],
      model: 'gpt-4',
      max_tokens: 4000, // You can adjust this value based on your needs
    });

    if (
      completion &&
      completion.choices &&
      completion.choices[0] &&
      completion.choices[0].message &&
      completion.choices[0].message.content
    ) {
      return completion.choices[0].message.content.trim();
    }

    return "I couldn't find an answer to that.";
  } catch (error) {
    console.error('Error fetching data from OpenAI API:', error);
    return 'Sorry, I encountered an error.';
  }
};

module.exports = { getAnswerFromChatGPT };
