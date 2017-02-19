var bio = {
    name: "Ioana Mitelea",
    role: "Front-End Developer",
    welcomeMessage: "Hi there!",
    bioPic: "images/me.jpg",
    contacts: {
        email: "miteleaioana@gmail.com",
        mobile: "7397 554781",
        location: "London, UK"
    },
    skills: [
        "HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"
    ]
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedCity = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedCity);
    var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedImage);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

bio.display();



var education = {
    schools: [{
            name: "National College 'Cuza Voda'",
            location: "Husi, Vaslui, Romania",
            degree: "High School Diploma",
            dates: "2008 - 2012",
            major: "Philology"
        },
        {
            name: "Faculty of Psychology, University of Bucharest",
            location: "Bucharest",
            degree: "BA",
            dates: "2013 - 2016",
            major: "Psychological testing"
        }
    ],
    onlineCourses: [{
        title: "Front-End Web Development Nanodegree",
        school: "Udacity",
        dates: "November 2016 - Present",
        url: "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(formattedMajor);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedTitle + formattedOnlineSchool);
        var formattedOnlineCoursesDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineCoursesDates);
        var formattedOnlineCoursesUrl = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedOnlineCoursesUrl);
    });
};

education.display();

var work = {
    jobs: [{
            employer: "Opearlo - The Voice Design Agency",
            title: "Junior Front-End Developer",
            location: "London, UK",
            dates: "August 2016 - November 2016",
            description: "I have worked with the graphs in the dashboard and build an Amazon Alexa Skill"
        },
        {
            employer: "Digital Monkeyz",
            title: "Freelancer",
            location: "Bucharest, Romania",
            dates: "October 2015 - July 2016",
            description: "I've been learning programming since the end of 2015 and trying to build my own portfolio. I have also worked on small projects for some clients."
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedRoleTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedProps = formattedEmployer + formattedRoleTitle + formattedLocation + formattedDates + formattedDescription;
        $(".work-entry:last").append(formattedProps);
    });
};

work.display();


var projects = {
    "projects": [{
            "title": "My Online Portfolio",
            "dates": "February 2016",
            "description": "Technologies used for this project are: HTML5, CSS3, Bootstrap, JavaScript and TweenMax for the animations. ",
            "images": [{
                "url": "https://freeiconshop.com/wp-content/uploads/edd/folder-open-flat.png",
            }]
        },
        {
            "title": "Opearlo Analytics Dashboard",
            "dates": "August 2016 - November 2016",
            "description": "Technologies used for this project are: React, Redux, Recharts API, HTML5, CSS3, Bootstrap, MVC. \n Contribution to project: Charts, Graphs, Improving page responsiveness. ",
            "images": [{
                "url": "http://digital-monkeyz.com/ioana/graphics/portfolio/analytics.png"
            }]
        },
        {
            "title": "Jewelery Website",
            "dates": "January 2016",
            "description": "Technologies used for this project are: HTML5, CSS3, Bootstrap. \n  Contribution to project: Converted mock-up to functional static website.",
            "images": [{
                "url": "http://digital-monkeyz.com/ioana/graphics/portfolio/diamond.png"
            }]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitleOfProject = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitleOfProject);
        var formattedDatesOfProject = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDatesOfProject);
        var formattedDescriptionOfProject = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescriptionOfProject);
        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image.url);
            $(".project-entry:last").append(formattedImage);
        });
    });
};


projects.display();

// map
$("#mapDiv").append(googleMap);


// footer
function displayFooter() {
    var formattedEmail = HTMLcontactGeneric.replace("%data%", bio.contacts.email).replace("%contact%", "email");
    $("#footerContacts").append(formattedEmail);
    var formattedMobile = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile).replace("%contact%", "mobile");
    $("#footerContacts").append(formattedMobile);
    var formattedLocation = HTMLcontactGeneric.replace("%data%", bio.contacts.location).replace("%contact%", "location");
    $("#footerContacts").append(formattedLocation);

}
displayFooter();
