import json, pathlib, urllib.request, concurrent.futures, subprocess
from html.parser import HTMLParser
P=pathlib.Path(__file__).parent
class Parse(HTMLParser):
 def __init__(self):
  super().__init__(); self.tags=[];self.stack=[];self.text=[]
 def handle_starttag(self,t,a):
  d=dict(a); self.tags.append({'tag':t,'attrs':d});self.stack.append(t)
 def handle_endtag(self,t):
  if t in self.stack: self.stack=self.stack[:len(self.stack)-1-self.stack[::-1].index(t)]
 def handle_data(self,d):
  if d.strip() and not any(t in self.stack for t in ['script','style']):self.text.append(d.strip())
def collect(slug):
 url='https://www.thgoplus.com.br/'+slug; name=slug.strip('/') or 'home'
 try:
  result=subprocess.run(['curl','-sSL','--max-time','30','-w','\n%{http_code}',url],capture_output=True,text=True); html,status=result.stdout.rsplit('\n',1); headers={}
  (P/(name+'.html')).write_text(html);p=Parse();p.feed(html)
  data={'url':url,'status':status,'headers':headers,'tags':p.tags,'text':p.text};(P/(name+'.json')).write_text(json.dumps(data,ensure_ascii=False,indent=2));return name,status
 except Exception as e:return name,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex: print(list(ex.map(collect,['','a-empresa/','servicos/','clientes/','testemunhos/','contato/','blog/','politica-privacidade/','termos-de-uso/'])))
