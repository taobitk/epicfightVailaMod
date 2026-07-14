import zipfile
# A very simple JVM class parser to extract LineNumberTable for sendMsgToServer
# Let's read the class file bytes
z = zipfile.ZipFile('mods/Kambrik-6.1.1+1.20.1-forge.jar')
data = z.read('io/ejekta/kambrik/bridge/KambrikSharedApiForge.class')

# Let's find "sendMsgToServer" in constant pool
# To be simple, we can search for the method name in bytes, but let's just write a basic parser or print bytecode offsets.
# Actually, let's search for "sendMsgToServer" string in the class file and trace back.
# Instead of full parsing, we can just print the surrounding bytes or decompile it using a python-based class parser.
# Is there a way to write a simple class parser? Yes, JVM class file format is well-documented.
# Let's write a python script that uses 'javap' if we can find where javap is.
# Wait, let's search for javap.exe on the system!
import os
javap_path = None
for root, dirs, files in os.walk(r"C:\Program Files\Java"):
    if "javap.exe" in files:
        javap_path = os.path.join(root, "javap.exe")
        break
if not javap_path:
    for root, dirs, files in os.walk(r"C:\Program Files (x86)\Java"):
        if "javap.exe" in files:
            javap_path = os.path.join(root, "javap.exe")
            break

print("Found javap:", javap_path)
if javap_path:
    import subprocess
    # Extract class to temp
    with open("KambrikSharedApiForge.class", "wb") as f:
        f.write(data)
    res = subprocess.run([javap_path, "-l", "-c", "KambrikSharedApiForge.class"], capture_code=True, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print(res.stdout)
