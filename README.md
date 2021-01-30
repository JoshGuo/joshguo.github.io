SAMPLE DATA FIELDS

List of Items
{
    "type" : "LIST",
    "header": "Contact",
    "data" : [
        {
            "type": "DEFAULT",
            "content": "joshua.guo@stonybrook.edu"
        },
        {
            "type": "LINK",
            "content": "LinkedIn",
            "link": "https://www.linkedin.com/in/joshuajguo/"
        },
        {
            "type": "LINK",
            "content": "GitHub",
            "link": "https://github.com/JoshGuo"
        }
    ]
}

Flippable Box Cards
{
    "type": "BOX_FLIPPABLE",
    "header": "Projects",
    "data": [
        {
            "name" : "ControlLED",
            "description" : "During the Covid-19 quarantine, I created this webapp to allow my friends to communicate to me via LED lights in my room. Using Express, I created a REST API to read / write from a queue of LED messages in MongoDB accompanied by a simple UI for users to customize the lights and attach a message. Additionally, I had to code and wire an Arduino to be able to read from the queue and adjust the lights accordingly.",
            "subtext" : ["ReactJS", "Node", "HTML", "CSS", "MongoDB", "Arudino"],
        },
        {
            "name": "Portfolio",
            "description": "The portfolio you're looking at right now! Working on this digital portfolio has helped me better understand principles of minimalistic and reactive web design. Additionally, all the data is filled in abstractly, so maintenance and updating of items (like this text here!) can all be done through basic modification of a JSON file. Super simple! By request, I am currently working on a portfolio generator for other users to more easily customize and adapt the format.",
            "subtext": ["ReactJS"]
        },
        {
            "name" : "PlanIt",
            "description" : "PlanIt is an ongoing project that began as a way for me to learn JS and HTML, but has transitioned into a larger scale project with the goal of making a platform to create quick and easy shareable todo-lists on the fly across mobile and web platforms.",
            "subtext" : ["ReactJS", "React Native", "Java", "Spring Boot"],
        },
        {
            "name" : "Revibe",
            "description" : "My first completed hackathon project, developed alongside three teammates. Microsoft Azure FaceAPI processes webcam footage and Revibes sends the user a variety of messages depending on what their perceived emotions are.",
            "subtext" : ["ReactJS", "Azure Face API"]
        },
        {
            "name" : "Save",
            "description" : "This was my final project for my Honors Object-Oriented Programming class, meant to leverage the various OOP principles that I had learned over the semester. JavaFX nodes in the GUI helped to reinforce polymorphism concepts and I had to create multiple objects with methods to keep track of users' spending history.",
            "subtext" : ["Java", "JavaFX"],
        }
    ]
}

Picture with Caption to the Right
{
    "type": "PICTURE",
    "header": "About Me",
    "data": [
        {
            "img": "joshuaguo.png",
            "caption": "Welcome to my portfolio! My name is Josh and I am currently a junior at Stony Brook University as a member of the Honors College and the CS Honors program. I love problem solving and am eager to see where computer science & mathematics can take me in the future!"
        }
    ]
}

List with Items Fading in on Scroll
{
    "type" : "LIST_FADE",
    "header" : "Joshua Guo",
    "data" : [
        {
            "type": "DEFAULT",
            "content": "Undergrad @ Stony Brook University"
        }, 
        {
            "type": "TAB",
            "content": "Computer Science"
        },
        {
            "type": "TAB",
            "content": "Applied Mathematics"
        },
        {
            "type": "TAB",
            "content": "3.97 GPA"
        },
        {
            "type": "DEFAULT",
            "content": "Avid Learner"
        },
        {
            "type": "DEFAULT",
            "content": "Novice Mechanical Keyboard Enthusiast"
        },
        {
            "type": "DEFAULT",
            "content": "Aspiring Software Engineer"
        },
        {
            "type": "DEFAULT",
            "content": "Former Intern @ Fidelity Investments"
        },
        {
            "type": "DEFAULT",
            "content": "Incoming Intern @ Facebook"
        }
    ]
}

{
    "type": "BULLET",
    "header": "Experience",
    "data": [
        {
            "content": "Top Bullet1",
            children: [
                "Subbullet11",
                "Subbullet12"
            ]
        },
        {
            "content": "Top Bullet2",
            children: [
                "Subbullet21",
                "Subbullet22"
            ]
        }
    ]
}