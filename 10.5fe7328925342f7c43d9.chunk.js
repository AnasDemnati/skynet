webpackJsonp([10],{lQeJ:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e("WT6e"),t=function(){},o=e("7DMc"),d=e("NARK"),a=e("55Fp"),r=e("or5m"),i=e("Xjw4"),s=e("bfOx"),c=(e("2Lmt"),function(){function l(l,n,e){this.route=l,this.router=n,this.datastoreService=e,this.isEdit=!1,this.hasError=!1,this.hasResult=!1,this.apiCallLoading=!1,this.productsDetailArray=[],this.brands=["Gecko"],this.productsCode=["ZMSI"],this.criteria={},this.savedCriteria={},this.departureObjectParam={},this.departureObject={},this.notification=""}return l.prototype.ngOnInit=function(){},l.prototype.saveAccounts=function(){console.log("this.productsDetailArray ",this.productsDetailArray),this.departureObjectParam={tripCode:this.departureObject.tripCode,userCode:"dummyUserCode",productCode:this.departureObject.productCode,startingDate:this.departureObject.startingDate,endingDate:this.departureObject.startingDate,numberOfPax:this.departureObject.numberOfPax,accounts:this.productsDetailArray},console.log("this.departureObjectParam ",this.departureObjectParam)},l.prototype.saveRow=function(l){l.saved=!0},l.prototype.editRow=function(l){l.saved=!1},l.prototype.removeRow=function(l){this.productsDetailArray.pop(),console.log(l)},l.prototype.addNewRow=function(){this.productsDetailArray.push({})},l.prototype.searchByCriteria=function(l){this.validationResult=this.isSearchCriteriaValid(l),this.validationResult.isValid?(this.apiCallLoading=!0,this.getJsonData(l)):(this.notification=this.validationResult.message,this.hasError=!0,this.hasResult=!1,this.apiCallLoading=!1)},l.prototype.isSearchCriteriaValid=function(l){return l.startingDate?l.productCode?l.brand?l.numberOfPax?{isValid:!0,message:""}:{isValid:!1,message:"Number of pax is required"}:{isValid:!1,message:"Code is required"}:{isValid:!1,message:"Product code is required"}:{isValid:!1,message:"Starting date is required"}},l.prototype.getJsonData=function(l){var n=this;this.savedCriteria=l,this.departureObject=l,this.datastoreService.getExpensesByCriteria(l).subscribe(function(l){console.log("Result : ",l),localStorage.setItem("departure",JSON.stringify(n.productServiceViewTranslation(l))),n.hasResult=!0,n.hasError=!1,n.apiCallLoading=!1,n.router.navigate(["/myaccounts/","creation"])})},l.prototype.productServiceViewTranslation=function(l){var n=[];return l.accounts.forEach(function(l){n.push({dayNumber:l.dayNumber,date:l.date,description:l.description,budgetCurrency:l.budgetCurrency,budgetAmount:l.budgetAmount,actualCurrency:l.actualCurrency,actualAmount:l.actualAmount,affectedBudget:l.affectedBudget,budgetVariance:(parseFloat(l.budgetAmount)-parseFloat(l.actualAmount)).toFixed(2),comment:l.comment,expenseCategory:l.expenseCategory,paymentType:l.paymentType,cashBalance:l.cashBalance,altUserCodeID:l.altUserCode,altTripCodeID:l.altTripCode})}),l.accounts=n,l},l}()),p=e("xPb2"),g=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),u["\u0275did"](1,147456,null,0,o.NgSelectOption,[u.ElementRef,u.Renderer2,[2,o.SelectControlValueAccessor]],{value:[0,"value"]},null),u["\u0275did"](2,147456,null,0,o["\u0275q"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](3,null,[" ",""]))],function(l,n){l(n,1,0,u["\u0275inlineInterpolate"](1,"",n.context.$implicit,"")),l(n,2,0,u["\u0275inlineInterpolate"](1,"",n.context.$implicit,""))},function(l,n){l(n,3,0,n.context.$implicit)})}function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),u["\u0275did"](1,147456,null,0,o.NgSelectOption,[u.ElementRef,u.Renderer2,[2,o.SelectControlValueAccessor]],{value:[0,"value"]},null),u["\u0275did"](2,147456,null,0,o["\u0275q"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](3,null,[" ",""]))],function(l,n){l(n,1,0,u["\u0275inlineInterpolate"](1,"",n.context.$implicit,"")),l(n,2,0,u["\u0275inlineInterpolate"](1,"",n.context.$implicit,""))},function(l,n){l(n,3,0,n.context.$implicit)})}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,106,"div",[["class",""],["id","wrap"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275eld"](2,0,null,null,103,"div",[["class","searchPanel col-md-6 offset-md-3"],["id","wrapper"],["style","border: solid 1px #eeeeef;border-radius: 10px;padding: 16px;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](4,0,null,null,45,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275eld"](6,0,null,null,42,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n            "])),(l()(),u["\u0275eld"](8,0,null,null,39,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275eld"](10,0,null,null,14,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                    "])),(l()(),u["\u0275eld"](12,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                      "])),(l()(),u["\u0275eld"](14,0,null,null,7,"p-calendar",[["dateFormat","dd/mm/yy"]],[[2,"ui-inputwrapper-filled",null],[2,"ui-inputwrapper-focus",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;return"ngModelChange"===n&&(u=!1!==(l.component.criteria.startingDate=e)&&u),u},d.b,d.a)),u["\u0275prd"](512,null,a.DomHandler,a.DomHandler,[]),u["\u0275did"](16,13877248,null,1,r.Calendar,[u.ElementRef,a.DomHandler,u.Renderer2,u.ChangeDetectorRef],{dateFormat:[0,"dateFormat"],showIcon:[1,"showIcon"]},null),u["\u0275qud"](603979776,1,{templates:1}),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[r.Calendar]),u["\u0275did"](19,671744,null,0,o.NgModel,[[8,null],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,o.NgControl,null,[o.NgModel]),u["\u0275did"](21,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n                      "])),(l()(),u["\u0275ted"](-1,null,["\n                    "])),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275eld"](26,0,null,null,20,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                    "])),(l()(),u["\u0275eld"](28,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                      "])),(l()(),u["\u0275eld"](30,0,null,null,14,"select",[["class","form-control"],["name","productReference"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,31).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,31).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.criteria.productCode=e)&&t),t},null,null)),u["\u0275did"](31,16384,null,0,o.SelectControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.SelectControlValueAccessor]),u["\u0275did"](33,671744,null,0,o.NgModel,[[8,null],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,o.NgControl,null,[o.NgModel]),u["\u0275did"](35,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n                          "])),(l()(),u["\u0275eld"](37,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),u["\u0275did"](38,147456,null,0,o.NgSelectOption,[u.ElementRef,u.Renderer2,[2,o.SelectControlValueAccessor]],{value:[0,"value"]},null),u["\u0275did"](39,147456,null,0,o["\u0275q"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Choose a product reference"])),(l()(),u["\u0275ted"](-1,null,["\n                          "])),(l()(),u["\u0275and"](16777216,null,null,1,null,m)),u["\u0275did"](43,802816,null,0,i.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275ted"](-1,null,["\n                      "])),(l()(),u["\u0275ted"](-1,null,["\n                    "])),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275ted"](-1,null,["\n            "])),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](51,0,null,null,44,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275eld"](53,0,null,null,41,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n            "])),(l()(),u["\u0275eld"](55,0,null,null,38,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275eld"](57,0,null,null,20,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                    "])),(l()(),u["\u0275eld"](59,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                      "])),(l()(),u["\u0275eld"](61,0,null,null,14,"select",[["class","form-control"],["name","brand"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,62).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,62).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.criteria.brand=e)&&t),t},null,null)),u["\u0275did"](62,16384,null,0,o.SelectControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l){return[l]},[o.SelectControlValueAccessor]),u["\u0275did"](64,671744,null,0,o.NgModel,[[8,null],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,o.NgControl,null,[o.NgModel]),u["\u0275did"](66,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n                          "])),(l()(),u["\u0275eld"](68,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),u["\u0275did"](69,147456,null,0,o.NgSelectOption,[u.ElementRef,u.Renderer2,[2,o.SelectControlValueAccessor]],{value:[0,"value"]},null),u["\u0275did"](70,147456,null,0,o["\u0275q"],[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Choose a brand"])),(l()(),u["\u0275ted"](-1,null,["\n                          "])),(l()(),u["\u0275and"](16777216,null,null,1,null,v)),u["\u0275did"](74,802816,null,0,i.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275ted"](-1,null,["\n                      "])),(l()(),u["\u0275ted"](-1,null,["\n                    "])),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275eld"](79,0,null,null,12,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                    "])),(l()(),u["\u0275eld"](81,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n                      "])),(l()(),u["\u0275eld"](83,0,null,null,6,"input",[["class","form-control"],["id","numberOfPax"],["placeholder","Enter number of pax"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,84)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,84).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,84)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,84)._compositionEnd(e.target.value)&&t),"change"===n&&(t=!1!==u["\u0275nov"](l,85).onChange(e.target.value)&&t),"input"===n&&(t=!1!==u["\u0275nov"](l,85).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,85).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.criteria.numberOfPax=e)&&t),t},null,null)),u["\u0275did"](84,16384,null,0,o.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275did"](85,16384,null,0,o["\u0275bc"],[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,function(l,n){return[l,n]},[o.DefaultValueAccessor,o["\u0275bc"]]),u["\u0275did"](87,671744,null,0,o.NgModel,[[8,null],[8,null],[8,null],[2,o.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,o.NgControl,null,[o.NgModel]),u["\u0275did"](89,16384,null,0,o.NgControlStatus,[o.NgControl],null,null),(l()(),u["\u0275ted"](-1,null,["\n                    "])),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275ted"](-1,null,["\n                "])),(l()(),u["\u0275ted"](-1,null,["\n            "])),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275eld"](97,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275eld"](99,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\n          "])),(l()(),u["\u0275eld"](101,0,null,null,1,"a",[["class","btn btn-md btn-primary"],["style","width: 100%;"]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;return"click"===n&&(u=!1!==t.searchByCriteria(t.criteria)&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["\n            Generate\n          "])),(l()(),u["\u0275ted"](-1,null,["\n        "])),(l()(),u["\u0275ted"](-1,null,["\n    "])),(l()(),u["\u0275ted"](-1,null,["\n  "])),(l()(),u["\u0275ted"](-1,null,["\n\n"])),(l()(),u["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,16,0,"dd/mm/yy",!0),l(n,19,0,e.criteria.startingDate),l(n,33,0,"productReference",e.criteria.productCode),l(n,38,0,""),l(n,39,0,""),l(n,43,0,e.productsCode),l(n,64,0,"brand",e.criteria.brand),l(n,69,0,""),l(n,70,0,""),l(n,74,0,e.brands),l(n,87,0,e.criteria.numberOfPax)},function(l,n){l(n,14,0,u["\u0275nov"](n,16).filled,u["\u0275nov"](n,16).focus,u["\u0275nov"](n,21).ngClassUntouched,u["\u0275nov"](n,21).ngClassTouched,u["\u0275nov"](n,21).ngClassPristine,u["\u0275nov"](n,21).ngClassDirty,u["\u0275nov"](n,21).ngClassValid,u["\u0275nov"](n,21).ngClassInvalid,u["\u0275nov"](n,21).ngClassPending),l(n,30,0,u["\u0275nov"](n,35).ngClassUntouched,u["\u0275nov"](n,35).ngClassTouched,u["\u0275nov"](n,35).ngClassPristine,u["\u0275nov"](n,35).ngClassDirty,u["\u0275nov"](n,35).ngClassValid,u["\u0275nov"](n,35).ngClassInvalid,u["\u0275nov"](n,35).ngClassPending),l(n,61,0,u["\u0275nov"](n,66).ngClassUntouched,u["\u0275nov"](n,66).ngClassTouched,u["\u0275nov"](n,66).ngClassPristine,u["\u0275nov"](n,66).ngClassDirty,u["\u0275nov"](n,66).ngClassValid,u["\u0275nov"](n,66).ngClassInvalid,u["\u0275nov"](n,66).ngClassPending),l(n,83,0,u["\u0275nov"](n,89).ngClassUntouched,u["\u0275nov"](n,89).ngClassTouched,u["\u0275nov"](n,89).ngClassPristine,u["\u0275nov"](n,89).ngClassDirty,u["\u0275nov"](n,89).ngClassValid,u["\u0275nov"](n,89).ngClassInvalid,u["\u0275nov"](n,89).ngClassPending)})}var h=u["\u0275ccf"]("app-search",c,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-search",[],null,null,null,C,g)),u["\u0275did"](1,114688,null,0,c,[s.a,s.l,p.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=e("ItHS"),b=e("ZTzl"),R=function(){},y=e("ovmJ"),S=e("WtLm");e.d(n,"SearchModuleNgFactory",function(){return N});var N=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[h]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[u.LOCALE_ID,[2,i["\u0275a"]]]),u["\u0275mpd"](4608,o["\u0275i"],o["\u0275i"],[]),u["\u0275mpd"](4608,p.a,p.a,[f.c]),u["\u0275mpd"](4608,b.a,b.a,[]),u["\u0275mpd"](512,i.CommonModule,i.CommonModule,[]),u["\u0275mpd"](512,o["\u0275ba"],o["\u0275ba"],[]),u["\u0275mpd"](512,o.FormsModule,o.FormsModule,[]),u["\u0275mpd"](512,s.p,s.p,[[2,s.u],[2,s.l]]),u["\u0275mpd"](512,R,R,[]),u["\u0275mpd"](512,y.ButtonModule,y.ButtonModule,[]),u["\u0275mpd"](512,S.SharedModule,S.SharedModule,[]),u["\u0275mpd"](512,r.CalendarModule,r.CalendarModule,[]),u["\u0275mpd"](512,t,t,[]),u["\u0275mpd"](1024,s.j,function(){return[[{path:"",component:c}]]},[])])})}});