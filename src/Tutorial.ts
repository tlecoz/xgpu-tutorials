import { UIElement } from "./UIElement";

export class Tutorial extends UIElement {

    constructor() {
        super("div", {
            padding: "15px"
        })
        this.innerText = "Coming soon...";
    }


}