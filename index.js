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
  let Arr = ['美金: ' + data[0].Bankcashbuy ,'港幣: ' +data[1].Bankcashbuy ,'英鎊: ' +data[2].Bankcashbuy,'澳幣: '+data[3].Bankcashbuy ,'加拿大幣: '+ data[4].Bankcashbuy ,'新加坡幣: ' +data[5].Bankcashbuy,'法郎: ' +data[6].Bankcashbuy ,'日圓: ' +data[7].Bankcashbuy ,'南非幣: ' +data[8].Bankcashbuy ,'瑞典幣: ' +data[9].Bankcashbuy,'紐元: ' +data[10].Bankcashbuy,'泰幣: ' +data[11].Bankcashbuy,'菲國比索: ' +data[12].Bankcashbuy , '印尼幣'+data[13].Bankcashbuy ,'歐元' +data[14].Bankcashbuy,'韓元' +data[15].Bankcashbuy,'越南盾' +data[16].Bankcashbuy,'馬來幣: ' +data[17].Bankcashbuy,'人民幣: ' +data[18].Bankcashbuy]
  try {
    if (msg === '!匯率'){
      for (let i = 0; i<Arr.length;i++){
       msgdata += Arr[i] + '\n'
      }
      event.reply(msgdata)
   }
    else if (msg === '!美金' || msg === '!美元' || msg === '!美圓'){
      msgdata = data[0].Bankcashbuy
      event.reply('美金: '+msgdata)
    }
    else if (msg === '!港幣'){
      msgdata = data[1].Bankcashbuy
      event.reply('港幣: '+msgdata)
    }
    else if (msg === '!英鎊'){
      msgdata = data[2].Bankcashbuy
      event.reply('英鎊: '+msgdata)
    }
    else if (msg === '!澳幣'){
      msgdata = data[3].Bankcashbuy
      event.reply('澳幣: '+msgdata)
    }
    else if (msg === '!加拿大幣'){
      msgdata = data[4].Bankcashbuy
      event.reply('加拿大幣: '+msgdata)
    }
    else if (msg === '!新加坡幣'){
      msgdata = data[5].Bankcashbuy
      event.reply('新加坡幣 : '+msgdata)
    }
    else if (msg === '!法郎' || msg === '!瑞士法郎'){
      msgdata = data[6].Bankcashbuy
      event.reply('法郎: '+msgdata)
    }
    else if (msg === '!日圓'){
      msgdata = data[7].Bankcashbuy
      event.reply('日圓: '+msgdata)
    }
    else if (msg === '!南非幣'){
      msgdata = data[8].Bankcashbuy
      event.reply('南非幣: '+msgdata)
    }
    else if (msg === '!瑞典幣'){
      msgdata = data[9].Bankcashbuy
      event.reply('瑞典幣: '+msgdata)
    }
    else if (msg === '!紐元'){
      msgdata = data[10].Bankcashbuy
      event.reply('紐元: '+msgdata)
    }
    else if (msg === '!泰幣'){
      msgdata = data[11].Bankcashbuy
      event.reply('泰幣: '+msgdata)
    }
    else if (msg === '!菲國比索'){
      msgdata = data[12].Bankcashbuy
      event.reply('菲國比索: '+msgdata)
    }
    else if (msg === '!印尼幣'){
      msgdata = data[13].Bankcashbuy
      event.reply('印尼幣: '+msgdata)
    }
    else if (msg === '!歐元'){
      msgdata = data[14].Bankcashbuy
      event.reply('歐元: '+msgdata)
    }
    else if (msg === '!韓元'){
      msgdata = data[15].Bankcashbuy
      event.reply('韓元: '+msgdata)
    }
    else if (msg === '!越南盾'){
      msgdata = data[16].Bankcashbuy
      event.reply('越南盾: '+msgdata)
    }
    else if (msg === '!馬來幣'){
      msgdata = data[17].Bankcashbuy
      event.reply('馬來幣: '+msgdata)
    }
    else if (msg === '!人民幣'){
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
      event.reply('請輸入 !美金或其他 !貨幣')
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
