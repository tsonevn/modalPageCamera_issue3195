import {ObservableArray} from "data/observable-array";
import {Page, ShownModallyData} from 'ui/page';
import {Observable, EventData} from "data/observable";
import frame = require("ui/frame");
import {Image} from "ui/image"

var closeCallback: Function;
var array;
var asset;
export function onPageLoaded(args) {
  var page:Page = <Page>args.object;  
}


export function onShowingModally(args: EventData) {
    console.log(">>> login-page.onShowingModally");

}

export function onShownModally(args: ShownModallyData) {
    console.log(">>> login-page.onShownModally, context: " + args.context);
    
     asset = args.context
    closeCallback = args.closeCallback;
    
    var modalPage = <Page>args.object;

    if (frame.topmost().currentPage.modal !== args.object) {
        throw new Error(`Error`);
    }
    
}
export function openCamera(){
    closeCallback("open_camera")
}

export function close(){
    closeCallback("close_modal");
}

export function imageLoaded(args){
var img = <Image> args.object;
if(asset != null){
    img.src = asset;
}
}