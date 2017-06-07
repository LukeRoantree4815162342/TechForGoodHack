export let DATA = {
    "questions": {
        'btnNext': 'Next',
        'btnFinish': 'Finish',
        'btnSkip': 'Skip',
        'items': [
            {
                backgroundImage: 'assets/images/avatar-large/5.jpg',
                title: 'Team Sports',
                description: 'Have you played a team sport?',
                skills:['teamwork'],
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/avatar-large/6.jpg',
                title: 'Individual Sport',
                description: 'Have you played an individual sport?',
                skills:['focus'],
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/avatar-large/7.jpg',
                title: 'Volunteer',
                description: 'Have you done any volunteering work?',
                skills:['volunteering'],
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/avatar-large/7.jpg',
                title: 'Work Experience',
                description: 'Do you have any work experience?',
                skills:['teamwork'],
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/avatar-large/7.jpg',
                title: 'Languages',
                description: 'Do you know any other languages?',
                skills:['languages'],
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/avatar-large/7.jpg',
                title: 'Presentations',
                description: 'Have you done any presentations?',
                skills:['presentation'],
                button: 'Next',
                skip: 'Skip'
            },
            {
                backgroundImage: 'assets/images/avatar-large/7.jpg',
                title: 'Hobbies?',
                description: 'Do you have any hobbies?',
                skills:['teamwork'],
                button: 'Next',
                skip: 'Skip'
            }
        ]
    },
    "users": [
        {
            "id": 1,
            "name": "Simon Mcgregor",
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