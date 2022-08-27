// Go to your shell and paste npm install aoi.js

const aoijs = require("aoi.js")

const bot = new aoijs.Bot({ // 
token: process.env.TOKEN,
prefix: "$getServerVar[prefix]",
intents: "all",
mobilePlatform: false, //If true, your bot will show mobile when online
nonPrefixed: false
})

//Events for commands below
bot.onMessage()

// This is for your bot's activity status, will display with it is online
bot.status({
  text: "TEXT",
  type: "PLAYING",
  time: 12
})

//Command Example (ping)
bot.command({
name: "ping",
code: `❄Pong! $pingms`
})

//Ready Event when the bot is active
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]` // Will display on console when bot is online
})

/*
Be sure to install express to activate this to keep your bot active. --> npm i express
*/
