const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const prefix = ".";
const Music = require('discord.js-musicbot-addon');
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    client.user.setActivity("Music!", {type: "LISTENING"});
      console.log('KingBot Is Running');
  });

client.on('message', message => {
   if (message.content === prefix + "roll") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});


client.on('message', message => {
  if (message.content === prefix + ('members')) {
    if (message.author.id !== '343383616895713290') return;
    if(!message.channel.guild) return message.reply('** This command only for servers **');
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL)
    .addField("👥عدد الاعضــاء سيرفر:",`**${message.guild.memberCount}**`)
    .addField("** :calendar: عدد لأعضاء سيرفرات الى بوت فيها:**", client.users.size)
    message.channel.sendEmbed(embed)
    

  }

});


client.on('message', message => {
  if (message.content === prefix + ('members')) {
    if (message.author.id !== '336606008069849088') return;
    if(!message.channel.guild) return message.reply('** This command only for servers **');
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL)
    .addField("👥عدد الاعضــاء سيرفر:",`**${message.guild.memberCount}**`)
    .addField("** :calendar: عدد لأعضاء سيرفرات الى بوت فيها:**", client.users.size)
    message.channel.sendEmbed(embed)
    

  }

});

client.on('message', message => {
    if (message.content.startsWith(".avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


///Anti-Advertising
client.on('message', message => {
  if(message.content.includes("discord.gg")){
if (!message.member.hasPermissions('ADMINISTRATOR')){
message.delete()
 return message.reply(`** You aren't allowed to advertise here! :angry: ! **`).then(message => message.delete(5000));
 }
}
});
//
client.on('message', function(message) {
                  if(!message.channel.guild) return;
    if(message.content ===  '.colors create') {
        if(message.member.hasPermission('MANAGE_ROLES')) {
            setInterval(function(){})
            message.channel.send('جاري عمل الالوان |✅')
        }else{
            message.channel.send('ما معاك البرمشن المطلوب  |❌')
            }
    }
});

client.on('message', message=>{
    if (message.content ===  prefix + 'colors create'){
              if(!message.channel.guild) return;
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 141; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
            }
            }
    }
});



client.on('message', message => {
  if(message.content === prefix + "help") {
    message.author.send("**WE NEED DEVELOPERS! \n If you're inspired check out <http://bytetechproject.rf.gd/developer.html>**");
  }
});



client.on('message', message => {
 if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/world-circle-blue-128.png")    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("**.ping :stopwatch:**","**لـ سرعة إتصالك**")
      .addField("**.id :chart_with_downwards_trend:**","**عرض سرعه اتصال البوت**")
      .addField("**.avatar :camping:**","**لـ صور الشخص المختار**")
      .addField("**.roll :1234:**","**لـ القرعه من 1 - 100**")
      .addField("**.server :recycle:**","**لـ معلومات السيرفر**")
      .addField("**.servericon :frame_photo: **","**لـ يظهر لك صوره السيرفر**")
      .addField("**.animal :unicorn: **","**لـ صور حيوانات كيوت**")
      
.setColor('RANDOM')
  message.author.sendEmbed(embed).catch(err => {
   return message.reply("**:no_entry_sign: | !ما يمدينا نرسلك الهلب لأنك مقفل الدايركت**");})
}
});



client.on('message', message => {
 if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/music-128.png")    
      .addField("**:musical_note:  اوامر الميوزك**","** **")
      .addField("**.play :musical_note: **","**لـ تشغيل لاغنيه**")
      .addField("**.vol :musical_note:**","**لرفع صوت لاغنيه**")
      .addField("**.stop :musical_note:**","**لـ اطفاء لاغنيه**")
      .addField("**.search :musical_note:**","**لـ عرض قائمه لاغاني**")
      .addField("**.skip :musical_note:**","**لـ نخطي لاغنيه**")
      .setFooter("** ❇نبرى ذمتنا ❇: في أي أستعمال خاطئ للهذا الكوماند**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
   






client.on('message', message => {
if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn2.iconfinder.com/data/icons/clean-and-simple/153/Settings-128.png")    
      .addField("**:radioactive: أوامر الأداره**","** **")
      .addField("الترحيب", "**`welcome` لازم وجود روم أسمه**")
      .addField("**.v2min **","**عمل روم لمده دقيقتين**") 
      .addField("**.mute :mute: **","**اعطاء العضو ميوت كتابي**")  
      .addField("**.umute :loud_sound:  **","**فك الميوت عن العضو**")  
      .addField("**.bc  :mega:**","**لـ البرودكاست**") 
      .addField("**.cv  :restroom: **","**انشاء روم صوتي**")
      .addField("**.ct  :restroom: **","**انشاء روم كتابي**") 
      .addField("**.del  :restroom: **","**حذف روم صوتي او كتابي**")  
      .addField("**.مسح :octagonal_sign:**","**لـ مسح الشات**")
      .addField("**.mutechannel :no_entry: **","**قفل الشات**")
      .addField("**.unmutechannel :on: : **","**فتح الشات**")	 
      .addField("**.colors create :cyclone:**","** لـ اضافة 200 لون**")
      .addField("**.kick  :outbox_tray:**","**لـ طرد الأعضاء**")
      .addField("**.ban  :no_entry:**","**لـ حظر الأعضاء**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn3.iconfinder.com/data/icons/forall/110/game-128.png")    
      .addField("** :video_game: أوامر الالعاب**","** **")
      .addField("**.كت تويت :video_game: **","**لـ لعبه كت تويت**")
      .addField("**.لوخيروك  :video_game: **","**لـ لعبه ولو خيروك**")
      .addField("**.صراحه :video_game: **","**لـ لعبه صراحه**")
      .addField("**.مريم :video_game:  **","**لـ لعبه مريم**")
      .addField("**.هل تعلم:video_game:  **","**لـ لعبه هل تعلم**")
      .addField("**.لغز:video_game:  **","**لـ يعطيك لغز في صوره:new: **")
      .addField("**.حكم:video_game:  **","**لـ يعطيك حكم لازم تعمله:new: **")
      .addField("**.اسرع كتابه:video_game:  **","**لـ يعطيك كلمه صعبه لازم تكتبها سريع:new: **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content === prefix + 'help') {
         let embed = new Discord.RichEmbed()
.setThumbnail("https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/support-128.png") 
	 .addField("**:diamond_shape_with_a_dot_inside: Support ™ **","** **")
	 .addField("**موقع البوت **","**http://bytetechproject.rf.gd/**")
	 .addField("**موقع دعوة البوت**","**http://bytetechproject.rf.gd/invite**")
         .addField("**لمعلومات عن البوت :new:**","**.info**")
	 .addField("**لو تبي ترسل لنا رساله **","**.contact <رسالتك>**")
      .addField("** مبرمجين البوت :wrench: **","** ByteTech™ » <@171259176029257728> <@343383616895713290> <@315477177028050945> <@336606008069849088> **")
       .setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content === prefix + 'info') {
         let embed = new Discord.RichEmbed()
.setThumbnail("data:image/png;base64,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")    
      .addField("**:radioactive:معلومات البوت**","** **")
      .addField("**:white_check_mark:  بوت عربي **")
      .addField("**:comet:سريع جدا**") 
      .addField("**:heavy_dollar_sign:مجاني بالكامل**")  
	  .addField("**24/شغل 24**")  
	  .addField("**-------------------------------------**") 
      .addField("**شكرا خاص لمن البوت اشياء قادمه ان شالله**")  	  
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'ping')) {
           if(!message.channel.guild) return;
if (message.author.bot) return;
    message.channel.sendMessage("**Pinging...**").then((message)=> {

     message.edit(`**Time Taken :ping_pong:** \`${Date.now() - message.createdTimestamp} ms\`` + `\n **Discord API :heartpulse:** \`${client.pings[1]} ms\``);

    })
    }

});


client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2min')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`**⚠ | `[ADMINISTRATOR]` لا يوجد لديك صلاحية**').then(msg => msg.delete(6000))
      if (!nam) return message.reply(`**.v2min <أسم الروم>`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });

client.on('message', message => {
     if (message.content === prefix + "bot") {
            if(!message.channel.guild) return message.reply('**Beep Beep, Not Found! `only for channles`**');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**اسم السيرفر**", message.guild.name)
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if(!message.channel.guild) return;
if(message.author.id !== '336606008069849088') return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('..bc-users')){
message.channel.sendMessage(':incoming_envelope: ➤ **Sending to ' + `${client.users.size} users...**`)
client.users.forEach(m =>{
m.sendMessage(args)
});
}
});

client.on('message', message => {
	if(!message.channel.guild) return;
  if(message.author.id !== '171259176029257728') return;
  let args = message.content.split(' ').slice(1).join(' ');
  if (message.content.startsWith('..bc-users')){
  message.channel.sendMessage(':incoming_envelope: ➤ **Sending to ' + `${client.users.size} users...**`)
  client.users.forEach(m =>{
  m.sendMessage(args)
  });
  }
  });


client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "Nothing";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(':new_moon_with_face: | اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField(':id: | ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨ | Playing:','**'+y+'**' , true)
.addField('🤖 | نوع حسابك:',"**"+ w + "**",true)    
.addField('📛 | الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('📆 | التاريخ الذي انشئ فيه حسابك: ', "**" + year + "-"+ month +"-"+ day + "**", true)    
.addField("⌚ | تاريخ دخولك للسيرفر", "**" + message.member.joinedAt.toLocaleString() + "**", true)    
.addField(":speech_balloon: | آخر رسالة لك", "**" + message.author.lastMessage + "**", true)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});



client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("**`'Muted'`لا توجد رتبة** \n Muted سوي رتبة ").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**.mute <منشن الشخص> **').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** :cry: `Manage Roles` لا يوجد لدي برمشن**').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:mute: تم إعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: تم إعطاء العضو ميوت كتابي**").catch(console.error);
});
  }
};
});

   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("**⚠ | `[MUTE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**.unmute <منشن الشخص>**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ⚠ | `[MANAGE_ROLES_OR_PERMISSIONS]`لا يوجد لديك صلاحية **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:speaker: تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});




client.on('message', message => {
if (message.content === prefix + "server") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
.addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
.addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
.addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
.addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
.addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
.addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
.addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
.addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)

.addField("👥عدد الاعضــاء",`**${message.guild.memberCount}**`)
.setThumbnail(message.guild.iconURL)
.setColor('RANDOM')
message.channel.sendEmbed(embed)

}
});


		
		

   client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "servericon"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });







client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});



client.on('message', message => {
     if (message.content === "..servers") {
       if (message.author.id !== '336606008069849088') return;
     const numberofservers = `${client.guilds.size}`
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , numberofservers)
  message.channel.sendEmbed(embed);
    }
})

client.on('message', message => {
if(message.content == '.adminbot') {
         if(message.author.id !== '336606008069849088') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        
        `);
      message.channel.sendEmbed(serv);
}) 
}
});

var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on("message", (message) => {
if (message.content.startsWith(prefix + "ct")) {
        if (!args) message.reply("**.ct <آسم الشنل>");
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**⚠ |`[MANAGE_CHANNELS]` لا يوجد لديك صلاحية للبان**");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});



client.on("message", (message) => {
if (message.content.startsWith(prefix + "cv")) {
            if (!args) message.reply("**.cv <آسم الشنل>");
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**⚠ |`[MANAGE_CHANNELS]` لا يوجد لديك صلاحية للبان**");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});




client.on("message", (message) => {
    if (message.content.startsWith(prefix + 'del')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**⚠ |`[MANAGE_CHANNELS]` لا يوجد لديك صلاحية للبان**");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});






client.on("message", message => {
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: " =) "
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});

client.on('message', msg => {
  if (msg.content === 'السلام وعليكم') {
    msg.reply('**وعليكم السلام**');
  }
});




client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**ولكم**');
  }
});



var viper = ["https://f.top4top.net/p_682it2tg6.png%22","https://e.top4top.net/p_682a1cus5.png%22","https://d.top4top.net/p_682pycol4.png%22","https://c.top4top.net/p_682vqehy3.png%22","https://b.top4top.net/p_682mlf9d2.png%22","https://a.top4top.net/p_6827dule1.png%22","https://b.top4top.net/p_682g1meb10.png%22","https://a.top4top.net/p_682jgp4v9.png%22","https://f.top4top.net/p_682d4joq8.png%22","https://e.top4top.net/p_6828o0e47.png%22","https://d.top4top.net/p_6824x7sy6.png%22","https://c.top4top.net/p_682gzo2l5.png%22","https://b.top4top.net/p_68295qg04.png%22","https://a.top4top.net/p_682zrz6h3.png%22","https://f.top4top.net/p_6828vkzc2.png%22","https://e.top4top.net/p_682i8tb11.png",]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var lo = new Discord.RichEmbed()
.setImage(viper[Math.floor(Math.random() * viper.length)])
message.channel.sendEmbed(lo);
    }
});




client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user).kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({embed : kickembed})
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});





client.on('message', message => {
  if (message.author.id == "336606008069849088") return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('** This command is only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**⚠ | لا يوجد لديك صلاحية للبان**");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:cry: ليس لدي صلاحيات لتبنيد العضو**");
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**.ban  <السبب> <منشن الشخص>**");
  if(!reason) return message.reply ("**.ban  <السبب> <منشن الشخص>**");
  if (!message.guild.member(user).banable) return message.channel.sendMessage(`**:shield: | ${user} لا يمكنني تبنيد` + "\n -1 إما بسبب أن البوت ليس لديه رتبه عالية \n 2- أو أن الشخص الذي تريد تبنيده لديه رتبه أعلى مني**");
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BAN!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});

const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith(prefix + 'صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("🤔")
 }
});






client.on('message' , message => { 
     if (message.content === prefix + "servers") {
if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});














 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith(prefix + "كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Requsted By: ' + message.author.username)
    }
});

const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
]
 client.on('message', message => {
 if (message.content.startsWith(prefix + 'مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("👻")
  }
});


client.on('message', message => {
  if(message.content === prefix + "invite") {
    let embed = new Discord.RichEmbed ()
    embed.setTitle("**:arrow_right: Invite KingBot!**")
    .setURL("http://bytetechproject.rf.gd/invite");
   message.channel.sendEmbed(embed);
  }
});

  client.on('message' , message => {

    if (message.content === prefix + "support") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)     
 .setDescription("supportهلا فيك في سيرفر ال " + `
 **
support موقع   | bit.ly/2G4ifil
 **
`);
  message.author.sendEmbed(embed);
   }
});


client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });



client.on('message', message => {

    if (message.content === prefix + "mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠ | لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//FIRE BOT
if (message.content === prefix + "unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠ | لا يوجد لديك صلاحية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
});


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':new_moon_with_face: | name :  ',`${member}`)
        .addField(':loudspeaker: |  نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
          .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
                   
    });




//english -> arabic
client.on("message", message => {
 
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "clear")) {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "Whoaaaaaaaa!",
color: 0x06DF00,
description: "Messages have gone to :wastebasket:",
footer: {
text: "This message will be deleted in 3 seconds!"
}
}}).then(msg => {msg.delete(3000)});}


});


/////////////////////////////////////////////
////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
///////////////////////////////////////////


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(` `).slice(1);
  var argresult = args.join(` `);
	  if (message.author.id !== '336606008069849088') return;


if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}

});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(` `).slice(1);
  var argresult = args.join(` `);
    if (message.author.id !== '171259176029257728') return;

if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}

});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(` `).slice(1);
  var argresult = args.join(` `);
	  if (message.author.id !== '315477177028050945') return;


if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}

});


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(` `).slice(1);
  var argresult = args.join(` `);
	  if (message.author.id !== '343383616895713290') return;


if (message.content.startsWith(prefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else
  if (message.author.id !== "336606008069849088") return;
if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.channel.sendMessage("**DON'T ABUSE THIS COMMAND, WAIT 5/10 SECONDS OR LONGER TO DO IT!");
} else 
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`)
}

});

/////////////////////////////////////////////
////////////////////////////////////////////
//////////////MSD SMD SMD SDM//////////////
/////////////////////////////////////////////
/////////////////////////////SPYYYYRRROOO//////////////


client.on('message', message => {
if(message.author.bot) return; 
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(' ');
if(!args) return message.reply("**.contact <الرسالة>**");
client.users.get("171259176029257728").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
.setDescription(':mailbox_with_mail: تم إرسال الرسالة')
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);

}
});


client.on('message', message => {
 if(message.author.bot) return; 
  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.users.get("336606008069849088").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });


var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
client.on('message', message => {
if(message.content.startsWith(prefix + 'هل تعلم')) {
     var embed = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
  if(message.content.startsWith(prefix + "suggest")) {
    message.delete()
    let args = message.content.split(" ").slice(1).join(' ');
    
  let embed = new Discord.RichEmbed ()
  
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("إقتراحي هو", "**" + args + "**")

  if(!args) return message.reply("**Please prodive a suggest**");
    message.channel.sendEmbed(embed)
     }
});




client.on('message', message => { 
if (!message.channel.guild) return;
  if (message.content === prefix + 'ui') {
let user = message.mentions.users.first();    
 if (!user) { user = message.author }
let guild = message.guild;
let embed = new Discord.RichEmbed()
    .setTitle('User Information')
    .setThumbnail(user.displayAvatarURL)
    .setFooter(message.createdAt , client.user.avatarURL)    
    .setColor("#428cdf")
    .addField("لاسم", "```"+`${user.tag}`+"```" , true)
    .addField("لاسم المتغير", "```"+`${user.nickname || "None"}`+"```", true)
    .addField("اي دي", "```"+`${user.id}`+"```", true)
    .addField("Playing",  user.presence.game ? "```"+ user.presence.game.name +"```" : '```None```', true)
    .addField("UserStatus", "```"+`${user.presence.status}`+"```", true)
    .addField("هل هو بوت؟", "```"+`${user.bot}`+"```", true)  
	.addField('Roles', message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(' '))
    message.channel.send({embed});
}
});




///////////////////////////////////////////////////////////////////////
// M U S I C  -   CODEES //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

//+ TO DO : ADD ALIAS!

const music = new Music(client, {
  prefix: ".", // Prefix for the commands.
  youtubeKey: 'AIzaSyApvbcgvYRGulf1I1Ffjfhr2K-S6TX0e9w',
  global: false,            // Non-server-specific queues.
  maxQueueSize: 50,        // Maximum queue size of 25.
  playCmd: 'play',        // Sets the name for the 'play' command.
  volumeCmd: 'vol',     // Sets the name for the 'volume' command.
  thumbnailType: 'high',
  leaveCmd: 'stop',      // Sets the name for the 'leave' command.
  anyoneCanSkip: true,
  disableLoop: false,
  searchCmd: 'search',
  requesterName: true,
  inlineEmbeds: false,	 
  queueCmd: 'queue',
  pauseCmd: 'pause',
  resumeCmd: 'resume',
  skipCmd: 'skip',
  loopCmd: 'loop',
  enableQueueStat: true,
});

///////////////////////////////////////////////////////////////////////
// M U S I C  -   CODEES //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
var kingscc =["https://cdn.discordapp.com/attachments/419823645280436224/423563689954902016/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423563233723547658/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562874850508804/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562665026125845/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562493726687253/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562319826518028/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423562059167563778/unknown.png","https://cdn.discordapp.com/attachments/419823645280436224/423561747195101186/unknown.png"]
client.on('message', message => {
    var args = message.content.split(" ").slice(1);         
if(message.content.startsWith(prefix + 'لغز')) {
     var embed = new Discord.RichEmbed()
.setImage(kingscc[Math.floor(Math.random() * kingscc.length)])
message.channel.sendEmbed(embed);
}
});

client.on('message', msg => {
    if (msg.content === 'السان') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'الباب المفتوح') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  client.on('message', msg => {
    if (msg.content === 'حرف الواو') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === 'الواو') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === 'البصل') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  
  
  client.on('message', msg => {
    if (msg.content === 'البيض') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === 'البيضه') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  
  
  client.on('message', msg => {
    if (msg.content === 'العمر') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  client.on('message', msg => {
    if (msg.content === 'الملح') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === 'السكر') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === 'مشط') {
      msg.reply('**اجابه صحيحه**');
    }
  });
  
  
  
  client.on('message', msg => {
    if (msg.content === 'قاتل نفسه') {
      msg.reply('**اجابه صحيحه**');
    }
  });

 const scc = [
   '*** منشن الجميع وقل انا اكرهكم. ***',
'*** اتصل على امك و قول لها انك تحبها :heart:. ***',
   '***     تصل على الوالده  و تقول لها  احب وحده.***',
   '*** تتصل على شرطي تقول له عندكم مطافي.***',
   '*** صور اي شيء يطلبه منك الاعبين.***',
   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
   '***  تروح عند شخص تقول له احبك. ***',
   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
   '*** ذي المرة لك لا تعيدها.***',
   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
   '***سو مشهد تمثيلي عن مصرية بتولد.***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
]
 client.on('message', message => {
 if (message.content.startsWith(prefix + 'حكم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة حكم ..")
  .setColor('RANDOM')
  .setDescription(`${scc[Math.floor(Math.random() * scc.length)]}`)
   message.channel.sendEmbed(mariam);
   message.react(":thinking:")
  }
});














//////////////////////////////////////////////////////////////////////
// wwwwwwwwwwwwwwwwwwww //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
 const king = [
     'كقمـيص نفـيـسـه نشـف',
     'خـيـط حـرير على حـيـط خلـيل',
     'شـفـتـك شـفـتـنـي ما شـفـتـك شـفـتـنــي',
     'كم كلمه في كم',
     'سياره ابي في جيبي',
     'قعقاع فوق قعقاع',
     'جو جدة زي جو جيزان',
     '‏فراش فراس مفروش',
     'لقمه و جغمه',
     '‏خط تبوك طويل',
     '‏طحن دخن',
     '‏شعبان شبعان',
     '‏لحم الحمام حلال ولحم الحمار حرام',
     '‏شـرطي أكل طرشي',
     '‏حب حبـحبـنا زي حب حبـحبـكم',
     '‏حوش الشيخ خوش حوش',
     '‏مالكم تكئكئتم كتكئكئكم البارحة',
     'د بـاب ما فـرملـنا به و دبـاب فرملـنا به',
     'أكلت قفص بصل ومصيت قفص قصب',
     '‏شـفـتـك شـفـتـنـي ما شـفـتـك شـفـتـنــي',
]

 client.on('message', message => {
   if (message.content.startsWith(".اسرع كتابه")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه اسرع كتابه' ,
  `${king[Math.floor(Math.random() * king.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});







client.on('message', msg => {
  if (msg.content === 'كقمـيص نفـيـسـه نشـف') {
    msg.reply('**مشالله عليك اسرع واحد**');
  }
});

client.on('message', msg => {
  if (msg.content === 'خـيـط حـرير على حـيـط خلـيل') {
    msg.reply('**مشالله عليك اسرع واحد**');
  }
});


client.on('message', msg => {
  if (msg.content === 'شفتك شفتني ماشفتك ماشفتني') {
    msg.reply('**مشالله عليك اسرع واحد**');
  }
});


client.on('message', msg => {
  if (msg.content === 'كحــوش خمـيـس خــوش حــوش') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});


client.on('message', msg => {
  if (msg.content === 'كم كلمه في كم') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

client.on('message', msg => {
  if (msg.content === 'سياره ابي في جيبي') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});





client.on('message', msg => {
  if (msg.content === 'جو جدة زي جو جيزان') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});


client.on('message', msg => {
  if (msg.content === 'فراش فراس مفروش') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});


client.on('message', msg => {
  if (msg.content === 'لقمه و جغمه') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});



client.on('message', msg => {
  if (msg.content === 'لقمه و جغمه') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

client.on('message', msg => {
  if (msg.content === 'خط تبوك طويل') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

client.on('message', msg => {
  if (msg.content === 'طحن دخن') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});


client.on('message', msg => {
  if (msg.content === 'شعبان شبعان') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

client.on('message', msg => {
  if (msg.content === 'لحم الحمام حلال ولحم الحمار حرام') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

client.on('message', msg => {
  if (msg.content === 'شرطي اكل طرشي') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

client.on('message', msg => {
  if (msg.content === 'حب حبحبنا زي حب حبحبكم') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});


client.on('message', msg => {
  if (msg.content === 'حوش الشيخ خوش حوش') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});


client.on('message', msg => {
  if (msg.content === '‏مالكم تكئكئتم كتكئكئكم البارحة') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});


client.on('message', msg => {
  if (msg.content === '‏د بـاب ما فـرملـنا به و دبـاب فرملـنا به') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

client.on('message', msg => {
  if (msg.content === '‏شفتك شفتني ماشفتك ماشفتني') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

client.on('message', msg => {
  if (msg.content === '‏أكلت قفص بصل ومصيت قفص قصب') {
    msg.reply('**مشالله عليك اسرع واحد تستحق فلوس امزح**');
  }
});

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////






