"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4068],{4068:(S,c,a)=>{a.r(c),a.d(c,{HomePageModule:()=>y});var m=a(1368),l=a(2112),d=a(4716),g=a(9596),f=a(7048),p=a(6716),e=a(4496),h=a(4628);function C(i,r){1&i&&(e.I0R(0,"div",22),e.OEk(1," Status or Coordinates are blank. Use Get Current Location first and try again. "),e.C$Y())}const M=[{path:"",component:(()=>{var i;class r{resetForm(){this.fieldLatitude="",this.fieldLongitude=""}toggleStatus(){this.status=""===this.status||"Onsite"===this.status?"Enroute":"Onsite"}constructor(n,t){this.quickbaseService=n,this.route=t,this.showError=!1,this.selectedStop="",this.fieldEmployee="",this.fieldDate="",this.fieldTime="",this.fieldLatitude="",this.fieldLongitude="",this.recordNumber=null,this.status=""}ngOnInit(){const n=this.route.snapshot.paramMap.get("recordNumber");if(n){const t=JSON.parse(n);this.recordNumber=t.value,this.fieldEmployee=t.value.toString()}}getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(n=>{console.log("Latitude:",n.coords.latitude),console.log("Longitude:",n.coords.longitude);const t=new Date,s=`${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}-${t.getFullYear()}`,o=t.getHours(),P=o>=12?"PM":"AM",b=`${(o%12||12).toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")} ${P}`;this.toggleStatus(),this.fieldLatitude=n.coords.latitude.toString(),this.fieldLongitude=n.coords.longitude.toString(),this.fieldDate=s,this.fieldTime=b},n=>{console.error("Geolocation Error:",n)}):console.error("Geolocation is not supported by this browser.")}insertRecord(){console.log("fieldEmployee:",this.fieldEmployee),console.log("fieldStop:",this.selectedStop),console.log("fieldDate:",this.fieldDate),console.log("fieldTime:",this.fieldTime),console.log("FieldLatitude:",this.fieldLatitude),console.log("FieldLongitude:",this.fieldLongitude),""!==this.fieldLatitude||""!==this.fieldLongitude||""!==this.status?this.quickbaseService.insertRecord({to:p.O.insertTableId,data:[{72:{value:this.fieldEmployee},74:{value:this.fieldDate},77:{value:this.fieldTime},76:{value:this.fieldLatitude},75:{value:this.fieldLongitude},78:{value:this.selectedStop},79:{value:this.status}}]}).subscribe(t=>{console.log("API Response",t),this.resetForm()},t=>{console.error("API Error",t),t instanceof f.gj&&(console.error("Status:",t.status),console.error("Error Message:",t.error))}):(console.error("Coordinates are blank. Please Get Current Location first and try again."),this.showError=!0)}}return(i=r).\u0275fac=function(n){return new(n||i)(e.GI1(h.i),e.GI1(g.gV))},i.\u0275cmp=e.In1({type:i,selectors:[["app-home"]],decls:57,vars:16,consts:[[3,"translucent"],["color","Primary"],[3,"fullscreen"],[1,"ion-text-center"],["src","https://yourroofmedic.com/wp-content/uploads/2023/02/RoofMedic_Logo_400.png","alt","Logo"],[1,"ion-text-left"],[1,"fields-container"],["label","Employee #:","name","fieldEmployee","type","text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["value","1st Stop"],["value","2nd Stop"],["value","3rd Stop"],["value","4th Stop"],["value","5th Stop"],["value","6th Stop"],["label","Date","name","fieldDate","type","text",3,"ngModel","ngModelChange"],["label","Time","name","fieldTime","type","text",3,"ngModel","ngModelChange"],["label","Latitude","name","fieldLatitude","type","text",3,"ngModel","ngModelChange"],["label","Longitude","name","fieldLongitude","type","text",3,"ngModel","ngModelChange"],["class","error-message",4,"ngIf"],["color","primary",3,"click"],["color","danger",3,"click"],[1,"error-message"]],template:function(n,t){1&n&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e.OEk(3," Geo Location Tracking App "),e.C$Y()()(),e.I0R(4,"ion-content",2)(5,"ion-card",3),e.wR5(6,"img",4)(7,"br")(8,"br"),e.I0R(9,"ion-card-header")(10,"ion-card-title",3),e.OEk(11,"Geolocation Coordinates"),e.C$Y(),e.I0R(12,"ion-card-subtitle",5),e.OEk(13,"1. Select the stop number."),e.wR5(14,"br"),e.OEk(15," 2. Click blue button to get current coordinates."),e.wR5(16,"br"),e.OEk(17," 3. Click red button to update."),e.C$Y()(),e.I0R(18,"ion-card-content")(19,"div",6)(20,"ion-item")(21,"ion-input",7),e.iHE("ngModelChange",function(o){return e.kNx(t.fieldEmployee,o)||(t.fieldEmployee=o),o}),e.C$Y()(),e.I0R(22,"ion-item")(23,"p"),e.OEk(24),e.C$Y(),e.I0R(25,"select",8),e.iHE("ngModelChange",function(o){return e.kNx(t.selectedStop,o)||(t.selectedStop=o),o}),e.I0R(26,"option",9),e.OEk(27,"1st Stop"),e.C$Y(),e.I0R(28,"option",10),e.OEk(29,"2nd Stop"),e.C$Y(),e.I0R(30,"option",11),e.OEk(31,"3rd Stop"),e.C$Y(),e.I0R(32,"option",12),e.OEk(33,"4th Stop"),e.C$Y(),e.I0R(34,"option",13),e.OEk(35,"5th Stop"),e.C$Y(),e.I0R(36,"option",14),e.OEk(37,"6th Stop"),e.C$Y()()()(),e.wR5(38,"br"),e.I0R(39,"ion-item")(40,"ion-input",15),e.iHE("ngModelChange",function(o){return e.kNx(t.fieldDate,o)||(t.fieldDate=o),o}),e.C$Y()(),e.wR5(41,"br"),e.I0R(42,"ion-item")(43,"ion-input",16),e.iHE("ngModelChange",function(o){return e.kNx(t.fieldTime,o)||(t.fieldTime=o),o}),e.C$Y()(),e.wR5(44,"br"),e.I0R(45,"ion-item")(46,"ion-input",17),e.iHE("ngModelChange",function(o){return e.kNx(t.fieldLatitude,o)||(t.fieldLatitude=o),o}),e.C$Y()(),e.wR5(47,"br"),e.I0R(48,"ion-item")(49,"ion-input",18),e.iHE("ngModelChange",function(o){return e.kNx(t.fieldLongitude,o)||(t.fieldLongitude=o),o}),e.C$Y()(),e.yuY(50,C,2,0,"div",19),e.wR5(51,"br"),e.I0R(52,"ion-button",20),e.qCj("click",function(){return t.getLocation()}),e.OEk(53,"Get Current Location"),e.C$Y(),e.wR5(54,"br"),e.I0R(55,"ion-button",21),e.qCj("click",function(){return t.insertRecord()}),e.OEk(56,"Add Coordinates"),e.C$Y()()()()),2&n&&(e.E7m("translucent",!0),e.yG2(4),e.E7m("fullscreen",!0),e.yG2(17),e.OKB("ngModel",t.fieldEmployee),e.yG2(2),e.m4B("font-size",16,"px")("line-height",18,"px")("color","Enroute"===t.status?"#2b9c4d":"#FF0000"),e.yG2(),e.oRS(" Status: ",t.status," "),e.yG2(),e.OKB("ngModel",t.selectedStop),e.yG2(15),e.OKB("ngModel",t.fieldDate),e.yG2(3),e.OKB("ngModel",t.fieldTime),e.yG2(3),e.OKB("ngModel",t.fieldLatitude),e.yG2(3),e.OKB("ngModel",t.fieldLongitude),e.yG2(),e.E7m("ngIf",t.showError))},dependencies:[m.u_,d.wd,d.GO,d.GC,d.ue,d._G,l.sn,l.KC,l.Gg,l.YY,l.MN,l.I7,l._i,l.wB,l.A5,l.Yb,l.tM,l.Md,l.qG],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}.fields-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#2b9c4d;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-header[_ngcontent-%COMP%]{--ion-background-color: #d40000;--ion-color-base: #fff}ion-title[_ngcontent-%COMP%]{font-size:1.25em;font-weight:400;text-shadow:none}ion-content[_ngcontent-%COMP%]{--ion-font-size: 16px}ion-buttons[_ngcontent-%COMP%]{font-size:1.2em}"]}),r})()}];let E=(()=>{var i;class r{}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[g.qQ.forChild(M),g.qQ]}),r})(),y=(()=>{var i;class r{}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[m.MD,d.y,l.wZ,E]}),r})()}}]);