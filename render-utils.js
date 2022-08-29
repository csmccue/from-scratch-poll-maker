export function renderPoll(poll) {
    const div = document.createElement('div');
    const optionAElDiv = document.createElement('p');
    const optionBElDiv = document.createElement('p');
    let optionQuestion = poll.question;

    optionAElDiv.textContent = `${poll.optionA}: ${poll.votesA}`;
    optionBElDiv.textContent = `${poll.optionB}: ${poll.votesB}`;

    // const optionADiv = renderPollOption(optionA, votesA);
    // const optionBDiv = renderPollOption(optionB, votesB);

    div.append(optionQuestion, optionAElDiv, optionBElDiv);
    div.classList.add('poll');
    return div;

}

export function renderPollOption(option, votes) {
    const answerDiv = document.createElement('div');
    const optionDiv = document.createElement('p');
    const votesDiv = document.createElement('p');

    optionDiv.textContent = option;
    votesDiv.textContent = votes;

    answerDiv.append(optionDiv, votesDiv);

    return answerDiv;

}
