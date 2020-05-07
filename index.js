// 引用linebot套件
import linebot from 'linebot'
// 引用 dotenv套件
import dotenv from 'dotenv'
// 引用 request套件
import rp from 'request-promise'
// 讀取 .env檔
dotenv.config()
 // 宣告機器人的資訊
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})


bot.on('join', async (event) => {
  try {
    event.reply('大家好')
  } catch (error) {
    msg = '發生錯誤'
  }
})
bot.on('leave', async (event) => {
  try {
    event.reply('我滾啦')
  } catch (error) {
    msg = '發生錯誤'
  }
})

bot.on('message', async (event) => {
  let msg = event.message.text;
  let msgdata = '';
  try {
    if (msg === '!匯率'){
      const data = await rp({ uri: 'https://4040e039.github.io/Leebot/result.json', json: true })
      msgdata = data[0].Bankcashbuy
      event.reply(msgdata)
    }
    else if (msg === '你好' || msg === 'Hello' || msg === 'Hi'){
      event.reply(msg)
    }
    else if (msg === '愛你' || msg === '我愛你'){
      event.reply('我也愛你')
    }
    // const data = await rp({ uri: 'https://kktix.com/events.json', json: true })
    // msg = data.entry[0].title
  } catch (error) {
    msg = '發生錯誤'
  }
  // event.reply(msg)
})

// 在 port 啟動
bot.listen('/', process.env.PORT, () => {
  console.log('機器人已啟動')
})
