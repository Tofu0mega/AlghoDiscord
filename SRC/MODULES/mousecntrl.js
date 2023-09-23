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
    var mouse= robot.getMousePos();
    var smallval=25;
    var largeval=150;
    robot.setMouseDelay(0)

if (interaction.customId === "mcefardiagonal-+") {
    var newxval=mouse.x-largeval
    var newyval=mouse.y-largeval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcelftclk") {
    robot.mouseClick("left",false)
} else if (interaction.customId === "mcedoubleup") {
    var newxval=mouse.x
    var newyval=mouse.y-largeval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcertclk") {
    robot.mouseClick("right",false)
} else if (interaction.customId === "mcefardiagonal++") {
    var newxval=mouse.x+largeval
    var newyval=mouse.y-largeval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcescrollup") {
    robot.scrollMouse(0, largeval)
} else if (interaction.customId === "mcediagonal-+") {
    var newxval=mouse.x-smallval
    var newyval=mouse.y-smallval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mceaup") {
    var newxval=mouse.x
    var newyval=mouse.y-smallval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcediagonal++") {
    var newxval=mouse.x+smallval
    var newyval=mouse.y-smallval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcerightdown") {
    robot.mouseToggle("down","right");
} else if (interaction.customId === "mcefarleft") {
    var newxval=mouse.x-largeval
    var newyval=mouse.y
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mceleft") {
    var newxval=mouse.x-smallval
    var newyval=mouse.y
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcedoubleclick") {
    robot.mouseClick("left",true)
} else if (interaction.customId === "mceright") {
    var newxval=mouse.x+smallval
    var newyval=mouse.y
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcefarright") {
    var newxval=mouse.x+largeval
    var newyval=mouse.y
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcescrolldown") {
    robot.scrollMouse(0, -largeval)
} else if (interaction.customId === "mcediagonal--") {
    var newxval=mouse.x-smallval
    var newyval=mouse.y+smallval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcedown") {
    var newxval=mouse.x
    var newyval=mouse.y+smallval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcediagonal+-") {
    var newxval=mouse.x+smallval
    var newyval=mouse.y+smallval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mceleftdown") {
    robot.mouseToggle("down","left");
} else if (interaction.customId === "mcefardiagonal--") {
    var newxval=mouse.x-largeval
    var newyval=mouse.y+largeval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcescrollleft") {
    robot.scrollMouse( -largeval,0)
} else if (interaction.customId === "mcedoubledown") {
    var newxval=mouse.x
    var newyval=mouse.y+largeval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else if (interaction.customId === "mcescrollright") {
    robot.scrollMouse( largeval,0)
} else if (interaction.customId === "mcefardiagonal+-") {
    var newxval=mouse.x+largeval
    var newyval=mouse.y+largeval
    if(newxval<0){newxval=0}
    if(newyval<0){newyval=0}

    robot.moveMouseSmooth(newxval, newyval)
} else {
    console.log("No match found.");
}
    


}