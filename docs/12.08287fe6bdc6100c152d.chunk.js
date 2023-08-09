webpackJsonp([12],{sukS:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("WT6e"),u=function(){},o=e("Xjw4"),r=e("qgVE"),a=e("4nZs"),i=e("7DMc"),d=e("HzTQ"),s=e("55Fp"),c=e("Tsa/"),p=e("EsC5"),f=e("GsCr"),g=e("eWCb"),m=e("bfOx"),h=(e("2Lmt"),e("TltW"),e("TvVj"),function(){function l(l,n,e,t,u){this.router=l,this.confirmationService=n,this.notificationService=e,this.roleGuard=t,this.datastoreService=u,this.allProducts=[],this.costingSheet=[],this.currentRole="",this.productQuery={},this.loadingData=!1,this.serverError=!1,this.offset=0,this.totalRecords=0,this.pageFilter=10}return l.prototype.ngOnInit=function(){this.loadingData=!0,this.serverError=!1,this.currentRole=this.roleGuard.getCurrentRole(),this.getProductsByOffset(this.offset,this.pageFilter),this.getProductsCount()},l.prototype.getProductsByOffset=function(l,n){var e=this;this.serverError=!1,this.datastoreService.getProductsByOffset(l,n).subscribe(function(l){l.ok?e.allProducts=l.data:(e.notificationService.addSingle("error","An error occured !",l.message),e.serverError=!0),e.loadingData=!1},function(l){console.log(l),e.notificationService.addSingle("error","Server error",""),e.refreshNotification(),e.serverError=!0,e.loadingData=!1})},l.prototype.getProductsCount=function(){var l=this;this.datastoreService.getProductsCount().subscribe(function(n){n.ok?l.totalRecords=n.data:(l.notificationService.addSingle("error","An error occured !",n.message),l.serverError=!0),l.loadingData=!1},function(n){console.log(n),l.notificationService.addSingle("error","Server error",""),l.refreshNotification(),l.serverError=!0,l.loadingData=!1})},l.prototype.pageFilterChange=function(){this.firstPage()},l.prototype.firstPage=function(){this.loadingData=!0,this.offset=0,this.getProductsByOffset(this.offset,this.pageFilter)},l.prototype.lastPage=function(){this.loadingData=!0,this.offset=this.totalRecords%this.pageFilter==0?(parseInt((this.totalRecords/this.pageFilter).toString(),10)-1)*this.pageFilter:parseInt((this.totalRecords/this.pageFilter).toString(),10)*this.pageFilter,this.getProductsByOffset(this.offset,this.pageFilter)},l.prototype.nextPage=function(){this.loadingData=!0,this.offset=parseInt(this.offset.toString(),10)+parseInt(this.pageFilter.toString(),10),this.getProductsByOffset(this.offset,this.pageFilter)},l.prototype.previousPage=function(){this.loadingData=!0,this.offset-=this.pageFilter,this.getProductsByOffset(this.offset,this.pageFilter)},l.prototype.newProduct=function(){this.router.navigate(["/products/","creation"])},l.prototype.viewProduct=function(l){localStorage.setItem("product",JSON.stringify(l)),this.router.navigate(["/products/","view"])},l.prototype.refreshNotification=function(){this.notificationService.addSingle("info","","Please refresh.")},l.prototype.editProduct=function(l){localStorage.setItem("product",JSON.stringify(l)),this.router.navigate(["/products/","edit"])},l.prototype.deleteProduct=function(l){var n=this;this.confirmationService.confirm({message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"fa fa-trash",accept:function(){n.datastoreService.deleteProduct(l).subscribe(function(l){n.getProductsByOffset(n.offset,n.pageFilter),l.ok?n.notificationService.addSingle("info","Item Deleted !","You've successfully deleted "+l.data.productCode+"."):(n.notificationService.addSingle("error","An error occured !",l.message),n.serverError=!0),n.loadingData=!1},function(l){console.log(l),n.notificationService.addSingle("error","Server error",""),n.refreshNotification(),n.serverError=!0,n.loadingData=!1})},reject:function(){console.log("Rejected")}})},l}()),v=e("/qia"),C=e("+kKy"),y=e("xPb2"),S=t["\u0275crt"]({encapsulation:0,styles:[[".action-buttons[_ngcontent-%COMP%]{padding:0 15px;border:1px solid #e0e0e0;border-width:0 0 0 1px}.action-buttons[_ngcontent-%COMP%]:focus, .action-buttons[_ngcontent-%COMP%]:hover{z-index:1;text-decoration:none;background:rgba(0,150,199,.69);color:#fff}"]],data:{}});function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","col action-buttons text-center"],["style","padding: 10px; max-width: 80px !important;"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.deleteProduct(l.parent.context.$implicit._id)&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275eld"](2,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-trash"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                      "]))],null,null)}function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,20,"li",[["class","list-group-item row"],["style","padding: 0;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275eld"](2,0,null,null,17,"div",[["class","row"],["style","padding-left: 10px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                      "])),(l()(),t["\u0275eld"](4,0,null,null,1,"div",[["class","col text-center"],["style","padding: 10px; max-width: 70px !important;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](5,null,["\n                        ","\n                      "])),(l()(),t["\u0275ted"](-1,null,["\n                      "])),(l()(),t["\u0275eld"](7,0,null,null,3,"div",[["class","col-md-10 action-buttons"],["style","padding: 10px;"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.viewProduct(l.context.$implicit)&&t),t},null,null)),(l()(),t["\u0275ted"](8,null,["\n                        ","\n                        "])),(l()(),t["\u0275eld"](9,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-eye"],["style","float: right;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                      "])),(l()(),t["\u0275ted"](-1,null,["\n                      "])),(l()(),t["\u0275eld"](12,0,null,null,3,"div",[["class","col action-buttons text-center"],["style","padding: 10px; max-width: 80px !important;"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.editProduct(l.context.$implicit)&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275eld"](14,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-pencil"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                      "])),(l()(),t["\u0275ted"](-1,null,["\n                      "])),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](18,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275ted"](-1,null,["\n                "]))],function(l,n){l(n,18,0,"admin"===n.component.currentRole)},function(l,n){l(n,5,0,n.component.offset+n.context.index+1),l(n,8,0,n.context.$implicit.csName)})}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](2,0,null,null,4,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](5,802816,null,0,o.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n        "]))],function(l,n){l(n,5,0,n.component.allProducts)},null)}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["style","font-size: 20px;color: grey;text-align: center;border-radius: 10px;padding: 15px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        Loading data ...\n    "]))],null,null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"div",[["style","font-size: 20px;color: grey;text-align: center;border-radius: 10px;padding: 15px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        No data available.\n    "]))],null,null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"p-progressSpinner",[],null,null,null,r.b,r.a)),t["\u0275did"](1,49152,null,0,a.ProgressSpinner,[],{style:[0,"style"]},null),t["\u0275pod"](2,{position:0,top:1,left:2})],function(l,n){l(n,1,0,l(n,2,0,"absolute","25%","50%"))},null)}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,106,"div",[["oncopy","return false"],["oncut","return false"],["onpaste","return false"],["style","margin: auto 100px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](2,0,null,null,1,"h2",[["class","text-muted"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Products List"])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](5,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](8,0,null,null,7,"div",[["class","row justify-content-end"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](10,0,null,null,4,"div",[["class","col-md-1"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](12,0,null,null,1,"button",[["class","btn peak-save-button"],["style","width: 140px;"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.newProduct()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["New Product"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](17,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](19,0,null,null,36,"div",[["class","row justify-content-end"],["style","margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](21,0,null,null,30,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275eld"](24,0,null,null,26,"select",[["class","form-control"],["id","page_size"],["style","padding: 0;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var u=!0,o=l.component;return"change"===n&&(u=!1!==t["\u0275nov"](l,25).onChange(e.target.value)&&u),"blur"===n&&(u=!1!==t["\u0275nov"](l,25).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.pageFilter=e)&&u),"change"===n&&(u=!1!==o.pageFilterChange()&&u),u},null,null)),t["\u0275did"](25,16384,null,0,i.SelectControlValueAccessor,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(l){return[l]},[i.SelectControlValueAccessor]),t["\u0275did"](27,671744,null,0,i.NgModel,[[8,null],[8,null],[8,null],[2,i.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,i.NgControl,null,[i.NgModel]),t["\u0275did"](29,16384,null,0,i.NgControlStatus,[i.NgControl],null,null),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275eld"](31,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](32,147456,null,0,i.NgSelectOption,[t.ElementRef,t.Renderer2,[2,i.SelectControlValueAccessor]],null,null),t["\u0275did"](33,147456,null,0,i["\u0275q"],[t.ElementRef,t.Renderer2,[8,null]],null,null),(l()(),t["\u0275ted"](-1,null,["10"])),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275eld"](36,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](37,147456,null,0,i.NgSelectOption,[t.ElementRef,t.Renderer2,[2,i.SelectControlValueAccessor]],null,null),t["\u0275did"](38,147456,null,0,i["\u0275q"],[t.ElementRef,t.Renderer2,[8,null]],null,null),(l()(),t["\u0275ted"](-1,null,["20"])),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275eld"](41,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](42,147456,null,0,i.NgSelectOption,[t.ElementRef,t.Renderer2,[2,i.SelectControlValueAccessor]],null,null),t["\u0275did"](43,147456,null,0,i["\u0275q"],[t.ElementRef,t.Renderer2,[8,null]],null,null),(l()(),t["\u0275ted"](-1,null,["50"])),(l()(),t["\u0275ted"](-1,null,["\n                        "])),(l()(),t["\u0275eld"](46,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](47,147456,null,0,i.NgSelectOption,[t.ElementRef,t.Renderer2,[2,i.SelectControlValueAccessor]],null,null),t["\u0275did"](48,147456,null,0,i["\u0275q"],[t.ElementRef,t.Renderer2,[8,null]],null,null),(l()(),t["\u0275ted"](-1,null,["100"])),(l()(),t["\u0275ted"](-1,null,["\n                    "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](53,0,null,null,1,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),t["\u0275ted"](54,null,["\n            "," / ","\n        "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](57,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](60,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](64,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](67,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](69,0,null,null,36,"nav",[["aria-label","Page navigation example"],["style","margin-top: 10px;margin-right: auto;margin-left: auto;width: fit-content;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](71,0,null,null,33,"ul",[["class","pagination"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](73,0,null,null,6,"li",[["class","page-item text-center"],["style","width: 100px;"]],null,null,null,null,null)),t["\u0275did"](74,278528,null,0,o.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](75,{disabled:0}),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](77,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.firstPage()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\n                    First\n                "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](81,0,null,null,6,"li",[["class","page-item"],["style","width: 100px;"]],null,null,null,null,null)),t["\u0275did"](82,278528,null,0,o.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](83,{disabled:0}),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](85,0,null,null,1,"a",[["class","page-link text-center"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.previousPage()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\n                    Previous\n                "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](89,0,null,null,6,"li",[["class","page-item text-center"],["style","width: 100px;"]],null,null,null,null,null)),t["\u0275did"](90,278528,null,0,o.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](91,{disabled:0}),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](93,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.nextPage()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\n                    Next\n                "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](97,0,null,null,6,"li",[["class","page-item text-center"],["style","width: 100px;"]],null,null,null,null,null)),t["\u0275did"](98,278528,null,0,o.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](99,{disabled:0}),(l()(),t["\u0275ted"](-1,null,["\n                "])),(l()(),t["\u0275eld"](101,0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.lastPage()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\n                    Last\n                "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275eld"](108,0,null,null,6,"p-blockUI",[],null,null,null,d.b,d.a)),t["\u0275prd"](512,null,s.DomHandler,s.DomHandler,[]),t["\u0275did"](110,4374528,null,0,c.BlockUI,[t.ElementRef,s.DomHandler],{blocked:[0,"blocked"]},null),(l()(),t["\u0275ted"](-1,0,["\n    "])),(l()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](113,16384,null,0,o.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,0,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275eld"](116,0,null,null,3,"p-confirmDialog",[],null,null,null,p.b,p.a)),t["\u0275prd"](512,null,s.DomHandler,s.DomHandler,[]),t["\u0275did"](118,12763136,null,1,f.ConfirmDialog,[t.ElementRef,s.DomHandler,t.Renderer2,g.ConfirmationService,t.NgZone],null,null),t["\u0275qud"](335544320,1,{footer:0}),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,27,0,e.pageFilter),l(n,60,0,!e.serverError&&!e.loadingData),l(n,64,0,e.loadingData),l(n,67,0,e.serverError),l(n,74,0,"page-item text-center",l(n,75,0,0===e.offset)),l(n,82,0,"page-item",l(n,83,0,0===e.offset)),l(n,90,0,"page-item text-center",l(n,91,0,e.allProducts.length<e.pageFilter)),l(n,98,0,"page-item text-center",l(n,99,0,e.allProducts.length<e.pageFilter)),l(n,110,0,e.loadingData),l(n,113,0,e.loadingData)},function(l,n){var e=n.component;l(n,24,0,t["\u0275nov"](n,29).ngClassUntouched,t["\u0275nov"](n,29).ngClassTouched,t["\u0275nov"](n,29).ngClassPristine,t["\u0275nov"](n,29).ngClassDirty,t["\u0275nov"](n,29).ngClassValid,t["\u0275nov"](n,29).ngClassInvalid,t["\u0275nov"](n,29).ngClassPending),l(n,54,0,e.offset-0+e.allProducts.length,e.totalRecords)})}var E=t["\u0275ccf"]("app-products",h,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-products",[],null,null,null,I,S)),t["\u0275did"](1,114688,null,0,h,[m.l,g.ConfirmationService,v.a,C.a,y.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),N=e("4qxJ"),w=e("h4vs"),F=e("1Wt5"),M=e("qmzJ"),O=e("SYiH"),V=e("0DDR"),A=e("2MpB"),T=e("CXHW"),B=e("3kwk"),L=e("gFLb"),H=e("nCuf"),K=e("qKow"),_=e("cG9e"),q=e("ZwZs"),W=e("DDfv"),j=e("lcaH"),z=e("gEbu"),U=e("7DGp"),G=e("WwnU"),J=e("hwnt"),Z=e("c7mC"),$=e("K0TW"),Q=e("ETCP"),X=e("aKiW"),Y=e("v4DA"),ll=e("tyH+"),nl=e("ItHS"),el=e("t3rm"),tl=e("ZTzl"),ul=function(){},ol=e("WtLm"),rl=e("Wt1a"),al=e("ovmJ"),il=e("RX2M"),dl=e("F+yc"),sl=e("vfkA"),cl=e("1Z2I"),pl=e("yDyO"),fl=e("K/oD"),gl=e("eCJc"),ml=e("/I96"),hl=e("qsK9"),vl=e("MSQt"),Cl=e("UyZi"),yl=e("Ep2y"),Sl=e("WKBe"),Rl=e("A8b0"),bl=e("as+d"),xl=e("62nT"),Dl=e("kzcK");e.d(n,"ProductsModuleNgFactory",function(){return Pl});var Pl=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[E,N.a,w.a,F.a,M.a,O.a,V.a,A.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[t.LOCALE_ID,[2,o["\u0275a"]]]),t["\u0275mpd"](4608,i["\u0275i"],i["\u0275i"],[]),t["\u0275mpd"](4608,T.a,T.a,[t.ApplicationRef,t.Injector,t.ComponentFactoryResolver,o.DOCUMENT]),t["\u0275mpd"](4608,B.a,B.a,[t.ComponentFactoryResolver,t.Injector,T.a]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,H.a,H.a,[]),t["\u0275mpd"](4608,K.a,K.a,[]),t["\u0275mpd"](4608,_.a,_.a,[]),t["\u0275mpd"](4608,q.a,q.a,[]),t["\u0275mpd"](4608,W.a,W.a,[]),t["\u0275mpd"](4608,j.a,j.b,[]),t["\u0275mpd"](4608,z.a,z.b,[]),t["\u0275mpd"](4608,U.b,U.a,[]),t["\u0275mpd"](4608,G.a,G.b,[]),t["\u0275mpd"](4608,J.a,J.a,[]),t["\u0275mpd"](4608,Z.a,Z.a,[]),t["\u0275mpd"](4608,$.a,$.a,[]),t["\u0275mpd"](4608,Q.a,Q.a,[]),t["\u0275mpd"](4608,X.a,X.a,[]),t["\u0275mpd"](4608,Y.a,Y.a,[]),t["\u0275mpd"](4608,ll.a,ll.a,[]),t["\u0275mpd"](4608,y.a,y.a,[nl.c]),t["\u0275mpd"](4608,v.a,v.a,[el.MessageService]),t["\u0275mpd"](4608,g.ConfirmationService,g.ConfirmationService,[]),t["\u0275mpd"](4608,tl.a,tl.a,[]),t["\u0275mpd"](512,o.CommonModule,o.CommonModule,[]),t["\u0275mpd"](512,i["\u0275ba"],i["\u0275ba"],[]),t["\u0275mpd"](512,i.FormsModule,i.FormsModule,[]),t["\u0275mpd"](512,m.p,m.p,[[2,m.u],[2,m.l]]),t["\u0275mpd"](512,ul,ul,[]),t["\u0275mpd"](512,ol.SharedModule,ol.SharedModule,[]),t["\u0275mpd"](512,rl.DialogModule,rl.DialogModule,[]),t["\u0275mpd"](512,al.ButtonModule,al.ButtonModule,[]),t["\u0275mpd"](512,f.ConfirmDialogModule,f.ConfirmDialogModule,[]),t["\u0275mpd"](512,a.ProgressSpinnerModule,a.ProgressSpinnerModule,[]),t["\u0275mpd"](512,il.a,il.a,[]),t["\u0275mpd"](512,dl.a,dl.a,[]),t["\u0275mpd"](512,sl.a,sl.a,[]),t["\u0275mpd"](512,cl.a,cl.a,[]),t["\u0275mpd"](512,pl.a,pl.a,[]),t["\u0275mpd"](512,fl.a,fl.a,[]),t["\u0275mpd"](512,gl.a,gl.a,[]),t["\u0275mpd"](512,ml.a,ml.a,[]),t["\u0275mpd"](512,hl.a,hl.a,[]),t["\u0275mpd"](512,vl.a,vl.a,[]),t["\u0275mpd"](512,Cl.a,Cl.a,[]),t["\u0275mpd"](512,yl.a,yl.a,[]),t["\u0275mpd"](512,Sl.a,Sl.a,[]),t["\u0275mpd"](512,Rl.a,Rl.a,[]),t["\u0275mpd"](512,bl.a,bl.a,[]),t["\u0275mpd"](512,xl.a,xl.a,[]),t["\u0275mpd"](512,Dl.b,Dl.b,[]),t["\u0275mpd"](512,c.BlockUIModule,c.BlockUIModule,[]),t["\u0275mpd"](512,u,u,[]),t["\u0275mpd"](1024,m.j,function(){return[[{path:"",component:h}]]},[])])})}});