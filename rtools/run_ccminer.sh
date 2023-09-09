#!/bin/bash

while true; do
  torify ./ccminer.sh >> log.txt 2>&1
  echo "ccminer.sh telah berhenti. Menunggu 5 detik sebelum memulai lagi..."
  sleep 5
done
