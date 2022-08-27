// Go to your shell and paste npm install aoi.js

const aoijs = require("aoi.js")

const bot = new aoijs.Bot({ // 
token: process.env.TOKEN,
prefix: "!", //Your prefix here
intents: "all",
mobilePlatform: false, //If true, your bot will show mobile when online
nonPrefixed: false
})

//Events for commands below
bot.onMessage()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/") /* When creating commands, you'll want to keep them organize. So This is a command handler.*/

const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

/* When using replit, you need a 24/7 hosting service.*/

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

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/") //This is a folder module for your commands to keep your commands organized.

const {Panel} = require("@akarui/aoi.panel")

const panel = new Panel({
    username: "username",//username for logging in
    password: "password",//password for logging in
    secret: "aoijs",//session secret
    port: 3000,//port on which website is hosted, Not required! Default 3000
    bot: bot,//your aoi.js client
    mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
    commands: "commands"// folder name in which all the edit needing files are there.
})
panel.loadPanel()//Load The Panel
panel.onError()//Will detect errors, and send it to aoi.panel's error page.

// The panel code is a choice.

/*
Be sure to install express to activate this to keep your bot active. --> npm i express
*/
