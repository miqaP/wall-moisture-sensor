#!/bin/sh
PROJECT_NAME=$1
VERSION=$2

echo "from insert-pcb-version.sh project name $PROJECT_NAME / version $VERSION

sed -i "s/{{VERSION}}/$VERSION/g" $PROJECT_NAME.kicad_pcb