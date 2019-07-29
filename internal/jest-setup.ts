import "jest-styled-components";
import { JSDOM } from "jsdom";
import "jsdom-global/register";

import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const global: any = {};

const doc = new JSDOM("<!doctype html><html><body></body></html>");
global.document = doc;
global.window = global.document.defaultView;
