"use strict";(self.webpackChunkmakatiportal2022=self.webpackChunkmakatiportal2022||[]).push([[456],{2456:(U,_,r)=>{r.r(_),r.d(_,{CmsModule:()=>P});var m=r(9808),h=r(8231),l=r(4776),v=r(9841),u=r(4004),f=r(9646),p=r(8056);const g=[{title:"Support",url:"/content/support"},{title:"Mayor's Corner",url:"/content/mayors-corner/gallery"},{title:"Makati News",url:"/content/news"},{title:"Makati News",url:"/content/events"},{title:"Makati News",url:"/content/makati-videos"},{title:"Are you satisfied?",url:"/content/content/customer-satisfaction-survey-form"},{title:"I Want To",url:"/content/i-want-to"},{title:"Downloads",url:"/content/downloads"}];var b=r(7854),t=r(4893),C=r(817),y=r(7787),T=r(7045);function I(s,o){1&s&&(t.TgZ(0,"span"),t._UZ(1,"i",6),t.qZA())}function Z(s,o){if(1&s){const e=t.EpF();t.TgZ(0,"shrd-sidebar-item",7),t.NdJ("on_is_active",function(n){const a=t.CHM(e).index;return t.oxw().set_up_parent(n,a)})("on_select",function(n){return t.CHM(e),t.oxw().on_select.emit(n)}),t.qZA()}if(2&s){const e=o.$implicit;t.Q6J("is_child_menu",!0)("item",e)}}const M=function(s,o){return{"ps-3 pt-3":s,"p-3":o}},A=function(s){return{"text-primary tx-active":s}};let J=(()=>{class s{constructor(e,i){this.route=e,this.router=i,this.is_child_menu=!1,this.on_select=new t.vpe,this.on_is_active=new t.vpe(!1),this._is_active=!1,this.is_collapsed=!0,this._subscriptions=[],this.child_statuses=[]}ngOnInit(){this.set_up_is_active()}on_click(){this.item.children.length>0?this.is_collapsed=!this.is_collapsed:this.on_select.emit(this.item)}ngOnDestroy(){this._subscriptions.forEach(e=>e.unsubscribe())}ngAfterViewInit(){if(0!=this.item.menuId&&0==this.item.children.length==1){const i=this.router.events.subscribe(n=>{n instanceof l.m2&&this.set_up_is_active()});this._subscriptions.push(i)}}set_up_is_active(){var e,i;const n=null!==(e=this.route.snapshot.queryParamMap.get("content"))&&void 0!==e?e:0,c=null!==(i=this.route.snapshot.paramMap.get("pageId"))&&void 0!==i?i:0;this.is_active=+this.item.menuId==+(0!=+n?+n:+c)}set is_active(e){setTimeout(()=>{this._is_active=e,this.on_is_active.emit(e),this.is_collapsed=!e,this.child_statuses=[]},20)}get is_active(){return this._is_active}set_up_parent(e,i){if(this.child_statuses.push(e),i+1==this.item.children.length){const n=this.child_statuses.reduce((c,a)=>1==c||a,!1);this.is_active=n}}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(l.gz),t.Y36(l.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["shrd-sidebar-item"]],inputs:{item:"item",is_child_menu:"is_child_menu"},outputs:{on_select:"on_select",on_is_active:"on_is_active"},decls:7,vars:12,consts:[[1,"d-flex","flex-column",3,"ngClass"],[1,"d-flex","justify-content-between","c-pointer",3,"click"],[1,"pb-3","tx",3,"ngClass"],[4,"ngIf"],[1,"ms-1",3,"collapse","isAnimated"],[3,"is_child_menu","item","on_is_active","on_select",4,"ngFor","ngForOf"],[1,"bi","bi-chevron-down"],[3,"is_child_menu","item","on_is_active","on_select"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return i.on_click()}),t.TgZ(2,"span",2),t._uU(3),t.qZA(),t.YNc(4,I,2,0,"span",3),t.qZA(),t.TgZ(5,"div",4),t.YNc(6,Z,1,2,"shrd-sidebar-item",5),t.qZA()()),2&e&&(t.Q6J("ngClass",t.WLB(7,M,1==i.is_child_menu,0==i.is_child_menu)),t.xp6(2),t.Q6J("ngClass",t.VKq(10,A,1==i.is_active)),t.xp6(1),t.hij(" ",i.item.menuLabel," "),t.xp6(1),t.Q6J("ngIf",i.item.children.length>0),t.xp6(1),t.Q6J("collapse",i.is_collapsed)("isAnimated",!0),t.xp6(1),t.Q6J("ngForOf",i.item.children))},directives:[m.mk,m.O5,T.Y,m.sg,s],styles:[""]}),s})();function S(s,o){if(1&s){const e=t.EpF();t.TgZ(0,"shrd-sidebar-item",2),t.NdJ("on_select",function(n){return t.CHM(e),t.oxw().on_select.emit(n)}),t.qZA()}2&s&&t.Q6J("item",o.$implicit)}let x=(()=>{class s{constructor(){this.items=[],this.on_select=new t.vpe,this.on_is_active=new t.vpe}ngOnInit(){}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["shrd-sidebar"]],inputs:{items:"items"},outputs:{on_select:"on_select",on_is_active:"on_is_active"},decls:2,vars:1,consts:[[1,"sidebar-bg"],[3,"item","on_select",4,"ngFor","ngForOf"],[3,"item","on_select"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,S,1,1,"shrd-sidebar-item",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.items))},directives:[m.sg,J],styles:[""]}),s})();var F=r(8812);const w=[{path:":grandParentTitle/:pageTitle/:pageId",component:(()=>{class s{constructor(e,i,n,c){this.route=e,this.router=i,this.app_loader=n,this.menu_service=c,this.sidebar_content=[],this.title="",this._subscriptions=[],this.content_id$=(0,v.a)([this.route.paramMap.pipe((0,u.U)(a=>a.get("pageId"))),this.route.queryParamMap.pipe((0,u.U)(a=>a.get("content")))]).pipe((0,u.U)(a=>{var d;return a[1]?+a[1]:+(null!==(d=a[0])&&void 0!==d?d:0)}))}ngOnInit(){this.set_up_page();const e=this.route.paramMap.pipe((0,u.U)(i=>i.get("pageId"))).subscribe(i=>{this.set_up_page()});this._subscriptions.push(e)}ngOnDestroy(){this._subscriptions.forEach(e=>e.unsubscribe())}set_up_page(){var e;const i=this.route.snapshot.queryParamMap.get("content"),n=+(null!==(e=this.route.snapshot.paramMap.get("pageId"))&&void 0!==e?e:0);i||(this.sidebar_content=this.default_sidebar()),(i?this.menu_service.get_top_menu_tree(+n):(0,f.of)(this.default_sidebar())).subscribe(a=>{if(i){const d=p.h.get_first_grandchild(a[0]);this.title=d.menuLabel}else this.title="";this.sidebar_content=a,this.app_loader.loading_end()})}default_sidebar(){return(0,b.JG)(g).map((i,n)=>({children:[],isPublished:!0,menuId:0,menuLabel:i.title,menuOrder:n,menuParent:0}))}navigate(e){const i={content:e.menuId};this.title=e.menuLabel,this.router.navigate([],{relativeTo:this.route,queryParams:i,queryParamsHandling:"merge"})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(C.P),t.Y36(p.h))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-default-cms"]],decls:15,vars:6,consts:[["cms",""],[1,"bg-white","py-5","mayora-overflow-fix"],[1,"container","layout-container"],[1,"row"],[1,"col-md-3"],[3,"items","on_select"],[1,"col-md-9"],[1,"cms-cont","ms-3"],[1,"cms-title","mb-3","p-relative",3,"hidden"],[1,"priority"],[3,"cms_content_id"]],template:function(e,i){1&e&&(t.TgZ(0,"div",null,0),t._UZ(2,"util-page-title"),t.TgZ(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"shrd-sidebar",5),t.NdJ("on_select",function(c){return i.navigate(c)}),t.qZA()(),t.TgZ(8,"div",6)(9,"div",7)(10,"h2",8),t._UZ(11,"div",9),t._uU(12),t.qZA(),t._UZ(13,"cms-content-viewer",10),t.ALo(14,"async"),t.qZA()()()()()()),2&e&&(t.xp6(7),t.Q6J("items",i.sidebar_content),t.xp6(3),t.Q6J("hidden",!i.title),t.xp6(2),t.hij(" ",i.title," "),t.xp6(1),t.Q6J("cms_content_id",t.lcZ(14,4,i.content_id$)))},directives:[y.T,x,F.m],pipes:[m.Ov],styles:[""]}),s})()}];let O=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[l.Bz.forChild(w)],l.Bz]}),s})();var Q=r(3075),N=r(2234);let P=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[m.ez,O,h.A,Q.u5,N.m]]}),s})()}}]);