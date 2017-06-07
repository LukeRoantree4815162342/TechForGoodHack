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
                skill: 2,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/Volunteering.jpg',
                title: 'Volunteer',
                description: 'Have you done any volunteering work?',
                skill: 3,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/WorkExperience.jpg',
                title: 'Work Experience',
                description: 'Do you have any work experience?',
                skill: 4,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/ForeignLanguage.jpg',
                title: 'Languages',
                description: 'Do you know any other languages?',
                skill: 5,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/PublicSpeaking.jpg',
                title: 'Presentations',
                description: 'Have you done any presentations?',
                skill: 5,
                yes: false,
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/question_images/Hobbies.jpg',
                title: 'Hobbies?',
                description: 'Do you have any hobbies?',
                skill: 5,
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
                // {
                //     "skillId": 1,
                //     "experiences": [
                //         {
                //             "story": "Played in my local football team for 2 months"
                //         },
                //         {
                //             "story": "Completed several team projects as part of my science GCSE"
                //         }
                //     ]
                // },
                // {
                //     "skillId": 4,
                //     "experiences": [
                //         {
                //             "story": "Was the treasurer of the computer science society at my school"
                //         }
                //     ]
                // },
                // {
                //     "skillId": 5,
                //     "experiences": [
                //         {
                //             "story": "Taught myself web development"
                //         }
                //     ]
                // }
            ],
            "goal": {
                "url": "randomjob",
                "requiredSkills": [
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
                "url": "randomjob",
                "requiredSkills": [
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
                "url": "otherjob",
                "requiredSkills": [
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
            "name": "Management"
        },
        {
            "id": 5,
            "name": "Initiative"
        }
    ],
    "activities": [
        {
            "id": 1,
            "name": "sports club",
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
    ]
}