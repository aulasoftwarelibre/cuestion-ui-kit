const faker = require("faker");
const moment = require("moment");

faker.seed(2);

module.exports = () => {
    const data = { 
        sessions: [
            {
                "id": "826cda8e-895f-419c-b9ed-4567368031ee",
                "code": "1234",
                "title": "Cuestion Conference",
                "logo": "/static/img/logo.png"
            }
        ],
        talks: []       
    }

    const startsAt = moment().subtract(30, 'minutes');
    const endsAt = moment(startsAt).add(10, 'minutes');

    for (let i = 0; i < 5; i++) {
        const topics = ["Web", "Mobile", "Frontend", "Devops", "Backend", "Design", "Testing"]
        data.talks.push({
            "id": faker.random.uuid(),
            "session": "826cda8e-895f-419c-b9ed",
            "avatar": faker.image.avatar(),
            "description": faker.lorem.paragraph(),
            "room": "Track 1",
            "title": faker.lorem.sentence(),
            "startsAt": startsAt.toISOString(),
            "endsAt": endsAt.toISOString(),
            "speaker": faker.name.findName(),
            "topics": faker.helpers.shuffle(topics).slice(0, 2),
            "color": "blue",
        });

        data.talks.push({
            "id": faker.random.uuid(),
            "session": "826cda8e-895f-419c-b9ed",
            "avatar": faker.image.avatar(),
            "description": faker.lorem.paragraph(),
            "room": "Track 2",
            "title": faker.lorem.sentence(),
            "startsAt": startsAt.toISOString(),
            "endsAt": endsAt.toISOString(),
            "speaker": faker.name.findName(),
            "topics": faker.helpers.shuffle(topics).slice(0, 2),
            "color": "red",
        });

        startsAt.add(15, 'minutes');
        endsAt.add(15, 'minutes');
    }
    
    return data;
}
