import { system, world, Player } from '@minecraft/server';

system.runInterval(() =>{
  for (const player of world.getPlayers()) {
    player.getTags().forEach(tag=>{
      if(tag.startsWith("os:")) player.removeTag(tag)
    });
    if (player.clientSystemInfo.platformType == 'Console') {
      player.nameTag = player.name + "\n" + "Console";
      player.addTag('os:console');
      player.runCommandAsync('title @s actionbar OS: Console');
    }
    else if (player.clientSystemInfo.platformType == 'Desktop') {
      player.nameTag = player.name + "\n" + "PC";
      player.addTag('os:pc');
      player.runCommandAsync('title @s actionbar OS: PC');
    }
    else if (player.clientSystemInfo.platformType == 'Mobile') {
      player.nameTag = player.name + "\n" + "Mobile";
      player.addTag('os:mobile');
      player.runCommandAsync('title @s actionbar OS: Mobile');
    }
    else {
      player.nameTag = player.name + "\n" + "Unkown";
      player.addTag('os:unkown');
      player.runCommandAsync('title @s actionbar OS: unkown');
    }
  }
  
});