# regular running
init:
	npm install

go:
	npm start

# Running in background through shell
on:
	(npm start >> ~/Logs/terminal.txt) &

kill:
	killall node

# helper commands for checking for zombie processes
countz:
	ps aux | awk {'print $8'}|grep -c Z

listz:
	ps aux | awk '{ print $8 " " $2 }' | grep -w Z

listps:
	pstree -paul

# pm2 commands
pm2_status:
	pm2 ls

pm2_start:
	pm2 start bin/www --watch --name "team1_webserver" --log ~/Logs/pm2_logs.txt --time

pm2_restart:
	pm2 restart team1_webserver

pm2_reload:
	pm2 reload team1_webserver

pm2_stop:
	pm2 stop team1_webserver

pm2_delete:
	pm2 delete team1_webserver