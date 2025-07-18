#!/bin/sh

PROJECT_NAME=$1
VERSION=$2

if [ $# -ne 2 ]; then
  echo "Usage: $0 <project_name> <version>"
  exit 1
fi

echo "insert-pcb-version.sh: insert $VERSION in $PROJECT_NAME.kicad_pcb"

sed -i "s/__VERSION__/$VERSION/g" "$PROJECT_NAME.kicad_pcb"