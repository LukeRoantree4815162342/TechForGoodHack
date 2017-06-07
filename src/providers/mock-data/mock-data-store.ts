export let DATA = {
    "users" : [
        {
            "id" : 1,
            "name" : "Simon Mcgregor",
            "friends" : [
                {
                    "friendId" : 2
                },
                {
                    "friendId" : 3
                }
            ],
            "currentSkills" : [
                {
                    "skillId" : 1,
                    "experiences" : [
                        {
                            "story" : "Played in my local football team for 2 months"
                        },
                        {
                            "story" : "Completed several team projects as part of my science GCSE"
                        }
                    ]
                },
                {
                    "skillId" : 4,
                    "experiences" : [
                        {
                            "story" : "Was the treasurer of the computer science society at my school"
                        }
                    ]
                },
                {
                    "skillId" : 5,
                    "experiences" : [   
                        {
                            "story" : "Taught myself web development"
                        }
                    ]
                }
            ],
            "goal" : {
                "url" : "randomjob",
                "requiredSkills" : [
                    {
                        "skillId" : 2
                    },
                    {
                        "skills" : 3
                    }
                ]
            },
            "activities" : []
        },{
            "id" : 2,
            "name" : "Thomas Wayne",
            "friends" : [
                {
                    "friendId" : 1
                },
                {
                    "friendId" : 3
                }
            ],
            "currentSkills" : [],
            "goal" : {
                "url" : "randomjob",
                "requiredSkills" : [
                    {
                        "skillId" : 2
                    },
                    {
                        "skills" : 3
                    }
                ]
            },
            "activities" : []
        },{
            "id" : 3,
            "name" : "David Blaine",
            "friends" : [
                {
                    "friendId" : 1
                },
                {
                    "friendId" : 2
                }
            ],
            "currentSkills" : [
                {
                    "skillId" : 2,
                    "experiences" : [
                        {
                            "story" : "delivered presentations as part of my volunteer work"
                        }
                    ]
                }
            ],
            "goal" : {
                "url" : "otherjob",
                "requiredSkills" : [
                    {
                        "skillId" : 1
                    },
                    {
                        "skills" : 3
                    }
                ]
            },
            "activities" : []
        }
    ],
    "skills" : [
        {
            "id" : 1,
            "name" : "Teamwork"
        },
        {
            "id" : 2,
            "name" : "Communication"
        },
        {
            "id" : 3,
            "name" : "Leadership"
        },
        {
            "id" : 4,
            "name" : "Management"
        },
        {
            "id" : 5,
            "name" : "Initiative"
        }
    ],
    "activities" : [
        {
            "id" : 1,
            "name" : "sports club",
            "url" : "someRandomLink",
            "skillsGained" : [
                {
                    "id" : 2
                },
                {
                    "id" : 3
                }
            ]
        }
    ]
}