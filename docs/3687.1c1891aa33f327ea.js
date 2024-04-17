"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3687],{3687:(y,b,g)=>{g.r(b),g.d(b,{LoginPageModule:()=>q});var u=g(6814),d=g(95),n=g(849),h=g(4408),P=g(9397),x=g(7398),e=g(9212),L=g(6311);function D(o,a){if(1&o&&(e.TgZ(0,"div",10),e._uU(1),e.qZA()),2&o){const s=e.oxw();e.xp6(),e.hij(" ",s.errorMessage," ")}}function N(o,a){if(1&o&&(e.TgZ(0,"ion-select-option",11),e._uU(1),e.qZA()),2&o){const s=a.$implicit;e.Q6J("value",s),e.xp6(),e.hij(" ",s," ")}}const Z=[{path:"",component:(()=>{var o;class a{constructor(t,i){this.router=t,this.quickbaseService=i,this.houseNames=[],this.housename="",this.staffID="",this.HLphone="",this.maxMeetingDate="",this.errorMessage="",this.recordNumber=0,this.savedRecordNumber=0,this.houseNames$=this.quickbaseService.getHouseNames().pipe((0,P.b)(l=>console.log("API response:",l)),(0,x.U)(l=>l))}ngOnInit(){this.quickbaseService.errorMessage$.subscribe(t=>{this.errorMessage=t})}login(){console.log("Housename:",this.housename),console.log("StaffID:",this.staffID),console.log("HLphone:",this.HLphone),console.log("MaxMeetingDate:",this.maxMeetingDate),this.quickbaseService.query(this.housename,this.staffID).subscribe(t=>{if(t){var i,l,r,m;const f=null===(i=t.theHouseName)||void 0===i?void 0:i.value,p=null===(l=t.HouseLeaderName)||void 0===l?void 0:l.value,M=null===(r=t.HLphone)||void 0===r?void 0:r.value;this.recordNumber=t.recordNumber,this.savedRecordNumber=this.recordNumber,this.maxMeetingDate=null===(m=t.maxMeetingDate)||void 0===m?void 0:m.value,console.log("Record number after setting:",this.savedRecordNumber),this.quickbaseService.queryData=t,console.log("Query data:",this.quickbaseService.queryData),this.quickbaseService.getResidents(this.savedRecordNumber).subscribe(c=>{console.log("savedRecord number:",this.savedRecordNumber),this.quickbaseService.residentData.next(c),console.log("Resident data:",c)}),this.quickbaseService.getPendingArrivals(this.savedRecordNumber).subscribe(c=>{console.log("Pending arrivals data:",c),this.quickbaseService.pendingArrivals.next(c)}),f&&p&&M&&this.quickbaseService.getMaxMeetingDate(f).subscribe(c=>{var v;this.maxMeetingDate=null===(v=c.data[0])||void 0===v?void 0:v[40].value,console.log("MaxMeetingDate:",this.maxMeetingDate),this.router.navigate(["/home",{theHouseName:f,HouseLeaderName:p,HLphone:M,maxMeetingDate:this.maxMeetingDate}])})}else console.error("No data found in the response")},t=>{console.error("API Error:",t)})}}return(o=a).\u0275fac=function(t){return new(t||o)(e.Y36(h.F0),e.Y36(L.x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:25,vars:8,consts:[[3,"translucent"],["color","Primary"],[3,"fullscreen"],[1,"ion-text-center"],["src","assets/logo/HOM.png","alt","Logo"],["class","error-message",4,"ngIf"],["label","House Name: ",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","text","placeholder","StaffID",3,"ngModel","ngModelChange"],[3,"click"],[1,"error-message"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e._uU(3," HOM Mobile Assistant "),e.qZA()()(),e.TgZ(4,"ion-content",2)(5,"ion-card",3),e._UZ(6,"img",4),e.TgZ(7,"ion-card-header")(8,"ion-card-title"),e._uU(9,"Enter your House name and your Staff ID, then click the blue button to enter."),e.qZA(),e.TgZ(10,"ion-card-subtitle")(11,"i"),e._uU(12,"Enter the House name as two words; e.g., Amos House."),e.qZA()(),e.YNc(13,D,2,1,"div",5),e.qZA(),e.TgZ(14,"ion-card-content")(15,"ion-item")(16,"ion-select",6),e.Uc_("ngModelChange",function(r){return e.nJJ(i.housename,r)||(i.housename=r),r}),e.YNc(17,N,2,2,"ion-select-option",7),e.ALo(18,"async"),e.qZA()(),e._UZ(19,"br"),e.TgZ(20,"ion-item")(21,"ion-input",8),e.Uc_("ngModelChange",function(r){return e.nJJ(i.staffID,r)||(i.staffID=r),r}),e.qZA()(),e._UZ(22,"br"),e.TgZ(23,"ion-button",9),e.NdJ("click",function(){return i.login()}),e._uU(24,"Enter"),e.qZA()()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(9),e.Q6J("ngIf",i.errorMessage),e.xp6(3),e.E3D("ngModel",i.housename),e.xp6(),e.Q6J("ngForOf",e.lcZ(18,6,i.houseNames$)),e.xp6(4),e.E3D("ngModel",i.staffID))},dependencies:[u.sg,u.O5,d.JJ,d.On,n.YG,n.PM,n.FN,n.Zi,n.tO,n.Dq,n.W2,n.Gu,n.pK,n.Ie,n.t9,n.n0,n.wd,n.sr,n.QI,n.j9,u.Ov],styles:["ion-header[_ngcontent-%COMP%]{--ion-background-color: #4194ab !important;--ion-color-base: #fff !important}ion-card-title[_ngcontent-%COMP%]{text-align:center;font-size:22px}.error-message[_ngcontent-%COMP%]{color:red;font-size:20px;margin-top:10px}ion-button[_ngcontent-%COMP%]{--padding-start: 40px;--padding-end: 40px;--padding-top: 10px;--padding-bottom: 10px;--background: #4194ab;--color: #fff;--border-radius: 10px;font-size:18px;font-weight:bolder}"]}),a})()}];let A=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(Z),h.Bz]}),a})(),q=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,d.u5,n.Pc,A]}),a})()}}]);