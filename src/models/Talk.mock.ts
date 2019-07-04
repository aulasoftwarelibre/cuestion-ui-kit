import Talk from "./Talk";

export const talk: Talk = {
  avatar: "https://i.pravatar.cc/150?img=22",
  description:
    // tslint:disable-next-line: max-line-length
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan quis neque at dignissim. Donec auctor bibendum quam sed elementum. Sed gravida, arcu porta sollicitudin porttitor, nisl ligula placerat massa, eu fermentum magna sapien eu sem. Nulla facilisi. Aliquam erat volutpat",
  endsAt: new Date("2019/09/13 10:20:00 GMT"),
  id: "1",
  room: "Room 1",
  speaker: "John Doe",
  startsAt: new Date("2019/09/13 09:30:00 GMT"),
  title: "My awesome talk",
  topics: ["Mobile", "Web"]
};
