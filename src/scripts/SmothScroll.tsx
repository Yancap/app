interface IElementHeight{
    top: number | undefined;
    element: string;
}

export default class SmoothScroll {
    static elements: (Element | null)[];
    static elementHeight: (IElementHeight | undefined)[];
    
    static init(elementsId: string[]){
        this.elements = elementsId.map(id => document.querySelector(id))
        this.elementHeight = this.elements.map((element, index) => ({ 
            top: element ? element.getBoundingClientRect().top - 80 : undefined,
            element: elementsId[index]
        }));
    }
    
    static scroll(id: string){
        this.elementHeight.forEach((element) => {
            if (element?.element === id) {
                window.scroll({ top: element.top, behavior: 'smooth'})
                return
            }
        })
    }

    
}