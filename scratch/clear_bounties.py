import gzip
import struct

# NBT Tag Types
TAG_END = 0
TAG_BYTE = 1
TAG_SHORT = 2
TAG_INT = 3
TAG_LONG = 4
TAG_FLOAT = 5
TAG_DOUBLE = 6
TAG_BYTE_ARRAY = 7
TAG_STRING = 8
TAG_LIST = 9
TAG_COMPOUND = 10
TAG_INT_ARRAY = 11
TAG_LONG_ARRAY = 12

class NBTParser:
    def __init__(self, data):
        self.data = data
        self.offset = 0

    def read_byte(self):
        val = self.data[self.offset]
        self.offset += 1
        return val

    def read_short(self):
        val = struct.unpack_from('>h', self.data, self.offset)[0]
        self.offset += 2
        return val

    def read_int(self):
        val = struct.unpack_from('>i', self.data, self.offset)[0]
        self.offset += 4
        return val

    def read_long(self):
        val = struct.unpack_from('>q', self.data, self.offset)[0]
        self.offset += 8
        return val

    def read_float(self):
        val = struct.unpack_from('>f', self.data, self.offset)[0]
        self.offset += 4
        return val

    def read_double(self):
        val = struct.unpack_from('>d', self.data, self.offset)[0]
        self.offset += 8
        return val

    def read_string(self):
        length = self.read_short()
        val = self.data[self.offset:self.offset+length].decode('utf-8')
        self.offset += length
        return val

    def parse_tag(self, tag_type):
        if tag_type == TAG_END:
            return None
        elif tag_type == TAG_BYTE:
            return self.read_byte()
        elif tag_type == TAG_SHORT:
            return self.read_short()
        elif tag_type == TAG_INT:
            return self.read_int()
        elif tag_type == TAG_LONG:
            return self.read_long()
        elif tag_type == TAG_FLOAT:
            return self.read_float()
        elif tag_type == TAG_DOUBLE:
            return self.read_double()
        elif tag_type == TAG_BYTE_ARRAY:
            length = self.read_int()
            val = list(self.data[self.offset:self.offset+length])
            self.offset += length
            return val
        elif tag_type == TAG_STRING:
            return self.read_string()
        elif tag_type == TAG_LIST:
            elem_type = self.read_byte()
            length = self.read_int()
            return [self.parse_tag(elem_type) for _ in range(length)]
        elif tag_type == TAG_COMPOUND:
            compound = {}
            while True:
                t = self.read_byte()
                if t == TAG_END:
                    break
                name = self.read_string()
                val = self.parse_tag(t)
                compound[name] = (t, val)
            return compound
        elif tag_type == TAG_INT_ARRAY:
            length = self.read_int()
            val = list(struct.unpack_from('>' + 'i'*length, self.data, self.offset))
            self.offset += 4 * length
            return val
        elif tag_type == TAG_LONG_ARRAY:
            length = self.read_int()
            val = list(struct.unpack_from('>' + 'q'*length, self.data, self.offset))
            self.offset += 8 * length
            return val

def serialize_tag(tag_type, val):
    if tag_type == TAG_BYTE:
        return bytes([val])
    elif tag_type == TAG_SHORT:
        return struct.pack('>h', val)
    elif tag_type == TAG_INT:
        return struct.pack('>i', val)
    elif tag_type == TAG_LONG:
        return struct.pack('>q', val)
    elif tag_type == TAG_FLOAT:
        return struct.pack('>f', val)
    elif tag_type == TAG_DOUBLE:
        return struct.pack('>d', val)
    elif tag_type == TAG_BYTE_ARRAY:
        return struct.pack('>i', len(val)) + bytes(val)
    elif tag_type == TAG_STRING:
        b = val.encode('utf-8')
        return struct.pack('>h', len(b)) + b
    elif tag_type == TAG_LIST:
        if len(val) == 0:
            return bytes([TAG_COMPOUND]) + struct.pack('>i', 0)
        
        elem_type = TAG_COMPOUND
        if isinstance(val[0], dict):
            elem_type = TAG_COMPOUND
        elif isinstance(val[0], int):
            elem_type = TAG_INT
        elif isinstance(val[0], float):
            elem_type = TAG_FLOAT
        elif isinstance(val[0], str):
            elem_type = TAG_STRING
            
        res = bytes([elem_type]) + struct.pack('>i', len(val))
        for x in val:
            if elem_type == TAG_COMPOUND:
                res += serialize_compound(x)
            else:
                res += serialize_tag(elem_type, x)
        return res
    elif tag_type == TAG_COMPOUND:
        return serialize_compound(val)
    elif tag_type == TAG_INT_ARRAY:
        return struct.pack('>i', len(val)) + struct.pack('>' + 'i'*len(val), *val)
    elif tag_type == TAG_LONG_ARRAY:
        return struct.pack('>i', len(val)) + struct.pack('>' + 'q'*len(val), *val)

def serialize_compound(compound):
    res = b''
    for name, (t, val) in compound.items():
        res += bytes([t])
        b_name = name.encode('utf-8')
        res += struct.pack('>h', len(b_name)) + b_name
        res += serialize_tag(t, val)
    res += bytes([TAG_END])
    return res

def modify_nbt():
    # Read Gzipped NBT
    with gzip.open('scratch/extracted_npc/data/bountiful_npc/structures/village/adventurers_guild.nbt', 'rb') as f:
        data = f.read()

    parser = NBTParser(data)
    root_type = parser.read_byte()
    root_name = parser.read_string()
    root_compound = parser.parse_tag(root_type)

    # In Minecraft structure NBT, block entities are stored in a list called 'blocks' or 'block_entities' or 'entities'
    # Actually, block entities are in the list 'blocks' under NBT elements, let's verify where 'bountiful:board-be' is.
    blocks_list = root_compound.get('blocks')[1]
    
    modified = 0
    for block in blocks_list:
        if 'nbt' in block:
            nbt_compound = block['nbt'][1]
            if nbt_compound.get('id') and nbt_compound.get('id')[1] == 'bountiful:board-be':
                print("Found Bountiful Board Block Entity!")
                # Clear inventory and state of bounties
                if 'bounty_inv' in nbt_compound:
                    # Clear items in bounty_inv
                    bounty_inv = nbt_compound['bounty_inv'][1]
                    if 'Items' in bounty_inv:
                        bounty_inv['Items'] = (TAG_LIST, [])
                        print("Cleared bounty_inv Items.")
                if 'taken' in nbt_compound:
                    nbt_compound['taken'] = (TAG_STRING, '{}')
                if 'completed' in nbt_compound:
                    nbt_compound['completed'] = (TAG_STRING, '{}')
                # Reset board state if needed (or keep it empty)
                modified += 1

    if modified:
        # Serialize back
        out = bytes([root_type])
        b_name = root_name.encode('utf-8')
        out += struct.pack('>h', len(b_name)) + b_name
        out += serialize_compound(root_compound)

        # Save to extracted path
        with gzip.open('scratch/extracted_npc/data/bountiful_npc/structures/village/adventurers_guild.nbt', 'wb') as f:
            f.write(out)
        print("Successfully cleared pre-saved bounties from structure NBT!")

modify_nbt()
