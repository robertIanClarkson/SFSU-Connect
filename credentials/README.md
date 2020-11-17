# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 

# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP
    - http://ec2-54-151-54-31.us-west-1.compute.amazonaws.com
2. SSH username
    - ubuntu@ec2-54-151-54-31.us-west-1.compute.amazonaws.com
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
    - team1v2.pem
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
    - team-1.c04boetuas7w.us-west-1.rds.amazonaws.com
    - Port: 3306
5. Database username
    - admin
6. Database password
    - team1_db
7. Database name (basically the name that contains all your tables)
    - team-1
8. Instructions on how to use the above information.
SSH Instructions:
    - Download the file 'team1v2.pem' that is in this folder
    - In your local terminal:
        - $ ssh -i path/to/.pem/file ubuntu@ec2-54-151-54-31.us-west-1.compute.amazonaws.com
        - Example: ssh -i ~/.ssh/team1v2.pem ubuntu@ec2-54-151-54-31.us-west-1.compute.amazonaws.com
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
        - http://ec2-54-151-54-31.us-west-1.compute.amazonaws.com
    - all 'shell script run' ExpressJS logs are kept in:
        - $ ~/Logs/terminal.txt
    - all pm2 logs are kept in:
        - $ ~/Logs/pm2_logs.txt

AWS Credentials:
- Account ID: 116206711591
- root (Root user)
    - username: robert.ian.clarkson@gmail.com
    - password: team1_root
- Users (IAM user)
    - username: Administrator
    - password: team1_Admin
- Database (Amazon RDS)
    - name: team-1
    - username: admin
    - password: team1_db
    
    

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
