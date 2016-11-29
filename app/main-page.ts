/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import * as camera from "nativescript-camera";
import { ImageAsset } from "image-asset";
import {Image} from "ui/image"
let page
// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    page = <Page>args.object;
    
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new HelloWorldModel();
}
export function onTap(args: EventData) {
    showModal(page,null, false);
    
}


function showModal(page: Page, _selected: ImageAsset, fullscreen?: boolean) {
    page.showModal("./modalView", _selected, function (args:string) {
        if(args == "open_camera"){
            var options = { width: 300, height: 300, keepAspectRatio: true,  saveToGallery: true };
            camera.takePicture(options)
            .then(imageAsset => {
                console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
                setTimeout(function(){
                    showModal(page,imageAsset, false);
                },100)
                
            }).catch(err => {
                console.log(err.message);
            })
        }
    }, fullscreen);
}