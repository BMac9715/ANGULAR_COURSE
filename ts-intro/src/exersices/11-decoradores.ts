/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   

@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }

    printTitle(): void {
        console.log('Hola Mundo');
    }
}

const test = new BugReport('Error en mi vida');

console.log( test.printTitle() );