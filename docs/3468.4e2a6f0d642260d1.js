"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3468],{3468:(y,p,s)=>{s.r(p),s.d(p,{StaffTasksModule:()=>C});var c=s(1368),i=s(2112),g=s(4716),l=s(4180),e=s(4496),f=s(4628),u=s(6976);function m(t,r){if(1&t&&(e.I0R(0,"ion-card")(1,"ion-card-content")(2,"ion-card-header")(3,"ion-card-title"),e.OEk(4),e.C$Y()(),e.I0R(5,"p"),e.OEk(6),e.C$Y(),e.I0R(7,"p"),e.OEk(8),e.C$Y(),e.I0R(9,"p"),e.OEk(10),e.wVc(11,"extractText"),e.C$Y(),e.I0R(12,"p"),e.OEk(13),e.wVc(14,"extractText"),e.C$Y(),e.I0R(15,"p"),e.OEk(16),e.C$Y()()()),2&t){const a=r.$implicit;e.yG2(4),e.cNF(a.taskName),e.yG2(2),e.oRS("Role: ",a.role,""),e.yG2(2),e.oRS("House Name: ",a.houseName,""),e.yG2(2),e.oRS("Status: ",e.kDX(11,6,a.status),""),e.yG2(3),e.oRS("Frequency: ",e.kDX(14,8,a.frequency),""),e.yG2(3),e.oRS("Priority: ",a.priority,"")}}let h=(()=>{var t;class r{constructor(o,n,d,M){this.quickbaseService=o,this.route=n,this.location=d,this.router=M,this.HouseLeaderName="",this.theHouseName="",this.HLphone="",this.residentPhoto="",this.residentFullName="",this.weeklyHouseMeeting="",this.maxMeetingDate="",this.tasks=[],this.quickbaseService.residentData.subscribe(b=>{this.residentData=b})}addWeeklyHouseMeeting(){console.log("addWeeklyHouseMeeting"),this.router.navigate(["/weeklyhousemeeting"],{state:{theHouseName:this.theHouseName,HouseLeaderName:this.HouseLeaderName,HLphone:this.HLphone,maxMeetingDate:this.maxMeetingDate}})}goBack(){this.location.back()}ngOnInit(){this.residentData=this.quickbaseService.residentData;const o=this.router.getCurrentNavigation();if(o&&o.extras.state){console.log("State from router:",o.extras.state);const n=o.extras.state;this.tasks=n.tasks,this.theHouseName=n.theHouseName,this.HouseLeaderName=n.HouseLeaderName,this.HLphone=n.HLphone,this.maxMeetingDate=n.maxMeetingDate}}}return(t=r).\u0275fac=function(o){return new(o||t)(e.GI1(f.i),e.GI1(l.gV),e.GI1(c.oB),e.GI1(l.E5))},t.\u0275cmp=e.In1({type:t,selectors:[["HOMMA-staff-tasks"]],decls:34,vars:10,consts:[[3,"translucent"],["color","Primary"],[3,"fullscreen"],[1,"ion-text-center"],["src","assets/logo/HOM.png","alt","Logo"],[1,"ion-text-center","first-title"],[1,"ion-text-left"],[1,"weekly-meeting-message"],[1,"wrapper"],[1,"ion-activatable","ripple-parent","rounded-rectangle","ripple-effect-lightblue",3,"click"],[1,"body-text"],[4,"ngFor","ngForOf"],[1,"ion-activatable","ripple-parent","rounded-rectangle","ripple-effect-blue",3,"click"]],template:function(o,n){1&o&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),e.OEk(3," HOM Mobile Assistant - Staff Tasks Assignments "),e.C$Y()()(),e.I0R(4,"ion-content",2)(5,"ion-card",3),e.wR5(6,"img",4)(7,"br"),e.I0R(8,"ion-card-header")(9,"ion-card-title",5),e.OEk(10,"Staff Tasks Assignments"),e.C$Y(),e.I0R(11,"ion-card-subtitle",6),e.OEk(12),e.wR5(13,"br"),e.OEk(14),e.wR5(15,"br"),e.OEk(16),e.wR5(17,"br"),e.C$Y()()(),e.I0R(18,"div",7),e.wR5(19,"br"),e.I0R(20,"ion-card-subtitle",3),e.OEk(21),e.wVc(22,"date"),e.C$Y()(),e.I0R(23,"div",8)(24,"div",9),e.qCj("click",function(){return n.addWeeklyHouseMeeting()}),e.OEk(25," Add Weekly House Meeting "),e.wR5(26,"ion-ripple-effect"),e.C$Y(),e.wR5(27,"div",10),e.C$Y(),e.yuY(28,m,17,10,"ion-card",11),e.wR5(29,"router-outlet"),e.I0R(30,"div",8)(31,"div",12),e.qCj("click",function(){return n.goBack()}),e.OEk(32," Back/Start Over "),e.wR5(33,"ion-ripple-effect"),e.C$Y()()()),2&o&&(e.E7m("translucent",!0),e.yG2(4),e.E7m("fullscreen",!0),e.yG2(8),e.cNF(n.theHouseName),e.yG2(2),e.oRS(" House Leader: ",n.HouseLeaderName,""),e.yG2(2),e.oRS(" Phone: ",n.HLphone,""),e.yG2(5),e.oRS("Your last weekly house meeting was on: ",e.g7$(22,7,n.maxMeetingDate,"MMM-dd-yyyy"),""),e.yG2(7),e.E7m("ngForOf",n.tasks))},dependencies:[c.ay,i.KC,i.Gg,i.YY,i.MN,i.I7,i._i,i.wB,i.mA,i.tM,i.Md,l.cP,c.y,u.Y],styles:["ion-header[_ngcontent-%COMP%]{--ion-background-color: #4194ab !important;--ion-color-base: #fff !important}ion-title[_ngcontent-%COMP%]{--ion-color-base: #fff !important;font-size:16px}ion-card-header[_ngcontent-%COMP%]{--padding-bottom: 0;font-size:16px;font-weight:700}ion-card-subtitle[_ngcontent-%COMP%]{--ion-color-base: #000 !important;font-size:12px;font-weight:inherit}ion-card-title[_ngcontent-%COMP%]{text-align:center;border-bottom:1px solid #000}.first-title[_ngcontent-%COMP%]{border-bottom:none}.error-message[_ngcontent-%COMP%]{color:red;font-size:20px;margin-top:10px}ion-card[_ngcontent-%COMP%]{justify-content:center}ion-card[_ngcontent-%COMP%]   .error-message-text[_ngcontent-%COMP%]{text-align:center;color:#87130a}ion-select[_ngcontent-%COMP%]{margin:0;padding:10px}form[_ngcontent-%COMP%]{margin:0;padding:10px}.ripple-effect-blue[_ngcontent-%COMP%]{color:#010384}.ripple-effect-lightblue[_ngcontent-%COMP%]{color:#00c8ff;width:100px}.ripple-effect-orange[_ngcontent-%COMP%]{color:#6c5105;font-size:x-small}.weekly-meeting-message[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{text-align:center;font-size:12px;color:#010384;font-weight:700;margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0}.wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;height:50px;width:300px;margin:0 auto}b[_ngcontent-%COMP%]{width:100%}.center-div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.ripple-parent[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;border:1px solid #4194ab;width:100%;height:50px;border-radius:8px}.rounded-rectangle[_ngcontent-%COMP%]{width:300px;height:30px;border-radius:8px}.bordered-input[_ngcontent-%COMP%]{border:1px solid #4194ab;white-space:pre-wrap}.stacked-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;color:#4194ab}ion-button[_ngcontent-%COMP%]{--padding-start: 10px;--padding-end: 10px;--padding-top: 0px;--padding-bottom: 0px;--background: #87130a;--color: #fff;--border-radius: 8px;font-size:12px;font-weight:700}.body-text[_ngcontent-%COMP%]{font-size:12px;line-height:16px;margin-top:0}"]}),r})();var k=s(4800);let C=(()=>{var t;class r{}return(t=r).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[c.MD,g.y,i.wZ,k.Y,l.qQ.forChild([{path:"",component:h}])]}),r})()}}]);