import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`

let info = 
`
*SEWA BOT*
DISKON 50%
HARGA ASLI 20K PERMANEN✖️
SEKARANG CUMA 10K PERMANEN✔️
BURUAN SEBELUM DISKON HABIS!
`
  /*  {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `⟥⟝⟢⟨ Sᴇᴡᴀ Bᴏᴛ ⟩⟣⟞⟤`,
rows: [
{title: "⟣⟨ HEMAT ⟩⟢",
rowId: '.store sewabottt 7 Hari',
description: 'Pʀɪᴄᴇ Sᴇᴡᴀ 5 ᴋ : 7 Hᴀʀɪ' },
{title: "⟣⟨ NORMAL ⟩⟢",
rowId: '.store sewabottt 30 Hari',
description: 'Pʀɪᴄᴇ Sᴇᴡᴀ 10 ᴋ : 30 Hᴀʀɪ' },
{title: "⟣⟨ PRO ⟩⟢",
rowId: '.store sewabottt Permanenn',
description: 'Pʀɪᴄᴇ Sᴇᴡᴀ 20 ᴋ : PERMANEN' },
{title: "⟣⟨ DISKON 50% ⟩⟢",
rowId: '.store sewabottt Permanen',
description: 'Pʀɪᴄᴇ Sᴇᴡᴀ 10 ᴋ : Permanen' },
]},
{
title: `${htjava} PREMIUM ✦-------`,
rows: [
{title: "🌟 PERMANEN", 
rowId: '.order *Paket:* HEMAT • Premium', 
description: 'PRICE: 15k PERMANEN' },
]},
]

const listMessage = {
  text: info,
  footer:  `Bot Online 24 Nonstop.\n📆 : ${week} ${weton} ${date}\n⌛: ${wibb}`,
  title: '⬒ ───⟢⟨ *List Sewa Bot* ⟩⟣─── ⬒',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   m.reply('Jika mau sewa bot nya, klik link ini *Https://wa.me/+62896-5296-3317?text=permisi+saya+mau+sewa+bot* ')
  break
  case 'aa': {
  m.reply('ʜᴀʟᴏ:ᴠ')
  }
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
  /* m.reply('Jika mau beli premium, klik link ini *Https://wa.me/+62896-5296-3317?text=permisi+saya+mau+beli+premium*_')*/
 }

handler.help = ['store' 'sewa' 'sewabot']
handler.tags = ['main']
handler.command = /^(store|sewa|sewabot)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
