import { system, world, Player } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((ev) =>{
  const player = ev.player;
  if (ev.initialSpawn == true) {
    player.getTags().forEach((tag) => tag.startsWith("os:") && player.removeTag(tag));

    const platform = player.clientSystemInfo.platformType;

    const osList = {
      'Console': "os:Console",
      'Desktop': "os:PC",
      'Mobile': "os:Mobile",
    };

    const tag = osList[platform];
    player.addTag(tag);
    player.nameTag = player.name + '\n' + tag.replace("os:", "");
  }
});
