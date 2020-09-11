# Application Folder

## Purpose
The purpose of this folder is to store all the source code and related files for your team's application. Source code MUST NOT be in any of folder. <strong>YOU HAVE BEEN WARNED</strong>

You are free to organize the contents of the folder as you see fit. But remember your team is graded on how you use Git. This does include the structure of your application. Points will be deducted from poorly structured application folders.

## Please use the rest of the README.md to store important information for your team's application.

# SSH Instructions
    - Download the file 'team1v2.pem' that is in this folder
    - In your local terminal:
        - $ ssh -i path/to/.pem/file ubuntu@ec2-54-176-147-4.us-west-1.compute.amazonaws.com
        - Example: ssh -i ~/.ssh/team1v2.pem ubuntu@ec2-54-176-147-4.us-west-1.compute.amazonaws.com
    - Once connected:
        - pm2 (if this fails make sure you run 'npm install')
            - pm2 see status
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make pm2_status
            - pm2 start
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make pm2_start
            - pm2 restart
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make pm2_restart
            - pm2 reload
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make pm2_reload
            - pm2 stop
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make pm2_stop
            - pm2 delete
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make pm2_delete
        - regular shell scripts
            - regular run (bash):
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make init
                - $ make go
            - background run (bash):
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make init
                - $ make on
                - $ exit
            - background stop (bash):
                - $ cd ~/Github/csc648-03-fa20-team01-robertIanClarkson/application
                - $ make kill
    - in your local browser:
        - http://ec2-54-176-147-4.us-west-1.compute.amazonaws.com
    - all 'shell script run' ExpressJS logs are kept in:
        - $ ~/Logs/terminal.txt
    - all pm2 logs are kept in:
        - $ ~/Logs/pm2_logs.txt