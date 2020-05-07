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
  const data = await rp({ uri: 'https://4040e039.github.io/Leebot/result.json', json: true })
  // let Arr = ['美金' ,'港幣' ,'英鎊' ,'加拿大幣' ,'澳幣' ,'法郎' ,'日圓' ,'南非幣' ,'瑞典幣' ,'紐元' ,'泰幣' ,'菲國比索' , '印尼幣' ,'歐元' ,'韓元' ,'越南盾' ,'馬來幣' ,'人民幣']
  try {
    // if (msg === '!匯率'){
    //   for (let i = 0; i<Arr.length;i++){
    //   msgdata += data[i].Bankcashbuy + '\n'
    //   event.reply(Arr[i] +msgdata)
    //  }
    // }
   if (msg === '!美金'){
      msgdata = data[0].Bankcashbuy
      event.reply('美金: '+msgdata)
    }
    else if ('!港幣'){
      msgdata = data[1].Bankcashbuy
      event.reply('港幣: '+msgdata)
    }
    else if ('!英鎊'){
      msgdata = data[2].Bankcashbuy
      event.reply('英鎊: '+msgdata)
    }
    else if ('!加拿大幣'){
      msgdata = data[4].Bankcashbuy
      event.reply('加拿大幣: '+msgdata)
    }
    else if ('!澳幣'){
      msgdata = data[5].Bankcashbuy
      event.reply('澳幣: '+msgdata)
    }
    else if ('!法郎'){
      msgdata = data[6].Bankcashbuy
      event.reply('法郎: '+msgdata)
    }
    else if ('!日圓'){
      msgdata = data[7].Bankcashbuy
      event.reply('日圓: '+msgdata)
    }
    else if ('!南非幣'){
      msgdata = data[8].Bankcashbuy
      event.reply('南非幣: '+msgdata)
    }
    else if ('!瑞典幣'){
      msgdata = data[9].Bankcashbuy
      event.reply('瑞典幣: '+msgdata)
    }
    else if ('!紐元'){
      msgdata = data[10].Bankcashbuy
      event.reply('紐元: '+msgdata)
    }
    else if ('!泰幣'){
      msgdata = data[11].Bankcashbuy
      event.reply('泰幣: '+msgdata)
    }
    else if ('!菲國比索'){
      msgdata = data[12].Bankcashbuy
      event.reply('菲國比索: '+msgdata)
    }
    else if ('!印尼幣'){
      msgdata = data[13].Bankcashbuy
      event.reply('印尼幣: '+msgdata)
    }
    else if ('!歐元'){
      msgdata = data[14].Bankcashbuy
      event.reply('歐元: '+msgdata)
    }
    else if ('!韓元'){
      msgdata = data[15].Bankcashbuy
      event.reply('韓元: '+msgdata)
    }
    else if ('!越南盾'){
      msgdata = data[16].Bankcashbuy
      event.reply('越南盾: '+msgdata)
    }
    else if ('!馬來幣'){
      msgdata = data[17].Bankcashbuy
      event.reply('馬來幣: '+msgdata)
    }
    else if ('!人民幣'){
      msgdata = data[18].Bankcashbuy
      event.reply('人民幣: '+msgdata)
    }
    else if (msg === '你好' || msg === 'Hello' || msg === 'Hi'){
      event.reply(msg)
    }
    else if (msg === '愛你' || msg === '我愛你'){
      event.reply('我也愛你')
    }
    else {
      event.reply('請輸入 !美元')
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
