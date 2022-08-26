// MINIMAL SERTAKAN SUMBER KALAU MAU RECODE :)
// MADE BY AMIRUL DEV
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import yargs from 'yargs';

function gs(list) {
    return list[Math.floor(Math.random() * list.length)]
}

//-- Panggil Setting
const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.set = {
    opts: opts,
    prefix: new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']'),
    name: "MyWA BOT",
    version: "1.0.1",
    dev: "Amirul Dev",
    desc: "Made by Dikode Team",
    browser: "firefox",
    wm: "MyWA BOT By Amirul Dev",
    pack: `🔥 NADIA BOT • IG: AMIRUL.DEV 🔥`,
    auth: ``,
    owner: [
        ['687852104', 'Amirul Dev ࿐', true, 'Founder Dikode 🔥', 'amirul@skyn.tech', 'https://amiruldev.my.id', 'MyWA BOT Developer'],
        ['6285772679192', 'Nadia Cans ツ', true, 'CS Dikode', 'nadia@dikode-team.com', 'https://nadia.id', 'MyWA BOT Developer']
    ],
    mods: [],
    prems: [],
    timestamp: {
        start: new Date
    },
    //-- target log
    pc: `687852104@s.whatsapp.net`,
    gc: "120363043479716462@g.us",
    //-- setting waktu cronjob
    clear: 1200000,

    //-- setting api
    xteam: 'https://api.xteam.xyz/',
    axteam: 'd90a9e986e18778b'


}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
    unwatchFile(file)
    console.log(chalk.redBright("Config telah diupdate!!"))
    import(`${file}?update=${Date.now()}`)
})
