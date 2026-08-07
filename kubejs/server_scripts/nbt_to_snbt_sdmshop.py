import os, sys

path1 = r"c:\Users\8hung\AppData\Roaming\PrismLauncher\instances\taobitk\minecraft\config\SDMShop\shops\07f51ebc-d952-4580-af10-e64857e3e9a1.data"
path2 = r"c:\Users\8hung\AppData\Roaming\PrismLauncher\instances\taobitk\minecraft\config\SDMShop\shops\8e2c3d51-4771-429e-9d5c-c470a532378f.data"

# Minimal NBT parser in pure Python
class NBTParser:
    TAG_End = 0
    TAG_Byte = 1
    TAG_Short = 2
    TAG_Int = 3
    TAG_Long = 4
    TAG_Float = 5
    TAG_Double = 6
    TAG_Byte_Array = 7
    TAG_String = 8
    TAG_List = 9
    TAG_Compound = 10
    TAG_Int_Array = 11
    TAG_Long_Array = 12

    def __init__(self, data):
        self.data = data
        self.offset = 0

    def read_byte(self):
        val = self.data[self.offset]
        self.offset += 1
        return val

    def read_short(self):
        val = int.from_bytes(self.data[self.offset:self.offset+2], 'big', signed=True)
        self.offset += 2
        return val

    def read_int(self):
        val = int.from_bytes(self.data[self.offset:self.offset+4], 'big', signed=True)
        self.offset += 4
        return val

    def read_long(self):
        val = int.from_bytes(self.data[self.offset:self.offset+8], 'big', signed=True)
        self.offset += 8
        return val

    def read_float(self):
        import struct
        val = struct.unpack('>f', self.data[self.offset:self.offset+4])[0]
        self.offset += 4
        return val

    def read_double(self):
        import struct
        val = struct.unpack('>d', self.data[self.offset:self.offset+8])[0]
        self.offset += 8
        return val

    def read_string(self):
        length = self.read_short()
        val = self.data[self.offset:self.offset+length].decode('utf-8', errors='ignore')
        self.offset += length
        return val

    def read_tag_payload(self, tag_type):
        if tag_type == self.TAG_End:
            return None
        elif tag_type == self.TAG_Byte:
            return self.read_byte()
        elif tag_type == self.TAG_Short:
            return self.read_short()
        elif tag_type == self.TAG_Int:
            return self.read_int()
        elif tag_type == self.TAG_Long:
            return self.read_long()
        elif tag_type == self.TAG_Float:
            return self.read_float()
        elif tag_type == self.TAG_Double:
            return self.read_double()
        elif tag_type == self.TAG_Byte_Array:
            length = self.read_int()
            arr = list(self.data[self.offset:self.offset+length])
            self.offset += length
            return arr
        elif tag_type == self.TAG_String:
            return self.read_string()
        elif tag_type == self.TAG_List:
            elem_type = self.read_byte()
            length = self.read_int()
            return [self.read_tag_payload(elem_type) for _ in range(length)]
        elif tag_type == self.TAG_Compound:
            res = {}
            while True:
                t = self.read_byte()
                if t == self.TAG_End:
                    break
                name = self.read_string()
                res[name] = self.read_tag_payload(t)
            return res
        elif tag_type == self.TAG_Int_Array:
            length = self.read_int()
            res = [self.read_int() for _ in range(length)]
            return res
        elif tag_type == self.TAG_Long_Array:
            length = self.read_int()
            res = [self.read_long() for _ in range(length)]
            return res

    def parse(self):
        tag_type = self.read_byte()
        if tag_type != self.TAG_Compound:
            return None
        name = self.read_string()
        return {name: self.read_tag_payload(tag_type)}

import json

for p in [path1, path2]:
    if os.path.exists(p):
        print(f"\n==================== {os.path.basename(p)} ====================")
        with open(p, 'rb') as f:
            raw = f.read()
        parser = NBTParser(raw)
        parsed = parser.parse()
        try:
            print(json.dumps(parsed, indent=2, ensure_ascii=True))
        except Exception:
            pass
