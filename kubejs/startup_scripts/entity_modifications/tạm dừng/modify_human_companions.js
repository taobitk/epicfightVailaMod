// // Đặt tại: kubejs/startup_scripts/entity_modifications/modify_human_companions.js
// // Mục đích: Điều chỉnh chỉ số cơ bản của Human Companions mobs.

// EntityJSEvents.attributes(event => {
//     let BuiltInRegistries, ResourceLocation;
//     try {
//         BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
//         ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
//     } catch (e) {
//         console.error("Không thể load class BuiltInRegistries hoặc ResourceLocation!");
//     }

//     const safeAddAttribute = (builder, attributeId, value) => {
//         if (!BuiltInRegistries || !ResourceLocation) return;
//         try {
//             let loc = typeof ResourceLocation.parse === 'function'
//                 ? ResourceLocation.parse(attributeId)
//                 : new ResourceLocation(attributeId);
//             if (BuiltInRegistries.ATTRIBUTE.containsKey(loc)) {
//                 builder.add(attributeId, value);
//             }
//         } catch (err) {
//             // Bỏ qua lỗi nếu thuộc tính không tồn tại trong registry
//         }
//     };

//     // 1. Knight (Hiệp sĩ)
//     event.modify('humancompanions:knight', builder => {
//         builder.add('minecraft:generic.max_health', 60.0);
//         builder.add('minecraft:generic.attack_damage', 5.0);
//         builder.add('minecraft:generic.armor', 5.0);

//     });

//     // 2. Archer (Cung thủ)
//     event.modify('humancompanions:archer', builder => {
//         builder.add('minecraft:generic.max_health', 50.0);
//         builder.add('minecraft:generic.armor', 5.0);
//         builder.add('minecraft:generic.attack_damage', 5.0);

//         // FIX: Dùng arrow_damage cho 1.20.1+ nếu tồn tại
//         safeAddAttribute(builder, "attributeslib:arrow_damage", 9.0);
//         safeAddAttribute(builder, "attributeslib:arrow_velocity", 1.0);
//     });

//     // 3. Arbalist (Lính nỏ)
//     event.modify('humancompanions:arbalist', builder => {
//         builder.add('minecraft:generic.max_health', 60.0);
//         builder.add('minecraft:generic.armor', 5.0);
//         builder.add('minecraft:generic.attack_damage', 5.0);

//         // FIX: Dùng arrow_damage cho 1.20.1+ nếu tồn tại
//         safeAddAttribute(builder, "attributeslib:arrow_damage", 9.0);
//         safeAddAttribute(builder, "attributeslib:arrow_velocity", 1.0);
//     });

//     // 4. Axeguard (Lính rìu)
//     event.modify('humancompanions:axeguard', builder => {
//         builder.add('minecraft:generic.max_health', 40.0);
//         builder.add('minecraft:generic.attack_damage', 15.0);
//         builder.add('minecraft:generic.armor', 5.0);
//     });

// });
