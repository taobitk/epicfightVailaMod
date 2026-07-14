# File: scratch/verify_damage_logs.py
# Purpose: Parse latest.log to verify if damage formula is vanilla-standard
# Log format (single line per hit):
# [DMG_CHECK] | Entity:xxx | Raw:x.xxxx | Armor:x.xx | Toughness:x.xx | EPF:x | Resist:x | Expected:x.xxxx

import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

LOG_PATH = r"C:\Users\8hung\AppData\Roaming\PrismLauncher\instances\taobitk\minecraft\logs\latest.log"

# Match the combined single-line format
pattern = re.compile(
    r"\[DMG_CHECK\]"
    r" \| Entity:([\w\.\:]+)"
    r" \| Raw:([\d\.]+)"
    r" \| Armor:([\d\.]+)"
    r" \| Toughness:([\d\.]+)"
    r" \| EPF:(\d+)"
    r" \| Resist:(\d+)"
    r" \| Expected:([\d\.]+)"
)

def calculate_expected(raw, armor, toughness, epf, resist):
    """Replicate vanilla Minecraft damage formula."""
    # Step 1: Armor
    armor_factor = armor - (raw / (2.0 + (toughness / 4.0)))
    armor_red    = min(20.0, max(armor / 5.0, armor_factor))
    after_armor  = raw * (1.0 - (armor_red / 25.0))

    # Step 2: Protection EPF
    after_enchant = after_armor * (1.0 - (min(20.0, epf) / 25.0))

    # Step 3: Resistance effect
    resist_pct = min(5, resist) * 0.20
    final      = after_enchant * (1.0 - resist_pct)
    return final

def main():
    if not os.path.exists(LOG_PATH):
        print(f"[ERROR] Log file not found: {LOG_PATH}")
        return

    mismatches = 0
    matches    = 0
    total      = 0

    print(f"[INFO] Reading log: {LOG_PATH}")
    print()

    with open(LOG_PATH, "r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            m = pattern.search(line)
            if not m:
                continue

            total     += 1
            entity    = m.group(1)
            raw       = float(m.group(2))
            armor     = float(m.group(3))
            toughness = float(m.group(4))
            epf       = int(m.group(5))
            resist    = int(m.group(6))
            expected  = float(m.group(7))

            # Re-verify the formula independently in Python
            py_expected = calculate_expected(raw, armor, toughness, epf, resist)
            diff = abs(expected - py_expected)

            if diff < 0.005:
                matches += 1
                print(
                    f"[MATCH]     #{total:04d} | {entity}"
                    f" | Raw={raw:.2f} -> Expected={expected:.4f}"
                    f" | Armor={armor:.1f} Toughness={toughness:.1f} EPF={epf} Resist={resist}"
                )
            else:
                mismatches += 1
                print(
                    f"[MISMATCH!] #{total:04d} | {entity}"
                )
                print(f"   Stats:    Armor={armor}, Toughness={toughness}, EPF={epf}, Resist={resist}")
                print(f"   In-game formula result : {expected:.4f}")
                print(f"   Python formula result  : {py_expected:.4f}  (Diff: {diff:.4f})")
                print("   -> Likely a mod modified the damage formula inside game!")

    print()
    print("=" * 60)
    print(f"  Total hits logged   : {total}")
    print(f"  Formula matches     : {matches}")
    print(f"  Formula mismatches  : {mismatches}")
    print("=" * 60)

    if total == 0:
        print("[WARNING] No DMG_CHECK entries found in log!")
        print("  1. Make sure damage_debug_logger.js loaded without errors.")
        print("  2. Enter the world and take/deal some hits.")
        print("  3. Run this script again.")
    elif mismatches > 0:
        print("[WARNING] Mismatches detected - a mod IS modifying damage calculation!")
    else:
        print("[OK] All hits match vanilla formula - damage system is unmodified.")

if __name__ == "__main__":
    main()
