import pandas as pd
import sys
import json

import logging as log 
log.basicConfig(format='%(asctime)s - %(message)s', level=log.INFO)

import os 

def createInfoJson(first_name,last_name,role,phone_number,email,twitter,linkedin,github,directoryOfPics='./pics'):
        try:
                import json
                log.info(f'Attempting to create an info.json for {first_name} {last_name}')
                log.info(f"We are using {directoryOfPics} to search for people photos")

                personJson = {}
                personJson['first_name']=first_name
                personJson['last_name']=last_name
                personJson['role']=role
                personJson['profile_pic']=findPersonImage(first_name,last_name,os.listdir(directoryOfPics))
                personJson['phone_number']=phone_number
                personJson['email']=email
                personJson['linkedin']=linkedin
                personJson['twitter']=twitter
                personJson['github']=github
                
                log.info(f'info.json was succuesfully created for {first_name} {last_name}')
                return personJson
        except Exception as e:
                log.error(f'Unable to create a directory for {first_name} {last_name} \n Error:{e}' )
                return ''
        



def nameHasPicture(name,listNames):
    for x in listNames:
        if name.lower() in x.lower():
            return x
    return False

def findPersonImage(firstName,lastName,listOfPics):
        image=nameHasPicture(firstName,listOfPics)
        if(image):
                log.info(f"Image Found for {firstName} {lastName} it's located in {image} ")
                return image
                log.warn(f"Unable to find image for {firstName} {lastName}")
                return ''


def main():
        dataDetails='businessCardData.csv'
        directoryOfpictures='../public/pictures/'      
        data = pd.read_csv(dataDetails).fillna('') 
        listOfPeopleJson=[]
        for _, row in data.iterrows():
                personJson= createInfoJson(row[0].strip(),row[1],row[2],row[3],row[4],row[5],row[6],row[7],directoryOfpictures)
                if(personJson):
                        listOfPeopleJson.append(personJson)
                
        log.info(f"this is what the json looks like {listOfPeopleJson}")
        with open("data.json","w") as f:
                f.write(json.dumps(listOfPeopleJson))
        

if __name__ == "__main__":
        main()