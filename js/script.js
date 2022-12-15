$(document).ready(function () {

  // 我不會JS，這是我自己看範例掰的，沒想到竟然成功
  const $messageField = $('#messageField');
  const $nameField = $('#nameField');
  const $messageList = $('#messageList');
  const $sendButton = $('#sendButton')
  var nameVal = $('#nameField option:selected').text();

  //如果切換使用者的話就換格式
  $('#nameField').change(
    function () {
      nameVal = $('#nameField option:selected').val();

      $('.messageItemAnnieR, .messageItemAnnieL').toggleClass("messageItemAnnieR messageItemAnnieL");
      $('.messageItemTaiL, .messageItemTaiR').toggleClass("messageItemTaiL messageItemTaiR");
      $('.messageR,.messageL').toggleClass("messageR messageL");

      if (nameVal == "Annie") {
        $('.messageField,.sendButton,.nameField,.title,option').css("font-family", "Writes_AnnieFont");
        // $('.chatUsernameTai').text("炎 ");
        // $('.chatUsernameAnnie').text("");

      }
      if (nameVal == "Tai") {
        $('.messageField,.sendButton,.nameField,.title,option').css("font-family", "writesTai");
        // $('.chatUsernameAnnie').text("Annie ");
        // $('.chatUsernameTai').text("");
      }
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
    if ($messageField.val() != "") {
      nameVal = $('#nameField option:selected').val();
      nameValName = $('#nameField option:selected').text();
      if (nameVal == "Annie") {
        let messageItem = `
        <li class="messageItemAnnieR" id="messageItemAnnie">
        <div  class="messageR">
        <p id="messageAnnie">${$messageField.val()}</p>
        <p class="chatUsername">${nameValName}</p>
        </div>
        <li>
        `
        $messageList.append(messageItem);
        // $('.chatUsernameAnnie').text("");

        $messageField.val('');
      }
      else {
        let messageItem = `
        <li class="messageItemTaiR" id="messageItemTai">
        <div  class="messageR">
        <p id="messageTai">${$messageField.val()}</p>
        <p class="chatUsername">${nameValName}</p>
        <li>
        `
        $messageList.append(messageItem);
        // $('.chatUsernameTai').text("");
        $messageField.val('')
      }

    }

    //訊息會自動滑到底
    $messageList[0].scrollTop = $messageList[0].scrollHeight;
  })

});
