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
  let nmsg = '';
  try {
    nmsg = {
      type: 'sticker',
      packageId: '11538',
      stickerId: '51626494'
    }
    event.reply(nmsg)
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
  let nmsg = '';
  let locationData = '';
  const data = await rp({
    uri: 'https://4040e039.github.io/Leebot/result.json',
    json: true
  })
  let Arr = ['美金: ' + data[0].Bankcashbuy, '港幣: ' + data[1].Bankcashbuy, '英鎊: ' + data[2].Bankcashbuy, '澳幣: ' + data[3].Bankcashbuy, '加拿大幣: ' + data[4].Bankcashbuy, '新加坡幣: ' + data[5].Bankcashbuy, '法郎: ' + data[6].Bankcashbuy, '日圓: ' + data[7].Bankcashbuy, '南非幣: ' + data[8].Bankcashbuy, '瑞典幣: ' + data[9].Bankcashbuy, '紐元: ' + data[10].Bankcashbuy, '泰幣: ' + data[11].Bankcashbuy, '菲國比索: ' + data[12].Bankcashbuy, '印尼幣: ' + data[13].Bankcashbuy, '歐元: ' + data[14].Bankcashbuy, '韓元: ' + data[15].Bankcashbuy, '越南盾: ' + data[16].Bankcashbuy, '馬來幣: ' + data[17].Bankcashbuy, '人民幣: ' + data[18].Bankcashbuy]
  try {
    if (msg === '!你有啥用' || msg === '!簡介'|| msg === '!功能' || msg === '!指令') {
      nmsg = '你可以輸入!匯率或!相對應貨幣'
    }
    else if (msg === '!匯率') {
      for (let i = 0; i < Arr.length; i++) {
        msgdata += Arr[i] + '\n'
      }
      nmsg = msgdata
    } else if (msg === '!美金' || msg === '!美元' || msg === '!美圓') {
      msgdata = data[0].Bankcashbuy
      nmsg = '美金: ' + msgdata
    } else if (msg === '!港幣') {
      msgdata = data[1].Bankcashbuy
      nmsg = '港幣: ' + msgdata
    } else if (msg === '!英鎊') {
      msgdata = data[2].Bankcashbuy
      nmsg = '英鎊: ' + msgdata
    } else if (msg === '!澳幣') {
      msgdata = data[3].Bankcashbuy
      nmsg = '澳幣: ' + msgdata
    } else if (msg === '!加拿大幣') {
      msgdata = data[4].Bankcashbuy
      nmsg = '加拿大幣: ' + msgdata
    } else if (msg === '!新加坡幣') {
      msgdata = data[5].Bankcashbuy
      nmsg = '新加坡幣:' + msgdata
    } else if (msg === '!法郎' || msg === '!瑞士法郎') {
      msgdata = data[6].Bankcashbuy
      nmsg = '法郎: ' + msgdata
    } else if (msg === '!日圓') {
      msgdata = data[7].Bankcashbuy
      nmsg = '日圓: ' + msgdata
    } else if (msg === '!南非幣') {
      msgdata = data[8].Bankcashbuy
      nmsg = '南非幣: ' + msgdata
    } else if (msg === '!瑞典幣') {
      msgdata = data[9].Bankcashbuy
      nmsg = '瑞典幣: ' + msgdata
    } else if (msg === '!紐元') {
      msgdata = data[10].Bankcashbuy
      nmsg = '紐元: ' + msgdata
    } else if (msg === '!泰幣') {
      msgdata = data[11].Bankcashbuy
      nmsg = '泰幣: ' + msgdata
    } else if (msg === '!菲國比索') {
      msgdata = data[12].Bankcashbuy
      nmsg = '菲國比索: ' + msgdata
    } else if (msg === '!印尼幣') {
      msgdata = data[13].Bankcashbuy
      nmsg = '印尼幣: ' + msgdata
    } else if (msg === '!歐元') {
      msgdata = data[14].Bankcashbuy
      nmsg = '歐元: ' + msgdata
    } else if (msg === '!韓元') {
      msgdata = data[15].Bankcashbuy
      nmsg = '韓元: ' + msgdata
    } else if (msg === '!越南盾') {
      msgdata = data[16].Bankcashbuy
      nmsg = '越南盾: ' + msgdata
    } else if (msg === '!馬來幣') {
      msgdata = data[17].Bankcashbuy
      nmsg = '馬來幣: ' + msgdata
    } else if (msg === '!人民幣') {
      msgdata = data[18].Bankcashbuy
      nmsg = '人民幣: ' + msgdata
    } else if (msg === '!你好' || msg === '!Hello' || msg === '!Hi') {
      nmsg = msg
    } else if (msg === '!愛你' || msg === '!我愛你') {
      nmsg = '我也愛你'
    } 
    else if (msg === '!鮮自然') {
      locationData = {
        type: 'location',
        title: '鮮自然 (歸仁中山門市)',
        address: '711台南市歸仁區中山路一段466號',
        latitude: 22.967422,
        longitude: 120.297990
      }
      nmsg = locationData 
      event.reply('062396777')
      event.reply(nmsg)
    }
    else if (msg === '!滾' || msg === '!閉嘴' || msg === '!B嘴') {
      nmsg = {
        type: 'sticker',
        packageId: '11537',
        stickerId: '52002772'
      }
    } else if (msg === '!哭哭') {
      nmsg = {
        type: 'sticker',
        packageId: '11537',
        stickerId: '52002750'
      }
    } else if (msg === '!抱抱') {
      nmsg = {
        type: 'sticker',
        packageId: '11537',
        stickerId: '52002737'
      }
    } else if (msg === '!二兵') {
      nmsg = {
        type: 'sticker',
        packageId: '11538',
        stickerId: '51626520'
      }
    } else if (msg === '!打架') {
      nmsg = {
        type: 'sticker',
        packageId: '2',
        stickerId: '517'
      }
    } else if (msg === '!生氣') {
      nmsg = {
        type: 'sticker',
        packageId: '11538',
        stickerId: '51626518'
      }
    }  else {
      nmsg = '請輸入 !指令'
    }
    // const data = await rp({ uri: 'https://kktix.com/events.json', json: true })
    // msg = data.entry[0].title
    event.reply(nmsg)
  } catch (error) {
    msg = '發生錯誤'
  }

})

// 在 port 啟動
bot.listen('/', process.env.PORT, () => {
  console.log('機器人已啟動')
})
