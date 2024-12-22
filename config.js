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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348070549443";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_25_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICA0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkwzQzlsTGd3OEZwZHU5TlQrdjdISGp5Q1I1djhNcVc4bzlzVEdWdnNoT289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA3MDU0OTQ0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEM0MzQwMjVCMzg0N0YwRDc3OEUxNTlBNDcyMEY0NDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0ODc3NTExXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRkS1ppckMyVFctTmdKT3d4LUc4WmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWIwM2ZlNTItNWMyZi00YTRkLTkwM2EtOWYyMzkxNmI1OTYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMixcbiAgICAgIDE2LFxuICAgICAgMjE1LFxuICAgICAgMjI0LFxuICAgICAgMTYxLFxuICAgICAgMjksXG4gICAgICA1NCxcbiAgICAgIDEzMSxcbiAgICAgIDEzNSxcbiAgICAgIDE4NyxcbiAgICAgIDExOSxcbiAgICAgIDE4OCxcbiAgICAgIDYyLFxuICAgICAgMTk1LFxuICAgICAgMzksXG4gICAgICA3OCxcbiAgICAgIDUzLFxuICAgICAgMjMxLFxuICAgICAgNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMzQsXG4gICAgICAyMCxcbiAgICAgIDgsXG4gICAgICAxMzYsXG4gICAgICAyMCxcbiAgICAgIDE2NCxcbiAgICAgIDExNixcbiAgICAgIDExNSxcbiAgICAgIDYzLFxuICAgICAgMTA5LFxuICAgICAgMTUwLFxuICAgICAgMTkzLFxuICAgICAgODcsXG4gICAgICAyMDYsXG4gICAgICA0NixcbiAgICAgIDIzMCxcbiAgICAgIDE0NSxcbiAgICAgIDE2NyxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1ZFQVFUVkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzA1NDk0NDM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NzM5MjI5NzQ5NDEzOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tQc3pONEVFTC9Db0xzR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicExtdzJhQnRaV2dwVEYvenNYU2I1VzQyVEc2MlYwdURZckJIZ25OWEp4OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzbFpoMlU4SER3Z2lPa01SQmpBZENNemU3a2E5bDBIM0JEdjFtZXdNRElqZ1NNdlFoOFRkZHVqcGhTRzRDWVg3dDJpQnowaFJLSVRrM0l2bGcyaERDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBdkpvalhacnlBbW1GNHBDWndHN0xoMkVhSTdlbEExRjUzMVFjOVkrbWVqRjM0bDV5VnZwaVBCdHRJVnBCeWpBTG4yZkp2cTdRWkxWQndnTUVuSmZEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDcwNTQ5NDQzOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODc3NTA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRERzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFERHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQWko1OTZnU1RlWWlPTmkyL0doOUtoZmxlcWlOU0x5bjN4RVFuNjhzZGZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNzIxMzMxNTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
