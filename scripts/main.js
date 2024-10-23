import { system, world, Player } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((ev) =>{
  const player = ev.player;
  if (ev.initialSpawn == true) {
    player.getTags().forEach((tag) => tag.startsWith("os:") && player.removeTag(tag));

    const platform = player.clientSystemInfo.platformType;
    player.addTag(`os:${platform.replace("Desktop", "PC")}`);
    player.nameTag = player.name + '\n' + platform.replace("Desktop", "PC");
  }
});
