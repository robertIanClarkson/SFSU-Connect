# SFSU Connect

Final Product --> http://ec2-54-151-54-31.us-west-1.compute.amazonaws.com/

Application code --> *folder:* **application**

Milestone Documentation --> *folder:* **Milestones**

<img src="/readme_images/frontend.png" alt="frontend"/>

## Stats
* 11 completed projects
* 123 closed issues
* 200+ commits

## About

This project was completed remotely over the COVID-19 Pandemic. **Discord** was used for general communication. **GitHub** issues and projects where used to meet deliverables and keep track of issues.

This was a senior level project done at San Francisco State University. The goal of this project was to learn how project goals are met in a company environment. The final outcome of this project was to create a hosted buy and sell website simalar to that of **craigslist** but focused on university students and faculty. For this project students held the role of the development team for a new company. 

The organization of the team as a whole went as follows: 
* **CEO --> Class Professor**
* **CTO --> Assistant Professor**
* **Team Lead --> Robert Clarkson** (*github:* robertIanClarkson, *email:* rclarkso@mail.sfsu.edu)
* **Backend Lead --> Cody Camp** (*github:* camper4834, *email:* ccamp2@mail.sfsu.edu)
* **Frontend Lead --> Taylor Luke** (*github:* taylorlukee, *email:* tluke@mail.sfsu.edu)
* **Gitmaster --> Kevin Fung** (*github:* kefung2, *email:* kfung5@mail.sfsu.edu)
* **Developer --> Gerardo Ochoa** (*github:* shadow6188, *email:* gochoa5@mail.sfsu.edu)
* **Developer --> Hong Li** (*github:* ChromatusX, *email:* hli@mail.sfsu.edu)


## Process (paraphrased)

Each milestone is documented in full in the **Milestones** folder.

The CEO gave the team nonfunctional requirements (listed further down). From here the Team Lead (Robert Clarkson) developed a plan of attack, specifically the technologies (listed further down) to be used to meet the end goal. From here the CTO approved the technologies to be used and development began. 

The first step of development was to set up the technology stack and create basic *about* pages for each member. Once these changes where working locally, the team lead set up the AWS account and hosted the website via an Amazon EC2 Instance.

Our next step was to create an database instance. We created a MySQL instance through Amazon RDS as there was plenty of documentation on how to connect an RDS database to an EC2 instance as they are both an AWS service. From here the Team Lead was able to create a Vertical Prototype (Milestone 1) to test all of the technologies to be used. The test involved database input and output through a frontend form. This process test that the frontend, backend, and database are all able to communicate between each other successfully.

Next the Frontend Lead with supervision of the Team Lead and help from all members created frontend wireframes. These wireframes where then approved by the CEO. Then we created mockups through the web application **Figma**. Mockups also received approval from the CEO.

From here the Team Lead (Robert Clarkson) coordinated with the Frontend Lead (Taylor Luke) to have a first revision of the all webpages to be used. The frontend lead, with help from other members developed a rough draft of all pages. From here out the Frontend Lead continued to refine pages as well as work with the Team Lead to resolve issues regarding backend compatibility. 

Once the first revision of frontend pages was working, the Backend Lead (Cody Camp) and Team Lead (Robert Clarkson) worked to route all the pages. Once the pages where routed, Backend Lead (Cody Camp), Team Lead (Robert Clarkson), Developer (Gerardo Ochoa), and Gitmaster (Kevin Fung) worked to start creating database functions, website logic, security, and states to bring the website together as a whole.

At Milestone 3 we had met our delivery date and the website was mostly functioning as intended. At this point the CEO walked through the website commented on things he liked and things he wished changed. After this presentation we moved into the final part of the project.

In the final push we implemented all the changes the CEO wanted, cleaned up the frontend, and extensively tested our implementation to make sure it met the nonfunctional requirements. We ran into multiple bugs when testing but out implementation was object oriented enough that tracking down issues and fixing them was mostly trivial. 

We ended up finishing the website and all documentation before our deadline. Upon our final presentation our CEO was pleased that we had fulfilled all our functional and  nonfunctional requirements as well as the visual asthetic and flow of the website. 


## Nonfunctional Requirements

1. Application shall be developed, tested and deployed using tools and servers approved by Class CTO and as agreed in M0 (some may be provided in the class, some may be chosen by the student team but all tools and servers have to be approved by class CTO).
2. Application shall be optimized for standard desktop/laptop browsers e.g. must render correctly on the two latest versions of two major browsers 
3. All or selected application functions must render well on mobile devices
4. Data shall be stored in the database on the team’s deployment server.
5. No more than 50 concurrent users shall be accessing the application at any time
6. Privacy of users shall be protected and all privacy policies will be appropriately communicated to the users.
7. The language used shall be English (no localization needed) 
8. Application shall be very easy to use and intuitive 
9. Application should follow established architecture patterns
10. Application  code and its repository shall be easy to inspect and maintain
11. Google analytics shall be used
12. No e-mail clients shall be allowed. Interested users can only message to sellers via in-site messaging. One round of messaging (from user to seller) is enough for this application
13. Pay functionality, if any (e.g. paying for goods and services) shall not be implemented nor simulated in UI.
14. Site security: basic best  practices shall be applied (as covered in the class) for main data items
15. Media formats shall be  standard as used in the market today
16. Modern SE processes and practices shall be used as specified in the class, including collaborative and continuous SW development
17. The application UI (WWW and mobile)  shall prominently display the following exact text on all pages "SFSU Software Engineering Project CSC 648-848, Fall 2020.  For Demonstration Only” at the top of the WWW page. (Important so as to not confuse this with a real application).


## Technologies
* Figma
* ExpressJS
* MySQL
* AWS
* Google Analytics
* Ubuntu
* Material Design
* bcrypt
* passport
* pugJS
* CSS
* Materialize
* PM2
* nginx
