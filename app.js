import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((msg) => {
  msg.reply("Hello");
});

bot.command("id", async (msg) => {
  //   console.log(msg.chat);
  if (msg.message.reply_to_message != undefined) {
    console.log("Hello");
  } else {
    const dp = await bot.telegram.getUserProfilePhotos(msg.chat.id);
    await bot.telegram.sendPhoto(
      msg.chat.id,
      dp.photos[0][dp.photos[0].length - 1].file_id,
      {
        reply_to_message_id: msg.message.message_id,
      }
    );
  }
});

bot.launch();
