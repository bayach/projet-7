# projet-7

Backend config :

    1-Mettez vos informations de cluster dans /config/db.js
    2-Créez le fichier .env dans /config/ dans les données suivantes
        PORT=5000 votre port localhost
        CLIENT_URL=http://localhost:3000 votre URL client
        DB_USER= votre identifient
        DB_NAME=@xxxxxxxcluster.2wfh3.mongodb.net   //remplacer les x par le nom de votre cluster
        DB_PASSWORD= votre mot de passe
        TOKEN_SECRET=990bf68e6adf1be5f1671bba3bec692056922454 clé secrète aléatoire

Frontend config :
1-remplcer le dossier frontend actuel vide par ce dossier présent dans github:
https://github.com/bayach/frontend.git
2-Créez un fichier .env dans le dossier frontend :
REACT_APP_API_URL=http://localhost:5000/ l'url de votre serveur

démarrage front et back
1-ouvrir deux nouveau terminal de dialogue et taper ce qui suit :
pour démarrer le back taper dans le premier terminal : cd backend + npm install + npm start
pour démarrer le back taper dans le deuxieme terminal : cd frontend + npm install + npm start

base de donnée
importer les fichiers users.json et posts.json dans votre cluster
