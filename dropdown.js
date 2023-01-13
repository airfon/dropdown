(function() {
//	var trigger = "";
    class Dropdown extends HTMLElement {
        constructor() {
            super();
			let listBox = document.createElement("div");
			listBox.setAttribute("class","hoverbox");
			listBox.innerHTML = "<style>.hoverbox *:last-child{opacity:0;z-index:-1000;transition:opacity .3s .1s,z-index .1s}.hoverbox:hover *:last-child{opacity:1;z-index:1;transition:opacity .3s .3s,z-index .1s .6s}.dd-title{height:32px;line-height:32px;padding-left:8px;}</style><span class='dd-title'>Hello World</span>";
			var listContainer = document.createElement("div");
			
			listContainer.setAttribute("style","width:200px;height:300px;background-color:white;position:absolute;top:36px;box-shadow:0 0.25rem 0.5rem 0 rgba(59,63,73,0.15)");
			listBox.appendChild(listContainer);
			this.appendChild(listBox);
			var keys = ["0","1","2"];
			var texts = ["text1","text2","text3"];
			var listUl = document.createElement("ul");
			for (var ind=0;ind<keys.length;ind++) {
				var listLi = document.createElement("li");
				listLi.innerHTML = texts[ind];
				listLi.setAttribute("class","list-li");
				listLi.setAttribute("key",keys[ind]);
				listUl.appendChild(listLi);
				var event = new Event("onSelect");
				listLi.addEventListener("click", event => {
					trigger = event.target.getAttribute("key");
					console.log("js "+trigger);
				});
				this.dispatchEvent(event);
			}
			listContainer.appendChild(listUl);
 /*           this.addEventListener("click", event => {
                var event = new Event("onSelect");
                this.dispatchEvent(event);
            });*/
            this._props = {};
        }
        onCustomWidgetBeforeUpdate(changedProperties) {
            this._props = {
                ...this._props,
                ...changedProperties
            };
        }
        onCustomWidgetAfterUpdate(changedProperties) {
            if ("color" in changedProperties) {
                this.style["background-color"] = changedProperties["color"];
            }
            if ("list" in changedProperties) {
                
            }
            if ("trigger" in changedProperties) {
                this.trigger = changedProperties["trigger"];
            }
            if ("opacity" in changedProperties) {
                this.style["opacity"] = changedProperties["opacity"];
            }
        }
    }
    customElements.define("com-str-dropdown", Dropdown);
	var parentElements = document.querySelector('div[class*="sap-custom-default-sdk_com_str_dropdown"');
		parentElements.querySelector('div[class~="sapCustomWidget"').setAttribute("style","overflow: visible");
})();