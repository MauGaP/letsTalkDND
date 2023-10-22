# letsTalkDND

![alt text](https://github.com/MauGaP/letsTalkDND/blob/main/librarian.png?raw=true)

## Description

This is a chatbot that uses ChatGPT 4 to answer questions related to the lore of dungeons of dragons.
The way it works is by appending this string to any question:

```
Provide an answer in english if the question is in english or in spanish if the question is in spanish, with information, stats, usage, cost or relevant lessons for the following question:
```

## Usage

you need to create 2 environment variables:

`DISCORD_BOT_TOKEN`
 
`OPENAI_API_KEY`

ask @MauGaP for the keys

### Preconditions

Install node.js

run `npm install` to install all the dependencies

### Deployment

if you want to host the bot on your local environment just run `node bot.js`

if you want to host the bot running inside a docker container run the `run.ps1` script.
