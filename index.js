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
    nmsg = '我滾啦'
    event.reply(nmsg)
  } catch (error) {
    msg = '發生錯誤'
  }
})

bot.on('message', async (event) => {
  let msg = event.message.text;
  if (msg.indexOf('！') === 0) {
    msg = msg.replace('！', '!')
  } else {
    msg = event.message.text
  }
  let msgdata = '';
  let nmsg = '';
  const data = await rp({
    uri: 'https://4040e039.github.io/Leebot/result.json',
    json: true
  })


  let Arr3 = ['美金: ', '港幣: ', '英鎊: ', '澳幣: ', '加拿大幣: ', '新加坡幣: ', '法郎: ', '日圓: ', '南非幣: ', '瑞典幣: ', '紐元: ', '泰幣: ', '菲國比索: ', '印尼幣: ', '歐元: ', '韓元: ', '越南盾: ', '馬來幣: ', '人民幣: ']

  let Arr2 = [];
  for (let i = 0; i < Arr3.length; i++) {
    Arr2.push(data[i].Bankcashsold)
  }

  let Arr = []
  for (let i = 0; i < Arr2.length; i++) {
    Arr[i] = Arr3[i] + Arr2[i]
  }


  try {
    if (msg === '!你有啥用' || msg === '!簡介' || msg === '!功能' || msg === '!指令') {
      nmsg = '你可以輸入!匯率或!相對應貨幣'
    } else if (msg === '!匯率') {
      for (let i = 0; i < Arr.length; i++) {
        msgdata += Arr[i] + '\n'
      }
      nmsg = msgdata
    } else if (msg === '!美金' || msg === '!美元' || msg === '!美圓') {
      nmsg = Arr[0]
    } else if (msg === '!港幣') {
      nmsg = Arr[1]
    } else if (msg === '!英鎊') {
      nmsg = Arr[2]
    } else if (msg === '!澳幣') {
      nmsg = Arr[3]
    } else if (msg === '!加拿大幣') {
      nmsg = Arr[4]
    } else if (msg === '!新加坡幣') {
      nmsg = Arr[5]
    } else if (msg === '!法郎' || msg === '!瑞士法郎') {
      nmsg = Arr[6]
    } else if (msg === '!日圓') {
      nmsg = Arr[7]
    } else if (msg === '!南非幣') {
      nmsg = Arr[8]
    } else if (msg === '!瑞典幣') {
      nmsg = Arr[9]
    } else if (msg === '!紐元') {
      nmsg = Arr[10]
    } else if (msg === '!泰幣') {
      nmsg = Arr[11]
    } else if (msg === '!菲國比索') {
      nmsg = Arr[12]
    } else if (msg === '!印尼幣') {
      nmsg = Arr[13]
    } else if (msg === '!歐元') {
      nmsg = Arr[14]
    } else if (msg === '!韓元') {
      nmsg = Arr[15]
    } else if (msg === '!越南盾') {
      nmsg = Arr[16]
    } else if (msg === '!馬來幣') {
      nmsg = Arr[17]
    } else if (msg === '!人民幣') {
      nmsg = Arr[18]
    } else if (msg === '!你好' || msg === '!Hello' || msg === '!Hi') {
      nmsg = msg
    } else if (msg === '!愛你' || msg === '!我愛你') {
      nmsg = '我也愛你'
    } else if (msg === '!鮮自然') {
      nmsg = [{
        type: 'location',
        title: '鮮自然 (歸仁中山門市)',
        address: '711台南市歸仁區中山路一段466號',
        latitude: 22.966542,
        longitude: 120.297670
      }, {
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/natural.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/natural.jpg'
      }, {
        type: 'text',
        text: '鮮自然 (歸仁中山門市)' + '\n' + ' 062396777'
      }]
    } else if (msg === '!迷客夏' || msg === '!迷克夏') {
      nmsg = [{
        type: 'location',
        title: '迷客夏 (臺南歸仁店)',
        address: '71142台南市歸仁區中山路一段464號',
        latitude: 22.966466,
        longitude: 120.297862
      }, {
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/mikeshop.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/mikeshop.jpg'
      }, {
        type: 'text',
        text: '迷客夏 (臺南歸仁店)' + '\n' + ' 062306878'
      }]

    } else if (msg === '!林廷璋') {
      nmsg = [{
        type: 'location',
        title: '林廷璋耳鼻喉科診所',
        address: '711台南市歸仁區民權三街98號',
        latitude: 22.969431,
        longitude: 120.290273
      }, {
        type: 'text',
        text: '林廷璋耳鼻喉科診所' + '\n' + ' 062309919'
      }]

    } else if (msg === '!尚介讚') {
      nmsg = [{
        type: 'location',
        title: '尚介讚香鷄排',
        address: '711台南市歸仁區民族北街1號',
        latitude: 22.967261,
        longitude: 120.292246
      }, {
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/ShangJiezan.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/ShangJiezan.jpg'
      }, {
        type: 'text',
        text: '尚介讚香鷄排' + '\n' + ' 062399882'
      }]

    } else if (msg === '!米里') {
      nmsg = [{
        type: 'location',
        title: '米里米里(歸仁中正南店)',
        address: '711台南市歸仁區中正南路一段89號',
        latitude: 22.964456,
        longitude: 120.293528
      }, {
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/mimi.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/mimi.jpg'
      }, {
        type: 'text',
        text: '米里米里(歸仁中正南店)' + '\n' + ' 062305959'
      }]

    } else if (msg === '!鮮茶道') {
      nmsg = [{
        type: 'location',
        title: '鮮茶道 (歸仁圓環店)',
        address: '711台南市歸仁區中山路二段1號',
        latitude: 22.966612,
        longitude: 120.293827
      }, {
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/Freshtea.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/Freshtea.jpg'
      }, {
        type: 'text',
        text: '鮮茶道 (歸仁圓環店)' + '\n' + ' 063387933'
      }]

    } else if (msg === '!胖老爹') {
      nmsg = [{
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/Fatdad.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/Fatdad.jpg'
      }, {
        type: 'text',
        text: '胖老爹美式炸雞(台南歸仁店)' + '\n' + ' 062305279'
      }]
      } 
      else if (msg === '!美芝城' || msg === '!美之城') {
        nmsg = [{
          type: 'image',
          originalContentUrl: 'https://4040e039.github.io/image/BeachCity.jpg',
          previewImageUrl: 'https://4040e039.github.io/image/BeachCity.jpg'
        }, {
          type: 'text',
          text: '早安!美芝城(台南歸仁店)' + '\n' + ' 062301610'
        }]
      }
      else if (msg === '!鮮果漾' || msg === '!鮮果樣') {
        nmsg = [{
          type: 'image',
          originalContentUrl: 'https://4040e039.github.io/image/Fresfruit.jpg',
          previewImageUrl: 'https://4040e039.github.io/image/BFreshfruit.jpg'
        }, {
          type: 'text',
          text: '鮮果漾(台南歸仁店)' + '\n' + ' 062306393'
        }]
      }
      else if (msg === '!一手私藏' || msg === '!一手') {
        nmsg = [{
          type: 'image',
          originalContentUrl: 'https://4040e039.github.io/image/Privatetea.jpg',
          previewImageUrl: 'https://4040e039.github.io/image/Privatetea.jpg'
        }, {
          type: 'text',
          text: '一手私藏世界紅茶(歸仁市場店)' + '\n' + ' 062303798'
        }]
      }
      else if (msg === '!達美樂') {
        nmsg = [{
          type: 'image',
          originalContentUrl: 'https://4040e039.github.io/image/Domino.jpg',
          previewImageUrl: 'https://4040e039.github.io/image/Domino.jpg'
        }, {
          type: 'text',
          text: '達美樂披薩(歸仁中山店)' + '\n' + ' 062305252'
        }]
      }
      else if (msg === '!三姐妹') {
      nmsg = [{
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/Threesisters.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/Threesisters.jpg'
      }, {
        type: 'text',
        text: '三姐妹海苔飯捲複合式餐飲' + '\n' + ' 063300168'
      }]
     
    } else if (msg === '!BB特餐富農店') {
      nmsg = 'BB特餐(富農分店)' + '\n' + ' 062891827'
    } else if (msg === '!谷軒') {
      nmsg = [{
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/GuXuan.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/GuXuan.jpg'
      }, {
        type: 'text',
        text: '谷軒快餐' + '\n' + ' 062393912'
      }]
    } else if (msg === '!園璞') {
      nmsg = [{
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/Yuanpu.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/Yuanpu.jpg'
      }, {
        type: 'text',
        text: '歸仁園璞炒飯鍋燒專賣店' + '\n' + ' 063308072'
      }]
    } 
    else if (msg === '!佳美') {
      nmsg = '佳美味-蔥爆豬肉飯' + '\n' + ' 063306970'
    } else if (msg === '!天吉屋') {
      nmsg = '天吉屋' + '\n' + ' 062396044'
    } else if (msg === '!元之氣') {
      nmsg = [{
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/YuanZhiqi.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/YuanZhiqi.jpg'
      }, {
        type: 'text',
        text: '元之氣(歸仁中山店)' + '\n' + ' 062308846'
      }]

    } else if (msg === '!老先覺') {
      nmsg = [{
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/LaoXianjue.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/LaoXianjue.jpg'
      }, {
        type: 'text',
        text: '老先覺歸仁店' + '\n' + ' 062308949'
      }]

    }else if (msg === '!哇哈哈') {
      nmsg = [{
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/haha.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/haha.jpg'
      }, {
        type: 'text',
        text: '哈哈鍋特色臭臭鍋' + '\n' + ' 063386675'
      }]
    } else if (msg === '!紅太陽') {
      nmsg = [{
        type: 'image',
        originalContentUrl: 'https://4040e039.github.io/image/redsun.jpg',
        previewImageUrl: 'https://4040e039.github.io/image/redsun.jpg'
      }, {
        type: 'text',
        text: '紅太陽(歸仁中山店)' + '\n' + ' 062303456'
      }]
    } else if (msg === '!小南便當' || msg === '!小南') {
      nmsg = '小南雞腿排骨大王(歸仁店)' + '\n' + ' 063302418'
    } else if (msg === '!滾' || msg === '!閉嘴' || msg === '!B嘴') {
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
    } else {
      nmsg = ''
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
