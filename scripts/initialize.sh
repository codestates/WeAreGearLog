#!/bin/bash
cd /home/ubuntu/WeAreGearLog/server
npm install
npm install socket.io
npm install pm2@latest -g
sudo apt-get update
sudo apt-get install authbind