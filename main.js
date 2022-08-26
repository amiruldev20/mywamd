//-- MY CONFIG
import './config.js';

//-- MODULE EXTERNAL
import { createRequire } from "module";
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
global.set.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.set.__dirname = function dirname(pathURL) { return path.dirname(global.set.__filename(pathURL, true)) }; global.set.__require = function require(dir = import.meta.url) { return createRequire(dir) }
import * as ws from 'ws';
import {
    readdirSync,
    statSync,
    unlinkSync,
    existsSync,
    readFileSync,
    watch
} from 'fs';
import yargs from 'yargs';
import { spawn } from 'child_process';
import lodash from 'lodash';
import syntaxerror from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import pino from 'pino';
const {
    useSingleFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    msgRetryCounterMap
} = await import('@adiwajshing/baileys')
const cek = fetchLatestBaileysVersion
import { Low, JSONFile } from 'lowdb';

//-- MODULE INTERNAL
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import storeSys from './lib/store.js'
import {
    mongoDB,
    mongoDBV2
} from './lib/mongoDB.js';

const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

const __dirname = global.set.__dirname(import.meta.url)

global.db = new Low(
    /https?:\/\//.test(set.opts['db'] || '') ?
        new cloudDBAdapter(set.opts['db']) : /mongodb(\+srv)?:\/\//i.test(set.opts['db']) ?
            (set.opts['mongodbv2'] ? new mongoDBV2(set.opts['db']) : new mongoDB(set.opts['db'])) :
            new JSONFile(`${set.opts._[0] ? set.opts._[0] + '.' : ''}db.json`)
)
global.set.DATABASE = db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
    if (db.READ) return new Promise((resolve) => setInterval(async function () {
        if (!db.READ) {
            clearInterval(this)
            resolve(db.data == null ? global.loadDatabase() : db.data)
        }
    }, 1 * 1000))
    if (db.data !== null) return
    db.READ = true
    await db.read().catch(console.error)
    db.READ = null
    db.data = {
        users: {},
        chats: {},
        stats: {},
        msgs: {},
        sticker: {},
        settings: {},
        ...(db.data || {})
    }
    global.db.chain = chain(db.data)
}
loadDatabase()
const authFile = `${set.opts._[0] || 'renz'}.json`
const { state, saveState } = useSingleFileAuthState(authFile)

const store = storeSys.makeInMemoryStore()
const nadia = `${set.opts._[0] || 'renz'}.store.json`
store.readFromFile(nadia)
global.set.store = store
//-- config connection
function _0x3872(){const _0x18ae75=['65Vwjlnd','2DkQOgw','459htIAmN','8773770iZSqDP','TWVueWlua3JvbmthbiBwZXNhbi4uLgpzaWxhaGthbiB1bGFuZ2kgYXRhdSBrZXRpayAubWVudQoqV2Fib3RKUyogqSBBbWlydWwgRGV2ICYgTmFkaWEgQ2Fucw==','6162324TBEXej','4PnVyCV','3.0','14045796UnXhBF','4792971pTHiHa','loadMessage','2568434VzbDWP','1615449eTbBDG','45688ccJqXX','40pZdrPo','conn','message','5JQmhYm'];_0x3872=function(){return _0x18ae75;};return _0x3872();}const _0x4a19ce=_0x3b0f;(function(_0xb7d6ad,_0x1cbcad){const _0x3bc67c=_0x3b0f,_0x3bc913=_0xb7d6ad();while(!![]){try{const _0x244f22=parseInt(_0x3bc67c(0x8c))/0x1*(-parseInt(_0x3bc67c(0x93))/0x2)+-parseInt(_0x3bc67c(0x89))/0x3*(parseInt(_0x3bc67c(0x98))/0x4)+-parseInt(_0x3bc67c(0x91))/0x5*(parseInt(_0x3bc67c(0x95))/0x6)+parseInt(_0x3bc67c(0x97))/0x7+-parseInt(_0x3bc67c(0x8d))/0x8*(parseInt(_0x3bc67c(0x94))/0x9)+-parseInt(_0x3bc67c(0x8e))/0xa*(parseInt(_0x3bc67c(0x8b))/0xb)+-parseInt(_0x3bc67c(0x88))/0xc*(-parseInt(_0x3bc67c(0x92))/0xd);if(_0x244f22===_0x1cbcad)break;else _0x3bc913['push'](_0x3bc913['shift']());}catch(_0x31e03c){_0x3bc913['push'](_0x3bc913['shift']());}}}(_0x3872,0xcb26d));const amirul={'printQRInTerminal':!![],'auth':state,'browser':['WabotJS\x20by\x20Dikode\x20Team',set['browser'],_0x4a19ce(0x87)],'logger':pino({'level':'fatal'}),'syncFullHistory':![],'getMessage':async _0x39d354=>(store[_0x4a19ce(0x8a)](_0x39d354['remoteJid'],_0x39d354['id'])||store[_0x4a19ce(0x8a)](_0x39d354['id'])||{})[_0x4a19ce(0x90)]||{'conversation':atob(_0x4a19ce(0x96))}};function _0x3b0f(_0x5050b2,_0x17ed8b){const _0x387298=_0x3872();return _0x3b0f=function(_0x3b0ff9,_0x39dbb3){_0x3b0ff9=_0x3b0ff9-0x87;let _0x2de1cb=_0x387298[_0x3b0ff9];return _0x2de1cb;},_0x3b0f(_0x5050b2,_0x17ed8b);}global[_0x4a19ce(0x8f)]=makeWASocket(amirul);
conn.isInit = false

if (!set.opts['test']) {
    setInterval(async () => {
        if (global.db.data) await global.db.write().catch(console.error)
        if (set.opts['tmp']) try {
            clearTmp()

        } catch (e) {
            //console.error(e) 
        }
    }, 60 * 1000)
}
if (set.opts['server']) (await import('./server.js')).default(global.conn, PORT)


function clearTmp() {
    const tmp = [tmpdir(), join(__dirname, './tmp')]
    const filename = []
    tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
    return filename.map(file => {
        const stats = statSync(file)
        if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
        return false
    })
}



async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin } = update
    if (isNewLogin) conn.isInit = true
    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
    if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
        console.log(await global.reloadHandler(true).catch(console.error))
        set.timestamp.connect = new Date
    }

    if (global.db.data == null) loadDatabase()
}


process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true;
let handler = await import('./handler.js')

global.reloadHandler = async function (restatConn) {
    try {
        const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
        if (Object.keys(Handler || {}).length) handler = Handler
    } catch (e) {
        console.error(e)
    }
    if (restatConn) {
        const oldChats = global.conn.chats
        try { global.conn.ws.close() } catch { }
        conn.ev.removeAllListeners()
        global.conn = makeWASocket(amirul, { chats: oldChats })
        isInit = true
    }
    if (!isInit) {
        conn.ev.off('messages.upsert', conn.handler)
        conn.ev.off('group-participants.update', conn.participantsUpdate)
        conn.ev.off('groups.update', conn.groupsUpdate)
        conn.ev.off('message.delete', conn.onDelete)
        conn.ev.off('connection.update', conn.connectionUpdate)
        conn.ev.off('creds.update', conn.credsUpdate)
    }

    conn.welcome = `Hai, @user 👋
selamat datang di *@subject*

Baca deskripsi dibawah!!
*@desc*`
    conn.bye = `Sampai jumpa lagi @user`
    conn.spromote = `Selamat @user, anda sekarang menjadi admin grup`
    conn.sdemote = `@user sekarang bukan admin`
    conn.sDesc = `Deskripsi grup telah diubah
baca deskripsi baru dibawah
*@desc*`
    conn.sSubject = `Nama grup telah diubah menjadi @subject`
    conn.sIcon = `Icon grup telah diganti`
    conn.sRevoke = `Link grup telah diganti menjadi @revoke`
    conn.handler = handler.handler.bind(global.conn)
    conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
    conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
    conn.onDelete = handler.deleteUpdate.bind(global.conn)
    conn.connectionUpdate = connectionUpdate.bind(global.conn)
    conn.credsUpdate = saveState.bind(global.conn)

    conn.ev.on('messages.upsert', conn.handler)
    conn.ev.on('group-participants.update', conn.participantsUpdate)
    conn.ev.on('groups.update', conn.groupsUpdate)
    conn.ev.on('message.delete', conn.onDelete)
    conn.ev.on('connection.update', conn.connectionUpdate)
    conn.ev.on('creds.update', conn.credsUpdate)
    //conn.ev.on('call', conn.rejcall)

    isInit = false
    return true
}

const pluginFolder = set.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
    for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
        try {
            let file = set.__filename(join(pluginFolder, filename))
            const module = await import(file)
            global.plugins[filename] = module.default || module
        } catch (e) {
            conn.logger.error(e)
            delete global.plugins[filename]
        }
    }
}
filesInit().then(_ => {
    //console.log(Object.keys(global.plugins))
}
).catch(console.error)

global.reload = async (_ev, filename) => {
    if (pluginFilter(filename)) {
        let dir = global.set.__filename(join(pluginFolder, filename), true)
        if (filename in global.plugins) {
            if (existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
            else {
                conn.logger.warn(`deleted plugin '${filename}'`)
                conn.reply(`${global.o1}@s.whatsapp.net`, `Plugins *${filename}* telah dihapus!!`)
                conn.reply(`${global.o2}@s.whatsapp.net`, `Plugins *${filename}* telah dihapus!!`)
                return delete global.plugins[filename]
            }
        } else conn.logger.info(`requiring new plugin '${filename}'`)
        /*
        conn.reply(`${global.o1}@s.whatsapp.net`, `Plugins *${filename}* telah ditambahkan!!`)
        conn.reply(`${global.o2}@s.whatsapp.net`, `Plugins *${filename}* telah ditambahkan!!`)
        */
        let err = syntaxerror(readFileSync(dir), filename, {
            sourceType: 'module',
            allowAwaitOutsideFunction: true
        })
        if (err) {
            conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`)
            conn.reply(`${global.o1}@s.whatsapp.net`, `Syntax error *${filename}*

log:
${format(err)}`)
            conn.reply(`${global.o2}@s.whatsapp.net`, `Syntax error *${filename}*

log:
${format(err)}`)
        }
        else try {
            const module = (await import(`${global.set.__filename(dir)}?update=${Date.now()}`))
            global.plugins[filename] = module.default || module
        } catch (e) {
            conn.logger.error(`error require plugin '${filename}\n${format(e)}'`)
            conn.reply(`${global.o1}@s.whatsapp.net`, `Eror load *${filename}*
log:
${format(e)}`)
            conn.reply(`${global.o2}@s.whatsapp.net`, `Eror load *${filename}*
log:
${format(e)}`)
        } finally {
            global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
        }
    }
}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()

// Quick Test
async function _quickTest() {
    let test = await Promise.all([
        spawn('ffmpeg'),
        spawn('ffprobe'),
        spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
        spawn('convert'),
        spawn('magick'),
        spawn('gm'),
        spawn('find', ['--version'])
    ].map(p => {
        return Promise.race([
            new Promise(resolve => {
                p.on('close', code => {
                    resolve(code !== 127)
                })
            }),
            new Promise(resolve => {
                p.on('error', _ => resolve(false))
            })
        ])
    }))
    let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
    console.log(test)
    let s = global.support = {
        ffmpeg,
        ffprobe,
        ffmpegWebp,
        convert,
        magick,
        gm,
        find
    }
    // require('./lib/sticker').support = s
    Object.freeze(global.support)

    if (!s.ffmpeg) {
        conn.logger.warn(`Silahkan install ffmpeg terlebih dahulu agar bisa mengirim video`)
    }

    if (s.ffmpeg && !s.ffmpegWebp) {
        conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
    }

    if (!s.convert && !s.magick && !s.gm) {
        conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
    }


}
_quickTest()
    .then(() => conn.logger.info('Quick Test Done ', authFile))
    .catch(console.error)