'use strict';
const shell = require('electron').shell;


document.getElementById('submit').addEventListener('click', handleSubmit);

// Change below values
const jiraUrl = 'https://traytinc.atlassian.net/browse/';
const ticket_regex = /[CPT,DGN]{2,}-\d{2,}/g;


function handleSubmit() {
	const chat = document.getElementById('chat').value;
  const tickets = getTicketIds(chat)
  tickets.forEach(ticket => shell.openExternal(jiraUrl + ticket))
  renderTicketsName(tickets);
}

function getTicketIds(chat) {
  return chat.match(ticket_regex);
}

function renderTicketsName(tickets) {
  const ul = document.getElementById('tickets');
  tickets.forEach(ticket => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(ticket));
    ul.appendChild(li);
  })
}