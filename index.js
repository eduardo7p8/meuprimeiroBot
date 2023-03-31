const restify = require('restify');
const builder = require('botbuilder');
var teste

// Configuração do servidor Restify
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log(`${server.name} listening to ${server.url}`);
});

// Cria um conector para se comunicar com o Bot Framework Service
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Cria um bot que recebe mensagens do usuário
const bot = new builder.UniversalBot(connector, (session) => {
    session.send('Você disse: %s', session.message.text);
});

// Endpoint para os usuários conversarem com o bot
server.post('/api/messages', connector.listen());