var globalCounts = {
    sectionCount: 0;
}


const sectionTemplates = [{
    displayName: '3 Coloane',
    saveType: 'col-triple',
    textAreas: [{
        label: 'Coloana 1 Titlu',
        partialId: '1',
        defaultclass: "title",
    }, {
        label: 'Coloana 1 Subtitlu',
        partialId: '2',
        defaultclass: "subtitle",
    }, {
        label: 'Coloana 2 Titlu',
        partialId: "3",
        defaultclass: "title",
    }, {
        label: "Coloana 2 Subtitlu",
        partialId: "4",
        defaultclass: "subtitle",
    }, {
        label: "Coloana 3 Titlu",
        partialId: "5",
        defaultclass: "title",
    }, {
        label: "Coloana 3 Subtitlu",
        partialId: "6",
        defaultclass: "subtitle",
    }],
    componentGetHtml: (cid) => {
        return `
        <div class="section-wrapper">
            <div class="section-component">
                <div class="Col3 Col" >
                    <div class="col-content-wrapper">
                        <div id="${cid}-1" class="title">
                        Placeholder
                        </div>
                        <div id="${cid}-2" class="subtitle">
                            Placeholder
                        </div>
                    </div>
                    <div class="col-content-wrapper">
                        <div id=${cid}-"3" class="title">Placeholder
                        </div>
                        <div id="${cid}-4" class="subtitle">Placeholder
                        </div>
                    </div>
                    <div class="col-content-wrapper">
                        <div id="${cid}-5" class="title">Placeholder
                        </div>
                        <div id="${cid}-6" class="subtitle">Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}]

class BuildSection extends HTMLElement {
    constructor() {
        super();
        this.useid = globalCounts.sectionCount;
        globalCounts.sectionCount+=1;
        if(this.hasAttribute('datacontainer')) {
            
        }

        this.innerHTML
    }
    changeText() {

    }
    deleteThis() {

    }
    saveThis() {

    }
}

function addNewBuildSection





















/* const sectionTemplate = document.createElement(`template`);
template.innerHTML = `
    <div class="sc">
        <slot />
    </div> 
`
var globals = {
    newSectionCount: 0
}

class SectionComponentWrapper extends HTMLElement {
    constructor() {
        super();
        
    }
}

window.customElements.define('section-component-wrapper', SectionComponentWrapper);

class SectionComponent extends HTMLElement {
    constructor() {
        super();
        console.log()
    }
}
window.customElements.define('section-component', SectionComponent)
var sectionConstructorsList = [{
    value: '', label: '', component: ''
}]
var sectionConstructors = {
    
}
class BuildSection extends HTMLElement {
    constructor() {
        this.bsid = globals.newSectionCount;
        global.newSectionCount++;
        this.innerHTML = `
        <div></div>
        `
    }
}
window.customElements.define('build-section', BuildSection);

var adminSectionGridWrapper = document.getElementById("admin-section-grid-wrapper")
function insertNewSection() {
    let newSection = document.createElement('build-section');
    adminSectionGridWrapper.appendChild(newSection);
}
function replaceSection() {

} */
