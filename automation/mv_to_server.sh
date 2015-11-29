#!/bin/bash

mbp_path="/Users/skilbjo/Code/Node/ascii/data"
pi_data="/home/pi/node/app/ascii/data"
user="pi"
server="skilbjo.duckdns.org:2222"

# Send to Pi
rsync -chavzP --stats $mbp_path $user@$server:$pi_data 



