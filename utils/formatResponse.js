function formatResponse(user, question, response) {
  return `${user} asked: "${question}"
And the DnDPedia answered: ${response}`;
}

module.exports = formatResponse;
