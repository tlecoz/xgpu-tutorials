import json from './tutorials.json'
import config from "./appConfig.json"
import { Tutorials } from './Tutorials'
import { UIElement } from './UIElement';

const topLevelDiv = new UIElement("div", {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  position: "relative",
  boxSizing: "border-box",
});

topLevelDiv.appendChild(new UIElement("div", {
  display: "flex",
  width: config.APP_WIDTH + "px",
  height: "100%"
})).appendChild(new Tutorials(json))

document.body.appendChild(topLevelDiv.html);