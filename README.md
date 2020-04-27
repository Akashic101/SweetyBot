```
   _____                  _         ____        _   
  / ____|                | |       |  _ \      | |  
 | (_____      _____  ___| |_ _   _| |_) | ___ | |_ 
  \___ \ \ /\ / / _ \/ _ \ __| | | |  _ < / _ \| __|
  ____) \ V  V /  __/  __/ |_| |_| | |_) | (_) | |_ 
 |_____/ \_/\_/ \___|\___|\__|\__, |____/ \___/ \__|
                               __/ |                
                              |___/                 
```
A Twitch bot for [Redfur13](https://www.instagram.com/sweetycomics/)
___

## Table of Content
* [General Info](#general-info)
* [Features](#features)
* [How to Install](#how-to-install)
* [TO DO](#to-do)

## General Info
This bot was made for the [Twitch channel](https://www.twitch.tv/Redfur_13) of [Redfur13](https://www.instagram.com/sweetycomics/), with the goal to link all of her social media-accounts and to further improve the quality of her streams.

## Features
Users can enter following commands at the moment, which result in a link to the corresponding website:
* `!instagram` or `!insta`
* `!discord`
* `!facebook` or `!fb`
* `!youtube` or `!yt`
* `!twitter`
* `!webtoon` or `!webtoons`
* `!fiverr`

## How to install
First you need to install [Node](https://nodejs.org/en/). After that, create and go into the folder where the bot should be in, for example with   
`mkdir -p Twitch-bot && cd Twitch-bot`.  
Next you can clone the necessary code with  
`git clone https://github.com/Akashic101/SweetyBot.git`  
When that is done you can use  
`npm install`  
to install all necessary dependencies.

Just to bring everything up-to-date, run  
`npm update`  
and  
`npm fund`  
after this. This is not necessary, but bringing everything up to the newest version is always a good idea.

Next, create a new file in the root-directory and name it `.env`. In that file, enter following lines and change them to your liking:  
```
IDENTITY_PASSWORD= <your password here>  
```   
You can get this password by signing into your bot-account and go to https://twitchapps.com/tmi/, there click on `Connect` and copy the token.

After that you can launch the bot either with  
`node .`  
or  
`node index.js`

## TO DO
* Add more social-media commands
* Connect the bot to Spotify
* Add other optional commands like `!uptime`
* Add proper command handling
