import colors from "colors";
import moment from "moment-timezone";
import { fileURLToPath } from 'url';
import { format } from "util";
import { filename } from "desm";

// main configs
global.botNumber = "2250575130788";
global.bot = {
  public: true,
  antiCall: true,
  owner: ["2250564458549", "2250564458549", "0564458549"],
  sessionName: "{"noiseKey":{"private":{"type":"Buffer","data":"aHvcum+0nVO6Sj7VLbPLknpCjSgkN0tBA9q8EjN2h2Q="},"public":{"type":"Buffer","data":"wvIOjSjLySHVSKpVqZ3nHaxg29oBQcQ0E2e6Si8w43s="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+K8as6x+2fxVFYCyBzD1Q/Q47RKeOww8Nc+7k7DWVm4="},"public":{"type":"Buffer","data":"WIcjLemiPiOBNEm4lwxGn+l6HrQrJsdTsk5f0AS2emo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"sLMrM9PF0CF5sP0K8i8wv4OJjEYd9SSDgklOvQSJu28="},"public":{"type":"Buffer","data":"1EOustVIQbF3VliMBPWTMIND01vvNrHRz+87HfphR1I="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iLUi6IvPpmUippgy9DNlMvmKWXXR5uhdQV74RCw7c2A="},"public":{"type":"Buffer","data":"f65Yi8LdLw3kqgODpj0pBYVP7n4bGFpfDpzcOIe9lk0="}},"signature":{"type":"Buffer","data":"hTOzUIjqIiW1lbO5W4QK8r+1oTsrgfITBX0zgLuJTWpAoiMqKLvALlR975+xVX98mDqovyvIOXnyBzqg6o19DQ=="},"keyId":1},"registrationId":101,"advSecretKey":"LyY3GgLQz5+FinGptI8tnZNJqI0jaT80CfJFeY8syyU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"RGBHLgm0Rs2NWIybihc3NQ","phoneId":"a8f8e483-e6f1-4fdc-8b77-71631996b348","identityId":{"type":"Buffer","data":"T84uFCUxLQjROhuCWfLocvjKakQ="},"registered":true,"backupToken":{"type":"Buffer","data":"mefcyuqI0FhybNjfRZsw2+F81bQ="},"registration":{},"pairingCode":"BJFJGZ5V","me":{"id":"22575130788:46@s.whatsapp.net","name":"𝐏𝐇𝐀𝐑𝐎𝐔𝐊"},"account":{"details":"CNK2zZACELODxbwGGAMgACgA","accountSignatureKey":"KoXlFKBrvJ9Mkk6xAhPe/rGkbcIuDOvvmKc3IiXwiRE=","accountSignature":"Mxc2nyrCInbxYR5oou06BBiaqdhSKBIGfQK06QoNLC9U2o0aOYTRFftn2EDofuqDa9Lut7mHC5rG9A9o5iUbCg==","deviceSignature":"4cSLPghzmj3cUcToxWKPFYYZhV6smL4nSOKLk8fSXydXqAMQH1TNjONdEa3JRncQuDUEQ9i3QqXz0+qW8AelCg=="},"signalIdentities":[{"identifier":{"name":"22575130788:46@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSqF5RSga7yfTJJOsQIT3v6xpG3CLgzr75inNyIl8IkR"}}],"platform":"smba","lastAccountSyncTimestamp":1737572801,"myAppStateKeyId":"AAAAABd5"} ",
  prefix: /^[.]/i
}
Object.defineProperty(global, 'clock', {
  get: function() {
    return moment(Date.now()).tz("Asia/Jakarta").format("DD-MM-YY HH:mm:ss");
  },
  enumerable: true,
  configurable: true
});

// beautify logs
colors.setTheme({
   main: ['brightBlue', 'bold'],
   plain: "brightGrey",
   info: "brightGreen",
   warn: "brightYellow",
   danger: "brightRed"
});

// sticker exif
global.exif = {
  packId: "https://github.com/ZanixonGroup",
  packName: `s.id/amirabot`,
  packPublish: "© Amira-MD",
  packEmail: "zanixon.group@gmail.com",
  packWebsite: "https://github.com/ZanixonGroup",
  androidApp: "https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro",
  iOSApp: "https://apps.apple.com/id/app/muslim-pro-al-quran-adzan/id388389451?|=id",
  emojis: [],
  isAvatar: 0,
}

// alert messages
global.alertMessage = {
  owner: "Features can only be accessed by owner!",
  group: "Features only accessible in group!",
  private: "Features only accessible in private chat!",
  admin: "Features can only be accessed by group admin!",
  botAdmin: "Bot is not admin, you can't use the features!",
  bot: "Features only accessible by bot",
  media: "Reply media...",
  query: "No Query?",
  error: "Seems to have encountered an unexpected error.",
  quoted: "Reply message...",
  wait: "Wait a minute...",
  urlInvalid: "Url Invalid!",
  premium: "Premium Only Features!"
}

global.logs = {
  error: (path, logs) => {
    if(!logs) return;
    console.log(global.clock.info, "[ERROR]".danger, `location: ${filename(path)}`.warn,
    "\n" + format(logs).danger);
  },
  warn: (path, logs) => {
    if(!logs) return;
    console.log(global.clock.info, "[WARN]".warn, `location: ${filename(path)}`.warn,
    "\n" + format(logs).warn);
  },
  commandError: (path, m = {}, logs) => {
    if(!logs) return;
    console.log(global.clock.info, "[COMMAND ERROR]".danger, `location: ${filename(path)}`.warn,
    "\n" + "Sender: ".info + m?.sender,
    "\n" + "Command: ".info + m?.command,
    "\n" + "Body: ".info + m?.body,
    "\n" + "Logs: ".info + format(logs).danger);
  },

}
