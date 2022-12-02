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
  const $sendButton = $('#sendButton')

  // LISTEN FOR KEYPRESS EVENT
  $messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      $sendButton.click();
    }
  });
  //按傳送鈕也可以
  $sendButton.click(function () {
    //FIELD VALUES
    let senderName = $nameField.val();
    let message = $messageField.val();

    //SAVE DATA TO FIREBASE
    messagesCollectionRef.add({
      senderName: senderName,
      message: message,
      timeStamp: Date.now(),
    });

    // EMPTY INPUT FIELD
    $messageField.val('');
  })

  // A RENDER SCREEN CALLBACK THAT IS TRIGGERED FOR EACH CHAT MESSAGE
  queryMessagesCollectionRef.onSnapshot(function (querySnapshot) {
    $messageList.html("");
    //MONITOR CHAT MESSAGE AND RENDER SCREEN
    querySnapshot.forEach(function (doc) {
      let senderName = doc.data().senderName || "anonymous";
      let message = doc.data().message;
      let messageItem = `
      <li class="message-item">
        <strong class="chat-username">${senderName}:</strong>
        ${message}
      </li>
      `;
      $messageList.append(messageItem);
      $messageField
    });
    //SCROLL TO BOTTOM OF MESSAGE LIST
    $messageList[0].scrollTop = $messageList[0].scrollHeight;
  });
});
