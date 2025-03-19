
olá, bom dia, boa tarde e boa noite!

yatomodas¿ na área 👻

aqui estão alguns comandos usando a api da nexus, as cases são free e não precisam de key

obs: todas as cases usam "client.sendMessage" nas cases, olhe em uma de suas outras cases e veja se também é client.sendMessage ou outro, caso seja outro. tipo conn.sendMessage ou sabrina.sendMessage, você tem que ajustar!

CASES ABAIXO:

case 'p':
if(!q) return reply(`Olá ${pushname}, Você  esqueceu  de colocar  o nome da música Exemplo ${prefix}play teto`)
nexus = await fetchJson(`https://nexus-api.shop/youtube/play?query=${q}`)
reply('Estou pesquisando sua música..')
client.sendMessage(from, {image: {url: nexus.thumb}, caption: `
「 PLAY AUDIO NEXUS 」

➤ۣۜۜ͜͡🍿 Titulo: ${nexus.titulo}

➤ۣۜۜ͜͡🍿 Duração: ${nexus.duracao} segundos 

➤ۣۜۜ͜͡🍿 Canal: ${nexus.canal}

➤ۣۜۜ͜͡🍿 Views: ${nexus.views}

ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`}, {quoted: info})
client.sendMessage(from, {audio: {url: `https://nexus-api.shop/youtube/mp3?url=${nexus.link}`}, mimetype: "audio/mpeg"}, {quoted: info})
break

case 'playvid':
if(!q) return reply(`Olá ${pushname}, Você  esqueceu do nome do video Ex: ${prefix}playvid teto`)
nexus = await fetchJson(`https://nexus-api.shop/youtube/play?query=${q}`)
reply('Estou pesquisando seu video..')
client.sendMessage(from, {image: {url: nexus.thumb}, caption: `「 PLAY VIDEO NEXUS 」

➤ۣۜۜ͜͡🍿 Titulo: ${nexus.titulo}

➤ۣۜۜ͜͡🍿 Duração: ${nexus.duracao} segundos 

➤ۣۜۜ͜͡🍿 Canal: ${nexus.canal}

➤ۣۜۜ͜͡🍿 Views: ${nexus.views}

ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`}, {quoted: info})
client.sendMessage(from, {video: {url: `https://nexus-api.shop/youtube/mp4?url=${nexus.link}`}, mimetype: "video/mp4"}, {quoted: info})
break

case 'instagram':
if(!q) return reply(`Você esqueceu de colocar a url Exemplo: ${prefix}instagram url`)
reply('Estou processando seu video..')
client.sendMessage(from, {video: {url: `https://nexus-api.shop/api/instagram?url=${q}`}, mimetype: "video/mp4"}, {quoted: info})
break

case 'kwai':
if(!q) return reply(`Você esqueceu de colocar a url Ex: ${prefix}kwai url`)
reply('Estou processando seu video..')
client.sendMessage(from, {video: {url: `https://nexus-api.shop/api/kwai?url=${q}`}, mimetype: "video/mp4"}, {quoted: info})
break

case 'pin': case 'pinterest':
if(!q) return reply(`Exemplo: pinterest Luffy`)
reply('Estou pesquisando sua imagem..')
try {
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/pinterest?q=${q}`}}, {quoted: info})
} catch (e) {
reply(`Pin Não Encontrado`)
console.log(e)}
break

case 'pinvid':
if(!q) return reply(`Você esqueceu de colocar a url Exemplo: ${prefix}pinvid url`)
reply('Estou processando seu video..')
client.sendMessage(from, {video: {url: `https://nexus-api.shop/api/pinvideo?url=${q}`}, mimetype: "video/mp4"}, {quoted: info})
break

case 'gpt': case 'gemini':
if(!q) return reply(`Em quê eu posso ajudar você?`)
try {
const openaxz = await fetchJson(`https://nexus-api.shop/api/gemini?q=${q}`)
reply(`${openaxz.resposta}`)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'plaq':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq?texto=${q}`}}, {quoted: info})
break

case 'plaq1':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq1?texto=${q}`}}, {quoted: info})
break

case 'plaq2':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq2?texto=${q}`}}, {quoted: info})
break

case 'plaq3':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq3?texto=${q}`}}, {quoted: info})
break

case 'plaq4':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq4?texto=${q}`}}, {quoted: info})
break

case 'plaq5':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq5?texto=${q}`}}, {quoted: info})
break

case 'plaq6':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq6?texto=${q}`}}, {quoted: info})
break

case 'plaq7':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq7?texto=${q}`}}, {quoted: info})
break

case 'plaq8':
if(!q) return reply(`Cadê o nick?`)
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/api/plaq8?texto=${q}`}}, {quoted: info})
break

case 'waifu':
reply('Estou processando..')
client.sendMessage(from, {image: {url: `https://nexus-api.shop/random/waifu2`}}, {quoted: info})
break

case 'metadinha':
try {
MET = await fetchJson(`https://nexus-api.shop/random/metadinha`);
client.sendMessage(from, {image: {url: MET.masculina}, caption: `*HOMEM*`}, {quoted: info})
client.sendMessage(from, {image: {url: MET.feminina}, caption: `*MULHER*`}, {quoted: info})
} catch (e) {
reply(`alguma coisa deu errado.`)
}
break;

case 'figu-random':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
async function eitamundobon() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-comum`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundobon()
}
break

case 'figu-raiva':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
async function eitamundoraiva() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-raiva`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundoraiva()
}
break

case 'figu-desenho':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
await sleep(1000)
async function eitamundobcvxx() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-desenho`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundobcvxx()
}
break

case 'figu-flork':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
await sleep(1000)
async function eitamundoflork() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-flork`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundoflork()
}
break

case 'figu-roblox':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
await sleep(1000)
async function eitamundoroblox() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-roblox`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundoroblox()
}
break

case 'figu-anime':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
await sleep(1000)
async function eitxmundobom() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-anime`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitxmundobom()
}
break

case 'figu-coreana':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
await sleep(1000)
async function eitamxndobom() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-coreana`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamxndobom()
}
break

case 'figu-animais':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
await sleep(1000)
async function eitamundoruim() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-animais`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundoruim()
}
break

case 'figu-engracada':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
await sleep(1000)
async function eitamunzzbom() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-engracada`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamunzzbom()
}
break

case 'figu-bebe':
if (!q) return reply('cadê a quantidade?')
if (!q > 10) return reply('O limite máximo é de 10 figurinhas!');
reply('Enviando suas figurinhas..')
await sleep(1000)
async function eitamundobebe() {
client.sendMessage(from, { sticker: { url: `https://nexus-api.shop/sticker-bebe`} })}
for (i = 0; i < q; i++) {
await sleep(500)
eitamundobebe()
}
break