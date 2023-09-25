const Discord = require("discord.js");
const robot=require('robotjs')
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
module.exports = async (interaction) => {
  const specialkeys = [
    "enter",
    "escape",
    "backspace",
    "delete",
    "tab",
    "home",
    "end",
    "pageup",
    "pagedown",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12",
    "up",
    "down",
    "right",
    "left"
  ];
  const stringtotype=interaction.options.get('typestring')
  strippedstring=stringtotype.value
  if (specialkeys.includes(strippedstring.toLowerCase())){
    robot.keyTap(strippedstring.toLowerCase())
  }else{
  
  robot.typeString(strippedstring);
  }
  await interaction.reply({
    content:"string typed",
    ephemeral: true,
  })
 


}