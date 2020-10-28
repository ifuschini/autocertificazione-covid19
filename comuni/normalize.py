import json

with open('comuni.json') as f:
  data = json.load(f)

# Output: {'name': 'Bob', 'languages': ['English', 'Fench']}
jsonObj=[]
for i in data:
  obj={}
  obj['n'] = i['nome']
  obj['s'] = i['sigla']
  jsonObj.append(obj)
with open('comuni_mini.json', 'w') as f:
    json.dump(jsonObj, f)