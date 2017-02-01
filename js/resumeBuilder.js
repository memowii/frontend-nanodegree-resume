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
        "location": "Veracruz"
    },
    "welcomeMessage": "Welcome guys!",
    "skills": ["JavaScript", "HTML5", "CSS"],
    "bioPic": "images/me.jpeg"
};

var education = {
    "schools": [
        {
            "name": "Universidad Veracruzana",
            "location": "Xalapa",  //"location": "Xalapa, Veracruzana",
            "degree": "BS",
            "majors": ["CS"],
            "dates": 2017,
            "url": "http://www.uv.mx/"
        },
        {
            "name": "CBTIS No. 13",
            "location": "Xalapa",
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
    ]
};

var work = {
    "jobs": [
        {
            "employer": "Universidad Veracruzana",
            "title": "Programmer",
            "dates": "2013 - 2017",
            "description": "Web Applications Development.",
            "location": "Veracruz"
        },
        {
            "employer": "Mabaxsa",
            "title": "Warehouse Assistant",
            "dates": "2013",
            "description": "Helped to arrange products and merchandise.",
            "location": "Veracruz"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "2048 Game",
            "dates": 2015,
            "description": "A modified version of the 2048 game.",
            "images": [
                "images/2048.png"
            ]
        },
        {
            "title": "Pong",
            "dates": 2017,
            "description": "Pong tutorial made by Mozilla.",
            "images": [
                "images/pong.png"
            ]
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle= formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

projects.display = function () {
  for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formmattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formmattedTitle);

      var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDate);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
          for (var image in projects.projects[project].images) {
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
              $(".project-entry:last").append(formattedImage);
          }
      }
  }
};

projects.display();

$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

$("#main").append(internationalizeButton);

function inName(name) {
    var splitName = name.split(' ');
    return splitName[0][0].toUpperCase() + splitName[0].slice(1).toLowerCase() + ' ' + splitName[1].toUpperCase();
}

$("#mapDiv").append(googleMap);