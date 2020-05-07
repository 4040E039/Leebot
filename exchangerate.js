import request from 'request'
import cheerio from 'cheerio'
import fs from 'fs'
const earthquake = function () {
  request({
    url: "https://rate.bot.com.tw/xrt?Lang=zh-TW", // 中央氣象局網頁
    method: "GET"
  }, function (error, response, body) {
    if (error || !body) {
      return;
    }
    const $ = cheerio.load(body); // 載入 body
    const result = []; // 建立一個儲存結果的容器
    const table_tr = $(".table-striped tbody tr"); // 爬最外層的 Table(class=BoxTable) 中的 tr

    for (let i = 0; i < table_tr.length; i++) { // 走訪 tr
      const table_td = table_tr.eq(i).find('td'); // 擷取每個欄位(td)
      const Bankcashbuy = table_td.eq(1).text(); // 本行買入
      const Bankcashsold = table_td.eq(2).text(); // 本行賣出
      const Bankbuy = table_td.eq(3).text(); // 本行即期買入
      const Banksold = table_td.eq(4).text(); // 本行即期賣出
      const ForwardBuyorSell = table_td.eq(5).text(); // 遠期匯率買入/賣出
      const Historicalrate = table_td.eq(6).text(); // 歷史匯率

      // 建立物件並(push)存入結果
      result.push(Object.assign({ Bankcashbuy, Bankcashsold, Bankbuy, Banksold, ForwardBuyorSell, Historicalrate}));
    }
    // 在終端機(console)列出結果
    console.log(result);
    // 寫入 result.json 檔案
    fs.writeFileSync("result.json", JSON.stringify(result));
  });
};

earthquake();
// 每半小時爬一次資料
setInterval(earthquake, 30 * 60 * 1000);