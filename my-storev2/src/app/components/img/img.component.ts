import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img);
  }

  @Input() alt = "";
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'assets/images/default.jpg';
  // counter = 0;
  // counterFn: number | undefined;


  constructor() {
    // before render
    // NO async -- once time
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //before render
    //changes inputs  --  times
    console.log('ngOnchanges', 'imgValue =>', this.img);
    console.log(changes);
    console.log()
  }

  ngOnInit() {
    //before render
    //async - fetch  promsesas
    // once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('Run couter');
    // }, 1000);
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('ngAfterViewInit', 'imgValue =>', this.img);
  }

  ngOnDestroy() {
    // delete
    console.log('ngAfterViewInit', 'imgValue =>', this.img);
    // window.clearTimeout(this.counterFn);
  }


  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    console.log("log hijo");
    this.loaded.emit(this.img);
  }


}
