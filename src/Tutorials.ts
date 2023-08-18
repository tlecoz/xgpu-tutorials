import { Tutorial } from "./Tutorial";
import { TutorialMenu } from "./TutorialMenu";
import { UIElement } from "./UIElement";
import config from "./appConfig.json";

export class Tutorials extends UIElement {

    constructor(json: any) {
        super("div", {
            display: "flex",
            width: config.APP_WIDTH + "px",
            height: `calc(100vh - ${config.HEADER_HEIGHT} - ${config.FOOTER_HEIGHT})`
        })

        this.appendChild(new TutorialMenu(json));
        this.appendChild(new Tutorial());

    }


}