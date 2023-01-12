(function() {

    class Dropdown extends HTMLElement {
        constructor() {
            super();
			let listBox = document.createElement("div");
			listBox.setAttribute("class","hoverbox");
			listBox.innerHTML = "<style>.hoverbox *:last-child{opacity:0;z-index:-1000;transition:opacity .3s .1s,z-index .1s}.hoverbox:hover *:last-child{opacity:1;z-index:1;transition:opacity .3s .3s,z-index .1s .6s}</style><span>Hello World</span>";
			var listContainer = document.createElement("div");
			listContainer.setAttribute("width","200px");
			listContainer.setAttribute("height","300px");
			listContainer.setAttribute("background-color","white");
			listContainer.setAttribute("position","absolute");
			listContainer.setAttribute("top","36px");
			listContainer.setAttribute("box-shadow","0 0.25rem 0.5rem 0 rgba(59,63,73,0.15)");
			listBox.appendChild(listContainer);
			this.appendChild(listBox);
			
            this.addEventListener("click", event => {
                var event = new Event("onClick");
                this.dispatchEvent(event);
            });
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
            if ("opacity" in changedProperties) {
                this.style["opacity"] = changedProperties["opacity"];
            }
        }
    }
    customElements.define("com-str-dropdown", Dropdown);
	var parentElements = document.querySelector('div[class*="sap-custom-default-sdk_com_str_dropdown"');
		parentElements.querySelector('div[class~="sapCustomWidget"').setAttribute("style","overflow: visible");
})();