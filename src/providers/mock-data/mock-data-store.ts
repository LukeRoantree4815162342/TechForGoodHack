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
                description: 'Do you have a GCSE certification or above? (specify highest qualification)',
                skill: 9,
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
        }
    ],
    "activities": [
        {
            "id": 1,
            "name": "Belfast Sports Club",
            "url": "someRandomLink",
            "skillsGained": [
                {
                    "id": 2
                },
                {
                    "id": 3
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
                }
            ]
        }
    ]
}