import {ObservableArray} from "data/observable-array";
import {Page, ShownModallyData} from 'ui/page';
import {Observable, EventData} from "data/observable";
import frame = require("ui/frame");
import * as camera from "nativescript-camera";

var closeCallback: Function;
var array;
export function onPageLoaded(args) {
  var page:Page = <Page>args.object;  
}


export function onShowingModally(args: EventData) {
    console.log(">>> login-page.onShowingModally");

}

export function onShownModally(args: ShownModallyData) {
    console.log(">>> login-page.onShownModally, context: " + args.context);
    
    var selected = <number>args.context;
    // console.log(selected);
    
    
    
    closeCallback = args.closeCallback;
    
    var modalPage = <Page>args.object;

    if (frame.topmost().currentPage.modal !== args.object) {
        throw new Error(`Error`);
    }
    
}
export function openCamera(){
var options = { width: 300, height: 300, keepAspectRatio: true,  saveToGallery: true };
        camera.takePicture(options)
            .then(imageAsset => {
                // this.imageTaken = imageAsset;
                console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            }).catch(err => {
                console.log(err.message);
            })
    
}

export function close(){
    closeCallback(0);
}