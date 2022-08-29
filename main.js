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

function _0x16aa(){const _0x274d0e=['10ozxmKQ','.json','9760zbtyUq','1394673liWAEI','114471sjkLLa','3405108crQihB','77ncGHwj','353255NLlsmO','5806456SffzvQ','1432wlsRuZ','22aeLZRQ','4734522TbggIK','opts','12YkqjvH'];_0x16aa=function(){return _0x274d0e;};return _0x16aa();}const _0x28cbfa=_0x52af;(function(_0x46414b,_0x5b0fd4){const _0x119b47=_0x52af,_0x3814cf=_0x46414b();while(!![]){try{const _0x1cce92=parseInt(_0x119b47(0x1c0))/0x1+parseInt(_0x119b47(0x1c3))/0x2*(-parseInt(_0x119b47(0x1cb))/0x3)+-parseInt(_0x119b47(0x1c2))/0x4*(parseInt(_0x119b47(0x1c9))/0x5)+parseInt(_0x119b47(0x1c6))/0x6*(parseInt(_0x119b47(0x1ca))/0x7)+-parseInt(_0x119b47(0x1c1))/0x8+-parseInt(_0x119b47(0x1c4))/0x9*(parseInt(_0x119b47(0x1c7))/0xa)+-parseInt(_0x119b47(0x1bf))/0xb*(-parseInt(_0x119b47(0x1be))/0xc);if(_0x1cce92===_0x5b0fd4)break;else _0x3814cf['push'](_0x3814cf['shift']());}catch(_0x3e7ac6){_0x3814cf['push'](_0x3814cf['shift']());}}}(_0x16aa,0x59c16));function _0x52af(_0x594295,_0x410230){const _0x16aac9=_0x16aa();return _0x52af=function(_0x52af4d,_0x38d832){_0x52af4d=_0x52af4d-0x1be;let _0x4cbf8d=_0x16aac9[_0x52af4d];return _0x4cbf8d;},_0x52af(_0x594295,_0x410230);}const authFile=(set[_0x28cbfa(0x1c5)]['_'][0x0]||'renz')+_0x28cbfa(0x1c8);
const { state, saveState } = useSingleFileAuthState(_0x16aa())
const store = storeSys.makeInMemoryStore()
const nadia = `${set.opts._[0] || 'renz'}.store.json`
store.readFromFile(nadia)
global.set.store = store
function _0x2ca7(){const _0x1d1c22=['1099285trYZns','6oxFvEi','4205516qxMbzW','3.0','Firefox','3ovxyTP','1281152AsBAYJ','1235048vAfXVw','remoteJid','loadMessage','769848yRuAFa','52985UFijnx','WABOTJS\x20By\x20Dikode','8012799cBrXJF'];_0x2ca7=function(){return _0x1d1c22;};return _0x2ca7();}function _0x5f38(_0x2b439b,_0x2d01be){const _0x2ca778=_0x2ca7();return _0x5f38=function(_0x5f3812,_0x51389e){_0x5f3812=_0x5f3812-0x1dc;let _0x2495b=_0x2ca778[_0x5f3812];return _0x2495b;},_0x5f38(_0x2b439b,_0x2d01be);}const _0x4ada47=_0x5f38;(function(_0x258bf7,_0x3183f4){const _0x392959=_0x5f38,_0x1a0580=_0x258bf7();while(!![]){try{const _0x13c455=parseInt(_0x392959(0x1e6))/0x1+parseInt(_0x392959(0x1e1))/0x2*(-parseInt(_0x392959(0x1e0))/0x3)+-parseInt(_0x392959(0x1e5))/0x4+-parseInt(_0x392959(0x1e9))/0x5+parseInt(_0x392959(0x1dc))/0x6*(parseInt(_0x392959(0x1dd))/0x7)+-parseInt(_0x392959(0x1e2))/0x8+parseInt(_0x392959(0x1e8))/0x9;if(_0x13c455===_0x3183f4)break;else _0x1a0580['push'](_0x1a0580['shift']());}catch(_0xf76802){_0x1a0580['push'](_0x1a0580['shift']());}}}(_0x2ca7,0x523a8));const AmirulDevXNadiaCans={'printQRInTerminal':!![],'auth':state,'browser':[_0x4ada47(0x1e7),_0x4ada47(0x1df),_0x4ada47(0x1de)],'logger':pino({'level':'fatal'}),'syncFullHistory':![],'getMessage':async _0x44f1f6=>(store[_0x4ada47(0x1e4)](_0x44f1f6[_0x4ada47(0x1e3)],_0x44f1f6['id'])||store['loadMessage'](_0x44f1f6['id'])||{})['message']||{'conversation':atob('TWVueWlua3JvbmthbiBwZXNhbi4uLgpzaWxhaGthbiB1bGFuZ2kgcGVzYW4gYXRhdSBrZXRpayAqLm1lbnUqCgpXYWJvdEpTIKkgQW1pcnVsIERldiAmIE5hZGlhIENhbnMKc2NyaXB0OiBodHRwczovL2JpdC5seS93YWJvdGpz')}};

global.conn = makeWASocket(AmirulDevXNadiaCans)
conn.isInit = false

if (!set.opts['test']) {
    setInterval(async () => {
        if (global.db.data) await global.db.write().catch(console.error)
        if (!set.opts['tmp']) try {
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
        global.conn = makeWASocket(AmirulDevXNadiaCans, { chats: oldChats })
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
    .then(() => conn.logger.info('Quick Test Done, nama file session => ', authFile))
    .catch(console.error)
