
require("dotenv").config();
const {
  Client,
  IntentsBitField,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder
} = require("discord.js");
const { truncate } = require("fs");


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
 
});
const volumeup=require("./MODULES/volumeup.js")
const volumedown=require("./MODULES/volumedown.js")

const pauseplay=require("./MODULES/pauseplay.js")
const nexttrack=require("./MODULES/nexttrack.js")
const prevtrack=require("./MODULES/prevtrack.js")
const fastfrwrd=require("./MODULES/fastfrwrd.js")
const backplay=require("./MODULES/backplay.js")
const mute=require("./MODULES/mute.js")
const mousecontroler=require("./MODULES/mousecntrl.js")
const typetoserver=require("./MODULES/typetoserver.js")

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
 
});


client.on("interactionCreate", async (interaction) => {
    try {
      if (interaction.commandName==='type'){
        typetoserver(interaction)
        return;

      }
      
     
      
  
     
      
      
      interaction.deferUpdate()
      if(interaction.customId.includes('mce')){
        mousecontroler(interaction)
      }
      

      
      if (interaction.customId === "backplay") {
        backplay(interaction);
      } else if (interaction.customId === "previous") {
        prevtrack(interaction);
      } else if (interaction.customId === "pause") {
        pauseplay(interaction);
      } else if (interaction.customId === "next") {
        nexttrack(interaction);
      } else if (interaction.customId === "fastforward") {
        fastfrwrd(interaction);
      } else if (interaction.customId === "volup") {
        volumeup(interaction);
      } else if (interaction.customId === "voldn") {
        volumedown(interaction);
      }
      else if (interaction.customId==="mute"){
        mute(interaction)
      }
        
      
   
      
     
      
    } catch (error) {
      console.log(error);
    }
  });
client.login(process.env.TOKEN);
