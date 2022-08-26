/* 
+ EXEC 1
+ MADE BY AMIRUL DEV
+ GITHUB: amiruldev20
+ IG: @amirul.dev
*/

//-- MODULE EXTERNAL
import syntaxerror from 'syntax-error'
import { format } from 'util'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'
import fetch from 'node-fetch'
import axios from 'axios'
import * as bail from '@adiwajshing/baileys'
const { 
  default: _makeWaSocket,
  proto
} = (await import('@adiwajshing/baileys')).default
import jimp from 'jimp'
import fs from 'fs'
import cek from '@adiwajshing/baileys'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)

let handler = async (m, _2) => {
let { conn, usedPrefix, noPrefix, args, groupMetadata } = _2
let participants = groupMetadata.participants
let _return
let _syntax = ''
let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix
let old = m.exp * 1
try {
let i = 15
let f = {
exports: {}
}
let exec = new (async () => { }).constructor('print', 'm', 'handler', 'require', 'fetch', 'format', 'axios', 'bail', 'jimp', 'fs', 'proto', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'participants', 'module', 'exports', 'argument', _text)
_return = await exec.call(conn, (...args) => {
if (--i < 1) return
console.log(...args)
return conn.reply(m.chat, format(...args), m)
}, m, handler, require, fetch, format, axios, bail, jimp, fs, proto, conn, CustomArray, process, args, groupMetadata, participants, f, f.exports, [conn, _2])
} catch (e) {
let err = syntaxerror(_text, 'Execution Function', {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "module"
})
if (err) _syntax = '```' + err + '```\n\n'
_return = e
} finally {
conn.reply(m.chat, _syntax + format(_return), m)
m.exp = old
}

}
handler.help = ['> ', '=> ']
handler.tags = ['owner']
handler.customPrefix = /^=?> /
handler.command = /(?:)/i

handler.rowner = true

export default handler

class CustomArray extends Array {
constructor(...args) {
if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
else return super(...args)
}
}
