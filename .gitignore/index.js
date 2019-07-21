const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});


client.on("ready" , () => {
    console.log("BOT IDT EN LIGNE");
    client.channels.get("601003238044729354").send("**Le Bot Identity est de nouveau en ligne.**");
});

client.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('** Bienvenue sur le discord de Identity RôlePlay V3.0 **' + member.displayName)
 
    }).catch(console.error)
})

client.on('message', function (message) {
    if (message.content === '!discord') {
        message.channel.send('** Discord de Identity : https://discord.gg/YqveUzH**')
    }
})

client.on('message', function (message) {
    if (message.content === '!aide') {
        message.channel.send('**  **')
    }
})

client.on('message', function (message) {
    if (message.content === '!status') {
        message.channel.send('**``` ``` **')
    }
})

client.on('message', function (message) {
    if (message.content === '!cmd') {
        message.channel.send('**```Voici les commandes disponible : !discord - !status```**')
    }
})

client.on('message', function (message) {
    if (message.content === '!mcflurry') {
        message.channel.send('**Votre commandes est invalide car Mcflurry est mort ^^ MDR C`EST COOL NON ?**')
    }
})



client.login('NTk3MjE1MzE5MjQwNzM2NzY5.XSuB6g.Lb3qVjYIGXmozWKZn5bFwSgKfcU');
