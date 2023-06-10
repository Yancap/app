interface IElementHeight{
    top: number | undefined;
    element: string;
}

export default class SmoothScroll {
    elements: (Element | null)[];
    elementHeight: (IElementHeight | undefined)[];
    
    constructor(elementsId: string[]){
        this.elements = elementsId.map(id => document.querySelector(id))
        this.elementHeight = this.elements.map((element, index) => ({ 
            top: element ? element.getBoundingClientRect().top - 80 : undefined,
            element: elementsId[index]
        }));
    }
    
    scroll(id: string){
        this.elementHeight.forEach((element, index) => {
            if (element?.element === id) {
                window.scroll({ top: element.top, behavior: 'smooth'})
                return
            }
        })
    }
}