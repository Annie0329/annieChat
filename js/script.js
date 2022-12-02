$(document).ready(function () {

  // 我不會JS，這是我自己看範例掰的，沒想到竟然成功
  const $messageField = $('#messageField');
  const $nameField = $('#nameField');
  const $messageList = $('#messageList');
  const $sendButton = $('#sendButton')

  const $fontAvailable = document.fonts.check("16px A Childish Wonders");
  if ($fontAvailable) {
    console.log("yass");
  }
  //console.log($fontAvailable);

  //按下enter就顯示訊息
  $messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      $sendButton.click();
    }
  });
  //按傳送鈕也可以
  $sendButton.click(function () {
    let messageItem = `
        <li class="messageItem">
        <p class="message"><strong class="chatUsername">${$nameField.val()}:</strong>
        ${$messageField.val()}</p>
        <li>
        `
    $messageList.append(messageItem);
    $messageField.val('')
    //訊息會自動滑到底
    $messageList[0].scrollTop = $messageList[0].scrollHeight;
  })

});
