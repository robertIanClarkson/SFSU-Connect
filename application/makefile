init:
	npm install

go:
	npm start

on:
	(npm start >> ~/Logs/terminal.txt) &

kill:
	killall node

countz:
	ps aux | awk {'print $8'}|grep -c Z

listz:
	ps aux | awk '{ print $8 " " $2 }' | grep -w Z

listps:
	pstree -paul