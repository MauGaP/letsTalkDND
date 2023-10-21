const { getAnswerFromChatGPT } = require('../utils/chatGPT');

const handle = async (interaction) => {
    try {
        // Immediately acknowledge the interaction
        await interaction.deferReply();

        const userQuestion = interaction.options.getString('question');
        const response = await getAnswerFromChatGPT(userQuestion);

        // Then send the actual reply
        await interaction.editReply(response);
    } catch (error) {
        console.error("Error:", error);
        await interaction.followUp({ content: 'An error occurred while processing your request.' });
    }
};

module.exports = { handle };
