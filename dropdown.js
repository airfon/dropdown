(function() {
	var triggerKey = "";
    class Dropdown extends HTMLElement {
        constructor() {
            super();
			
			let listBox = document.createElement("div");
			listBox.setAttribute("class","hoverbox");
			listBox.innerHTML = "<style>.hoverbox *:last-child{opacity:0;z-index:-1000;transition:opacity .3s .1s,z-index .1s}.hoverbox:hover *:last-child{opacity:1;z-index:1;transition:opacity .3s .3s,z-index .1s .6s}.dd-title{height:32px;line-height:32px;padding-left:8px;}</style>";
			
			var title = document.createElement("span");
			title.setAttribute("class","dd-title");
			title.innerHTML = "Hello World";
			listBox.appendChild(title);
			
			var listContainer = document.createElement("div");
			listContainer.setAttribute("style","width:200px;height:300px;background-color:white;position:absolute;top:36px;box-shadow:0 0.25rem 0.5rem 0 rgba(59,63,73,0.15)");
			listBox.appendChild(listContainer);
			this.appendChild(listBox);
			
			var keys = ["04BTBQRWKT36EGYX4HYA1LLO0","04BTBQRWKT36EGYX4HYA1MTWW","04BTBQRWKT36EGYX4HYA1N08G","04BTBQRWKT36EGYX4HYA1N6K0","04BTBQRWKT36EGYX4HYA1LYB4","04BTBQRWKT36EGYX4HYA1NPIO","04BTBQRWKT36EP8ZTLUWL2JUF","04BTBQRWKT36EP8ZTLUWL2Q5Z","04BTBQRWKT36EP8ZTLUWL2WHJ","04BTBQRWKT36EILBZ3CM9OEEP","04BTBQRWKT36EILBZ3CM9OKQ9","04BTBQRWKT36EILBZ3CM9OR1T","04BTBQRWKT384TN4L2BYSQ52J","04BTBQRWKT384TN4L2BYSQ52J"];
			var texts = ["Net Sales","Sales Discount %","Standard Margin %","Net ASP","Net Volume","Gross Inventory Value","IDL Val - IOH","IDL Val - GIT","IDL Value","Gross Sales","Gross ASP","CoS per piece","Go in Margin","Go in Margin"];
			var listUl = document.createElement("ul");
			for (var ind=0;ind<keys.length;ind++) {
				var listLi = document.createElement("li");
				listLi.innerHTML = texts[ind];
				listLi.setAttribute("class","list-li");
				listLi.setAttribute("key",keys[ind]);
				listUl.appendChild(listLi);
				listLi.addEventListener("click", event => {
				var event2 = new Event("onSelect");
					triggerKey = event.target.getAttribute("key");
					console.log("js "+triggerKey);
					title.innerHTML = event.target.getInnerHTML();
				this.dispatchEvent(event2);
				});
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
                triggerKey = changedProperties["trigger"];
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