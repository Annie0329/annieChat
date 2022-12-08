$(document).ready(function () {

  // 我不會JS，這是我自己看範例掰的，沒想到竟然成功
  const $messageField = $('#messageField');
  const $nameField = $('#nameField');
  const $messageList = $('#messageList');
  const $sendButton = $('#sendButton')
  var nameVal = $('#nameField option:selected').text();

  console.log(nameVal);
  const $fontAvailable = document.fonts.check("16px A Childish Wonders");
  if ($fontAvailable) {
    console.log("yass");
  }
  //console.log($fontAvailable);
  $('#nameField').change(
    function () {
      nameVal = $('#nameField option:selected').val();
      console.log(nameVal);
      if (nameVal == "Annie") {
        $('.messageItemAnnie').css("text-align", "right");
        $('.messageItemTai').css("text-align", "left");
        $('.messageField,.sendButton,.nameField,.title').css("font-family", "Writes_AnnieFont");
        $('.chatUsernameTai').text("Tai：");
        $('.chatUsernameAnnie').text("");
        $('.messageAnnie').css("background-color", "skyblue");
        $('.messageTai').css("background-color", "gainsboro");
      }
      if (nameVal == "Tai") {
        $('.messageItemAnnie').css("text-align", "left");
        $('.messageItemTai').css("text-align", "right");
        $('.messageField,.sendButton,.nameField,.title').css("font-family", "writesTai");
        $('.chatUsernameAnnie').text("易安：");
        $('.chatUsernameTai').text("");
        $('.messageAnnie').css("background-color", "gainsboro");
        $('.messageTai').css("background-color", "skyblue");
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
    nameVal = $('#nameField option:selected').val();
    if (nameVal == "Annie") {
      let messageItem = `
      <li class="messageItemAnnie">
      <p class="messageAnnie"><strong class="chatUsernameAnnie">${$nameField.val()}:</strong>
      ${$messageField.val()}</p>
      <li>
      `
      $messageList.append(messageItem);
      $('.messageItemAnnie').css("text-align", "right");
      $('.messageItemTai').css("text-align", "left");
      $('.messageAnnie').css("background-color", "skyblue");
      $('.chatUsernameAnnie').text("");
      $messageField.val('')
    }
    else {
      let messageItem = `
      <li class="messageItemTai">
      <p class="messageTai"><strong class="chatUsernameTai">${$nameField.val()}:</strong>
      ${$messageField.val()}</p>
      <li>
      `
      $messageList.append(messageItem);
      $('.messageItemTai').css("text-align", "right");
      $('.messageItemAnnie').css("text-align", "left");
      $('.messageTai').css("background-color", "skyblue");
      $('.chatUsernameTai').text("");
      $messageField.val('')
    }

    //訊息會自動滑到底
    $messageList[0].scrollTop = $messageList[0].scrollHeight;
  })

});
