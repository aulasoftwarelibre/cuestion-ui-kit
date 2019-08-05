const faker = require("faker");
const uuid = require("uuid/v4");

faker.seed(1);

module.exports = () => {
    const data = { 
        sessions: [
            {
                "id": "826cda8e-895f-419c-b9ed-4567368031ee",
                "code": "1234",
                "title": "Cuestion Conference"
            }
        ],
        talks: []
    }

    const startsAt = new Date();
    startsAt.setMinutes(startsAt.getMinutes() - 30 );
    const endsAt = new Date(startsAt.getTime());
    endsAt.setMinutes(startsAt.getMinutes() + 5);

    for (let i = 0; i < 5; i++) {
        startsAt.setMinutes(startsAt.getMinutes() + 7);
        endsAt.setMinutes(startsAt.getMinutes() + 5);

        const topics = ["A", "B", "C", "D", "E", "F", "G"]

        data.talks.push({
            "id": faker.random.uuid(),
            "session": "826cda8e-895f-419c-b9ed",
            "avatar": faker.image.avatar(),
            "description": faker.lorem.paragraph(),
            "room": "Track 1",
            "title": faker.lorem.sentence(),
            "startsAt": new Date(startsAt.getTime()),
            "endsAt": new Date(endsAt.getTime()),
            "speaker": faker.name.findName(),
            "topics": faker.helpers.shuffle(topics).slice(0, 2)
        });

        data.talks.push({
          "id": faker.random.uuid(),
          "session": "826cda8e-895f-419c-b9ed",
          "avatar": faker.image.avatar(),
          "description": faker.lorem.paragraph(),
          "room": "Track 2",
          "title": faker.lorem.sentence(),
          "startsAt": new Date(startsAt.getTime()),
          "endsAt": new Date(endsAt.getTime()),
          "speaker": faker.name.findName(),
          "topics": faker.helpers.shuffle(topics).slice(0, 2)
      });
    }
    
    return data;
}
