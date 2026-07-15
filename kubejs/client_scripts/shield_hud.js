// File: kubejs/client_scripts/shield_hud.js
// Purpose: Receive shield data from server and paint custom Shield HUD 
// aligned with Classic Bars on the right side of the hotbar.

// Global shield variables (client-side cache)
global.currentShield = 0.0;
global.maxShield = 0.0;

// Listen to packet from server
NetworkEvents.dataReceived('shield_sync', event => {
    global.currentShield = event.data.getDouble('current');
    global.maxShield = event.data.getDouble('max');
});

// HUD rendering event
ClientEvents.paintScreen(event => {
    // Only render when HUD is visible (not in inventory or custom screen)
    if (event.screen) return;

    let player = event.mc.player;
    if (!player || player.isSpectator()) return;

    // Default maximum shield
    let max = global.maxShield;
    if (max <= 0) return; // Player has no shield capacity, don't draw

    let current = global.currentShield;
    if (current <= 0) return; // Shield is empty, hide the bar
    let width = event.width;
    let height = event.height;
    let graphics = event.graphics;

    // --- Dynamic Y-Offset Calculation based on active Classic Bars (Right Side) ---
    // Classic Bars bottom right stacks: Food (always) -> Thirst -> Stamina -> Armor Toughness -> Air -> Shield
    let yOffset = 0; // Food bar base height offset

    // 1. Food bar is always active (adds +10)
    yOffset += 10;

    // 2. Armor Toughness Bar (Active if player has toughness > 0)
    let toughness = player.getAttributeValue('minecraft:generic.armor_toughness');
    if (toughness > 0) {
        yOffset += 10;
    }

    // 3. Parcool Stamina Bar (Active if parcool is installed)
    if (Platform.isLoaded('parcool')) {
        yOffset += 10;
    }

    // 4. Air Bar (Active if player is underwater)
    let air = player.getAirSupply();
    let maxAir = player.getMaxAirSupply();
    if (air < maxAir) {
        yOffset += 10;
    }

    // Base coordinates matching Classic Bars alignment (Right Side)
    // Classic Bars right starts at center + 10 to center + 91 (81 pixels wide)
    let x = Math.floor(width / 2) + 10;
    let y = height - 39 - yOffset;

    // --- RENDER HUD SHIELD BAR ---
    // 1. Black outer border (matches Classic Bars border)
    graphics.fill(x, y, x + 81, y + 9, (0xFF000000 | 0));

    // 2. Dark gray inner background
    graphics.fill(x + 1, y + 1, x + 80, y + 8, (0xFF141414 | 0));

    // 3. Colored filled bar (Deep Neon Blue gradient look)
    let ratio = Math.min(1.0, Math.max(0.0, current / max));
    let fillWidth = Math.round(78 * ratio);
    if (fillWidth > 0) {
        // Render shield bar (cyan-blue color: 0xFF00AAFF)
        graphics.fill(x + 1, y + 1, x + 1 + fillWidth, y + 8, (0xFF0099FF | 0));
        
        // Highlight layer on top for 3D look
        graphics.fill(x + 1, y + 1, x + 1 + fillWidth, y + 3, (0xFF4DBCFF | 0));
    }

    // 4. Render Text Values
    let shieldText = Math.round(current) + "/" + Math.round(max);

    // Use KubeJS's native event.text() API
    event.text(Text.literal(shieldText), x + 85, y + 1, (0xFF00E6FF | 0), true);
});
