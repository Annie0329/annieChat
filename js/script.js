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

      $('.messageItemAnnieR, .messageItemAnnieL').toggleClass("messageItemAnnieR messageItemAnnieL");
      $('.messageItemTaiL, .messageItemTaiR').toggleClass("messageItemTaiL messageItemTaiR");
      $('.messageR,.messageL').toggleClass("messageR messageL");

      if (nameVal == "Annie")
        $('.messageField,.sendButton,.nameField,.title,option').css("font-family", "Writes_AnnieFont");
      if (nameVal == "Tai")
        $('.messageField,.sendButton,.nameField,.title,option').css("font-family", "writesTai");

    }
  )

  //按按鈕傳訊息
  $sendButton.click(function () {
    //FIELD VALUES
    let senderName = $('#nameField option:selected').text();
    let message = $messageField.val();
    if (message != "") {
      //SAVE DATA TO FIREBASE
      messagesCollectionRef.add({
        senderName: senderName,
        message: message,
        timeStamp: Date.now(),
      });
      $messageField.val('');
    }

  })

  // A RENDER SCREEN CALLBACK THAT IS TRIGGERED FOR EACH CHAT MESSAGE
  queryMessagesCollectionRef.onSnapshot(function (querySnapshot) {
    $messageList.html("");
    //MONITOR CHAT MESSAGE AND RENDER SCREEN
    querySnapshot.forEach(function (doc) {
      let senderName = doc.data().senderName;
      let message = doc.data().message;

      nameVal = $('#nameField option:selected').val();

      if (nameVal == "Annie") {
        if (senderName == "易安") {
          textClass = "messageItemAnnieR";
          messageRL = "messageR";
        }
        else {
          textClass = "messageItemTaiL";
          messageRL = "messageL";
        }
      }
      else {
        if (senderName == "易安") {
          textClass = "messageItemAnnieL";
          messageRL = "messageL";
        }
        else {
          textClass = "messageItemTaiR";
          messageRL = "messageR";
        }
      }

      let messageItem = `
      <li class=${textClass}>
        <div class=${messageRL}>
          <p class="message">${message}</p>
          <p class="chatUsername">${senderName}</p>
        </div>
      <li>
      `;
      $messageList.append(messageItem);
    });
    //SCROLL TO BOTTOM OF MESSAGE LIST
    $(document).scrollTop($(document).height());
  });
});
