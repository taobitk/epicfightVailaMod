// Server script - Dump ALL valid registered structure IDs directly via /dumpstructures command or Server Load

const Registries = Java.loadClass('net.minecraft.core.registries.Registries');

function performStructureDump(server, player) {
    try {
        let registryAccess = server.registryAccess();
        let registry = registryAccess.registryOrThrow(Registries.STRUCTURE);
        let allStructureIds = [];

        registry.keySet().forEach(resLoc => {
            allStructureIds.push(resLoc.toString());
        });

        allStructureIds.sort();

        // Ghi ra file JSON tại nhap/all_registered_structures.json
        JsonIO.write('nhap/all_registered_structures.json', {
            total_structures: allStructureIds.length,
            structures: allStructureIds
        });

        let msg = `[OriginStats] Đã xuất thành công ${allStructureIds.length} công trình hợp lệ vào nhap/all_registered_structures.json!`;
        console.log(msg);
        if (player) player.tell(`§a§l${msg}`);
    } catch (e) {
        let err = `[OriginStats] Lỗi khi dump registry công trình: ${e}`;
        console.log(err);
        if (player) player.tell(`§c${err}`);
    }
}

ServerEvents.loaded(event => {
    performStructureDump(event.server, null);
});

ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;
    event.register(
        Commands.literal('dumpstructures')
            .requires(src => src.hasPermission(2))
            .executes(ctx => {
                let player = ctx.getSource().getPlayerOrException();
                performStructureDump(ctx.getSource().getServer(), player);
                return 1;
            })
    );
});
