import pandas as pd
import dominate
from dominate.tags import *
from dominate.util import raw
import sys

import logging as log 
log.basicConfig(format='%(asctime)s - %(message)s', level=log.INFO)

import os 

def createInfoJson(first_name,last_name,role,phone_number,email,twitter,linkedin,github):
        try:
                import json
                log.info(f'Attempting to create an info.json for {first_name} {last_name}')
                infoTemplate='../infoJsonTemplate.json'
                with open(infoTemplate,'r') as f:
                        template = json.loads(f.read())
                        template['first_name']=first_name
                        template['last_name']=last_name
                        template['role']=role
                        template['profile_pic']=findPersonImage(first_name,last_name,os.listdir('./pics'))
                        template['phone_number']=phone_number
                        template['email']=email
                        template['linkedin']=linkedin
                        template['twitter']=twitter
                        template['github']=github
                        personDirectory=createPersonDirectory(first_name,last_name)
                        with open(personDirectory+'info.json','w') as personDir:
                                personDir.write(json.dumps(template))
                log.info(f'info.json was succuesfully created for {first_name} {last_name}')
        except Exception as e:
                log.error(f'Unable to create a directory for {first_name} {last_name} \n Error:{e}' )
        



def nameHasPicture(name,listNames):
    for x in listNames:
        if name.lower() in x.lower():
            return x
    return False

def findPersonImage(firstName,lastName,listOfPics):
        image=nameHasPicture(firstName,listOfPics)
        if(image):
                log.info(f"Image Found for {firstName} {lastName}")
                return './python/pics/'+image
        else:
                log.warn(f"Unable to find image for {firstName} {lastName}")
                return 'https://pbs.twimg.com/profile_images/1083069803236073472/oJzQVirc_400x400.jpg'


