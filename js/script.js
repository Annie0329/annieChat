$(document).ready(function () {

  // 我不會JS，這是我自己看範例掰的，沒想到竟然成功
  const $messageField = $('#messageField');
  const $nameField = $('#nameField');
  const $messageList = $('#messageList');
  const $sendButton = $('#sendButton')
  var nameVal = $('#nameField option:selected').text();

  //如果切換使用者的話就換格式
  $nameField.change(
    function () {
      nameVal = $('#nameField option:selected').val();

      $('.messageItemAnnieR, .messageItemAnnieL').toggleClass("messageItemAnnieR messageItemAnnieL");
      $('.messageItemTaiL, .messageItemTaiR').toggleClass("messageItemTaiL messageItemTaiR");
      $('.messageR,.messageL').toggleClass("messageR messageL");

      if (nameVal == "Annie")
        $('.messageField,.sendButton,.nameField,.title,option').css("font-family", "Writes_AnnieFont");
      else
        $('.messageField,.sendButton,.nameField,.title,option').css("font-family", "writesTai");

    }
  )

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
