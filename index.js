const { Telegraf, Context } = require('telegraf');
const bot = new Telegraf('1864811805:AAF3PGMvV2H9LgMrnw1WKXc9EYVR5ZyLRAg')
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('ATP Bot is online, no error and malfunction.')
})
 
app.listen(process.env.PORT || 5000);

bot.start((ctx) => {ctx.reply('Welcome!')});
bot.help((ctx) => {ctx.reply('Help')});
bot.settings((ctx) => {ctx.reply('Settings')});

bot.hears('sa', (ctx) => {ctx.reply(ctx.from.first_name + ', Aleyküm Selam Müslüman Kardeşim' )});
bot.hears('Sa', (ctx) => {ctx.reply(ctx.from.first_name + ', Aleyküm Selam Müslüman Kardeşim' )});

bot.hears('iyi bayramlar', (ctx) => {
    ctx.reply('Eyw aslanım, seninde mübarek olsun ' + ctx.from.first_name +'.');
});
bot.hears('İyi bayramlar', (ctx) => {
    ctx.reply('Eyw aslanım, seninde mübarek olsun ' + ctx.from.first_name +'.');
});

bot.hears('good bot', (ctx) => {
    ctx.reply('eyvallah canım ' + ctx.from.first_name + ' ( ˘ ³˘)♥️');
});
bot.hears('Good bot', (ctx) => {
    ctx.reply('eyvallah canım ' + ctx.from.first_name + ' ( ˘ ³˘)♥️');
});

bot.hears('bad bot', (ctx) => {
    ctx.reply('ananin daminda hafriyat calismasi yapayim ' + ctx.from.first_name + '.');
});
bot.hears('Bad bot', (ctx) => {
    ctx.reply('ananin daminda hafriyat calismasi yapayim ' + ctx.from.first_name + '.');
});

bot.hears('hayırlı cumalar', (ctx) => {
    ctx.reply(`
Nefsin huzur ve irfanla dolsun  
Düşmanlarının gülleri solsun 
Seni sevenler altın bulsun 
Münafıklar saçını başını yolsun       
Kalp gözün ibret içinde boğulsun 
Sen çok sevgili bir kulsun 
Zalimlere giren bir kolsun 
Biz de yuvarlanıp gidiyoruz ne olsun

Cumanız mübarek olsun ATP Halkı.
    `);
});
bot.hears('Hayırlı cumalar', (ctx) => {
    ctx.reply(`
Nefsin huzur ve irfanla dolsun  
Düşmanlarının gülleri solsun 
Seni sevenler altın bulsun 
Münafıklar saçını başını yolsun       
Kalp gözün ibret içinde boğulsun 
Sen çok sevgili bir kulsun 
Zalimlere giren bir kolsun 
Biz de yuvarlanıp gidiyoruz ne olsun

Cumanız mübarek olsun ATP Halkı.
    `);
});

bot.hears('iyi geceler', (ctx) => {
    ctx.reply(ctx.from.first_name + ` iyi geceler bebeğim 💋`)
});
bot.hears('İyi geceler', (ctx) => {
    ctx.reply(ctx.from.first_name + ` iyi geceler bebeğim 💋`)
});

bot.hears('günaydın', (ctx) => {
    ctx.reply(` Müslüman arkadaşlarıma selamünaleyküm. Deist arkadaşlarıma tanrının rahmeti üzerinize olsun. Ateist arkadaşlarıma iyi günler. Diğer dinlere mensup arkadaşlarıma mutlu günler. Atatürk düşmanı arkadaşlar sizinde tüm sülalenizi sikeyim. Günaydın ` + ctx.from.first_name)
});
bot.hears('Günaydın', (ctx) => {
    ctx.reply(` Müslüman arkadaşlarıma selamünaleyküm. Deist arkadaşlarıma tanrının rahmeti üzerinize olsun. Ateist arkadaşlarıma iyi günler. Diğer dinlere mensup arkadaşlarıma mutlu günler. Atatürk düşmanı arkadaşlar sizinde tüm sülalenizi sikeyim. Günaydın ` + ctx.from.first_name)
});








bot.command('ataturk', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, `
İstiklâl mücadelemizin önderi, Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk ile silah arkadaşları başta olmak üzere bütün şehit ve gazilerimizi şükran, saygı ve rahmetle anıyoruz - ATP 11A AİLESİ

“Ey Türk gençliği!

Birinci vazifen, Türk istiklâlini, Türk Cumhuriyetini, ilelebet, muhafaza ve müdafaa etmektir.
    
Mevcudiyetinin ve istikbalinin yegâne temeli budur. Bu temel, senin, en kıymetli hazinendir. İstikbalde dahi, seni, bu hazineden, mahrum etmek isteyecek, dahilî ve haricî, bedhahların olacaktır.
    
Bir gün, istiklâl ve cumhuriyeti müdafaa mecburiyetine düşersen, vazifeye atılmak için, içinde bulunacağın vaziyetin imkân ve şerâitini düşünmeyeceksin!
    
Bu imkân ve şerâit, çok nâmüsait bir mahiyette tezahür edebilir. İstiklâl ve cumhuriyetine kastedecek düşmanlar, bütün dünyada emsali görülmemiş bir galibiyetin mümessili olabilirler.
    
Cebren ve hile ile aziz vatanın, bütün kaleleri zaptedilmiş, bütün tersanelerine girilmiş, bütün orduları dağıtılmış ve memleketin her köşesi bilfiil işgal edilmiş olabilir.
    
Bütün bu şerâitten daha elîm ve daha vahim olmak üzere, memleketin dahilinde, iktidara sahip olanlar gaflet ve dalâlet ve hattâ hıyanet içinde bulunabilirler.
    
Hattâ bu iktidar sahipleri şahsî menfaatlerini, müstevlilerin siyasi emelleriyle tevhit edebilirler. Millet, fakr-u-zaruret içinde harap ve bîtap düşmüş olabilir.
    
Ey Türk istikbalinin evlâdı! İşte, bu ahval ve şerâit içinde dahi, vazifen; Türk İstiklâl ve cumhuriyetini kurtarmaktır!
    
Muhtaç olduğun kudret, damarlarındaki asîl kanda, mevcuttur!
    
    Mustafa Kemal Atatürk
    20 Ekim 1927
    `,
    {
        reply_markup: {
            inline_keyboard: [
                [{text: '🇹🇷 MUSTAFA KEMAL ATATÜRK 🇹🇷', callback_data: 'ataturkCommand'}],
            ]
        }
    });
});

bot.action('ataturkCommand', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')
    ctx.telegram.sendVideo(ctx.chat.id, {source: 'media/ata_gif.mp4'})
});

bot.command('rte', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, `
RTE NE LAN BABANIN İSMİNİ Mİ SÖYLÜYORSUN
hazreti kutsal başkumandanımız başbuğ başkumandanımız yedi cihanın kurucusu imparator imam mareşal halife-i bin suvari samurai kung-fu üstadı bordo bereli sayın iç işleri bakanımız dış işleri bakanımız halifemizhalifemiz baş imam öğretmen ilk ve son insanların kralı kuzeyin tek sahibi güneyin kudreti fetöcülerin düşmanı kandırlanların dostu kral el muzaffer Recep Tayyip Erdoğan diyeceksin
    `)
});

bot.command('program', (ctx) => {
    ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
    ctx.telegram.sendPhoto(ctx.chat.id, {source: 'media/schema.jpg'})
});

bot.command('emreTW', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'WorldFirstEmre TWITCH kanalı', 
    {
        reply_markup: {
            inline_keyboard: [
                [{text: 'WorldFirstEmre Twitch', url: 'https://www.twitch.tv/worldfirstemre'}],
            ]
        }
    })
});

bot.command('porno', (ctx) => {
    ctx.reply('https://www.reddit.com/r/KGBTR/comments/lxm6fz/t%C3%BCm_nsfw_ler/')
});

bot.command('kurallar', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, `
Dine/inanca küfür yasak. (3 GÜN BAN)
Atatürk'e hakaret yasak. (1 YIL BAN)
Kadın hariç +18 içerik yasak. (3 GÜN BAN)
Pedofili savunmak ve sevmek yasak. (5 GÜN BAN)
Spam bokunu çıkarmayın. (1 GÜN BAN)
Sınıftan kimsenin annesine babasına sülalesine küfür yasak (amk, aq gibi basit küfürler hariç) (1 GÜN BAN)
    `);
})





bot.command('kgb1', (ctx) => {
    var text = `
    yeter be yeter. burama geldi. ben de am sikmek istiyorum lan. bizimki de can lan. bizim de canımız çekiyor. doldum artık burama geldi, yarrağıma da laf geçiremiyorum, söz dinletemiyorum. o da bazı şeylerin farkına varıyor, nasıl varmasın, taş değil toprak değil, benden, canımdan, kanımdan bir parça. bıktı banttan yayından, artık canlı yayına geçmek istiyor. yeter bak yemin ediyorum yeter, çıldırmak üzereyim. damarlarımda kan değil sperm dolaşıyor sanki, aylardır döl sıçıyorum.
    asosyalim lan. karılarla konuşamıyorum. benim yarrağım da sıcak bi amcığa girmek ister elbet. biz de am sikebiliriz elbet. ama yok amk yok.
    ulan benim vefalı yarrağım bugüne dek ne verdiysem kabul etti. nereye soktuysam yok demedi, mızmızlanmadı. diş macunu tüpünü kesip mi sikmedim, akrilik yünlerine mi yaslamadım, sırf kızlık bozuyomuş hissi vermek için baştan aşağı ketçapa buladığım kumpiri mi sikmedim, babaannemin öğrenci evime sererim diye köyden yolladığı halıfleksi rulo yapıp mı sikmedim koridorun ortasında. ama bıktım eritilmiş, yuvarlatılmış kartonpiyerlere sürtmekten, bıktım banyonun giderini, balkonumdan geçen pimaşları sikmekten. hepsine eyvallah dedi bu vefalı, meczup yarrağım.
    ama olmuyor beyler. bi yerden sonra kabul etmiyor bünye. gerçek bi delik istiyor. sıcak bi amcığın ateşinde kavrulmak, gerçek bir amcığın g noktasında kolbastı şov sergilemek, kanlı canlı bir bızırın ana arterlerine haçlı seferleri düzenlemek, gerçek bir göt deliğinde türbülansa girmek istiyor.
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb2', (ctx) => {
    var text = `
    ARKADAŞLAR CİDDEN ÇOK İĞRENÇSİNİZ YANİ BU GRUPTA BU ANA KADAR ÇOK İĞRENÇ ŞEY GÖRDÜM CEM ONUR YARRAĞINDAN TUT NE BİLEYİM REGL KANINI ALNINA SÜRENLERE KADAR AMA ARTIK BU KADARI DA FAZLA YAHU ORSPUEVLATLARI ONU ANLATIN BUNU ANLATIN NE ÖZELİMİZ KALDI AMINA KOYİM ÖNCEDEN BİRİ SPERM ZİGOT DESE UTANIRDIM ŞU AN ÖNÜME Bİ BARDAK SPERM KOYSALAR GÜPPPHT DİYE HÜPLETİRİM O DERECE İĞRENÇLEŞTİRDİNİZ BENİ ANANIZI SİKEYİM ANLATIN HER BOKU ANLATIN DAŞŞAĞINIZI ÇEKİN ATIN HATTA DAŞŞAK TRAŞI YAPARKEN CANLI YAYIN AÇIN MISIRLARI HAZIRLAYIP GELELİM NE BİLEYİM REGL OLAN VARSA AÇSIN ANAVATAN NASIL KAN AĞLIYO ONU DA İZLEYELİM HİÇ ÖZELİMİZ KALMASIN SAKIN HATTA SİKİŞEN VARSA SS ATSIN PEÇETE TUTALIM ORUSPU EVLATLARI SİZİ REZİL İĞRENÇ YARATIKLAR
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb3', (ctx) => {
    var text = `
    ben şansa inanmam. başarmanın tek sırrı, akp'li bir milletvekili tanıdığının olmasıdır. pharmaton2023, 15 temmuz doblo11 vitamini içeren tek multiçomar.

    dikkatimi hiç bir fetöcü bozmamali ve her darbede zinde olmalıyım. böylece en büyük reis-i cumhur, dünya lideri, başkumandana kendimi beğendirebilirim.

    hayat bir seçim sandığı. asla ataputçulara oy verme.`;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb4', (ctx) => {
    var text = `
    Ulan sosyal medya çok bozdu anasını sikeyim ya. kime küfür etsek direk karakoldan ss atıp sen bittin mahkemede görüşürüz diyor. Rahat rahat ana sikemez olduk. Bazıları var daha beter adamın anasına sövüyorsun dönüp atar yapıyor adres verdiğimde de geliyor orospu evladi gelmemen lazım amk.senin geleceğini bilsem neden söveyim şapşal
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb5', (ctx) => {
    var text = `
    Hiç bi sikim olmuyo ben kavgada bıçaklandım hissetmedim amk kavgaya devam ettim sonra baktım cocuk 2 3 kere daha soktu o zaman ayıktım yine de kavgaya devam ettim aq sjsjsjjssj zaten 30 40 sn sonra bacağında hissizlik oluşuyo otamatik yere düşüyon istemsizce yani bıçaklaninca pek bişey olmuyo ama iyileşme süreci biraz sancılı
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb6', (ctx) => {
    var text = `
    Pişirmek için aldığım tavuğu siktim

    ya ne yapsaydım ..?

    balkonda puro keyfi yapıyordum. akşam olmuş, hava kararmıştı. karanlıktan da yararlanarak balkonda iki üç posta otuzbir çekip içeri girdim. yalnız bir sorun vardı : karnım çok acıkmıştı. alternatif bir fikir bulmalı idim.

    tavuk almaya karar verdim. doğruca markete koştum. et ürünleri bölümünden aldım bütün halindeki pilicimi. ödemeyi de yaptıktan sonra atladı arabama ve geldim evime. pilicim güzelce pakete yerleştirilmişti. kibarca açtım pakedi. ve , kalp atışlarımı hızlandıran , tahrik edici o manzarayla karşılaştım ... 

    asaletli sikim adeta donumdan dışarıya çıkmaya çalışıyordu , taş gibi olmuştu ...  tavuğun pembe götü önümdeydi. dayanamadım...  okşamaya başlkadım , şaplak attım , parmakladım , iki üç dil darbesi attım ... 

    asaletli sikim çoktan donumdan dışarı çıkıp avını aramaya başlamıştı bile. yavaşça donumu sıyırdım. sikimi okşamaya başladım ve artık hazırdı. tavuğun pembe götünden sikmeye başlamıştım. hunharca ileri geri yapmaya başladım .siktiğim köpekten bile bu kadar haz alamamıştım. defalarca boşaldım. nihayet kendimden geçmiş idim ... 

    kendime geldiğimde ben altta idim, tavuk ise kucağıma çıkmıştı. tekrar üste çıktım , ama bir şey farkettim : sikim acımaya başlamıştı. çıkardım hemen. sikimi çıkarır çıkarmaz , tavuğun götünden döl akmaya başladı. orgazm oluyor sanmıştım . aceleyle yapıştım tavuğun götüne dudaklarımla. ne sandınız , dölümün boşa akmasına müsade mi edecektim ..?

    nazikce yatırdım onu yere, sonra iki üç posta otuzbir çekip göğüslerine boşaldım. zor da olsa kalktım , keyif puromu yaktım, onu izleyerek bitirdim .

    ama o an mucizevi bir şeyi farkettim : açlığım gitmiş idi, evet açlığım gitmiş idi. "midesi sikinde" deyiminin tam olarak beni anlattığına karar kıldım. tavuğa da şu anlık ihtiyacım kalmamıştı. yılbaşında bir daha sikmek üzere, dondurucuma güzelce yarleştirdim onu .

    pencereden dışarı bakınca güneşin doğmakta olduğunu farkettim , "ne çabuk sabah oldu" diye düşündüm. artık uyumam lazım idi. dondurucuyu açtım ve tavuğa her şey için teşekkür ettim.

    yatağıma geçtim. iki posta daha otuzbir çektim.
    insanlar mutlu bir güne başlarken 
    ben de uzun ve huzurlu
    bir uykuya
    başlıyor idim.
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb7', (ctx) => {
    var text = `
    HOTWHEELS ARABAN SHARKYDEN KURTULABiLiR Mi SENi CANLI CANLI YUTAR ĞĞAĞHĞAHĞĞĞ BiR DAHA DENE SENi ŞANSLI ARABA FIRLAT AĞĞĞĞĞĞH BU ACIDI IAAĞĞĞĞĞĞH iŞTE BUNA KAZA DERiM HOTWHEELSTAN ÇILGIN SHARKY
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb8', (ctx) => {
    var text = `
    Benimki gerçekten garipti 3 4 sene önceydi sanırım lise son Karşıyaka'da Erhan Hoca var matematikçi çok severim kendisini hala görüşürüz neyse bilen bilir Sakıpağa vardır dönerci o ara sokağa girdim ben her zaman etrafımı değil de ileriyi izleyen biriyimdir karşıdan 3 kız geldiğini gördüm kafamı çevirdim oraya bakmıyordum bunlar bana doğru gelirken ştt falan dediler anlam veremedim bu yüzden de bakmadım sonra bir tanesi hey falan dedi ben yine bakmadım bunlara sonra yanımdan geçerken aralarından biri bana omuz attı ne oluyoruz amk dedim bir an duraksadım kızlar gülüştüler gittiler bu da böyle saçma bir anımdır
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb9', (ctx) => {
    var text = `
    Mən bu internetə ayda 60 manat verirəm və sənin gönderilerini görmək məcburiyyətində deyiləm amını sikərəm 1 həftədir sənin göndərmələrin çıkıyo qarşıma belə vaziyətin içine soxum
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb10', (ctx) => {
    var text = `
    ebrar kardesm tam 26 yıldır vajina yuzu gormemis bi adamım ben kadınlar hakkında sonsuz araştırma ve bilgi sahibiyim klitorisin kimyasını çözmüş vajina dudaklarının amino asit zincirini çıkaracak kadar bilgiliyim sen düşün yani. Senin üsdünde tamamen bilimsel kaynaklı verilere dayanarak yaptığım tesbide göre sen yarrak arıyosun. Yani bunun başka bi açıklaması yok 26 yıldır okuduğum vajina sulandırma kitapları yanılıyor olamaz sen kuduz bir bozkurt gibi yarrak arıyosun inşallah hedefine ulaşırsın gülüm benim öbüyorum gözlerinden hadi
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb11', (ctx) => {
    var text = `
    KARDESIM ONCELIKLE GIZLICE KOGUSA TEL SOKUYOSUN BUNU DA YAPARSIN ARTIK O KADAR FILM IZLEMISSINDIR. SONRA KARDESIM O TELEFONA 5 SEZON PRISON BREAK INDIRIOSUN KOGUSTA WI-FI WAR ZATEN BUNU BILMEYEN YOKTUR HERALDE :D 5 SEZONU 3 GUNDE BITIRIOSUN KENDINI SCOFIELD'LA BAGDASLASTIRIOSUN. ONDAN SONRA KARDESIM COK RAHAT ORDAN KACABILIRSIN ZORLANMADAN
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb12', (ctx) => {
    var text = `
    sikmek istiyorum seni anlıyor musun benim minik orospum, sikmek istiyorum. götünün şerefiyle, haysiyetiyle oynamak istiyorum lan. etli götünün oynak loplarını yaba gibi ellerimle avuçlayıp, akli melekelerimi yitirinceye dek yaslı kalmak istiyorum kavisli çatının tam tepesinde. mor başlı gövel yarrağımı stabilize göt çemberinin etrafında nakış, nakış, ilmek ilmek dokumak istiyorum seni küçük fahişe. kanaviçe desenli yarrak damarlarımdan boncuk boncuk süzülen sıcak spermlerimi, saten kırlent üzerine işlenmiş iğne oyası dantel örneği misali işlemek istiyorum yassı götceyizine. kuru göt deliğine kırmızı fiyonk kurdele takıp, alkış tuta tuta, ağır aksak tempoda, düyek usulünde, hicaz makamında sikmek istiyorum seni. sana ızdırap vermek istiyorum orospu çocuğu anlıyor musun beni? itibarını, erkeklik gurunu, ömür boyu beslediğin, büyüttüğün, yaşatan haysiyetini beş paralık etmek, cümle akraba'i taallukatına rezil'i rüsva, kepaze eylemek istiyorum. babanın gözleri önünde sikmek istiyorum, annenin antika maun sandığında sakladığı naftalinli okul önlüğününü giydirip sikmek istiyorum, amca çocuklarının gözleri önünde pileli eteğini sıyıra sıyıra kucaklamak ve kıskaca almak istiyorum ürkek bedenini. dayının çocuklarına ekşi göt deliğini zorla yalattırmak istiyorum.
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb13', (ctx) => {
    var text = `
    hobb ss aldım aD:DSD:FsdF amk cocu kacma gellan buraya Q:WeqWEqEQ:wE amdinleri etıketleyın beler dF:sdf:DfDF: kacabileceni mi sandım nmk evladı SKKSKSKSKSKSKS
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb14', (ctx) => {
    var text = `
    bıraderım sımdı nabıosun bılıyomusun 33 lıraya guzel bı proteın dozu alıorsun karıstırıosun muz fln ıste gıdıosun salona tam 11 kere şınaw cekıosun bak bura cok onemlı.Ondan sonra gıdıosun tmm mı 7 kere dambıl kaldırıosun 3.5kg olcak ondan sonra duwarları kırabılırsın tek yumrukla kardesım,cok ıyı form tutarsn benım dedıklerımı yab
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb15', (ctx) => {
    var text = `
    yeter be yeter. burama geldi. ben de am sikmek istiyorum lan. bizimki de can lan. bizim de canımız çekiyor. doldum artık burama geldi, yarrağıma da laf geçiremiyorum, söz dinletemiyorum. o da bazı şeylerin farkına varıyor, nasıl varmasın, taş değil toprak değil, benden, canımdan, kanımdan bir parça. bıktı banttan yayından, artık canlı yayına geçmek istiyor. yeter bak yemin ediyorum yeter, çıldırmak üzereyim. damarlarımda kan değil sperm dolaşıyor sanki, aylardır döl sıçıyorum.
    asosyalim lan. karılarla konuşamıyorum. benim yarrağım da sıcak bi amcığa girmek ister elbet. biz de am sikebiliriz elbet. ama yok amk yok.
    ulan benim vefalı yarrağım bugüne dek ne verdiysem kabul etti. nereye soktuysam yok demedi, mızmızlanmadı. diş macunu tüpünü kesip mi sikmedim, akrilik yünlerine mi yaslamadım, sırf kızlık bozuyomuş hissi vermek için baştan aşağı ketçapa buladığım kumpiri mi sikmedim, babaannemin öğrenci evime sererim diye köyden yolladığı halıfleksi rulo yapıp mı sikmedim koridorun ortasında. ama bıktım eritilmiş, yuvarlatılmış kartonpiyerlere sürtmekten, bıktım banyonun giderini, balkonumdan geçen pimaşları sikmekten. hepsine eyvallah dedi bu vefalı, meczup yarrağım.
    ama olmuyor beyler. bi yerden sonra kabul etmiyor bünye. gerçek bi delik istiyor. sıcak bi amcığın ateşinde kavrulmak, gerçek bir amcığın g noktasında kolbastı şov sergilemek, kanlı canlı bir bızırın ana arterlerine haçlı seferleri düzenlemek, gerçek bir göt deliğinde türbülansa girmek istiyor.
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb16', (ctx) => {
    var text = `
    Tayyip gelmeseydi bu Türkiye 10 kilo yorganın altında uyuyordu. Türkiye bir adam gördü, Türkiye bir insan gördü, Türkiye bir şerefle insan oldu yaa. Türkiye Konya'mız böylemiydi yaa? Konya'mız uyuyordu 10 kilo yorganın altındaydı. Konya şerefli bir Konya oldu, Türkiye oldu. Bu ne bu yaa? Bu polisimiz neden böyle yaptı? Neden askerimiz milletin önüne yattıda neden birbirimize düşürdü bu milleti? Bu ne bu yaa? Biz arkasındayız uzun adamın. O bir tektir, o bir lider, o bir insan. Biz onun arkasındayız çok şükür. Bizleri yıldıramaz. Amerika değil Caponya gelse, biz onun arkasındayız, yılmayız. Gelsin, kafirin ..........(anlamadım) altında kimseye ezilmeyiz. Biz iman gücüyüz, biz Allah'ın aslanıyız, biz Ali'nın aslanıyız, bizi kimse yıkamaz. Biz Allah'tan başka bizim liderimiz o, sonramız o. Çok şükür rabbim arkasındayız dualarnan. Hergece laaa ilahe illahi sübaneke innü kül kimi el zalimin. O zalimlerin zulmünü verecek. Ne diyorum? Resulüm Cebrailini 12 bin kanadıyla arkasında ol. Devletimin, başbakanımın, milletimin, askerimin, polisimin, mitimin arkasında ve o Türk milletimin arkasında o cebrail 12 bin kanadıyla bu halkın üzerine kanat gerdi. Kimse yılmaz, Türk askeri yıkılmaz. Orası peygamber postu, biz varız Allah var resul var. Ya Allah ya Muhammed ya sabır ya selamet, bizim canımız rabbimize emanet. Çok şükür bu devletimiz ayaktayız, yıkılmayız.
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb17', (ctx) => {
    var text = `
    hobb ss aldım aD:DSD:FsdF amk cocu kacma gellan buraya Q:WeqWEqEQ:wE amdinleri etıketleyın beler dF:sdf:DfDF: kacabileceni mi sandım nmk evladı SKKSKSKSKSKSKS
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});

bot.command('kgb18', (ctx) => {
    var text = `
    TAYYİP ERDOĞAN'I SEVMEYEN VATANDAŞLAR SİZE SORUYORUM

    Bu adam size ne yaptı ne zararını gördünüz?

    \*Ülke ekonomisini batağa mı sürükledi? \*Yıllardır yönetim şeklimiz olan cumhuriyeti mi ortadan kaldırdı? \*Kendi çocuklarını akrabalarını danışman bakan yardımcı mı yaptı? \*Seçimlerden sonra elektriğe suya doğalgaz akaryakıta gıda ve tüketim ürünlerinin tamamına yüksek miktarda zam mı yaptı? \*Halkın şikayetlerini dinleyip "gözünüze dizinize dursun" mu dedi? \*Çiftçinin mahsulünü en dip fiyattan alınıp 50 katına geri satılmasına göz mü yumdu? \*Yeni bir devlet yönetme sistemi getirip meclisteki millet vekillerinin tüm yetkilerini elinden alıp yattıkları yerden maaş mı verdi? \*Yüzbinlerce öğretmen açığı varken atamalarda sadece açığın 3te 1ini kapatıp atanamayan öğretmenlerin intiharına mı sebep oldu? \*Devletin başına geldiğinde dolar 1.30 iken 7 TL ye mi çıktı? \*Devletin televizyonu olan TRT' yi kendi partisinden başka partinin haberini mi yaptırmadı? \*Ülkesindeki insanlar iş bulamazken milyonlarca Suriyeli'yi getirip ülkeye sokup aylık dolar bazında maaş mı verdi? \*Devletin kurduğu fabrikaları özel şirketlere satarak çalışan işçileri işsiz mi bıraktı? \*Ülkesinde cumhurbaşkanı için yapılış bir saray varken milyar dolarlar harcayıp altın kaplı saray mı yaptı? \*3 kilosu 5 TL olan patates soğanın kilosunun 6-7 lira olmasına göz mü yumdu? \*Vatandaş cep telefonuna kontör yükletemezken her ay telsiz kullanım ücreti adı altında her kullanıcıdan vergi mi aldı? \*Yabancı şirkete köprü yaptırıp verdiği sayıda araç geçmediği için günlük milyonlarca lira devletin kasasından zarar mı karşıladı?

    Söyleyin ne yaptı bu adam size, Neden sevmiyorsunuz?
    `;
    ctx.telegram.sendMessage(ctx.chat.id, text);
});








bot.command('perfler', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'PERFORMANS ÖDEVLERİ', 
    {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Tarih', callback_data: 'tarihShow'}, {text: 'Matematik', callback_data: 'matShow'}],
                [{text: 'Felsefe', callback_data: 'felsfShow'}, {text: 'Edebiyat', callback_data: 'edebShow'}],
                [{text: 'Kimya', callback_data: 'kimShow'}, {text: 'Seçmeli Matematik', callback_data: 'secMatShow'}],
                [{text: 'Din', callback_data: 'dinShow'}, {text: 'Fizik', callback_data: 'fizShow'}],
                [{text: 'İngilizce', callback_data: 'ingShow'}, {text: 'Otomasyon', callback_data: 'meslekShow'}],
            ]
        }
    })
});

bot.action('tarihShow', (ctx) => {
    var subject = `
    Son Tarih: 15 Mayıs
    Önceden okuduğunuz bir kitabın özetini çıkar. En az 2 sayfa ve Word.`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('matShow', (ctx) => {
    var subject = `Yok`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('felsfShow', (ctx) => {
    var subject = `https://i.ibb.co/4jcQpb4/photo-2021-05-09-07-41-17.jpg`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('edebShow', (ctx) => {
    var subject = `Yok`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('kimShow', (ctx) => {
    var subject = `Yok`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('secMatShow', (ctx) => {
    var subject = `Yok`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('dinShow', (ctx) => {
    var subject = `
    Son Tarih: 7 Mayıs
    1)Teizm ve Deizm nedir?ikisinin karşılaştırması yapılır günümüzdeki durumu hakkında araştırma yapınız.
    2)islamofobi ne demektir?islamofobinin ortaya çıkış sebepleri nelerdir gerekli araştırmayı yapınız.
    3)meteryalizm ve sekülarizm nedir?araştırınız
    4)Yahudilik dinini araştırınız inanç esasları,ibadet şekilleri ,kutsal mekanlar,Ritüeller ve sembolleri nelerdir?
    5)Hristiyanlık dini inanç esasları,ibadet esasları,kutsal mekanlar,ritüeller ve sembolleri nelerdir?
    Konularından herhangi biri seçilip yapılacak en az 2 sayfa ve el yazısıyla isim sınıf no yazılacak`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('fizShow', (ctx) => {
    var subject = `Yok`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('ingShow', (ctx) => {
    var subject = `Yok`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('meslekShow', (ctx) => {
    var subject = `Yok`;
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, subject, 
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
                ]
            }
        });
});

bot.action('returnMenu', (ctx) => {
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'PERFORMANS ÖDEVLERİ', 
    {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Tarih', callback_data: 'tarihShow'}, {text: 'Matematik', callback_data: 'matShow'}],
                [{text: 'Felsefe', callback_data: 'felsfShow'}, {text: 'Edebiyat', callback_data: 'edebShow'}],
                [{text: 'Kimya', callback_data: 'kimShow'}, {text: 'Seçmeli Matematik', callback_data: 'secMatShow'}],
                [{text: 'Din', callback_data: 'dinShow'}, {text: 'Fizik', callback_data: 'fizShow'}],
                [{text: 'İngilizce', callback_data: 'ingShow'}, {text: 'Otomasyon', callback_data: 'meslekShow'}],
                [{text: 'Performans Menüsüne Geri Dön', callback_data: 'returnMenu'}],
            ]
        }
    })
});





bot.launch()
