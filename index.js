const bedrock = require("bedrock-protocol")

function startBot(){

const bot = bedrock.createClient({
  host: "NavyugsSmg.aternos.me",
  port: 12699,
  username: "Gullu"
})

bot.on("join", () => {
  console.log("Gullu joined the server!")
})

bot.on("text", (packet) => {

  if(!packet.message) return

  const msg = packet.message.toLowerCase()

  if(msg.includes("gullu")){

    const replies = [
      "Yes? I am Gullu.",
      "Hello! I am exploring.",
      "Did someone call me?",
      "Gullu is wandering around."
    ]

    const reply = replies[Math.floor(Math.random()*replies.length)]

    bot.queue("text",{
      type:"chat",
      needs_translation:false,
      source_name:"Gullu",
      message:reply
    })

  }

})

bot.on("disconnect",()=>{
  console.log("Bot disconnected")
})

bot.on("close",()=>{
  console.log("Reconnecting in 5 seconds...")
  setTimeout(startBot,5000)
})

setTimeout(()=>{
  console.log("6 hours finished. Restarting bot...")
  bot.disconnect()
},21600000)

}

startBot()