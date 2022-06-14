let socket = io()

let chatbox;
let name
let send;
let an
function setup(){
createCanvas(0, 0);
name = createInput("Name")
name.size(100)
an = createButton("Anonymous")
an.size(100)
an.mousePressed(incognito)
chatbox = createInput("Message");
chatbox.size = (windowWidth-150)
send = createButton("✈");
send.size(50)
send.mousePressed(recieved)
socket.on("call", getmsg)

}
function incognito(){
  name.value("-")
}

function draw(){
background(0);
}

function getmsg(data){
createDiv("sidrdsk")
}

function recieved(){
  if(name.value=="-"){
  data = {
    msg: chatbox.value(),
    name: socket.id
  }
}
else{
data = {
    msg:chatbox.value(),
    name:name.value()
  }
}
  socket.emit("sent", data)
}