import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement,'color',this.color)
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor',this.backgroundColor)
    this.renderer.setStyle(this.elementRef.nativeElement,'transition','0.3s')
    this.renderer.setStyle(this.elementRef.nativeElement,'cursor','pointer')

    console.log(this.elementRef.nativeElement)
  }
  
  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.hostBackgroundColor = this.backgroundColor;
    this.renderer.setStyle(this.elementRef.nativeElement,'color',this.color)
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor',this.backgroundColor)
    this.renderer.setStyle(this.elementRef.nativeElement,'transition','2s')
    this.renderer.setStyle(this.elementRef.nativeElement,'cursor','pointer')

  }

  @HostBinding('style.bckgroundColor') hostBackgroundColor!:string;
  @HostBinding('style.bckgroundColor') hostColor!:string;

  @Input() color:any;
  @Input() backgroundColor!:string;


}
