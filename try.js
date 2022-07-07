const { remove } = require("firebase/database");

let tryData = {
    data: "testing",
    testData : {
        testSatu : "hello",
        testDua : "world"
    }
}

// console.log(tryData.testData.testDua, "===> data dua");
testData2 =
[ 
    {
        "email": "test32@mail.com",
        "game": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 32"
    },
    {
        "email": "test33@mail.com",
        "game": {
            "game_id": "",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 33"
    },
    {
        "email": "test35@mail.com",
        "game": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 35"
    },
    {
        "email": "test40@mail.com",
        "game": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 40"
    },
    {
        "created_at": 1656682576591,
        "email": "test41@mail.com",
        "game": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "updated_at": 1656682576591,
        "username": "Test 41"
    },
    {
        "created_at": "1656682645694",
        "email": "test42@mail.com",
        "game": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "updated_at": "1656682645694",
        "username": "Test 42"
    },
    {
        "created_at": 1657007156409,
        "email": "test49@mail.com",
        "game_id": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 49"
    },
    {
        "created_at": 1657007767269,
        "email": "test51@mail.com",
        "game_id": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 51"
    },
    {
        "email": "test52@mail.com",
        "game_id": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 52"
    },
    {
        "created_at": "15 1 19",
        "email": "test53@mail.com",
        "game_id": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 53"
    },
    {
        "created_at": "2:15:2:32",
        "email": "test54@mail.com",
        "game_id": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 54"
    },
    {
        "created_at": "2022-7-5 15:4:16",
        "email": "test56@mail.com",
        "game_id": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 56"
    },
    {
        "created_at": "2022-7-5 23:26:4",
        "email": "test57@mail.com",
        "game_id": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 57"
    },
    {
        "created_at": "2022-7-6 22:37:41",
        "email": "test58@mail.com",
        "game_id": {
            "game_id": "21c39cc6-289b-47c4-879d-d52e47f8d7b8",
            "game_name": "Rock Paper Scissor",
            "play_count": 0,
            "score": 0
        },
        "username": "Test 58"
    },
    {
        "play_count": 0,
        "total_score": 0
    }
]

testData2.map((data) => {
    let selectedData = []
    // console.log(data, "===> ini data");
    // console.log(data, "===> ini data");
    // console.log(data.username, "===> ini data");
    // if (data.username !== 'undefined') {
    //     selectedData.push(data.username)
    // }
    // console.log(selectedData, "===> ini udah di filter");
    if(data.username){
        // console.log(data.username, "==> data username");
    }
    // console.log(data.game_id, "===> data game");
    if(data.game_id){
        console.log(data.game_id, "game filtered");
        console.log(data.game_id.score, "==> score game");
    }
})