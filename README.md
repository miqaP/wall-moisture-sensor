# wall-moisture-sensor
https://github.com/miqaP/wall-moisture-sensor

# Versionning
Pour le moment j'ai une branche dev. Comment  
- Dev -> Release 

## Version de carte
Il faut se placer du point de vue de la carte et peut-être mettre de côté l'impact sur le firmware

- MAJOR -> Modification importantes -> Changement dans les fonctionnalités du produit -> feat:
    - Ajout d'une fonctionnalitées. Est-ce que l'ajout d'un connecteur est une nouvelle fonctionnalité ? Non je ne crois pas
    - Suppression d'une fonctionnalitées

- MINOR -> Pas de modification de fonctionnalité -> design:
    - Modification de composant, qui necessite la modification du routage par exemple changement de référence d'un DC/DC -> Mais pas de changement dans la fonctionnalité
    - Optimisation du layout, déplacement des composants
    - Changement du layout pour s'intégrer dans un boitier
    - Changement de la sérigraphie
- PATCH -> Modification de la BOM -> bom
    - Ok mais des fois la modification de la BOM implique une modification du firmware, nan ?

# Continuous Integration
Voir https://sschueller.github.io/posts/ci-cd-with-kicad-and-gitlab/
https://github.com/LiveLeds/AstraDriver/tree/main

Liste des commandes qui doivent être lancées par la CI : 
- kicad-cli pcb drc wall_moisture-hardware.kicad_pcb
-  kicad-cli pcb export gerbers wall_moisture-hardware.kicad_pcb -o gerbers/
- kicad-cli render wall_moisture-hardware
- kicad-cli render wall_moisture-hardware.kicad_pcb
- kicad-cli pcb render wall_moisture-hardware.kicad_pcb
- kicad-cli pcb render wall_moisture-hardware.kicad_pcb --output 3drender/top.png -> Il faut faire les autres vues, les orientations et distances de la caméra vont dépendre de la taille du projet. Un script python pourrait determiner ces informations

L'intégration se lance lors de la création d'une release

Chose a réaliser: 
- Un rapport de release qui montre la différence entre la version actuelle et la version précedente -> Voir Kicad-diff
    - Il faut pouvoir détérminer la version précédente, comment faire ?
- Exporter les pdf des schémas et du hardware ( les couches du PCB et la carte complète)

# Note sur la configuration du projet
Commitlint s’exécute à chaque commit grâce au hook Git commit-msg. Ce hook est un script situé dans le dossier .git/hooks/commit-msg qui est automatiquement lancé par Git à la validation d’un commit. Ce script appelle Commitlint pour vérifier que le message du commit respecte les règles définies.