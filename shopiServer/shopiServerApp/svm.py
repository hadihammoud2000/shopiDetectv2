svm = None
from urllib.parse import urlparse


import  tldextract
import ipaddress as ip

def createColumnsList(url, trainORno, target):
  #protocol://thirdLevelDomain.secondLevelDomain.topLevelDomain/directory/fileOrPage
  #thirdLevelDomain = subdomainName; secondLevelDomain + topLevelDomain = domainName; subdomainName + domainName = hostName; directory + fileOrPage = path
  url = str(url)
  columnsList = []
  parsedURL = urlparse(url)
  #scheme://netloc/path;parameters?query#fragment
  schemeComponent = parsedURL.scheme
  netlocComponent = parsedURL.netloc
  pathComponent = parsedURL.path
  queryComponent = parsedURL.query
  extraction = tldextract.extract(url) 
  #subdomain.domain.suffix 
  thirdLevel = extraction.subdomain 
  secondLevel = extraction.domain
  topLevel = extraction.suffix
    #append protocol
  if schemeComponent == 'http':
    h=1
  else:
    h=0
  columnsList.append(h)
    #append number of @ in host name  
  columnsList.append(netlocComponent.count('@'))  
    #append number of // in path  
  columnsList.append(pathComponent.count('//'))  
    #append number of / in path   
  columnsList.append(pathComponent.count('/'))
    #append number of . in host name   
  columnsList.append(netlocComponent.count('.'))   
    #append number of - in host name  
  columnsList.append(netlocComponent.count('-'))
    #append number of random characters
  counter = 0
  randomCharactersList = ['_', '?', ';', '&', '=', '+']
  for character in url:
    if character in randomCharactersList:
      counter = counter + 1 
  columnsList.append(counter) 
    #append length of url   
  columnsList.append(len(url)) 
    #append length of netloc (host name) Component    
  columnsList.append(len(netlocComponent))  
    #append length of query component    
  columnsList.append(len(queryComponent))     
    #append number of 3rd level domains  
  if not thirdLevel:
    n = 0
  else:
    n = len(thirdLevel.split('.')) 
  columnsList.append(n)   
    #append existence of IP or no 
  try: 
    if ip.ip_address (netlocComponent):
      s=1
  except:
    s=0    
  columnsList.append(s)
    #append existence of shady top level domains
  shadyListofSuffixes = ['work', 'men', 'click','gdn','loan','top','cf','gq','ml','ga','monster','accountants','life','desi','buzz','country','ooo','stream','download','xin','nagoya', 'racing','win', 'ryukyu']
  if topLevel in shadyListofSuffixes:
    s=1
  else:
    s=0
  columnsList.append(s)
  if (trainORno==1):#if function is to define features and target, append target; if function is only used to compute url features, do not append target
    columnsList.append(str(target))
  return columnsList