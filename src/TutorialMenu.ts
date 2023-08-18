import { UIElement } from "./UIElement";
import config from "./appConfig.json";


class TutoElement extends UIElement {

    private static current: TutoElement;
    public onSelect: (file: any) => void;
    public path: string;


    constructor(obj: any, folderLevel: number, folderName?: string) {

        super("div", {
            width: `calc(${config.MENU_WIDTH}"px" - ${folderLevel} * 25px )`,
            fontFamily: "Arial",
            fontSize: folderName ? "15px" : "14px",
            lineHeight: "18px",
            userSelect: "none",

            fontWeight: folderName ? "bold" : undefined,
            textShadow: "1px 1px 1px black",

            paddingLeft: (folderLevel * 25) + "px",
            paddingTop: folderName ? "10px" : "undefined",
            whiteSpace: "normal",
            margin: "10px 15px",
            cursor: "pointer"
        })




        let color: string, overColor: string;
        if (folderName) {
            color = "#aaaaaa";
            overColor = "#99ffff";
        } else {
            color = "#ffffff";
            overColor = "#eeeeee";
        }


        this.style.color = color;
        this.html.onmouseover = () => { if (this !== TutoElement.current) this.style.color = overColor }
        this.html.onmouseout = () => { if (this !== TutoElement.current) this.style.color = color }
        this.onclick = () => {
            if (this === TutoElement.current) return;

            if (TutoElement.current) TutoElement.current.style.color = color;
            this.style.color = "#00ffff"
            TutoElement.current = this;
            if (this.onSelect) this.onSelect(this.data);

            history.pushState(null, '', window.location.origin + "/tutorials/" + this.path);
            window.dispatchEvent(new PopStateEvent("popstate", { state: null }));


        }
        this.innerText = folderName ? folderName.toUpperCase() : obj;
    }


}


export class TutorialMenu extends UIElement {



    constructor(json: any) {
        super("div", {
            display: "block",
            width: config.MENU_WIDTH + "px",
            position: "relative",
            backgroundColor: "#444444",
            padding: "20px",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden"
        })

        const tutorials = json.tutorials;
        let sections: any[];
        let parts: string[];
        let path: string;
        let path2: string;
        let path3: string;
        let element: TutoElement;
        let isSection: boolean;
        for (let i = 0; i < tutorials.length; i++) {
            path = tutorials[i].name;

            element = this.appendChild(new TutoElement(tutorials[i], 0, tutorials[i].name)) as TutoElement;
            element.path = path;

            isSection = !!tutorials[i].sections;
            sections = isSection ? tutorials[i].sections : tutorials[i].parts;


            for (let j = 0; j < sections.length; j++) {
                path2 = path + "/" + (isSection ? sections[j].name : sections[j]);
                element = this.appendChild(new TutoElement(sections[j], 1, sections[j].name)) as TutoElement;
                element.path = path2;

                parts = sections[j].parts;
                if (parts) {
                    for (let k = 0; k < parts.length; k++) {
                        path3 = path2 + "/" + parts[k];
                        element = this.appendChild(new TutoElement(parts[k], 2)) as TutoElement;
                        element.path = path3;
                    }
                }

            }
        }
    }


}