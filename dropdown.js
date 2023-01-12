(function() {

    class Dropdown extends HTMLElement {
        constructor() {
            super();
			let listBox = document.createElement("div");
			listBox.setAttribute("class","hoverbox");
			listBox.innerHTML = "<span>Hello World</span><div style='width:200px;height:300px;background-color:red'/>";
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