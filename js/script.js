$(document).ready(function () {

  // INITIALIZE FIREBASE
  firebase.initializeApp({
    apiKey: "AIzaSyC-1xHrmDqqJYUah6b4W535SOtGoYwIyvY",
    authDomain: "web1209-48c0a.firebaseapp.com",
    projectId: "web1209-48c0a",
    storageBucket: "web1209-48c0a.appspot.com",
    messagingSenderId: "649891562731",
    appId: "1:649891562731:web:df7980843b3c8e818deaae"
  });

  // REFERENCE CHATROOM DOCUMENT
  let chatroomDocRef = firebase.firestore()
    .collection("chatrooms")
    .doc("chatroom1");
  // REFERENCE CHATROOM MESSAGES
  let messagesCollectionRef
    = chatroomDocRef.collection("messages");
  // QUERY MESSAGES BY TIMESTAMP ORDERING
  let queryMessagesCollectionRef
    = messagesCollectionRef.orderBy("timeStamp", "asc");

  // REGISTER DOM ELEMENTS
  const $messageField = $('#messageField');
  const $nameField = $('#nameField');
  const $messageList = $('#messageList');
  const $sendButton = $('#sendButton');

  // LISTEN FOR KEYPRESS EVENT
  $messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      $sendButton.click();
    }
  });

  $('#nameField').change(
    function () {
      nameVal = $('#nameField option:selected').val();
      if (nameVal == "Annie") {
        $('.messageItemAnnie').css("text-align", "right");
        $('.messageItemTai').css("text-align", "left");
        $('.messageField,.sendButton,.title').css("font-family", "Writes_AnnieFont");
        $('.chatUsernameTai').text("Tai：");
        $('.chatUsernameAnnie').text("");
        $('.messageAnnie').css("background-color", "skyblue");
        $('.messageTai').css("background-color", "gainsboro");
      }
      else if (nameVal == "Tai") {
        $('.messageItemAnnie').css("text-align", "left");
        $('.messageItemTai').css("text-align", "right");
        $('.messageField,.sendButton,.title').css("font-family", "writesTai");
        $('.chatUsernameAnnie').text("易安：");
        $('.chatUsernameTai').text("");
        $('.messageTai').css("background-color", "skyblue");
        $('.messageAnnie').css("background-color", "gainsboro");
      }
    }
  )

  //按按鈕傳訊息
  $sendButton.click(function () {
    //FIELD VALUES
    let senderName = $nameField.val();
    let message = $messageField.val();
    if (message != "") {
      //SAVE DATA TO FIREBASE
      messagesCollectionRef.add({
        senderName: senderName,
        message: message,
        timeStamp: Date.now(),
      });

      // EMPTY INPUT FIELD
      $messageField.val('');
    }

  })

  // A RENDER SCREEN CALLBACK THAT IS TRIGGERED FOR EACH CHAT MESSAGE
  queryMessagesCollectionRef.onSnapshot(function (querySnapshot) {
    $messageList.html("");
    //MONITOR CHAT MESSAGE AND RENDER SCREEN
    querySnapshot.forEach(function (doc) {
      let senderName = doc.data().senderName || "anonymous";
      let message = doc.data().message;

      nameVal = $('#nameField option:selected').val();

      if (senderName == "Annie") {
        textClass = "messageItemAnnie";
        usernameClass = "chatUsernameAnnie";
        messageClass = "messageAnnie";
      }

      else if (senderName == "Tai") {
        textClass = "messageItemTai";
        usernameClass = "chatUsernameTai";
        messageClass = "messageTai";
        console.log(usernameClass);
      }

      let messageItem = `
      <li class=${textClass}>
      <p class=${messageClass}><strong class=${usernameClass}>${senderName}:</strong>
        ${message}
        </p></li>
      `;
      $messageList.append(messageItem);
      if (nameVal == "Annie") {
        $('.messageItemAnnie').css("text-align", "right");
        $('.messageItemTai').css("text-align", "left");
        $('.chatUsernameAnnie').text("");
        $('.messageAnnie').css("background-color", "skyblue");
        $('.messageTai').css("background-color", "gainsboro");
      }
      if (nameVal == "Tai") {
        $('.messageItemAnnie').css("text-align", "left");
        $('.messageItemTai').css("text-align", "right");
        $('.chatUsernameTai').text("");
        $('.messageTai').css("background-color", "skyblue");
        $('.messageAnnie').css("background-color", "gainsboro");
      }
    });
    //SCROLL TO BOTTOM OF MESSAGE LIST
    $messageList[0].scrollTop = $messageList[0].scrollHeight;
  });
});
