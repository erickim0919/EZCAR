(window.webpackJsonp=window.webpackJsonp||[]).push([["inventory-section"],{"../node_modules/lodash/differenceWith.js":function(e,a,t){var s=t("../node_modules/lodash/_baseDifference.js"),n=t("../node_modules/lodash/_baseFlatten.js"),r=t("../node_modules/lodash/_baseRest.js"),o=t("../node_modules/lodash/isArrayLikeObject.js"),i=t("../node_modules/lodash/last.js"),l=r(function(e,a){var t=i(a);return o(t)&&(t=void 0),o(e)?s(e,n(a,1,o,!0),void 0,t):[]});e.exports=l},"../node_modules/lodash/lowerCase.js":function(e,a,t){var s=t("../node_modules/lodash/_createCompounder.js")(function(e,a,t){return e+(t?" ":"")+a.toLowerCase()});e.exports=s},"../node_modules/reactstrap/lib/Table.js":function(e,a,t){"use strict";var s=t("../node_modules/reactstrap/node_modules/@babel/runtime/helpers/interopRequireDefault.js");a.__esModule=!0,a.default=void 0;var n=s(t("../node_modules/reactstrap/node_modules/@babel/runtime/helpers/extends.js")),r=s(t("../node_modules/reactstrap/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),o=s(t("../node_modules/react/index.js")),i=s(t("../node_modules/reactstrap/node_modules/prop-types/index.js")),l=s(t("../node_modules/reactstrap/node_modules/classnames/index.js")),d=t("../node_modules/reactstrap/lib/utils.js"),c={className:i.default.string,cssModule:i.default.object,size:i.default.string,bordered:i.default.bool,borderless:i.default.bool,striped:i.default.bool,dark:i.default.bool,hover:i.default.bool,responsive:i.default.oneOfType([i.default.bool,i.default.string]),tag:d.tagPropType,responsiveTag:d.tagPropType,innerRef:i.default.oneOfType([i.default.func,i.default.string,i.default.object])},m=function(e){var a=e.className,t=e.cssModule,s=e.size,i=e.bordered,c=e.borderless,m=e.striped,u=e.dark,p=e.hover,h=e.responsive,b=e.tag,g=e.responsiveTag,v=e.innerRef,y=(0,r.default)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),f=(0,d.mapToCssModules)((0,l.default)(a,"table",!!s&&"table-"+s,!!i&&"table-bordered",!!c&&"table-borderless",!!m&&"table-striped",!!u&&"table-dark",!!p&&"table-hover"),t),k=o.default.createElement(b,(0,n.default)({},y,{ref:v,className:f}));if(h){var x=(0,d.mapToCssModules)(!0===h?"table-responsive":"table-responsive-"+h,t);return o.default.createElement(g,{className:x},k)}return k};m.propTypes=c,m.defaultProps={tag:"table",responsiveTag:"div"};var u=m;a.default=u},"./engagement-handlers/list-engagement-handler/list-engagement-handler.js":function(e,a,t){"use strict";t.d(a,"b",function(){return p}),t.d(a,"a",function(){return h});var s=t("../node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=t("../node_modules/lodash/toString.js"),r=t.n(n),o=t("../node_modules/lodash/get.js"),i=t.n(o),l=t("../node_modules/lodash/forIn.js"),d=t.n(l),c=t("./utils/event-toolbox.js"),m=t("./tracking/constant.js");function u(e){const a=[],t=[],s=[],n=[];return d()(e,e=>{e.isSoldVin||(t.push(function(e){return i()(e,"dealerInfo.franchiseId",i()(e,"dealerInfo.id"))}(e)),a.push(function(e){return i()(e,"dealerInfo.rooftopId")}(e)),s.push(function(e){return i()(e,"vid","")}(e)),n.push(function(e){return i()(e,"vin","")}(e)))}),{loc_id_list:r()(a),f_id_list:r()(t),inv_id_list:r()(s),vin_list:r()(n)}}function p(e,a){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=Object(s.a)({action_name:"list",action_cause:"page_load",action_category:"system",creative_id:a},u(e),t);c.a.fireTrackAction({event_type:"action_completed",event_data:n})}const h={init(){c.a.on(m.b.ACTION_LIST_VIEWED,e=>{p(e.detail.inventory,e.detail.creativeId,e.detail.extendObj)})}}},"./site-modules/core-page/components/inventories-for-sale-section/inventories-for-sale-section.jsx":function(e,a,t){"use strict";t.r(a);var s=t("../node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=(t("../node_modules/core-js/modules/es6.regexp.to-string.js"),t("../node_modules/lodash/isUndefined.js")),r=t.n(n),o=t("../node_modules/react/index.js"),i=t.n(o),l=t("../node_modules/prop-types/index.js"),d=t.n(l),c=t("../node_modules/classnames/index.js"),m=t.n(c),u=t("./site-modules/shared/utils/core-page/params.js"),p=t("../node_modules/reactstrap/lib/Container.js"),h=t.n(p),b=t("../node_modules/reactstrap/lib/Row.js"),g=t.n(b),v=t("../node_modules/reactstrap/lib/Col.js"),y=t.n(v),f=t("../node_modules/lodash/reduce.js"),k=t.n(f),x=t("../node_modules/lodash/get.js"),j=t.n(x),C=t("../node_modules/react-redux/es/index.js"),_=t("./data/luckdragon/redux/react-binding.jsx"),w=t("./data/models/inventory-aggregate.js"),N=t("./site-modules/shared/components/merged-attributes-heart/merged-attributes-heart.jsx"),E=t("./site-modules/shared/constants/profile/dashboard-paths.js"),T=t("./site-modules/shared/components/inventory/invoke-action/invoke-action.jsx"),S=t("./engagement-handlers/profile-engagement-handler/profile-engagement-handler.js"),I=t("./utils/plural.js");function O(e){let a=e.disabled,t=e.onClick,s=e.priceDropAlertsCount,n=e.zipCode,r=e.trackingParent,o=e.trackingDisabled,l=e.primaryText;const d=s?`${s} recent price ${Object(I.b)("drop",s)}`:"Be the first to know when prices drop";return i.a.createElement(T.a,{icon:"icon-bell3",primaryColor:"text-primary-darker font-weight-normal",primaryText:l,primaryTextClassName:"primary-text",secondaryText:`${d} near ${n}`,classes:"d-flex justify-content-between align-items-center px-0_75 px-md-1",arrowClassName:"ml-3_5 pl-0_25",widthAuto:!0,onClick:function(){t(),Object(S.k)("SIGN_IN",{creative_id:r})},dataTrackingId:"begin_sign_up",trackingDisabled:o,disabled:a})}O.propTypes={disabled:d.a.bool,onClick:d.a.func,zipCode:d.a.string,priceDropAlertsCount:d.a.number,trackingParent:d.a.string,trackingDisabled:d.a.bool,primaryText:d.a.string},O.defaultProps={disabled:!1,onClick:null,zipCode:"",priceDropAlertsCount:0,trackingParent:"",trackingDisabled:!1,primaryText:"Sign up for price drop alerts"};t("./site-modules/shared/components/profile/price-drop-alerts-near-you-banner/price-drop-alerts-near-you-banner.scss");const D="price-drop-alerts-near-you";class A extends o.Component{constructor(){super(...arguments),this.getPriceDropAlertsCount=(e=>k()(e,(e,a,t)=>{let s=e;return parseFloat(t)<0&&(s+=a),s},0)),this.renderSuccessAlertsMessage=(()=>{const e=this.props.isMobile?E.a.INSIDER:E.a.FAVORITE_MODELS;return i.a.createElement(T.a,{icon:"icon-bell3",primaryColor:"text-primary-darker",primaryText:"Subscribed to price drop alerts",display:"d-inline-flex",secondaryText:"View your Insider dashboard",arrowClassName:"ml-3_5 pl-0_25",classes:"d-inline-flex justify-content-between align-items-center px-0_75 px-md-1",widthAuto:!0,href:e,dataTrackingId:"view_saved_models"})}),this.renderAlertsMessage=(()=>{const e=this.props,a=e.vehicle,t=e.vehicle.isUsed,s=e.amounts.priceDeltas,n=s.guaranteedPriceDelta,r=s.displayPriceDelta,o=e.isAuthenticated,l=e.zipCode,d=t?r:n,c=this.getPriceDropAlertsCount(d);return i.a.createElement(N.a,{mergedAttributes:a,CustomView:O,priceDropAlertsCount:c,zipCode:l,trackingDisabled:o,trackingParent:D,primaryText:o?"Subscribe to price drop alerts":"Sign up for price drop alerts"})})}render(){const e=this.props,a=e.vehicle,t=e.profile,s=j()(t,"mergedAttributes.makeModels"),n=Object(N.b)(a,s);return i.a.createElement("div",{className:"price-drop-alerts-near-you-wrapper","data-tracking-parent":D},n?this.renderSuccessAlertsMessage():this.renderAlertsMessage())}}A.propTypes={vehicle:d.a.shape({}).isRequired,profile:d.a.shape({}),isAuthenticated:d.a.bool,amounts:d.a.shape({priceDeltas:d.a.shape({guaranteedPriceDelta:d.a.shape({}),displayPriceDelta:d.a.shape({})})}),zipCode:d.a.string.isRequired,isMobile:d.a.bool},A.defaultProps={profile:{},isAuthenticated:!1,amounts:{priceDeltas:{}},isMobile:!1};const P={amounts:{path:e=>Object(w.c)(e.vehicle),segment:w.b}},L=Object(C.c)(e=>({zipCode:j()(e,"visitor.location.zipCode"),profile:j()(e,"profile.data.idm"),isAuthenticated:j()(e,"profile.isAuthenticated"),isMobile:e.mobile}))(Object(_.b)(A,P));var z=t("./site-modules/core-page/components/international-zip-picker/international-zip-picker.jsx"),R=t("./site-modules/core-page/components/international-zip-picker-methods/international-zip-picker-methods.jsx"),V=t("./site-modules/shared/components/inventory-cards-wrapper/inventory-cards-wrapper.jsx"),M=t("./site-modules/shared/components/whats-my-car-worth-button/whats-my-car-worth-button.jsx"),$=t("./site-modules/shared/utils/publication-states.js");function q(e){const a=e.vehicle,t=e.params,n=e.inventoryTotalNumber,l=e.displayVehicle,d=e.inventoryLink,c=e.isBestDealPriceActive,u=e.mergedAttributes,p=e.isInternational,b=e.onBtnClick,v=e.onZipChangeInProgress,f=e.showActiveSpinner,k=e.isRedirectPending,x=a.publicationState,j=a.modelName,C=a.year,_=a.makeSlug,w=a.modelSlug,N=Object($.h)(x),E=t.isUsed,T=p||k;return i.a.createElement(h.a,{className:m()({"px-0":!T})},T?i.a.createElement(o.Fragment,null,i.a.createElement(g.a,null,i.a.createElement(y.a,{xs:12,lg:8},i.a.createElement(z.a,{modelName:j,isRedirectPending:k,showActiveSpinner:f,inventoryLink:d,onBtnClick:b,onZipChangeInProgress:v}))),i.a.createElement(g.a,null,i.a.createElement(y.a,{xs:12},N&&!!C&&i.a.createElement(g.a,null,i.a.createElement(y.a,{xs:12,md:6,lg:4,className:"mt-2"},i.a.createElement(M.a,{params:{make:_,model:w,year:C.toString()}})))))):i.a.createElement(V.a,{vehicle:a,wrapperClasses:"bg-white",title:`${l} for Sale`,inventoryCardLink:d,isOpenOnLoad:!0,closeAfterLoad:!0,lazyLoad:!0,isBestDealPriceActive:c,hideEmpty:!E}),E&&i.a.createElement("div",{className:"mt-2"},i.a.createElement(L,{vehicle:Object(s.a)({},u,{isUsed:!0})})),(T||r()(n)||n||E)&&i.a.createElement("hr",{className:"mt-1_5 mb-2 mx-0_5"}))}t.d(a,"InventoriesForSaleSectionUI",function(){return q}),t.d(a,"InventoriesForSaleSection",function(){return B}),q.propTypes={params:u.a.isRequired,vehicle:d.a.shape({makeName:d.a.string,modelName:d.a.string.isRequired,makeSlug:d.a.string,modelSlug:d.a.string,publicationState:d.a.string,year:d.a.number,submodel:d.a.string}),isInternational:d.a.bool,mergedAttributes:d.a.shape({}),isBestDealPriceActive:d.a.bool,inventoryTotalNumber:d.a.number,inventoryLink:d.a.string,displayVehicle:d.a.string,isRedirectPending:d.a.bool.isRequired,showActiveSpinner:d.a.bool,onZipChangeInProgress:d.a.func.isRequired,onBtnClick:d.a.func.isRequired},q.defaultProps={vehicle:{makeName:"",modelName:"",publicationState:"",year:0,submodel:""},isInternational:!1,mergedAttributes:{},isBestDealPriceActive:!1,inventoryTotalNumber:void 0,inventoryLink:"",displayVehicle:"",showActiveSpinner:!1};const B=Object(R.a)(q)},"./site-modules/shared/components/color-swatch/color-swatch.jsx":function(e,a,t){"use strict";t.d(a,"a",function(){return u});var s=t("../node_modules/@babel/runtime/helpers/esm/extends.js"),n=t("../node_modules/react/index.js"),r=t.n(n),o=t("../node_modules/prop-types/index.js"),i=t.n(o),l=t("../node_modules/classnames/index.js"),d=t.n(l),c=t("../node_modules/reactstrap/lib/Tooltip.js"),m=t.n(c);t("./site-modules/shared/components/color-swatch/color-swatch.scss");class u extends n.Component{constructor(){super(...arguments),this.state={tooltipOpen:!1},this.toggle=(()=>{this.setState(e=>{return{tooltipOpen:!e.tooltipOpen}})})}render(){const e=this.props,a=e.color,t=e.displayColorName,o=e.title,i=e.id,l=e.displayTooltip,c=e.classNames,u=e.colorNameClasses,p=(a||{}).name,h=function(e){const a=e||{},t=a.rgb,s=a.r,n=a.g,r=a.b;let o;return t?o=`rgb(${t})`:null!=s&&null!=n&&null!=r&&(o=`rgb(${s}, ${n}, ${r})`),o}(a),b=!!h,g=p||"",v=!!o&&l,y=o||g;return r.a.createElement(n.Fragment,null,r.a.createElement("span",{id:i},r.a.createElement("span",Object(s.a)({className:d()("color-swatch",{"text-center unknown-color":!b},c),style:{backgroundColor:h||"transparent"},title:l?null:o},v?{tabIndex:"0"}:{},y?{"aria-label":y}:{}),!b&&r.a.createElement("span",{className:"small d-block pos-r line-through"}))," ",t&&r.a.createElement("span",{className:u},g)),v&&r.a.createElement(m.a,{className:"color-tooltip",isOpen:this.state.tooltipOpen,toggle:this.toggle,placement:"top",target:i,delay:0},o))}}u.propTypes={color:i.a.shape({name:i.a.string,r:i.a.number,g:i.a.number,b:i.a.number,rgb:i.a.string}),displayColorName:i.a.bool,title:i.a.string,id:i.a.string,displayTooltip:i.a.bool,classNames:i.a.string,colorNameClasses:i.a.string},u.defaultProps={color:{},displayColorName:!0,title:"",id:null,displayTooltip:!1,classNames:"",colorNameClasses:""}},"./site-modules/shared/components/color-swatch/color-swatch.scss":function(e,a,t){},"./site-modules/shared/components/deal/deal-type/deal-type.scss":function(e,a,t){},"./site-modules/shared/components/inventory-card/inventory-card-lease-terms.scss":function(e,a,t){},"./site-modules/shared/components/inventory-card/inventory-card.scss":function(e,a,t){},"./site-modules/shared/components/inventory-cards-wrapper/inventory-cards-wrapper.jsx":function(e,a,t){"use strict";t.d(a,"a",function(){return ee});t("../node_modules/core-js/modules/es6.regexp.to-string.js");var s=t("../node_modules/@babel/runtime/helpers/esm/extends.js"),n=t("../node_modules/lodash/get.js"),r=t.n(n),o=t("../node_modules/lodash/compact.js"),i=t.n(o),l=t("../node_modules/lodash/differenceWith.js"),d=t.n(l),c=t("../node_modules/lodash/cloneDeep.js"),m=t.n(c),u=t("../node_modules/lodash/isEqual.js"),p=t.n(u),h=t("../node_modules/react/index.js"),b=t.n(h),g=t("../node_modules/prop-types/index.js"),v=t.n(g),y=t("../node_modules/reactstrap/lib/Button.js"),f=t.n(y),k=t("../node_modules/reactstrap/lib/Container.js"),x=t.n(k),j=t("../node_modules/reactstrap/lib/Row.js"),C=t.n(j),_=t("../node_modules/reactstrap/lib/Col.js"),w=t.n(_),N=t("../node_modules/classnames/index.js"),E=t.n(N),T=t("./site-modules/shared/utils/publication-states.js"),S=t("./site-modules/shared/utils/srp-link-constructor.js"),I=t("./site-modules/shared/utils/nice-name.js"),O=t("./site-modules/shared/components/inventory-card/inventory-card.jsx"),D=t("./utils/event-toolbox.js"),A=t("./tracking/constant.js"),P=t("./engagement-handlers/helper.js"),L=t("./data/luckdragon/redux/react-binding.jsx"),z=t("./data/models/visitor.js"),R=t("./data/models/inventory.js"),V=t("./constants/inventory-types.js"),M=t("./site-modules/shared/utils/inventory-utils.js"),$=t("./site-modules/shared/components/link/link.jsx"),q=t("./utils/intersection-observer.js"),B=t("./site-modules/shared/components/whats-my-car-worth-button/whats-my-car-worth-button.jsx"),F=t("./site-modules/shared/utils/build-and-price-link-constructor.js"),W=t("./engagement-handlers/index.js"),U=t("./engagement-handlers/list-engagement-handler/list-engagement-handler.js");t("./site-modules/shared/components/inventory-cards-wrapper/inventory-cards-wrapper.scss");W.a.register(U.a);const Z="edm-entry-inventory-cards",G=18,J=500;function H(e,a){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:G;if(!e||!e.length)return;const s=Object(M.k)(e),n={action_cause:a,cpo_results:s.CPO,new_results:s.NEW,used_results:s.USED,match_results:e.slice(0,t).length,match_total:e.length,inv_treatment_list:Object(P.c)(e),match_type_list:Object(P.d)(e),cpo:Object(M.c)(e,V.a.CPO)?"cpo":"not_cpo"};D.a.fireCustomEvent(A.b.ACTION_LIST_VIEWED,{inventory:e,creativeId:Z,extendObj:n})}const K=(e,a)=>e.slice(0,a),Q=(e,a,t)=>e.slice(a,t);class X extends h.Component{constructor(e){var a;const t=e.numCardsCollapsed;a=super(e),this.showAllCards=(()=>{const e=this.props,a=e.setModelValue,t=e.numCardsExpanded,s=e.vinsData,n=r()(s,"results.length",0)<t;this.setState({remainingImagesLoaded:!0,allCardsShown:!0}),n&&a("searchFilter",R.c,{pageSize:t})}),this.hideAllCards=(()=>{this.setState({allCardsShown:!1})}),this.makeInventories=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=a.props,o=r.cardColumnSize,i=r.columnClasses,l=r.isBestDealPriceActive,d=a.state.remainingImagesLoaded;return e.map(e=>b.a.createElement(w.a,Object(s.a)({},o,{className:i,key:e.vin}),b.a.createElement(O.a,{inventory:e,inventoryCardLink:t,imageLoaded:!n||d,isBestDealPriceActive:l})))},this.renderInventoryCards=(e=>{const a=this.props,t=a.numCardsExpanded,s=a.numCardsCollapsed,n=a.vinsData.results,r=this.state.allCardsShown,o=K(n,s),i=Q(n,s,t);return b.a.createElement(h.Fragment,null,b.a.createElement(C.a,null,this.makeInventories(o,e)),b.a.createElement(C.a,{hidden:!r},this.makeInventories(i,e,!0)))}),this.state={allCardsShown:e.isOpenOnLoad||e.vinsData.totalNumber<=t,remainingImagesLoaded:!1}}componentDidMount(){const e=this.props,a=e.vinsData.results,t=e.closeAfterLoad,s=e.numCardsExpanded,n=e.numCardsCollapsed;if(q.a&&a&&a.length&&this.inventoryCardsRef){let e;e=this.props.isOpenOnLoad&&!this.props.closeAfterLoad?a:K(a,n),this.observer=new q.a(a=>{a.forEach(a=>{a.isIntersecting&&(H(e,"scroll",s),this.observer.unobserve(a.target))})})}this.observer&&this.inventoryCardsRef&&this.observer.observe(this.inventoryCardsRef),t&&this.hideAllCards()}shouldComponentUpdate(e,a){const t=this.props,s=t.vinsData,n=t.subtitle,r=t.title,o=t.vehicle;return e.vinsData.results||(this.prevInventories=m()(s.results)),!(!e.vinsData.results||p()(e.vinsData.results,s.results)&&p()(e.subtitle,n)&&p()(e.title,r)&&p()(e.vehicle,o)&&p()(a,this.state))}componentDidUpdate(){const e=this.props,a=e.vinsData.results,t=e.numCardsExpanded;this.prevInventories&&a&&(H(d()(a.slice(0,t),this.prevInventories,p.a),"link_click",t),this.prevInventories=null)}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const e=this.props,a=e.title,t=e.subtitle,s=e.classes,n=e.headerClassNames,r=e.vehicle,o=e.location,l=o.city,d=o.stateCode,c=e.inventoryCardLink,m=e.wrapperClasses,u=e.vinsData,p=u.results,h=u.totalNumber,g=e.tag,v=e.hideSeeAllForSaleLink,y=e.numCardsCollapsed,k=e.hideNoInventoryControls,j=e.hideEmpty,_=this.state.allCardsShown,N=r.publicationState,O=r.makeName,D=r.modelName,A=r.typeName,P=r.year,L=r.submodel,z=r.makeSlug,R=r.modelSlug,V=!(!p||!p.length),M=h>y;let q="";if(N&&(q=Object(T.h)(N)?"new":"used,cpo"),!h&&j)return null;const W=`/${Object(I.b)(O)}/${Object(I.b)(D)}/`,U=Object(T.h)(N),G=`Sorry! There aren't any ${i()([P&&P,O,A&&`${A}s`,D]).join(" ")||"vehicles"} for sale near you.`;return b.a.createElement(g,{"data-tracking-parent":Z,className:E()("inventory-cards edm-entry",m)},b.a.createElement(x.a,{className:s},b.a.createElement(C.a,{className:"justify-content-center"},a&&b.a.createElement(w.a,{xs:12},b.a.createElement("h2",{className:E()("display-2 size-24 font-weight-bold text-left mb-0_75 mb-md-0_25 px-0",n)},a)),t&&b.a.createElement(w.a,{xs:12},b.a.createElement("div",{className:"h5 font-weight-normal text-center mb-2"},t," ",l,", ",d)),b.a.createElement(w.a,{xs:12,className:"px-0_5 px-xl-0_25"},b.a.createElement("div",{className:"inventory-cards-wrapper",ref:e=>{this.inventoryCardsRef=e}},V?this.renderInventoryCards(c):b.a.createElement("div",{className:"text-center h3 font-weight-normal my-3 px-2"},G))),b.a.createElement(w.a,{xs:12},V&&b.a.createElement("div",null,!_&&M&&b.a.createElement(f.a,{className:"expand-btn text-primary-darker p-0",onClick:this.showAllCards,color:"link","data-tracking-id":"view_more_for_sale"},b.a.createElement("span",{className:"text-normal font-weight-normal size-16"},"See more ",b.a.createElement("span",{className:"icon-arrow-down3 size-10"}))),!U&&!v&&b.a.createElement(f.a,{className:"text-primary-darker p-0 text-left d-block",to:(()=>Object(S.p)({make:O,model:D,year:P,submodelid:L,inventorytype:q}))(),tag:$.a,color:"link","data-tracking-id":"view_search_result",rel:"nofollow"},b.a.createElement("span",{className:"text-normal font-weight-normal size-16"},"See all ",D," models for sale"),b.a.createElement("i",{className:"icon-arrow-right3 size-10 ml-0_25"}))),!V&&!k&&b.a.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center"},U?b.a.createElement(f.a,{href:Object(F.a)({make:Object(I.b)(O),model:Object(I.b)(D),year:P}),className:"text-normal",color:"link","data-tracking-id":"view_search_result"},"Widen your search area",b.a.createElement("span",{className:"ml-0_25 icon-arrow-right3 xsmall"})):b.a.createElement(f.a,{href:(()=>Object(S.p)({make:O,model:D,year:P,submodelid:L,inventorytype:q,radius:J}))(),className:"text-normal",color:"link","data-tracking-id":"view_search_result"},"Widen your search area",b.a.createElement("span",{className:"ml-0_25 icon-arrow-right3 xsmall"})),b.a.createElement(f.a,{href:W,className:"text-normal text-primary",color:"link","data-tracking-id":"view_search_result"},"Shop similar vehicles",b.a.createElement("span",{className:"ml-0_25 icon-arrow-right3 xsmall"}))),U&&!!P&&b.a.createElement(C.a,null,b.a.createElement(w.a,{xs:12,md:6,lg:4,className:"mt-0_5"},b.a.createElement(B.a,{params:{make:z,model:R,year:P.toString()}})))))))}}X.propTypes={location:z.c.Location.isRequired,setModelValue:v.a.func.isRequired,title:v.a.string,subtitle:v.a.string,vehicle:v.a.shape({makeName:v.a.string,modelName:v.a.string,makeSlug:v.a.string,modelSlug:v.a.string,typeName:v.a.string,publicationState:v.a.string,year:v.a.number,submodel:v.a.string}),vinsData:v.a.shape({totalNumber:v.a.number,results:R.b.InventoriesVin}),classes:v.a.string,headerClassNames:v.a.string,inventoryCardLink:v.a.string,wrapperClasses:v.a.string,columnClasses:v.a.string,tag:v.a.string,hideNoInventoryControls:v.a.bool,isOpenOnLoad:v.a.bool,closeAfterLoad:v.a.bool,isBestDealPriceActive:v.a.bool,hideSeeAllForSaleLink:v.a.bool,numCardsCollapsed:v.a.number,numCardsExpanded:v.a.number,cardColumnSize:v.a.shape({}),hideEmpty:v.a.bool},X.defaultProps={subtitle:"",title:"",vehicle:{makeName:"",modelName:"",typeName:"",publicationState:"",year:0,submodel:""},vinsData:{},classes:"",headerClassNames:"",inventoryCardLink:"",wrapperClasses:"bg-faded",columnClasses:"mb-1 mb-md-2 px-0_5 px-xl-0_75",tag:"section",isOpenOnLoad:!1,closeAfterLoad:!1,isBestDealPriceActive:!1,hideSeeAllForSaleLink:!1,hideNoInventoryControls:!1,numCardsCollapsed:3,numCardsExpanded:G,cardColumnSize:{xs:12,md:6,lg:4},hideEmpty:!1};const Y={location:Object(L.a)("location",z.d),vinsData:Object(L.a)("vins",R.c)},ee=Object(L.b)(X,Y)},"./site-modules/shared/components/inventory-cards-wrapper/inventory-cards-wrapper.scss":function(e,a,t){},"./site-modules/shared/components/inventory-heart/inventory-heart-tooltip.scss":function(e,a,t){},"./site-modules/shared/components/inventory/invoke-action/invoke-action.jsx":function(e,a,t){"use strict";t.d(a,"a",function(){return g});var s=t("../node_modules/@babel/runtime/helpers/esm/extends.js"),n=t("../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("../node_modules/react/index.js"),o=t.n(r),i=t("../node_modules/classnames/index.js"),l=t.n(i),d=t("../node_modules/prop-types/index.js"),c=t.n(d),m=t("../node_modules/reactstrap/lib/Button.js"),u=t.n(m),p=t("./site-modules/shared/components/link/link.jsx"),h=t("./site-modules/shared/components/client-side-render/client-side-render.jsx");t("./site-modules/shared/components/inventory/invoke-action/invoke-action.scss");function b(e){let a=e.onClick,t=e.href,r=e.children,i=e.classes,d=e.dataTrackingId,c=e.dataTrackingValue,m=e.trackingDisabled,h=e.newTab,b=e.disabled,g=Object(n.a)(e,["onClick","href","children","classes","dataTrackingId","dataTrackingValue","trackingDisabled","newTab","disabled"]);const v=h?"_blank":"_self";return t?o.a.createElement(p.a,Object(s.a)({className:l()(i,{disabled:b}),"data-tracking-id":d,"data-tracking-value":c,"data-tracking-disabled":m,target:v,to:t},g),r):o.a.createElement(u.a,Object(s.a)({onClick:a,className:l()(i,{disabled:b}),"data-tracking-id":d,"data-tracking-value":c,"data-tracking-disabled":m},g),r)}function g(e){let a=e.onClick,t=e.href,r=e.icon,i=e.iconClassName,d=e.arrowClassName,c=e.iconColor,m=e.image,u=e.primaryText,p=e.primaryTextClassName,g=e.secondaryText,v=e.secondaryTextClassName,y=e.dataTrackingId,f=e.dataTrackingValue,k=e.trackingDisabled,x=e.newTab,j=e.disabled,C=e.primaryColor,_=e.classes,w=e.widthAuto,N=e.children,E=e.arrowIcon,T=e.badge,S=Object(n.a)(e,["onClick","href","icon","iconClassName","arrowClassName","iconColor","image","primaryText","primaryTextClassName","secondaryText","secondaryTextClassName","dataTrackingId","dataTrackingValue","trackingDisabled","newTab","disabled","primaryColor","classes","widthAuto","children","arrowIcon","badge"]);return o.a.createElement(b,Object(s.a)({href:t,onClick:a,classes:l()("invoke-action rounded vdp-text-decoration-none-hover bg-white",_,{"w-100":!w}),dataTrackingId:y,dataTrackingValue:f,trackingDisabled:k,newTab:x,disabled:j},S),o.a.createElement("div",{className:"d-flex align-items-center"},r&&o.a.createElement("span",{className:`${i} ${c} ${r}`}),m&&o.a.createElement(h.a,null,o.a.createElement("img",{className:"invoke-action-image mr-1",src:m,alt:u})),o.a.createElement("div",{className:l()("text-left",{"d-flex flex-column":T})},T,o.a.createElement("div",{className:l()(p,C)},u||N),g&&o.a.createElement("div",{className:v},g))),o.a.createElement("span",{className:l()("mb-0",E,C,d)}))}b.propTypes={onClick:c.a.func,href:c.a.string,children:c.a.node,classes:c.a.string,dataTrackingId:c.a.string.isRequired,dataTrackingValue:c.a.string,newTab:c.a.bool.isRequired,disabled:c.a.bool,trackingDisabled:c.a.bool},b.defaultProps={onClick:null,href:"",children:null,classes:"",disabled:!1,trackingDisabled:!1,dataTrackingValue:null},g.propTypes={onClick:c.a.func,href:c.a.string,icon:c.a.string,iconClassName:c.a.string,arrowClassName:c.a.string,iconColor:c.a.string,image:c.a.string,primaryText:c.a.string,primaryTextClassName:c.a.string,secondaryText:c.a.string,secondaryTextClassName:c.a.string,dataTrackingId:c.a.string.isRequired,dataTrackingValue:c.a.string,newTab:c.a.bool,disabled:c.a.bool,trackingDisabled:c.a.bool,children:c.a.node,primaryColor:c.a.string,classes:c.a.string,widthAuto:c.a.bool,arrowIcon:c.a.string,badge:c.a.node},g.defaultProps={onClick:null,primaryText:"",href:"",icon:"",iconClassName:"h4 mb-0 mr-1",arrowClassName:"",iconColor:"text-gray",image:"",primaryTextClassName:"mb-0",secondaryText:"",secondaryTextClassName:"medium mb-0 font-weight-normal text-gray-darker",newTab:!1,disabled:!1,trackingDisabled:!1,dataTrackingValue:null,children:null,primaryColor:"text-gray-darker",classes:"",widthAuto:!1,arrowIcon:"icon-arrow-right4",badge:void 0}},"./site-modules/shared/components/inventory/invoke-action/invoke-action.scss":function(e,a,t){},"./site-modules/shared/components/inventory/vin-heart/vin-heart.scss":function(e,a,t){},"./site-modules/shared/components/profile/price-drop-alerts-near-you-banner/price-drop-alerts-near-you-banner.scss":function(e,a,t){},"./site-modules/shared/components/whats-my-car-worth-button/whats-my-car-worth-button.jsx":function(e,a,t){"use strict";t.d(a,"a",function(){return o});var s=t("../node_modules/react/index.js"),n=t.n(s),r=t("./site-modules/shared/utils/core-page/params.js");t("./site-modules/shared/components/whats-my-car-worth-button/whats-my-car-worth-button.scss");function o(e){let a=e.params;const t=a.make,s=a.model,r=a.year;return n.a.createElement("a",{href:`/${t}/${s}/${r}/appraisal-value/`,className:"shop-used-inventory-button d-flex align-items-center px-1 py-0_75"},n.a.createElement("span",{className:"icon icon-cash3 size-24 text-gray mr-1"}),n.a.createElement("div",{className:"button-text"},n.a.createElement("div",{className:"text-primary-darker size-16"},"What\u2019s My Car Worth?"),n.a.createElement("div",{className:"text-gray-darker size-14"},"Get your trade in value ")),n.a.createElement("span",{className:"icon icon-arrow-right4 size-24 text-primary-darker"}))}o.propTypes={params:r.a.isRequired}},"./site-modules/shared/components/whats-my-car-worth-button/whats-my-car-worth-button.scss":function(e,a,t){}}]);
//# sourceMappingURL=inventory-section.chunk.b46a42029cab81cc1c60.js.map