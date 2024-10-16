https://jupyter.org/try-jupyter/notebooks/?path=Untitled.ipynb

%pip install -q base58

import base58 
byte_array = base58.b58decode("") 
json_string = "[" + ",".join(map(lambda b: str(b), byte_array)) + "]" 
print(json_string)
