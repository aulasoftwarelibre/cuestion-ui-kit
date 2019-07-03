import { action } from "@storybook/addon-actions";
import { object, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Talk } from "../../models/Talk";
import { wInfo } from "../../utils/wInfo";
import TalkItemWrapper from "./TalkItem";

const stories = storiesOf("Components/TalkItem", module);
stories.addDecorator(withKnobs);

const talk: Talk = {
    avatar: "https://i.pravatar.cc/150?img=22",
// tslint:disable-next-line: max-line-length
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan quis neque at dignissim. Donec auctor bibendum quam sed elementum. Sed gravida, arcu porta sollicitudin porttitor, nisl ligula placerat massa, eu fermentum magna sapien eu sem. Nulla facilisi. Aliquam erat volutpat",
    endsAt: new Date(),
    id: "1",
    room: "Room 1",
    speaker: "John Doe",
    startsAt: new Date("2019/09/13 09:30:00 GMT+2"),
    title: "My awesome talk",
    topics: ["Mobile", "Web"]
};

stories.add(
    "default",
    wInfo()(() => (
        <TalkItemWrapper
            handleOnClick={action("talk-item")}
            talk={object("Talk", talk)}
        />
    ))
);
