module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/m99XhXPxFJ", //Support Server Link
  Token: process.env.Token || "ODU4NzcxMjQwNzU1NTI3NzAw.YNi_Cg.HxPqz-ptEE-j3WWM8ixvZv_e93I", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "858771240755527700", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "D4rbcMrDhoyFIQSM_U2Isfk7XT6N3ABG", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "RegalRevolution", //A Secret like a password
  IconURL:
    "https://i.imgur.com/T1FxXV1.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "a1d51ab8563c4c4aa8cb365a31fcb787", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "a110095c38ee420eaa37a1f548158b64", //Spotify Client Secret
  },
};
