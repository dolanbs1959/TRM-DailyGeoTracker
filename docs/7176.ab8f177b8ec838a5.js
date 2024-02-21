"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7176],{7176:(D,x,c)=>{c.r(x),c.d(x,{ion_radio:()=>g,ion_radio_group:()=>j});var b=c(1528),r=c(2992),k=c(8507),h=c(6384),v=c(5984),w=c(2032),m=c(5256),o=c(8523);const g=class{constructor(e){(0,r.r)(this,e),this.ionStyle=(0,r.d)(this,"ionStyle",7),this.ionFocus=(0,r.d)(this,"ionFocus",7),this.ionBlur=(0,r.d)(this,"ionBlur",7),this.inputId="ion-rb-"+I++,this.radioGroup=null,this.hasLoggedDeprecationWarning=!1,this.updateState=()=>{if(this.radioGroup){const{compareWith:t,value:i}=this.radioGroup;this.checked=(0,v.i)(i,this.value,t)}},this.onClick=()=>{const{radioGroup:t,checked:i,disabled:a}=this;if(!a){if(this.legacyFormController.hasLegacyControl())return void(this.checked=this.nativeInput.checked);this.checked=!i||null==t||!t.allowEmptySelection}},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.checked=!1,this.buttonTabindex=-1,this.color=void 0,this.name=this.inputId,this.disabled=!1,this.value=void 0,this.labelPlacement="start",this.legacy=void 0,this.justify="space-between",this.alignment="center"}valueChanged(){this.updateState()}setFocus(e){var t=this;return(0,b.c)(function*(){e.stopPropagation(),e.preventDefault(),t.el.focus()})()}setButtonTabindex(e){var t=this;return(0,b.c)(function*(){t.buttonTabindex=e})()}connectedCallback(){this.legacyFormController=(0,k.c)(this.el),void 0===this.value&&(this.value=this.inputId);const e=this.radioGroup=this.el.closest("ion-radio-group");e&&(this.updateState(),(0,h.a)(e,"ionValueChange",this.updateState))}disconnectedCallback(){const e=this.radioGroup;e&&((0,h.b)(e,"ionValueChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}styleChanged(){this.emitStyle()}emitStyle(){const e={"interactive-disabled":this.disabled,legacy:!!this.legacy};this.legacyFormController.hasLegacyControl()&&(e["radio-checked"]=this.checked),this.ionStyle.emit(e)}get hasLabel(){return""!==this.el.textContent}renderRadioControl(){return(0,r.h)("div",{class:"radio-icon",part:"container"},(0,r.h)("div",{class:"radio-inner",part:"mark"}),(0,r.h)("div",{class:"radio-ripple"}))}render(){const{legacyFormController:e}=this;return e.hasLegacyControl()?this.renderLegacyRadio():this.renderRadio()}renderRadio(){const{checked:e,disabled:t,color:i,el:a,justify:s,labelPlacement:d,hasLabel:l,buttonTabindex:u,alignment:C}=this,E=(0,o.b)(this),f=(0,m.h)("ion-item",a);return(0,r.h)(r.H,{onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,m.c)(i,{[E]:!0,"in-item":f,"radio-checked":e,"radio-disabled":t,[`radio-justify-${s}`]:!0,[`radio-alignment-${C}`]:!0,[`radio-label-placement-${d}`]:!0,"ion-activatable":!f,"ion-focusable":!f}),role:"radio","aria-checked":e?"true":"false","aria-disabled":t?"true":null,tabindex:u},(0,r.h)("label",{class:"radio-wrapper"},(0,r.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!l},part:"label"},(0,r.h)("slot",null)),(0,r.h)("div",{class:"native-wrapper"},this.renderRadioControl())))}renderLegacyRadio(){this.hasLoggedDeprecationWarning||((0,w.p)('ion-radio now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-radio>Option Label</ion-radio>\nExample with aria-label: <ion-radio aria-label="Option Label"></ion-radio>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,w.p)('ion-radio is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new radio syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{inputId:e,disabled:t,checked:i,color:a,el:s,buttonTabindex:d}=this,l=(0,o.b)(this),{label:u,labelId:C,labelText:E}=(0,h.e)(s,e);return(0,r.h)(r.H,{"aria-checked":`${i}`,"aria-hidden":t?"true":null,"aria-labelledby":u?C:null,role:"radio",tabindex:d,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,m.c)(a,{[l]:!0,"in-item":(0,m.h)("ion-item",s),interactive:!0,"radio-checked":i,"radio-disabled":t,"legacy-radio":!0})},this.renderRadioControl(),(0,r.h)("label",{htmlFor:e},E),(0,r.h)("input",{type:"radio",checked:i,disabled:t,tabindex:"-1",id:e,ref:f=>this.nativeInput=f}))}get el(){return(0,r.f)(this)}static get watchers(){return{value:["valueChanged"],checked:["styleChanged"],color:["styleChanged"],disabled:["styleChanged"]}}};let I=0;g.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-radio)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color-checked:var(--ion-color-primary, #3880ff)}:host(.legacy-radio){width:0.9375rem;height:1.5rem}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}@supports (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}}@supports not (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{left:-9px}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}@supports selector(:dir(rtl)){:host(.ion-focused:dir(rtl)) .radio-icon::after{left:unset;right:unset;right:-9px}}}:host(.in-item.legacy-radio){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px;margin-top:8px;margin-bottom:8px}.native-wrapper .radio-icon{width:0.9375rem;height:1.5rem}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-radio)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--border-width:0.125rem;--border-style:solid;--border-radius:50%}:host(.legacy-radio){width:1.25rem;height:1.25rem}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.legacy-radio.radio-disabled),:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused.legacy-radio) .radio-icon::after{top:-12px}@supports (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{inset-inline-start:-12px}}@supports not (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{left:-12px}:host-context([dir=rtl]):host(.ion-focused.legacy-radio) .radio-icon::after,:host-context([dir=rtl]).ion-focused.legacy-radio .radio-icon::after{left:unset;right:unset;right:-12px}@supports selector(:dir(rtl)){:host(.ion-focused.legacy-radio:dir(rtl)) .radio-icon::after{left:unset;right:unset;right:-12px}}}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host(.in-item.legacy-radio){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:11px;margin-bottom:10px}.native-wrapper .radio-icon{width:1.25rem;height:1.25rem}'};const j=class{constructor(e){(0,r.r)(this,e),this.ionChange=(0,r.d)(this,"ionChange",7),this.ionValueChange=(0,r.d)(this,"ionValueChange",7),this.inputId="ion-rg-"+R++,this.labelId=`${this.inputId}-lbl`,this.setRadioTabindex=t=>{const i=this.getRadios(),a=i.find(l=>!l.disabled),s=i.find(l=>l.value===t&&!l.disabled);if(!a&&!s)return;const d=s||a;for(const l of i)l.setButtonTabindex(l===d?0:-1)},this.onClick=t=>{t.preventDefault();const i=t.target&&t.target.closest("ion-radio");if(i&&!i.disabled){const s=i.value;s!==this.value?(this.value=s,this.emitValueChange(t)):this.allowEmptySelection&&(this.value=void 0,this.emitValueChange(t))}},this.allowEmptySelection=!1,this.compareWith=void 0,this.name=this.inputId,this.value=void 0}valueChanged(e){this.setRadioTabindex(e),this.ionValueChange.emit({value:e})}componentDidLoad(){this.valueChanged(this.value)}connectedCallback(){var e=this;return(0,b.c)(function*(){const t=e.el.querySelector("ion-list-header")||e.el.querySelector("ion-item-divider");if(t){const i=e.label=t.querySelector("ion-label");i&&(e.labelId=i.id=e.name+"-lbl")}})()}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}emitValueChange(e){const{value:t}=this;this.ionChange.emit({value:t,event:e})}onKeydown(e){const t=!!this.el.closest("ion-select-popover");if(e.target&&!this.el.contains(e.target))return;const i=this.getRadios().filter(a=>!a.disabled);if(e.target&&i.includes(e.target)){const a=i.findIndex(l=>l===e.target),s=i[a];let d;if(["ArrowDown","ArrowRight"].includes(e.key)&&(d=a===i.length-1?i[0]:i[a+1]),["ArrowUp","ArrowLeft"].includes(e.key)&&(d=0===a?i[i.length-1]:i[a-1]),d&&i.includes(d)&&(d.setFocus(e),t||(this.value=d.value,this.emitValueChange(e))),[" "].includes(e.key)){const l=this.value;this.value=this.allowEmptySelection&&void 0!==this.value?void 0:s.value,(l!==this.value||this.allowEmptySelection)&&this.emitValueChange(e),e.preventDefault()}}}render(){const{label:e,labelId:t,el:i,name:a,value:s}=this,d=(0,o.b)(this);return(0,h.d)(!0,i,a,s,!1),(0,r.h)(r.H,{key:"d8e84feca8f4dbe7605bc4ad096b6e68b482ba68",role:"radiogroup","aria-labelledby":e?t:null,onClick:this.onClick,class:d})}get el(){return(0,r.f)(this)}static get watchers(){return{value:["valueChanged"]}}};let R=0},5256:(D,x,c)=>{c.d(x,{c:()=>k,g:()=>v,h:()=>r,o:()=>m});var b=c(1528);const r=(o,n)=>null!==n.closest(o),k=(o,n)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},n):n,v=o=>{const n={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(o).forEach(p=>n[p]=!0),n},w=/^[a-z][a-z0-9+\-.]*:/,m=function(){var o=(0,b.c)(function*(n,p,_,y){if(null!=n&&"#"!==n[0]&&!w.test(n)){const g=document.querySelector("ion-router");if(g)return null!=p&&p.preventDefault(),g.push(n,_,y)}return!1});return function(p,_,y,g){return o.apply(this,arguments)}}()}}]);