const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="mightytechcompanylimited@gmail.com"
global.location="Osun state,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/nigeria";
global.github=process.env.GITHUB|| "https://github.com/mighty-tech-001";
global.gurl  =process.env.GURL  || "https://https://whatsapp.com/channel/0029VakXwSWHVvTZfXG15y0C";
global.website=process.env.GURL || "https://whatsapp.com/2349159868548" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://https://i.imgur.com/A1frbIr.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ mightytech" 


global.devs = "2349159868548" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349159868548";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,23xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_56_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICA1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MixcbiAgICAgICAgMTc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSFVXdjRYcFRKK2p1NWpneEI2RVQvd2VmTUJWRDJtVldDL0JpOURIUXBSUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNjFkZmgweF9TdG1lVXdTZ1VaU3BWd1wiLFxuICBcInBob25lSWRcIjogXCJiMTM3OGU3My1mYzVhLTQ3YTctOTY2NC0zMmZjYTA4ZTZiNGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMjUsXG4gICAgICAxNyxcbiAgICAgIDgzLFxuICAgICAgNzMsXG4gICAgICA1NyxcbiAgICAgIDgsXG4gICAgICAxMjIsXG4gICAgICAxNDMsXG4gICAgICAxOTAsXG4gICAgICAyNDMsXG4gICAgICA5NyxcbiAgICAgIDEwLFxuICAgICAgMjE0LFxuICAgICAgMTk3LFxuICAgICAgMTQxLFxuICAgICAgMjMzLFxuICAgICAgMTcyLFxuICAgICAgMjAzLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTMyLFxuICAgICAgMjI1LFxuICAgICAgOTAsXG4gICAgICAxNjAsXG4gICAgICAxODgsXG4gICAgICAzNSxcbiAgICAgIDEyMixcbiAgICAgIDksXG4gICAgICAxMzYsXG4gICAgICA1NSxcbiAgICAgIDMzLFxuICAgICAgNDgsXG4gICAgICAxNTEsXG4gICAgICAxODEsXG4gICAgICA0MyxcbiAgICAgIDEwNCxcbiAgICAgIDgzLFxuICAgICAgNTQsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCWUcxVFNWNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1OTg2ODU0ODo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODIyMzYwNDA4MTg3OTA6OTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkhFL0lrQ0VLaVVxTFVHR0JZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJidDVrQk9YNHdKanRBdnNIUW9IeWF3NkpWL3RCNkNFWEhxUnNlNmRuN1NnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRHeGhrQ08yK1cvaEZRYktiWVZlZGZsYTNNUCsxRTh3YllmZTI2ZVI3bWJjaFkxR0s1OUd1bFFTQUNWWTB5S1V1MncyUE1nS0wwN3Urb1NOZDJlT0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZaZUd4RXlMdE1vd1JBZXFwamNjZ21acHEra0lSNEdaL3BVbUpyTWhVTy9XbmZFL3BoYVlCQmthNkhBamdERlZDUXk4clBKWG80bnNnQmZrUjM4bmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTk4Njg1NDg6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDE5NzU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnowXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKejAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOdmF4MjUyYnlISFdzWmJ3UWM0MmdZM0xuVnhDMnlBNXZoRmVESG4yUk5FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1Nzc4NTYxNyxcImN1cnJlbnRJbmRleFwiOjIwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDExLDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyNDg1NjczNjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mighty Tech』```", //*『sᴜʙsᴄʀɪʙᴇ • Mighty Tech』*\n youtube.com/@demirth_digitals"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "mighty tech bot",
  ownername:process.env.OWNER_NAME|| "mighty tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
