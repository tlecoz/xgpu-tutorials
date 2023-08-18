import { UIElement } from "./UIElement";
import config from "./appConfig.json";

export class Tutorial extends UIElement {

    constructor() {
        super("div", {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            fontFamily: "Arial",
            width: config.APP_WIDTH,
            minHeight: (window.innerHeight - config.HEADER_HEIGHT - config.FOOTER_HEIGHT) + "px",
        })

        this.appendChild(new UIElement("span", { padding: "15px" })).innerText = "Coming soon...";

    }


}