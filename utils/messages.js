const { MessageEmbed } = require('discord.js');

function ArgonError(message, description, remove = false, timeout = 3000) {
    message.channel.send(new MessageEmbed()
        .setTitle('Error')
        .setDescription(description)
        .setColor(0xF2542D)).then(msg => {
            if (remove) {
                msg.delete({ timeout })
            }
        });
}

function ArgonSuccess(message, description, remove = false, timeout = 3000) {
    message.channel.send(new MessageEmbed()
        .setTitle('Success')
        .setDescription(description)
        .setColor(0x38A700)).then(msg => {
            if (remove) {
                msg.delete({ timeout })
            }
        });
}

module.exports.ArgonError = ArgonError;
module.exports.ArgonSuccess = ArgonSuccess;