const tmi = require('tmi.js');
require('dotenv').config();

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: "SweetyTheRagdoll",
        password: process.env.IDENTITY_PASSWORD,
    },
    channels: ['Redfur_13'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action('Redfur_13', 'SweetyBot is now online');
});

client.on('chat', (channel, user, message, self) => {
    if(self) return;
    const commandmessage = message.trim().toLowerCase();

    if (commandmessage === '!instagram' || commandmessage === '!insta') {
        client.say('Redfur_13', 'https://www.instagram.com/sweetycomics')
    }

    if (commandmessage === '!discord') {
        client.say('Redfur_13', 'https://discordapp.com/invite/U4rymnU')
    }

    if (commandmessage === '!facebook' || commandmessage === '!fb') {
        client.say('Redfur_13', 'https://www.facebook.com/Redfur13-2323949451264229/?ref=aymt_homepage_panel&eid=ARBQBOOYhk572IzVWcoV08jK4-y8bf8sSRWQ-KRxqrryne0yGezIFTfZzgmEUg78Xn3D0VU15YKeTW2A')
    }

    if (commandmessage === '!youtube' || commandmessage === '!yt') {
        client.say('Redfur_13', 'https://www.youtube.com/channel/UCEefUPort7KP98FpTQGv91A')
    }

    if (commandmessage === '!twitter') {
        client.say('Redfur_13', 'https://twitter.com/redfur13')
    }

    if (commandmessage === '!webtoon' || commandmessage === '!webtoons') {
        client.say('Redfur_13', 'https://www.webtoons.com/en/challenge/sweety-comics/list?title_no=389966')
    }

    if(commandmessage === '!fiverr') {
        client.say('Redfur_13', 'https://www.fiverr.com/share/9dNkgd')
    }

    if(commandmessage === '!command' || commandmessage === '!commands') {
        client.say('Redfur_13', '!instagram, !discord, !facebook, !youtube, !twitter, !webtoon, !fiverr')
    }

    if(commandmessage === '!uptime') {
        client.say('Redfur_13', 'The hell do I know, I\'m a cat')
    }
    
    if(commandmessage === '!spotify') {
        client.say('Redfur_13', 'Favorites: https://open.spotify.com/playlist/3UME90dv7wKZyPzF8dZR1T?si=ldE-69ntRGKEQ_Dko9tWzg');
        client.say('Redfur_13', 'Soundtracks: https://open.spotify.com/playlist/0UjcGDnWcOLUnevCTqtpEh?si=Bv7ojc8XRSqeiYnrjqK6_Q')
    }
});
