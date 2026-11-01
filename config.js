// config.js - ESM Version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (fs.existsSync(path.resolve('config.env'))) {
  dotenv.config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

export default {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: process.env.SESSION_ID || "",
  PREFIX: process.env.PREFIX || ".",
  CHATBOT: process.env.CHATBOT || "off",
  BOT_NAME: process.env.BOT_NAME || "RFK MOS",
  MODE: process.env.MODE || "private",
  REPO: process.env.REPO || "https://github.com/atmods/KHAN-MD",
  WEBPAIR: process.env.WEBPAIR || "https://khanmd-pairx.onrender.com",
  NEWSLETTER_ID: process.env.NEWSLETTER_ID || "",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: process.env.OWNER_NUMBER || "",
  OWNER_NAME: process.env.OWNER_NAME || "RFK CHEKUTHAAN",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(',').map(s => s.trim())
    : [""],
  BANNED: process.env.BANNED
    ? process.env.BANNED.split(',').map(s => s.trim())
    : [],

  STATUS_LIKE_EMOJIS: process.env.STATUS_LIKE_EMOJIS
    ? process.env.STATUS_LIKE_EMOJIS.split(',').map(e => e.trim())
    : ["❤️", "💯"],
  REACT_EMOJIS: process.env.REACT_EMOJIS
    ? process.env.REACT_EMOJIS.split(',').map(e => e.trim())
    : ["❤️", "🔥", "😮", "😎", "🥰", "👏", "🤝", "💯", "✨"],
  OWNER_EMOJIS: process.env.OWNER_EMOJIS
    ? process.env.OWNER_EMOJIS.split(',').map(e => e.trim())
    : ["✨", "💎", "👑", "🔥", "🚀", "⚡", "🌟"],
  LINK_WARNINGS: process.env.LINK_WARNINGS
    ? process.env.LINK_WARNINGS.split(',').map(s => s.trim())
    : [],

  // ===== HEROKU SETTINGS =====
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "RFK MOS VIEWED",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_CALL: process.env.REJECT_CALL || "",

  // ===== REACTION SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  STICKER_NAME: process.env.STICKER_NAME || "RFK MOS",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  STATUS_SENDER: process.env.STATUS_SENDER || "true",

  // ===== AUTO PRESENCE SETTINGS =====
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

  // ===== ANTI FEATURES SETTINGS =====
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_STATUS: process.env.ANTI_STATUS || "true",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",

  // ===== MEDIA & AUTOMATION =====
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/example.jpg",
  BOT_MEDIA_URL: process.env.BOT_MEDIA_URL || "https://youtube.com/@rfkmod4333?si=UsHFEUzyFnaPp35Z",
  AUDIO_URL: process.env.AUDIO_URL || "https://files.catbox.moe/example.mp3",
  AUTO_DOWNLOADER: process.env.AUTO_DOWNLOADER || "false",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DELETE_PATH: process.env.ANTI_DELETE_PATH || "inbox",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_SPAM: process.env.ANTI_SPAM || "false",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_BOT: process.env.ANTI_BOT || "false",
  PM_BLOCKER: process.env.PM_BLOCKER || "false",
  ANTI_MENTION: process.env.ANTI_MENTION || "false",
  ANTI_STATUS_MENTION: process.env.ANTI_STATUS_MENTION || "",
  ANTI_EDIT: process.env.ANTI_EDIT || "true",
  ANTI_EDIT_PATH: process.env.ANTI_EDIT_PATH || "inbox",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "RFK MOS WhatsApp Bot by RFK CHEKUTHAAN",
  AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",

  // ===== WELCOME & GOODBYE SETTINGS =====
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || "Hello @user",
  GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || "Goodbye @user",

  VERSION: process.env.VERSION || "7.0.0 BETA",
  TIMEZONE: process.env.TIMEZONE || "Asia/Kolkata",
};
