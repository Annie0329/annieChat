$(document).ready(function () {

  // 我不會JS，這是我自己看範例掰的，沒想到竟然成功
  const $messageField = $('#messageField');
  const $nameField = $('#nameField');
  const $messageList = $('#messageList');
  const $sendButton = $('#sendButton')
  const $infoButton = $('#infoButton')
  var annieInfo = "一 了 不 以 可 好 有 我 怪 的 哈 是 看 要 剛 喔 等 想 試 謝 讚"
  var taiInfo = "「 」 一 丁 乃 乜 了 二 人 入 刀 力 十 又 三 上 下 丫 久 么 也 于 兀 凡 口 士 大 女 子 小 山 已 不 中 之 云 互 五 亢 什 今 元 公 分 切 勾 勿 及 反 天 太 夫 少 引 手 文 方 日 曰 木 止 毛 水 火 牙 王 世 乎 乏 仔 他 代 令 以 出 加 北 卯 去 古 句 只 叮 可 史 司 外 失 左 平 弗 打 未 本 正 玉 用 田 白 皮 丟 亦 任 伉 伙 先 光 共 划 卐 厾 吂 吃 各 合 吊 同 名 向 因 在 地 多 好 如 字 安 州 年 戎 成 收 早 曲 有 朱 次 此 汝 江 老 考 而 耳 自 至 行 衣 西 串 亨 伴 伺 佁 位 何 佛 作 佝 你 克 兵 別 助 即 吮 吳 吵 吶 吼 呀 囥 囬 坐 宋 弄 形 我 批 把 求 沒 究 良 見 言 走 那 乖 事 些 享 佬 使 來 侉 例 侑 侗 兒 兩 其 典 刮 到 制 厔 取 受 周 呼 妹 始 官 定 居 彼 往 或 所 承 拈 斧 於 明 易 東 松 武 河 法 泛 物 狀 的 直 知 社 者 肩 肯 花 近 金 長 阿 非 𠡒 㖃 便 俊 俏 俗 俛 保 則 剌 前 勁 勃 南 厚 姪 姿 後 怒 急 指 按 故 是 某 染 洛 派 為 甚 皆 盈 相 省 看 研 紅 美 胡 若 茅 要 計 述 郎 重 限 面 音 風 食 𠔕 個 倒 候 倚 倜 倩 倭 倸 兼 凇 剛 原 家 容 峭 徐 徒 時 書 氣 浙 消 疺 破 缺 耕 能 般 訓 記 起 退 院 𠣤 㒼 乾 偌 偏 做 停 偢 健 兜 卙 參 問 國 婢 密 將 常 張 強 得 從 情 惟 排 探 接 斜 欲 淮 淵 清 牽 盛 眼 細 終 習 脫 船 處 被 販 貫 這 通 連 都 備 勞 喊 壻 尋 悶 惑 替 欺 游 湖 無 然 猶 畫 痛 發 短 等 筍 答 絕 腎 華 著 虛 裁 註 詞 象 越 進 雅 集 順 須 亂 傳 傻 傾 勢 意 搉 損 搭 敬 新 會 當 禁 罪 置 義 腦 萬 葉 裏 補 解 詩 話 該 資 賊 路 載 遇 運 過 道 靖 𠭴 僔 勩 夢 夥 實 對 滬 滸 滿 演 漢 爾 疑 瘋 盡 睡 種 稱 箇 算 聚 與 蓋 語 說 輕 餅 骯 髦 麼 齊 價 僻 儀 儂 凙 劈 寫 廣 德 慧 敵 數 槳 樓 樣 篇 編 蔽 誰 論 貎 賢 賦 質 輟 適 鋊 靠 鬧 𠢱 儗 儘 器 學 磨 縣 興 諺 謂 錄 錢 隨 頭 頰 鴨 𥂕 嚇 應 戲 擬 縫 總 繁 聲 臉 舉 隸 霞 鮮 點 儱 瀏 禮 竅 藏 覆 謨 轉 雜 簿 證 辭 難 霧 韻 寶 蘇 屬 顧 儻 讀 髒 驚 蠶 驟 蠻 觀 鬭 㔶 鬮 爨 𫨻 󼉁"
  $('#info').hide();
  $(".infoText").text(annieInfo);
  $(".nameField").css("font-family", "writesAnnie");
  //如果切換使用者的話就換格式
  $nameField.change(
    function () {
      nameVal = $('#nameField option:selected').val();

      $('.messageItemAnnieR, .messageItemAnnieL').toggleClass("messageItemAnnieR messageItemAnnieL");
      $('.messageItemTaiL, .messageItemTaiR').toggleClass("messageItemTaiL messageItemTaiR");
      $('.messageR,.messageL').toggleClass("messageR messageL");

      if (nameVal == "Annie") {
        $('.messageField,.sendButton,.nameField,.nameField option:selected,.info').css("font-family", "writesAnnie");
        $(".infoText").text(annieInfo);
        $(".infoTitle").text("上下文替代字清單(每字3種)")
      }
      else {
        $('.messageField,.sendButton,.nameField,.nameField option:selected,.info').css("font-family", "writesTai");
        $(".infoText").text(taiInfo);
        $(".infoTitle").text("上下文替代字清單(每字至少2種)")
      }


    }
  )
  //顯示資訊
  $infoButton.click(function () {
    $("#info").toggle();
  });

  //按下enter就顯示訊息
  $messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      $sendButton.click();
    }
  });

  //按傳送鈕也可以
  $sendButton.click(function () {
    //訊息不是空的才傳訊息
    if ($messageField.val() != "") {
      nameVal = $('#nameField option:selected').val();
      nameValName = $('#nameField option:selected').text();

      if (nameVal == "Annie")
        liClass = "messageItemAnnieR";
      else
        liClass = "messageItemTaiR";

      let messageItem = `
        <li class=${liClass}>
          <div  class="messageR">
            <p class="message">${$messageField.val()}</p>
            <p class="chatUsername">${nameValName}</p>
          </div>
        <li>
        `
      $messageList.append(messageItem);
      $messageField.val('')
      //訊息會自動滑到底
      $(document).scrollTop($(document).height());
    }


  })

});
