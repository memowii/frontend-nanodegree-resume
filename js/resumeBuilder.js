/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Guillermo García",
    "role": "Web Developer",
    "contacts": {
        "mobile": "2288532411",
        "email": "memowii@hotmail.com",
        "twitter": "memowii",
        "github": "memowii",
        "location": "Xalapa"
    },
    "welcomeMessage": "Welcome guys!",
    "skills": ["JavaScript", "HTML5", "CSS"],
    "bioPic": "images/me.jpg",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
        $("#header").append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            var formattedSkill = HTMLskills.replace("%data%", this.skills[0]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", this.skills[1]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", this.skills[2]);
            $("#skills").append(formattedSkill);
        }
    }
};

var education = {
    "schools": [
        {
            "name": "Universidad Veracruzana",
            "location": "Xalapa, Veracruz",  //"location": "Xalapa, Veracruzana",
            "degree": "BS",
            "majors": ["CS"],
            "dates": 2017,
            "url": "http://www.uv.mx/"
        },
        {
            "name": "CBTIS No. 13",
            "location": "Xalapa, Veracruz",
            "degree": "Preparatory School",
            "majors": ["Accounting"],
            "dates": 2011,
            "url": "http://www.cbtis013.edu.mx/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Make Your Own 2048",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/make-your-own-2048--ud248"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "Java Programming Basics",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/java-programming-basics--ud282"
        }
    ],
    display: function () {
        for (var school in this.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            $(".education-entry:last").append(formattedDates);

            for (major in this.schools[school].majors){
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
                $(".education-entry:last").append(formattedSchoolMajor);
            }
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);
        }

        $("#education").append(HTMLonlineClasses);
        for (var onlineCourse in this.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTittle = HTMLonlineTitle.replace("%data%", this.onlineCourses[onlineCourse].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[onlineCourse].school);
            $(".education-entry:last").append(formattedOnlineTittle+formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[onlineCourse].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[onlineCourse].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Universidad Veracruzana",
            "title": "Programmer",
            "dates": "2013 - 2017",
            "description": "Developed several school projects.",
            "location": "Xalapa, Veracruz"
        },
        {
            "employer": "Mabaxsa",
            "title": "Warehouse Assistant",
            "dates": "2013",
            "description": "Helped to arrange products and merchandise.",
            "location": "Xalapa, Veracruz"
        }
    ],
    display: function () {
        for (var job in this.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            var formattedTitle= HTMLworkTitle.replace("%data%", this.jobs[job].title);
            var formattedEmployerTitle= formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "2048 Game",
            "dates": 2015,
            "description": "A modified version of the 2048 game.",
            "images": [
                "images/r2048.png"
            ]
        },
        {
            "title": "Pong",
            "dates": 2017,
            "description": "Pong tutorial made by Mozilla.",
            "images": [
                "images/rpong.png"
            ]
        }
    ],
    display: function () {
        for (var project in this.projects) {
            $("#projects").append(HTMLprojectStart);

            var formmattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            $(".project-entry:last").append(formmattedTitle);

            var formattedDate = HTMLprojectDates.replace("%data%", this.projects[project].dates);
            $(".project-entry:last").append(formattedDate);

            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (this.projects[project].images.length > 0) {
                for (var image in this.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();