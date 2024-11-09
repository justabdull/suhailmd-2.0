const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349126533339";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_44_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpodmwzeFVlZVlkVjUvdStlVGZHVnNXMDhlTE5PalNvamxUa1FwQlQyNWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJjWGxwRV9ZUkNlZUppYm1CSF9xQ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjRhODJkZWYtNTg5MC00ZDcwLThkNjQtODAyODczOGZjYmE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDM4LFxuICAgICAgNjEsXG4gICAgICAyNDEsXG4gICAgICAyMzEsXG4gICAgICAyMSxcbiAgICAgIDE1MyxcbiAgICAgIDk1LFxuICAgICAgNyxcbiAgICAgIDEyNSxcbiAgICAgIDMyLFxuICAgICAgMjE3LFxuICAgICAgMjM1LFxuICAgICAgODIsXG4gICAgICAyMTIsXG4gICAgICA1NixcbiAgICAgIDM1LFxuICAgICAgMTU2LFxuICAgICAgMTU3LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICA3MyxcbiAgICAgIDIwMSxcbiAgICAgIDY5LFxuICAgICAgODgsXG4gICAgICAyNTIsXG4gICAgICAxODksXG4gICAgICA4OSxcbiAgICAgIDIyMyxcbiAgICAgIDEzMixcbiAgICAgIDM0LFxuICAgICAgNTEsXG4gICAgICA3MixcbiAgICAgIDQsXG4gICAgICAxNzMsXG4gICAgICA0LFxuICAgICAgNixcbiAgICAgIDIxNyxcbiAgICAgIDIzLFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY0V0xBMVJTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI2NTMzMzM5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MTM2MDMwMDk1Nzc4Nzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tuTWdVOFFxODY5dVFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicUFGYmtmT0ZJaXlhUkdHdUw0UnJSOTJEUGtyai9KUjVXSTJVZHVXZ20wTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGSE4rYTJkM3g0UkVXZHlqQlBQZHdRR2RHeFlGN3l4VTNaSkNPaXZPTzVKZDcwWmp5aUw0YzZWTzRGWk9haEY5eU4yKzV5N05pSnBtVkVlWExtOU9Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzZXBvUEoxNitPNCtMQWpiMGZKSCtUdHV6TDNJWEVicXM4UTdqSmg0cllkUzE5TGRDR2c0aUxTbFpKUCt3VkFWUDZjMDlyNktBZmlXOStIR25BY29DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI2NTMzMzM5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTE1OTg1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhJYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSElhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRVMvYzg3ZXBjRFVpT1BwNWVGNUxJdUprOW9nVW5UNDZUeUlMWmM1Tml0VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU3MDExNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
