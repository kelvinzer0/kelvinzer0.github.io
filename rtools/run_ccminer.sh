#!/bin/bash

while true; do
  torify ./ccminer.sh >> log.txt 2>&1
  if [ $? -ne 0 ]; then
    echo "Proses ccminer.sh terputus. Menunggu 10 detik dan mencoba lagi..."
    sleep 10
  fi
done
