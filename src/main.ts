import * as jQuery from "jquery";
import "bootstrap"
import * as wd from "bootstrap-waitingfor";

document.getElementById("btn-show").addEventListener("click",
function show(){
    wd.show("Test", {
        dialogSize: "m",
        progressType: "warning"
    });
})