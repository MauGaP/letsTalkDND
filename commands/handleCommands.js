const { getAnswerFromChatGPT } = require('../utils/chatGPT');
const formatResponse = require('../utils/formatResponse');

const handle = async interaction => {
  try {
    // Immediately acknowledge the interaction
    await interaction.deferReply();

    const userQuestion = interaction.options.getString('question');
    const userName = interaction.user.username; // Get the username from the interaction

    const chatGPTResponse = await getAnswerFromChatGPT(userQuestion);

    // Format the response
    const formattedAnswer = formatResponse(userName, userQuestion, chatGPTResponse);

    // Then send the actual reply
    await interaction.editReply(formattedAnswer);
  } catch (error) {
    console.error('Error:', error);
    await interaction.followUp({
      content: 'An error occurred while processing your request.',
    });
  }
};

module.exports = { handle };
