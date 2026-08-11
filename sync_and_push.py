import os
import sys
import shutil
import subprocess
import time

# System encoding fix for Windows console
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

# Đường dẫn cài đặt Git
GIT_BIN = r"D:\code\app\git\cmd\git.exe"

# Đường dẫn 2 instance
SRC_INST = r"c:\Users\8hung\AppData\Roaming\PrismLauncher\instances\taobitk\minecraft"
DST_INST = r"c:\Users\8hung\AppData\Roaming\PrismLauncher\instances\taobitk mod\minecraft"

# Danh sách thư mục/file cần đồng bộ giữa 2 instance
SYNC_DIRS = [
    r"kubejs",
    r"config\originstats"
]

def sync_instances():
    """Tự động đồng bộ KubeJS và OriginStats từ taobitk sang taobitk mod."""
    print("[SYNC] Đang đồng bộ dữ liệu sang instance 'taobitk mod'...")
    if not os.path.exists(DST_INST):
        print("[SYNC] ⚠️ Không tìm thấy folder taobitk mod, bỏ qua đồng bộ local.")
        return

    for rel_path in SYNC_DIRS:
        src_path = os.path.join(SRC_INST, rel_path)
        dst_path = os.path.join(DST_INST, rel_path)
        
        if os.path.isfile(src_path):
            os.makedirs(os.path.dirname(dst_path), exist_ok=True)
            shutil.copy2(src_path, dst_path)
            print(f"  └─ Copied file: {rel_path}")
        elif os.path.isdir(src_path):
            if os.path.exists(dst_path):
                shutil.rmtree(dst_path)
            shutil.copytree(src_path, dst_path)
            print(f"  └─ Synced folder: {rel_path}")

def git_push(commit_msg=None):
    """Tự động git add, git commit và git push lên GitHub."""
    if not os.path.exists(GIT_BIN):
        print(f"[GIT] ❌ Không tìm thấy Git executable tại {GIT_BIN}")
        return

    if not commit_msg:
        commit_msg = f"Auto-sync commit at {time.strftime('%Y-%m-%d %H:%M:%S')}"

    print(f"\n[GIT] 🚀 Đang tiến hành Git Add, Commit & Push với nội dung: '{commit_msg}'...")
    
    # 1. Git add .
    res_add = subprocess.run([GIT_BIN, "add", "."], cwd=SRC_INST, capture_output=True, text=True, encoding='utf-8', errors='replace')
    if res_add.returncode != 0:
        print("[GIT] ❌ Lỗi khi chạy git add:", res_add.stderr)
        return

    # 2. Git status check
    res_status = subprocess.run([GIT_BIN, "status", "-s"], cwd=SRC_INST, capture_output=True, text=True, encoding='utf-8', errors='replace')
    if not res_status.stdout.strip():
        print("[GIT] ✅ Không có thay đổi nào mới cần commit.")
        return

    # 3. Git commit
    res_commit = subprocess.run([GIT_BIN, "commit", "-m", commit_msg], cwd=SRC_INST, capture_output=True, text=True, encoding='utf-8', errors='replace')
    print(res_commit.stdout)

    # 4. Git push
    res_push = subprocess.run([GIT_BIN, "push"], cwd=SRC_INST, capture_output=True, text=True, encoding='utf-8', errors='replace')
    if res_push.returncode == 0:
        print("[GIT] 🎉 TẢI LÊN GITHUB THÀNH CÔNG RỒI NHÉ!")
    else:
        print("[GIT] ❌ Lỗi khi git push:\n", res_push.stderr)

if __name__ == "__main__":
    custom_msg = sys.argv[1] if len(sys.argv) > 1 else None
    sync_instances()
    git_push(custom_msg)
