//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "smith712233@gmail.com";
global.location = "Johannesburg , south Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/J0ThzSpa4yc1zJ6jCxRNDl";
global.website = process.env.GURL || "https://chat.whatsapp.com/J0ThzSpa4yc1zJ6jCxRNDl";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "27660169525";
global.sudo = process.env.SUDO || "27660169525";
global.owner = process.env.OWNER_NUMBER || "27634624586";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0xDWCtjdXJTcE9qU1FvYk9KRUtCNTAzdnJVYkM0NXN5aFM4a2tlZGlGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHNFMFFIb2VHeVNZdWovQTNsbjVUMFhPWmx5TzNBTFVxMCs1a0VHZnNGST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT0ZMdll1S2tPOFd5VkxkSTBnWmdsQmJhTllGT2JMcEhKOElCakxuVTJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4b211cUJMUlRwRkRWS21tMWRUa3VrcVVCdmQreXFBN1NjcmF5ZGE0K2kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJNGpnNVJ3Y3IzbXdvU1RXOFFwaW1aaFo0WXFxTVI3NmV6c0FMb0R0RUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldrUDloYUl3ZGRzTTVFL24rd3JHdzFuNXhLSG9PQlNaNzZBVlFNWTdNSGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1B0VDJycXZabGl2YVBwWnVqdUV3R2RyQmZ3SXVQc0lYRTMzOG9hdnFYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkhxT21CZTVaREppT3N6YnIwTk84bU9MWTMwdEZ4cXBFSE9HTFdsMWlFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFUWGpwSlRzVFlpQWJVSVYyd2ZEVnBkRWN0bHE0eENQOG8vcVpNQXdQVnVvRUhYL3JyWjlGSHFDb3lNbGlkelNkamtMQ0cvdC9hQlo4T3NtQ1l4bWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJpWFM0NjNMbkJwQWJ0VGFwaEY2NVlwWW5YK2NteVZTemhLbjN4UGN6TUhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjYwMTY5NTI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIzNzkyM0M2N0UwMzcxNDA1MEM4NjVENjc5Mzk3NkMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUyODA3ODl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjYwMTY5NTI1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNDNDA2OUMwRDA5MkEzOEJCQzQ4QkQ4RkY1Njc4NzREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUyODA3OTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlpxYktubVg1UVVlcFhESDBlVzZ0bHciLCJwaG9uZUlkIjoiOGY4YTNlNGMtMWY3My00MTAxLTgwZmItYjNkZTUzYjVlOTY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR2clIraWl3bS9zWmdlK3pkSkczc09EVExQbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrdnlOT2NnVE56eUZJenZTWFVNTEthdWNKY009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRE1WSk43SFIiLCJtZSI6eyJpZCI6IjI3NjYwMTY5NTI1OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRyaXN0YW4oVHVlc2RheSkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ042STY3WUJFSVRrMXJZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVMUW11UHIzelJuNnFWNmUybGhzRWxoWXVjSEJBUDBBSzlnT250dnIvaWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRxdGJHaERGTlBMOUdKUUpUMHlqNmtZSmN3TUdiS2xwbDVISXNFYTkxdFpPT1RUc1V1YkN5Z29tNHRyYjVHTUFNRVhXQXR5czczbGRaK0NwZ081YkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYWUtpOG5lcHRNMTJvV2w3WjZXVSs3TWRwWEJsT29KSFk0VzI0aWdCNDhlZWxFR0RFMHNYcEM4QmRiREhoZnlxc01VVHlkREJ4d29CdG5KSDlETFppQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjYwMTY5NTI1OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJDMEpyajY5ODBaK3FsZW50cFliQkpZV0xuQndRRDlBQ3ZZRHA3YjYvNG8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUyODA3ODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS3hRIn0="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "Tristan®",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "Tristan",
  errorChat: process.env.ERROR_CHAT || "❌",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
