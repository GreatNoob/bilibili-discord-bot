import re

type_map = {
    "num": "number",
    "str": "string",
    "bool": "boolean"
}


def generate_typescript_struct(markdown_table: str, struct_name):
    
    TYPESCRIPT_TEMPLATE = """
interface %(struct_name)s {
%(body)s
}
"""
    
    TABLE_ROW_REGEX = r"\|(?P<name>.*)\|(?P<type>.*)\|(?P<desc>.*)\|.*\|"
    
    body = ""
    for row in markdown_table.split("\n"):
        
        matchs = re.match(TABLE_ROW_REGEX, row)
        if not matchs:
            continue
        
        name = matchs.group("name").strip()
        type = matchs.group("type").strip()
        desc = matchs.group("desc").strip()
        
        if type in type_map:
            row_out = f"{name}: {type_map[type]};"
        elif type == "obj":
            row_out = f"{name}: {name.capitalize()};"
        elif type == "array":
            row_out = f"{name}: {name.capitalize()}[];"
            
        body += "\t{:25s}//{}\n".format(row_out, desc)
    
    return TYPESCRIPT_TEMPLATE % {"struct_name": struct_name, "body": body}

s = """
| role  | num  | 成员认证级别 | 0：无<br />1 2 7：个人认证<br />3 4 5 6：机构认证 |
| title | str  | 成员认证名   | 无为空                                            |
| desc  | str  | 成员认证备注 | 无为空                                            |
| type  | num  | 成员认证类型 | -1：无<br />0：有                                 |
"""

if __name__ == "__main__":
    print(generate_typescript_struct(s, "Official"))