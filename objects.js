
let academy = {

    academy: {
        name: "Innomatics Research Labs",
        location: {
            city: "Hyderabad",
            state: "Telangana"
        },
        course: {
            name: "Full Stack Experts Academy",
            duration: "6 Months",
            technologies: {
                frontend: {
                    html: "HTML",
                    css: "CSS",
                    javascript: "JavaScript"
                },
                backend: {
                    language: "Python",
                    framework: "Django"
                },
                database: {
                    sql: "MySQL",
                    nosql: "MongoDB"
                }
            }
        }
    },

    trainer: {
        name: "Vineeth Sir",
        role: "Full Stack Trainer",
        subjects: {
            frontend: {
                topic1: "HTML",
                topic2: "CSS",
                topic3: "JavaScript"
            },
            backend: {
                topic1: "Python",
                topic2: "Django"
            }
        }
    },

    student: {
        name: "Remanth",
        course: "Full Stack Development",
        skills: {
            frontend: {
                skill1: "HTML",
                skill2: "CSS",
                skill3: "JavaScript"
            },
            backend: {
                skill1: "Python",
                skill2: "Django"
            }
        },
        projects: {
            project1: {
                name: "GreenCart",
                type: "E-Commerce"
            },
            project2: {
                name: "TripMatrix",
                type: "Travel Management"
            }
        }
    }

};


// CREATE


academy.student.projects.project3 = {
    name: "Portfolio",
    type: "Web Development"
};

console.log(academy.student.projects);


// READ


console.log(
    academy.student.projects.project3.name
);


// UPDATE


academy.student.projects.project3.name = "Personal Portfolio";

console.log(
    academy.student.projects.project3.name
);



// DELETE


delete academy.student.projects.project3;

console.log(academy.student.projects);