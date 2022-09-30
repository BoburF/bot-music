require('dotenv').config();
const { Telegraf, Markup } = require("telegraf")

function getUserRole(message) {
    return message
}

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
    console.log(Markup.keyboard(["menu"]));
    return ctx.reply(`Welcome to "Music shunchaki" with 💚`, Markup.keyboard(["/search", "/start"]))
});

bot.use((ctx, next) => {
    ctx.state.role = getUserRole(ctx.message)
    return next()
})

bot.command("search", (ctx)=>{
    return ctx.reply("sfbisaufb")
})

bot.on('text', (ctx) => {
    
    return ctx.reply(`Hello ${ctx.state.role.text}`)
})

bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));