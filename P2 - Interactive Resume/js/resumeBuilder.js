/* Project: 02 Front-end Developer Nanodegree - Author: Miguel Sanchez */
var bio = {
  "name": "Miguel Sánchez",
  "role": "Front-End Developer",
  "contacts": {
    "mobile": "+1 (555) 000-1111",
    "email": "contact@miguelsanchez.com",
    "github": "https://github.com/miguel-sanchez",
    "twitter": "https://twitter.com/miguel_sp",
    "location": "Vitoria-Gasteiz, Spain"
  },
  "welcomeMsg": "A highly creative self-starter with a strong desire to contribute within a creative environment. Solid and diversified experience in IT training, web design and front-end development. Strong written and oral communications. Solid research and problem-solving, abilities. Experienced in web content, page design, and project management. Fluent in Spanish with working proficiency in English and French. Willing to relocate to the United States. Sponsorship required. Able to work remotely.",
  "skills": ["HTML5", "CSS3", "Sass", "Bootstrap", "JavaScript", "JSON", "jQuery", "Gulp"],
  "biopic": "https://pbs.twimg.com/profile_images/572152299976273920/AqAOi-OW.png",
  display: function(){
    var formattedName=HTMLheaderName.replace("%data%",bio.name);
    var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("h1").prepend(formattedImage);
    $("h1 small").append(formattedName);
    $("h1").append(formattedRole);
    $(".welcome").append(formattedwelcomeMsg);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $(".skills").append(formattedSkills);
  }
}
bio.display();

var education = {
  "schools": [
  {
    "name": "University of the Basque Country (UPV/EHU)",
    "location": "Lejona, Spain",
    "degree": "Bachelor of Arts (BA), Communication and Media Studies",
    "majors": ["Journalism"],
    "dates": 1999,
    "url": "http://www.ehu.eus/en"
  }
  ],
  "onlineCourses": [
  {
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "date": 2016,
    "url": "https://www.udacity.com"
  },
  {
    "title": "HTML5.1x: Web Design Fundamentals",
    "school": "World Wide Web Consortium (W3C) through edX",
    "date": 2015,
    "url": "https://www.edx.org/course/html5-part-1-html5-coding-essentials-w3cx-html5-1x"
  },
  {
    "title": "Computer Science 101",
    "school": "Stanford University Online",
    "date": 2014,
    "url": "http://online.stanford.edu/course/computer-science-101"
  },
  {
    "title": "LFS101x: Introduction to Linux",
    "school": "The Linux Foundation through edX",
    "date": 2014,
    "url": "https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-2"
  }
  ],
  display: function(){
    for (school in education.schools){
      $(".education").append(HTMLschoolStart);
      var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
      var formattedschoolNameDegree = formattedschoolName + ' - ' + formattedschoolDegree;
      var formattedschoolURL = HTMLschoolURL.replace("%data%",education.schools[school].url);
      $(".education-entry:last").append(formattedschoolNameDegree);
      $(".education-entry:last").append(formattedschoolDates);
      $(".education-entry:last").append(formattedschoolLocation);
      $(".education-entry:last").append(formattedschoolMajor);
      $(".education-entry:last").append(formattedschoolURL);
    }
    $(".education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses){
      $(".education").append(HTMLschoolStart);
      var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
      var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].date);
      var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
      var formattedOnlineTitleSchool = formattedonlineTitle + ' - ' + formattedonlineSchool;
      $(".education-entry:last").append(formattedOnlineTitleSchool);
      $(".education-entry:last").append(formattedonlineDates);
      $(".education-entry:last").append(formattedHTMLonlineURL);
    }
  }
}
education.display();

var work = {
  "jobs": [
  {
    "employer": "Multiple clients",
    "title": "IT Trainer: 'Automate Android - Free yourself from the tasks that steal your time'",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "March 2015 – Present",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "Multiple clients",
    "title": "Keynote Speaker: 'Internet 201X - What you knew is now history'",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "May 2011 – May 2015",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "TEDx Almendra Medieval",
    "title": "TEDx Speaker: 'Artificial intelligence - Humankind's evolutionary challenge'",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "April 2015 – April 2015",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "Multiple clients",
    "title": "IT Trainer: 'Google+: much more than a social network'",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "January 2012 – October 2013",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "Multiple clients",
    "title": "IT Trainer: 'Extra hours for your life, not for your work'",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "September 2010 – June 2013",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "Euskadi+innova - Enpresa Digitala",
    "title": "Keynote Speaker: 'All you need to know to keep up on the Internet'",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "June 2008 – November 2010",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "Multiple clients",
    "title": "IT Trainer: 'Productivity 2.0: a toolbox for the 21st century professional'",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "June 2008 – April 2010",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "Multiple clients",
    "title": "IT Trainer: Web Design",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "October 2002 – April 2010",
    "description": "Graphic Design on the Web, Introduction to Web Design, HTML &amp; CSS, Dreamweaver & Fireworks, Search Engine Optimization (SEO), Web Accessibility, Web Usability and Web Project Management."
  },
  {
    "employer": "Multiple clients",
    "title": "Keynote Speaker: 'How to create successful websites - Web Usability in practice'",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "May 2008 – June 2008",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "Deusto Sistemas",
    "title": "Web Designer",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "March 2003 - October 2006",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
    "employer": "Guay Internet",
    "title": "Web Designer",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "January 2001 - April 2001",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nulla possimus nam a dolores quo, eaque quibusdam, nostrum magnam dolorum praesentium saepe itaque maiores aspernatur quam labore, veniam dolor deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quo adipisci nisi sunt vel fugiat magnam quod, enim vitae soluta vero fugit blanditiis dolorum deleniti consectetur labore, voluptas inventore laudantium."
  },
  {
 	  "employer": "Ayser - Desarrollos informáticos",
  	"title": "Web Designer",
  	"location": "Vitoria-Gasteiz, Spain",
  	"dates": "January 2001 – April 2001",
  	"description": "Consectetur adipisicing elit. Inventore natus, deleniti! Saepe quibusdam, ipsa autem similique expedita quos corporis quisquam, officiis inventore ad in labore cum repellat doloremque iure magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dignissimos veniam aliquam, rem velit sunt omnis facere rerum eius sed, fugiat eaque reprehenderit perspiciatis, asperiores quam exercitationem aspernatur quos amet."
  },
  {
    "employer": "Esden Business School",
    "title": "Web Design Instructor: 'Master in e-Business' (2000-2001)",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "January 2001 - March 2001",
    "description": "Consectetur adipisicing elit. Inventore natus, deleniti! Saepe quibusdam, ipsa autem similique expedita quos corporis quisquam, officiis inventore ad in labore cum repellat doloremque iure magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dignissimos veniam aliquam, rem velit sunt omnis facere rerum eius sed, fugiat eaque reprehenderit perspiciatis, asperiores quam exercitationem aspernatur quos amet."
  },
  {
    "employer": "Kristina Internet Business Solutions",
    "title": "Web Designer",
    "location": "Madrid, Spain",
    "dates": "November 2000 - December 2000",
    "description": "Consectetur adipisicing elit. Inventore natus, deleniti! Saepe quibusdam, ipsa autem similique expedita quos corporis quisquam, officiis inventore ad in labore cum repellat doloremque iure magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dignissimos veniam aliquam, rem velit sunt omnis facere rerum eius sed, fugiat eaque reprehenderit perspiciatis, asperiores quam exercitationem aspernatur quos amet."
  },
  {
    "employer": "Guay Internet",
    "title": "Web Designer",
    "location": "Vitoria-Gasteiz, Spain",
    "dates": "October 1999 - November 2000",
    "description": "Consectetur adipisicing elit. Inventore natus, deleniti! Saepe quibusdam, ipsa autem similique expedita quos corporis quisquam, officiis inventore ad in labore cum repellat doloremque iure magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dignissimos veniam aliquam, rem velit sunt omnis facere rerum eius sed, fugiat eaque reprehenderit perspiciatis, asperiores quam exercitationem aspernatur quos amet."
  }
  ],
  display: function(){
    for(job in work.jobs) {
      $(".work").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDate);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}
work.display();

var projects = {
  "projects": [
  {
  	"title": "[Book] 'Horas extra para tu vida, no para tu trabajo'",
  	"dates": "2010-2011",
  	"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi atque perferendis nulla, velit minima quidem dolorum. Eum ipsa animi amet officiis, ducimus, modi eveniet! Odio praesentium eaque iure magni facilis.",
  	"images":["http://fpoimg.com/250x200?text=Project Photo 1", "http://fpoimg.com/250x200?text=Project Photo 2", "http://fpoimg.com/250x200?text=Project Photo 3"]
  },
  {
 	  "title": "[Book] 'Google+: mucho más que una red social'",
  	"dates": "2012-2014",
  	"description": "Sit amet, consectetur adipisicing elit. Debitis nesciunt voluptate, dolorem tenetur at ab, labore mollitia qui tempore. Earum officia eum quas animi neque, tempora, iste itaque voluptatem facilis.",
  	"images":["http://fpoimg.com/250x200?text=Project Photo 1", "http://fpoimg.com/250x200?text=Project Photo 2", "http://fpoimg.com/250x200?text=Project Photo 3"]
  }
  ],
  display: function(){
    for (project in projects.projects) {
    $(".projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if(projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
  }
}
projects.display();

$("#mapDiv").append(googleMap);