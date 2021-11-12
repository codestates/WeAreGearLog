#!/bin/bash
cd /home/ubuntu/WeAreGearLog/server
sudo npm install
sudo npm install pm2@latest -g
sudo apt-get update
sudo apt-get install authbind