const fs = require('fs');
const csv = require('csv-parser');
let IDs = [];
let LABELS = [];
let roles=[];
require('dotenv').config();
const {
  Client,
  IntentsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');
const TRACK_ID=process.env.MOUSECHANNELID

function readCSVAndPopulateArrays(filePath) {
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      const [LABEL, ID] = Object.values(data);
      LABELS.push(LABEL);
      IDs.push(ID); 
    })
    .on('end', () => {
      
      for (let i = 0; i < IDs.length; i++) {
        roles.push({
        id:IDs[i],
        label:LABELS[i]
        
    })
}

      
    });
}
readCSVAndPopulateArrays('SRC/CSV/mousecontrolbuttons.csv')
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});




client.on('ready', async (c) => {
  try {
    const channel = await client.channels.cache.get(TRACK_ID);
    if (!channel) return;
    let numrow=Math.ceil(roles.length/5)
    console.log(numrow)
    let row = new Array(numrow);
    for(let k=0;k<=numrow;k++){
      
      row[k] = new ActionRowBuilder();
    }
    
    let currentrow=0
    for (let i = 0; i < roles.length; i++) {
      currentrow=Math.floor((i/5))
      
      row[currentrow].components.push(
        new ButtonBuilder()
          .setCustomId(roles[i].id)
          .setLabel(roles[i].label)
          .setStyle(ButtonStyle.Primary)
      );
    
    }
    rowlist=[]
    for (let l =0;l< numrow;l++){
      rowlist.push(row[l])
    }
    await channel.send({
      content: 'MouseControls',
      components: rowlist
    });
    process.exit();
  } catch (error) {
    console.log(error);
  }
});

client.login(process.env.TOKEN);