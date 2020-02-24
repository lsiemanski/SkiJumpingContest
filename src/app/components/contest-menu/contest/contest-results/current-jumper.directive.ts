import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCurrentJumper]'
})
export class CurrentJumperDirective {
  @Input() set appCurrentJumper(condition: boolean) {
    if (condition) {
      setTimeout(() => {
        const element = this.vcRef.createEmbeddedView(this.templateRef);
        element.rootNodes[0].classList.add('warning');
      }, 2000);
    } else {
      const element = this.vcRef.createEmbeddedView(this.templateRef);
      element.detectChanges();
      const innerText = element.rootNodes[0].cells['0'].innerText;
      element.rootNodes[0].cells['0'].innerText = '';
      setTimeout(() => {
        element.rootNodes[0].cells[0].innerText = innerText;
      }, 2000);
    }
  }
  constructor(private templateRef: TemplateRef<HTMLTableRowElement>, private vcRef: ViewContainerRef) {}
}
