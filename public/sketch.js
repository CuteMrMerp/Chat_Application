let socket = io()

let count = 0
let chatbox;
let name
let send;
let an
function setup(){
createCanvas(0, 0);
name = createInput("Name")
name.size(100)
chatbox = createInput("Message");
chatbox.size = (windowWidth-150)
send = createButton("✈");
send.size(50)
send.mousePressed(sendmsg)
socket.on("call", (data)=>{getmsg(data)})
chatbox.id("msg")
name.id("name")
}
function incognito(){
  name.value("-")
}

function draw(){
background(0);
}

function getmsg(data){
  //Recieve message
  d = createDiv(data.rname+": "+data.rtext)
}

function sendmsg(){
  //Send message
  message = {
    rtext: chatbox.value(),
    rname: name.value()
  }
  socket.emit("sent", message)
}