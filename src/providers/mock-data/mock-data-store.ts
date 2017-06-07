export let DATA = {
    "questions": {
        'btnNext': 'Next',
        'btnFinish': 'Finish',
        'btnSkip': 'Skip',
        'items': [
            {
                backgroundImage: 'assets/images/question_images/TeamSports.jpg',
                title: 'Team Sports',
                description: 'Have you played a team sport?',
                skill: 1,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/IndividualSport.jpg',
                title: 'Individual Sport',
                description: 'Have you played an individual sport?',
                skill: 4,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/Volunteering.jpg',
                title: 'Volunteer',
                description: 'Have you done any volunteering work?',
                skill: 5,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/WorkExperience.jpg',
                title: 'Work Experience',
                description: 'Do you have any work experience?',
                skill: 3,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/ForeignLanguage.jpg',
                title: 'Languages',
                description: 'Do you know any other languages?',
                skill: 8,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/PublicSpeaking.jpg',
                title: 'Presentations',
                description: 'Have you done any presentations?',
                skill: 10,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/Hobbies.jpg',
                title: 'Hobbies?',
                description: 'Do you have any self taught hobbies?',
                skill: 5,
                yes: false,
                no: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/Education.jpg',
                title: 'Education',
                description: 'Do you have GCSE English & Maths?',
                skill: 11,
                yes: false,
                no: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/Leadership.jpg',
                title: 'Leadership',
                description: 'Have you ever been leader of a team in a sport or at school?',
                skill: 3,
                yes: false,
                no: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/Discipline.jpg',
                title: 'Discipline',
                description: 'Was there ever a difficult task which took you a long time to accomplish?',
                skill: 4,
                yes: false,
                no: false,
                button: 'Next',
                skip: 'Skip'
            }
        ]
    },
    "users": [
        {
            "id": 1,
            "name": "Simon Mcgregor",
            "src" : "../../assets/profiles/face3.jpg",
            "friends": [
                {
                    "friendId": 2
                },
                {
                    "friendId": 3
                }
            ],
            "currentSkills": [
            ],
            "goal": null,
            // {
            //     "title": "randomjob",
            //     "skills": [
            //         {
            //             "skillId": 2
            //         },
            //         {
            //             "skillId": 3
            //         }
            //     ]
            // },
            "activities": []
        }, {
            "id": 2,
            "name": "Thomas Wayne",
            "src" : "../../assets/profiles/face4.jpeg",
            "friends": [
                {
                    "friendId": 1
                },
                {
                    "friendId": 3
                }
            ],
            "currentSkills": [],
            "goal": {
                "title": "randomjob",
                "skills": [
                    {
                        "skillId": 2
                    },
                    {
                        "skills": 3
                    }
                ]
            },
            "activities": []
        }, {
            "id": 3,
            "name": "David Blaine",
            "src" : "../../assets/profiles/face1.jpg",
            "friends": [
                {
                    "friendId": 1
                },
                {
                    "friendId": 2
                }
            ],
            "currentSkills": [
                {
                    "skillId": 2,
                    "experiences": [
                        {
                            "story": "delivered presentations as part of my volunteer work"
                        }
                    ]
                }
            ],
            "goal": {
                "title": "otherjob",
                "skills": [
                    {
                        "skillId": 1
                    },
                    {
                        "skills": 3
                    }
                ]
            },
            "activities": []
        }
    ],
    "skills": [
        {
            "id": 1,
            "name": "Teamwork"
        },
        {
            "id": 2,
            "name": "Communication"
        },
        {
            "id": 3,
            "name": "Leadership"
        },
        {
            "id": 4,
            "name": "Discipline"
        },
        {
            "id": 5,
            "name": "Initiative"
        },
        {
            "id": 6,
            "name": "Creativity"
        },
        {
            "id": 7,
            "name": "Problem-Solving"
        },
        {
            "id": 8,
            "name": "Adaptability"
        },
        {
            "id": 9,
            "name": "Education"
        },
        {
            "id": 10,
            "name": "Presentation"
        },
        {
            "id": 11,
            "name": "Literacy & Numeracy"
        },
        {
            "id": 12,
            "name": "Technical"
        },
        {
            "id": 13,
            "name": "Social Responsibility"
        }
    ],
    "activities": [
        {
            "id": 1,
            "name": "BCSDN",
            "url" : "http://www.bcsdn.org/",
            "description": "Belfast Community Sports Development Network (BCSDN) is the main community sports development organisation in Belfast and has successfully been delivering physical activity programmes for the past ten years. BCSDN is a registered charity using sport to inspire and educate people to make a positive change in their lives.",
            "skillsGained": [
                {
                    "id": 1,
                    "experience": "Played the role of an effective unit in the team, and tailored my responsibilities to match the teams need through sport at BCSDN"
                },
                {
                    "id": 4,
                    "experience": "Overcoming physical challenges through regular sport sessions while managing a healthy lifestyle at BDCSN"
                }
            ]
        },
        {
            "id": 2,
            "name": "Belfast Metropolitan College",
            "url" : "https://www.belfastmet.ac.uk/part-time/essential-skills/",
            "description": "It costs nothing to get your Maths, English and ICT qualifications at Belfast Met.\n Essential Skills are the most important and useful skills we all need to succeed in education, work and everyday life. At Belfast Met, you can get qualifications in English, Maths and ICT while you are completing your course. \n Our Essential Skills programme means that learning in these key areas takes place alongside your full-time study. We offer Essential Skills in Literacy and Numeracy from Entry Level 1 through to Level 2, and ICT at Levels 1 and 2.",
            "skillsGained": [
                {
                    "id": 2,
                    "experience": "Meeting new people from various backgrounds and sharing knowledge with others throughout the courses offered at Belfast Metropolitan college."
                },
                {
                    "id": 11,
                    "experience": "Gaining qualification for Essential skills in literacy at Belfast Metropolitan college"
                },
                {
                    "id": 11,
                    "experience": "Gaining qualification for Essential skills in Numeracy at Belfast Metropolitan college"
                },
                {
                    "id": 12,
                    "experience": "Learning how to use a computer and gaining essential ICT skills at Belfast Metropolitan college"
                }
            ]
        },
        {
            "id": 3,
            "name": "Include youth",
            "url" : "http://youngcitizens.volunteernow.co.uk/why-volunteer/what-can-i-do",
            "description": "BelfastVolunteering is not only about what you can give back to your community, but also what you get out of it, including building great skills and training that you can use on your CV as well as for job and UCAS applications. \n Volunteering is also fun, and you can choose to do the things that interest you, and meet new people in the process or volunteer with your friends. You can do anything from helping run a local sport club to being a DJ or film maker; you can help clean up our beeches or represent the views of other young people in your local forum; you can even volunteer to help run some of your favourite music and arts festivals and venues!",
            "skillsGained": [
                {
                    "id": 5,
                    "experience": "Going out of your way to reach out to and help those in need through volunteer now"
                },
                {
                    "id": 7,
                    "experience": "Dealing with any unexpected situations that can occur when dealing with members of the public in a professional manner through volunteer now."
                },
                {
                    "id": 13,
                    "experience": "Acknowledging the importance of giving back to society through volunteer now"
                }
            ]
        }
    ],
    "goals": [
        {
            "title" : "teacher",
            "skills": [
                {
                    "skillId" : 2
                },
                {
                    "skillId" : 3
                },
                {
                    "skillId" : 4
                },
                {
                    "skillId" : 6
                },
                {
                    "skillId" : 10
                },
                {
                    "skillId" : 11
                },
                {
                    "skillId" : 13
                }
            ]
        }
    ]
}
