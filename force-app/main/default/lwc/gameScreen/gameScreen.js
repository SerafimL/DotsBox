import { LightningElement } from 'lwc';
import { getJsonResource } from 'c/utilities';
import mapGame from '@salesforce/resourceUrl/mapGame';

export default class GameScreen extends LightningElement {
    lineH = [];

    get lineHgroups(){
        let lineHgroups = []
        for(let i=0; i < 9; i++){
            lineHgroups.push(this.lineH.slice(i*10,(i*10)+10));
        }
        return lineHgroups;
    }

    lineV = [];
    get lineVgroups(){
        let lineVgroups = []
        for(let i=0; i < 9; i++){
            lineVgroups.push(this.lineV.slice(i*10,(i*10)+10));
        }
        return lineVgroups;
    }

    squares;
    get squareNameList(){
        return Object.keys(this.squares);
    }

    isRendered = false;
    renderedCallback(){
        if(!this.isRendered){
            this.isRendered = true;
            this.getStaticGameMap();
            //let a = this.lineHgroups;
            
        }
    }

    getStaticGameMap(){
        let mapGameResult = getJsonResource(mapGame);
        this.squares = mapGameResult.squares;
        this.lineH = mapGameResult.lineH;
        this.lineV = mapGameResult.lineV;
        this.classFactory();
    }

    classFactory(){
        let styleFactoring = ``;
        let asd = this.lineHgroups;
        console.log(asd);
        this.lineH.forEach(lin =>{
            styleFactoring +=`
                
            `;
        })

        this.template.querySelector('styleClass');
    }
}