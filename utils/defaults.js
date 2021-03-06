const { Client } = require('discord.js');
const winston = require('winston');
const { Pool } = require('pg');

module.exports = {
    'PLUGIN_JSON_DB': {
        'moderation': {
            'warns': {},
            'kicks': {},
            'bans': {}
        }
    },
    'CONFIG_JSON_DB': {
        'prefix': '.'
    },
    'plugins': {
        'moderation': {
            'warns': {
                'DEFAULT_WARN_JSON_TEMPLATE': {
                    'timestamp': null,
                    'reason': null,
                    'issuer': null
                }
            }
        }
    }
}

module.exports.client = new Client();
module.exports.database = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
module.exports.logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console()
    ]
});