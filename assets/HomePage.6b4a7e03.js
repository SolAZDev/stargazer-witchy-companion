import{u as G,a as K,C as ee,Q as te}from"./utils.fac5ea8d.js";import{q as I,c as _,i as g,C as E,g as ne,a0 as ae,a1 as re,a2 as q,a3 as L,a4 as se,a5 as oe,d as P,e as ie,V as Y,W as S,X as y,Y as M,a6 as F,_ as h,$ as ue,a7 as ce}from"./index.76eb1d92.js";import{Q as le}from"./QPage.96e846b8.js";import{a as de}from"./use-quasar.47501fe5.js";import{ical_moon_api as he}from"./axios.0f35d126.js";var x=I({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const a=_(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>g(e.tag,{class:a.value},E(t.default))}}),j=I({name:"QCard",props:{...G,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=ne(),n=K(e,a),r=_(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>g(e.tag,{class:r.value},E(t.default))}});const fe=[g("g",{fill:"none","fill-rule":"evenodd","stroke-width":"2"},[g("circle",{cx:"22",cy:"22",r:"1"},[g("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),g("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]),g("circle",{cx:"22",cy:"22",r:"1"},[g("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),g("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})])])];var ge=I({name:"QSpinnerPuff",props:ae,setup(e){const{cSize:t,classes:a}=re(e);return()=>g("svg",{class:a.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg"},fe)}});function me(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e,t=2,a="0"){if(e==null)return e;const n=""+e;return n.length>=t?n:new Array(t-n.length+1).join(a)+n}const v=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function De(e){return Me(e)===0}function ye(e,t){return t<=6?31:t<=11||De(e)?30:29}function Me(e){const t=v.length;let a=v[0],n,r,s,c,o;if(e<a||e>=v[t-1])throw new Error("Invalid Jalaali year "+e);for(o=1;o<t&&(n=v[o],r=n-a,!(e<n));o+=1)a=n;return c=e-a,r-c<6&&(c=c-r+pe(r+4,33)*33),s=z(z(c+1,33)-1,4),s===-1&&(s=4),s}function pe(e,t){return~~(e/t)}function z(e,t){return e-~~(e/t)*t}const B=864e5,ve=36e5,T=6e4,X="YYYY-MM-DDTHH:mm:ss.SSSZ",we=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Ye=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,C={};function Se(e,t){const a="("+t.days.join("|")+")",n=e+a;if(C[n]!==void 0)return C[n];const r="("+t.daysShort.join("|")+")",s="("+t.months.join("|")+")",c="("+t.monthsShort.join("|")+")",o={};let u=0;const $=e.replace(Ye,l=>{switch(u++,l){case"YY":return o.YY=u,"(-?\\d{1,2})";case"YYYY":return o.YYYY=u,"(-?\\d{1,4})";case"M":return o.M=u,"(\\d{1,2})";case"MM":return o.M=u,"(\\d{2})";case"MMM":return o.MMM=u,c;case"MMMM":return o.MMMM=u,s;case"D":return o.D=u,"(\\d{1,2})";case"Do":return o.D=u++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return o.D=u,"(\\d{2})";case"H":return o.H=u,"(\\d{1,2})";case"HH":return o.H=u,"(\\d{2})";case"h":return o.h=u,"(\\d{1,2})";case"hh":return o.h=u,"(\\d{2})";case"m":return o.m=u,"(\\d{1,2})";case"mm":return o.m=u,"(\\d{2})";case"s":return o.s=u,"(\\d{1,2})";case"ss":return o.s=u,"(\\d{2})";case"S":return o.S=u,"(\\d{1})";case"SS":return o.S=u,"(\\d{2})";case"SSS":return o.S=u,"(\\d{3})";case"A":return o.A=u,"(AM|PM)";case"a":return o.a=u,"(am|pm)";case"aa":return o.aa=u,"(a\\.m\\.|p\\.m\\.)";case"ddd":return r;case"dddd":return a;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return o.Z=u,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return o.ZZ=u,"(Z|[+-]\\d{2}\\d{2})";case"X":return o.X=u,"(-?\\d+)";case"x":return o.x=u,"(-?\\d{4,})";default:return u--,l[0]==="["&&(l=l.substring(1,l.length-1)),l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),i={map:o,regex:new RegExp("^"+$)};return C[n]=i,i}function V(e,t){return e!==void 0?e:t!==void 0?t.date:se.date}function N(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),r=Math.floor(n/60),s=n%60;return a+d(r)+t+d(s)}function _e(e,t,a){let n=e.getFullYear(),r=e.getMonth();const s=e.getDate();return t.year!==void 0&&(n+=a*t.year,delete t.year),t.month!==void 0&&(r+=a*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(n),e.setMonth(r),e.setDate(Math.min(s,U(e))),t.date!==void 0&&(e.setDate(e.getDate()+a*t.date),delete t.date),e}function xe(e,t,a){const n=t.year!==void 0?t.year:e[`get${a}FullYear`](),r=t.month!==void 0?t.month-1:e[`get${a}Month`](),s=new Date(n,r+1,0).getDate(),c=Math.min(s,t.date!==void 0?t.date:e[`get${a}Date`]());return e[`set${a}Date`](1),e[`set${a}Month`](2),e[`set${a}FullYear`](n),e[`set${a}Month`](r),e[`set${a}Date`](c),delete t.year,delete t.month,delete t.date,e}function O(e,t,a){const n=W(t),r=new Date(e),s=n.year!==void 0||n.month!==void 0||n.date!==void 0?_e(r,n,a):r;for(const c in n){const o=me(c);s[`set${o}`](s[`get${o}`]()+a*n[c])}return s}function W(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function R(e,t,a){const n=W(t),r=a===!0?"UTC":"",s=new Date(e),c=n.year!==void 0||n.month!==void 0||n.date!==void 0?xe(s,n,r):s;for(const o in n){const u=o.charAt(0).toUpperCase()+o.slice(1);c[`set${r}${u}`](n[o])}return c}function $e(e,t,a){const n=Ce(e,t,a),r=new Date(n.year,n.month===null?null:n.month-1,n.day===null?1:n.day,n.hour,n.minute,n.second,n.millisecond),s=r.getTimezoneOffset();return n.timezoneOffset===null||n.timezoneOffset===s?r:O(r,{minutes:n.timezoneOffset-s},1)}function Ce(e,t,a,n,r){const s={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(r!==void 0&&Object.assign(s,r),e==null||e===""||typeof e!="string")return s;t===void 0&&(t=X);const c=V(a,q.props),o=c.months,u=c.monthsShort,{regex:$,map:i}=Se(t,c),l=e.match($);if(l===null)return s;let p="";if(i.X!==void 0||i.x!==void 0){const m=parseInt(l[i.X!==void 0?i.X:i.x],10);if(isNaN(m)===!0||m<0)return s;const D=new Date(m*(i.X!==void 0?1e3:1));s.year=D.getFullYear(),s.month=D.getMonth()+1,s.day=D.getDate(),s.hour=D.getHours(),s.minute=D.getMinutes(),s.second=D.getSeconds(),s.millisecond=D.getMilliseconds()}else{if(i.YYYY!==void 0)s.year=parseInt(l[i.YYYY],10);else if(i.YY!==void 0){const m=parseInt(l[i.YY],10);s.year=m<0?m:2e3+m}if(i.M!==void 0){if(s.month=parseInt(l[i.M],10),s.month<1||s.month>12)return s}else i.MMM!==void 0?s.month=u.indexOf(l[i.MMM])+1:i.MMMM!==void 0&&(s.month=o.indexOf(l[i.MMMM])+1);if(i.D!==void 0){if(s.day=parseInt(l[i.D],10),s.year===null||s.month===null||s.day<1)return s;const m=n!=="persian"?new Date(s.year,s.month,0).getDate():ye(s.year,s.month);if(s.day>m)return s}i.H!==void 0?s.hour=parseInt(l[i.H],10)%24:i.h!==void 0&&(s.hour=parseInt(l[i.h],10)%12,(i.A&&l[i.A]==="PM"||i.a&&l[i.a]==="pm"||i.aa&&l[i.aa]==="p.m.")&&(s.hour+=12),s.hour=s.hour%24),i.m!==void 0&&(s.minute=parseInt(l[i.m],10)%60),i.s!==void 0&&(s.second=parseInt(l[i.s],10)%60),i.S!==void 0&&(s.millisecond=parseInt(l[i.S],10)*10**(3-l[i.S].length)),(i.Z!==void 0||i.ZZ!==void 0)&&(p=i.Z!==void 0?l[i.Z].replace(":",""):l[i.ZZ],s.timezoneOffset=(p[0]==="+"?-1:1)*(60*p.slice(1,3)+1*p.slice(3,5)))}return s.dateHash=d(s.year,6)+"/"+d(s.month)+"/"+d(s.day),s.timeHash=d(s.hour)+":"+d(s.minute)+":"+d(s.second)+p,s}function He(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function Te(e,t){return R(new Date,e,t)}function be(e){const t=new Date(e).getDay();return t===0?7:t}function b(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);const n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);const r=(t-a)/(B*7);return 1+Math.floor(r)}function ke(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function H(e,t){const a=new Date(e);return t===!0?ke(a):a.getTime()}function Ie(e,t,a,n={}){const r=H(t,n.onlyDate),s=H(a,n.onlyDate),c=H(e,n.onlyDate);return(c>r||n.inclusiveFrom===!0&&c===r)&&(c<s||n.inclusiveTo===!0&&c===s)}function Oe(e,t){return O(e,t,1)}function Ue(e,t){return O(e,t,-1)}function f(e,t,a){const n=new Date(e),r=`set${a===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${r}Month`](0);case"month":case"months":n[`${r}Date`](1);case"day":case"days":case"date":n[`${r}Hours`](0);case"hour":case"hours":n[`${r}Minutes`](0);case"minute":case"minutes":n[`${r}Seconds`](0);case"second":case"seconds":n[`${r}Milliseconds`](0)}return n}function Fe(e,t,a){const n=new Date(e),r=`set${a===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${r}Month`](11);case"month":case"months":n[`${r}Date`](U(n));case"day":case"days":case"date":n[`${r}Hours`](23);case"hour":case"hours":n[`${r}Minutes`](59);case"minute":case"minutes":n[`${r}Seconds`](59);case"second":case"seconds":n[`${r}Milliseconds`](999)}return n}function ze(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(a=>{t=Math.max(t,new Date(a))}),t}function Ne(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(a=>{t=Math.min(t,new Date(a))}),t}function w(e,t,a){return(e.getTime()-e.getTimezoneOffset()*T-(t.getTime()-t.getTimezoneOffset()*T))/a}function J(e,t,a="days"){const n=new Date(e),r=new Date(t);switch(a){case"years":case"year":return n.getFullYear()-r.getFullYear();case"months":case"month":return(n.getFullYear()-r.getFullYear())*12+n.getMonth()-r.getMonth();case"days":case"day":case"date":return w(f(n,"day"),f(r,"day"),B);case"hours":case"hour":return w(f(n,"hour"),f(r,"hour"),ve);case"minutes":case"minute":return w(f(n,"minute"),f(r,"minute"),T);case"seconds":case"second":return w(f(n,"second"),f(r,"second"),1e3)}}function k(e){return J(e,f(e,"year"),"days")+1}function Ze(e){return L(e)===!0?"date":typeof e=="number"?"number":"string"}function Qe(e,t,a){const n=new Date(e);if(t){const r=new Date(t);if(n<r)return r}if(a){const r=new Date(a);if(n>r)return r}return n}function Ae(e,t,a){const n=new Date(e),r=new Date(t);if(a===void 0)return n.getTime()===r.getTime();switch(a){case"second":case"seconds":if(n.getSeconds()!==r.getSeconds())return!1;case"minute":case"minutes":if(n.getMinutes()!==r.getMinutes())return!1;case"hour":case"hours":if(n.getHours()!==r.getHours())return!1;case"day":case"days":case"date":if(n.getDate()!==r.getDate())return!1;case"month":case"months":if(n.getMonth()!==r.getMonth())return!1;case"year":case"years":if(n.getFullYear()!==r.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${a}`)}return!0}function U(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function Z(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Q={YY(e,t,a){const n=this.YYYY(e,t,a)%100;return n>=0?d(n):"-"+d(Math.abs(n))},YYYY(e,t,a){return a!=null?a:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return d(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Z(this.Q(e))},D(e){return e.getDate()},Do(e){return Z(e.getDate())},DD(e){return d(e.getDate())},DDD(e){return k(e)},DDDD(e){return d(k(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return b(e)},ww(e){return d(b(e))},H(e){return e.getHours()},HH(e){return d(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return d(this.h(e))},m(e){return e.getMinutes()},mm(e){return d(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return d(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return d(Math.floor(e.getMilliseconds()/10))},SSS(e){return d(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,a,n){const r=n==null?e.getTimezoneOffset():n;return N(r,":")},ZZ(e,t,a,n){const r=n==null?e.getTimezoneOffset():n;return N(r)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function Ee(e,t,a,n,r){if(e!==0&&!e||e===1/0||e===-1/0)return;const s=new Date(e);if(isNaN(s))return;t===void 0&&(t=X);const c=V(a,q.props);return t.replace(we,(o,u)=>o in Q?Q[o](s,c,n,r):u===void 0?o:u.split("\\]").join("]"))}function qe(e){return L(e)===!0?new Date(e.getTime()):e}var Le={isValid:He,extractDate:$e,buildDate:Te,getDayOfWeek:be,getWeekOfYear:b,isBetweenDates:Ie,addToDate:Oe,subtractFromDate:Ue,adjustDate:R,startOfDate:f,endOfDate:Fe,getMaxDate:ze,getMinDate:Ne,getDateDiff:J,getDayOfYear:k,inferDateFormat:Ze,getDateBetween:Qe,isSameDate:Ae,daysInMonth:U,formatDate:Ee,clone:qe};async function A(e=new Date().getUTCMonth()+1,t=new Date().getUTCFullYear()){try{return(await he.get("api/?lang=en&month="+e+"&year="+t)).data}catch(a){de().notify({message:"Error connecting to iConnect API E:"+a})}}const Pe=oe("moon",{state:()=>({iCalMoon:{monthName:"",firstDayMonth:"",daysMonth:"",nameDay:[],nameMonth:[],phase:[],month:0,year:0,receivedVariables:null,lang:"",language:"",title:[],nextFullMoon:"",autor:"",version:""},lastUpdated:null,lastSetDate:new Date,isUpdating:!0}),getters:{isUpdated:e=>e.lastUpdated!=null?Le.getDateDiff(e.lastUpdated,new Date,"days")<1||new Date().getUTCHours()==0:!1,todayMoon:e=>{const t={phase:"Loading",svg:""};return Object.keys(e.iCalMoon.phase).length>0?e.iCalMoon.phase[new Date().getDate()]:t}},actions:{async initialFetch(){if(this.isUpdated)this.isUpdating=!0;else{this.isUpdating=!0;const e=await A();this.iCalMoon=e,this.isUpdating=!1}},async forceUpdateMoonData(){this.isUpdating=!0;const e=await A();this.iCalMoon=e,this.isUpdating=!1}}}),je=["innerHTML"],Be={class:"text-h6"},Xe=P({__name:"MoonCard",setup(e){const t=Pe();ie(()=>{t.initialFetch(),console.log(ee("12:19:50",21,7,2024))});const a=_(()=>t.isUpdating),n=_(()=>t.todayMoon);return(r,s)=>(Y(),S(j,{class:"my-card"},{default:y(()=>[a.value?(Y(),S(x,{key:0,class:"text-center"},{default:y(()=>[M(ge,{color:"primary",size:"22"})]),_:1})):F("",!0),a.value?F("",!0):(Y(),S(x,{key:1,class:"text-center"},{default:y(()=>[h("div",null,[h("span",{innerHTML:n.value.svg},null,8,je)]),h("div",Be,ue(n.value.npWidget),1)]),_:1}))]),_:1}))}}),Ve={class:"column"},We={class:"row"},Re={class:"col-12 col-sm-6"},Je=h("div",{class:"text-center"},[h("div",{class:"text-h6"},"Tools and Information")],-1),Ge={class:"column"},Ke=h("div",{class:"text-h6"},"Sabbats",-1),et=h("div",{class:"text-subtitle2"},"Pagan Holidays",-1),ot=P({__name:"HomePage",setup(e){const t=ce();function a(n){t.push(n)}return(n,r)=>(Y(),S(le,{padding:""},{default:y(()=>[h("div",Ve,[h("div",We,[h("div",Re,[M(Xe)])]),Je,h("div",Ge,[M(j,{onClick:r[0]||(r[0]=s=>a("/sabbats"))},{default:y(()=>[M(x,{class:"q-pa-sm",horizontal:"",style:{"min-height":"150px"}},{default:y(()=>[M(te,{class:"col-3",src:"/info/sabbats/images/WheelOfTheYear.jpg",ratio:"1/1","spinner-color":"primary","spinner-size":"82px",fit:"contain"}),M(x,{class:"col text-right"},{default:y(()=>[Ke,et]),_:1})]),_:1})]),_:1})])])]),_:1}))}});export{ot as default};
