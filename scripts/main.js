import { system, world, Player } from '@minecraft/server';

system.runInterval(() =>{
  for (const player of world.getPlayers()) {
    player.getTags().forEach(tag=>{
      if(tag.startsWith("os:")) player.removeTag(tag)
    });
    if (player.clientSystemInfo.platformType == 'Console') {
      player.addTag('os:console');
      player.nameTag = player.name + "\n" + "Console";
      player.onScreenDisplay.setActionBar('OS: Console');
    }
    else if (player.clientSystemInfo.platformType == 'Desktop') {
      player.addTag('os:pc');
      player.nameTag = player.name + "\n" + "PC";
      player.onScreenDisplay.setActionBar('OS: PC');
    }
    else if (player.clientSystemInfo.platformType == 'Mobile') {
      player.addTag('os:mobile');
      player.nameTag = player.name + "\n" + "Mobile";
      player.onScreenDisplay.setActionBar('OS: Mobile');
    }
    else {
      player.addTag('os:unkown');
      player.nameTag = player.name + "\n" + "Unkown";
      player.onScreenDisplay.setActionBar('OS: Unkown');
    }
  }
});
