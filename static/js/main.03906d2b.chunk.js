(this["webpackJsonpforecast-hooks"]=this["webpackJsonpforecast-hooks"]||[]).push([[0],{10:function(e,t,a){e.exports={modal:"Searching_modal__2A60Y",show:"Searching_show__3DOmI",modal__inner:"Searching_modal__inner__3bhxZ",modalButton:"Searching_modalButton__liT8s",form:"Searching_form__2rToz",input:"Searching_input__1HoWC",button:"Searching_button__2iy_0"}},14:function(e,t,a){e.exports={wrapper:"Loader_wrapper__3B_q5",lds_ellipsis:"Loader_lds_ellipsis__K7ng4","lds-ellipsis1":"Loader_lds-ellipsis1__T82Y6","lds-ellipsis2":"Loader_lds-ellipsis2__3Zb_4","lds-ellipsis3":"Loader_lds-ellipsis3__3fIHb"}},32:function(e,t,a){},4:function(e,t,a){e.exports={weather:"Weather_weather__3Hnsz",location:"Weather_location__J2mfK",mainInfo:"Weather_mainInfo__2xk3z",img:"Weather_img__SnwHS",temp:"Weather_temp__3-2kx",weatherType:"Weather_weatherType__FpgMP",feelsLike:"Weather_feelsLike__3y-G7",delete:"Weather_delete__3_Mnl",button:"Weather_button__1ievD"}},5:function(e,t,a){e.exports={weatherMini:"WeatherMini_weatherMini__1koQM",time:"WeatherMini_time__PvjOI",info:"WeatherMini_info__1DNmO",description:"WeatherMini_description__1tcgy",temp:"WeatherMini_temp__2J20d"}},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a(24),s=a.n(c),r=(a(32),a(26)),o=a(6),l=a(4),d=a.n(l),u=(a.p,a.p+"static/media/cloudy-night.4a43954d.svg"),m=a.p+"static/media/thunder.19ff3c30.svg",_=a.p+"static/media/drizzle.44fb8223.svg",j=a.p+"static/media/rainy.130d6250.svg",f=a.p+"static/media/snowy.dce3f5e7.svg",b=a.p+"static/media/day.c33ef664.svg",h=a(14),p=a.n(h),O=function(){return Object(n.jsx)("div",{className:p.a.wrapper,children:Object(n.jsxs)("div",{className:p.a.lds_ellipsis,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})},x=function(e){var t;switch(e.icon){case"Clouds":t=u;break;case"Thunderstorm":t=m;break;case"Drizzle":t=_;break;case"Rain":t=j;break;case"Snow":t=f;break;case"Clear":default:t=b}return Object(n.jsx)("div",{className:d.a.weatherBlock,onClick:function(){return e.setWeekForecast({isOpen:!0,city:e.name})},children:Object(n.jsxs)("div",{className:d.a.weather,children:[e.deleteCity&&Object(n.jsx)("div",{className:d.a.delete,children:Object(n.jsx)("button",{className:d.a.button,onClick:function(){return e.deleteCity(e.name)},children:" X "})}),Object(n.jsx)("div",{className:d.a.location,children:e.name}),Object(n.jsxs)("div",{className:d.a.mainInfo,children:[Object(n.jsx)("div",{className:d.a.img,children:Object(n.jsx)("img",{src:t,alt:""})}),Object(n.jsx)("div",{className:d.a.temp,children:Math.round(e.temp)+"\xb0C"})]}),Object(n.jsx)("div",{className:d.a.weatherType,children:e.description}),Object(n.jsxs)("div",{className:d.a.feelsLike,children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",Math.round(e.feels_like),"\xb0C"]})]})})},k=a(9),g=a.n(k),w=function(e){var t=e.isFixed?"".concat(g.a.main," ").concat(g.a.fixed):"".concat(g.a.main);return Object(n.jsxs)("div",{className:t,children:[Object(n.jsx)(x,{name:e.currentGeo.name,temp:e.currentGeo.temp,weather:e.currentGeo.weather,feels_like:e.currentGeo.feels_like,icon:e.currentGeo.icon,description:e.currentGeo.description,setWeekForecast:e.setWeekForecast}),e.locations.map((function(t){return Object(n.jsx)(x,{deleteCity:e.deleteCity,name:t.name,temp:t.temp,weather:t.weather,feels_like:t.feels_like,icon:t.icon,setWeekForecast:e.setWeekForecast,description:t.description})})),e.isSearching?Object(n.jsx)("button",{className:g.a.modalButton,onClick:function(){return e.setIsSearching(!1)},children:"-"}):Object(n.jsx)("button",{className:g.a.modalButton,onClick:function(){return e.setIsSearching(!0)},children:"+"})]})},v=a(25).create({baseURL:"https://api.openweathermap.org/data/2.5/"}),y=function(e,t){return v.get("weather?lat=".concat(e,"&lon=").concat(t,"&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d"))},N=function(e){return v.get("weather?q=".concat(e,"&units=metric&lang=ru&appid=471fb871540b1cabfd3ed0bce031cb0d"))},S=function(e){return v.get("forecast?q=".concat(e,"&lang=ru&units=metric&appid=471fb871540b1cabfd3ed0bce031cb0d")).then((function(e){return e.data.list}))},W=a(10),F=a.n(W),M=function(e){return Object(n.jsx)("div",{className:F.a.modal,children:Object(n.jsx)("div",{className:F.a.modal__inner,children:Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target.cityName.value.trim();a&&(e.getWeatherByName(a),t.target.cityName.value="",e.setIsSearching(!1))},className:F.a.form,children:[Object(n.jsx)("input",{name:"cityName",type:"text",className:F.a.input,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e..."}),Object(n.jsx)("button",{type:"submit",className:F.a.button,children:"\u041f\u043e\u0438\u0441\u043a"})]})})})},C=a(8),I=a.n(C),L=a(5),T=a.n(L),z=function(e){var t;switch(e.data.weather.main){case"Clouds":t=u;break;case"Thunderstorm":t=m;break;case"Drizzle":t=_;break;case"Rain":t=j;break;case"Snow":t=f;break;case"Clear":default:t=b}return Object(n.jsxs)("div",{className:T.a.weatherMini,children:[Object(n.jsx)("div",{className:T.a.time,children:e.data.time}),Object(n.jsxs)("div",{className:T.a.info,children:[Object(n.jsx)("div",{className:T.a.img,children:Object(n.jsx)("img",{src:t,alt:""})}),Object(n.jsx)("div",{className:T.a.temp,children:Math.round(e.data.temp)+"\xb0C"})]}),Object(n.jsxs)("div",{className:T.a.weather,children:[Object(n.jsx)("p",{className:T.a.description,children:e.data.weather.description}),Object(n.jsx)("p",{className:T.a.description,children:"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: "+Math.round(e.data.feels_like)})]})]})},B=a(56),D=a(55),G=(a(51),function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:I.a.weeksForecast,children:e.week.length>0?Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("button",{className:I.a.close,onClick:function(){return e.setWeekForecast({isOpen:!1})},children:"X"}),Object(n.jsx)("div",{className:I.a.title,children:e.city}),e.week.map((function(e){if(e.data.length>0&&e.day!=(new Date).toLocaleString("ru",{weekday:"long"}))return Object(n.jsxs)("div",{className:I.a.day,children:[Object(n.jsx)("div",{className:I.a.dayTitle,children:e.day}),Object(n.jsx)("div",{className:I.a.dayItems,children:Object(n.jsx)(B.a,{spaceBetween:50,slidesPerView:1,initialSlide:4,breakpoints:{450:{slidesPerView:2},800:{slidesPerView:3},1200:{slidesPerView:4}},children:e.data.map((function(e){return Object(n.jsx)(D.a,{children:Object(n.jsx)(z,{data:e})})}))})})]})}))]}):Object(n.jsx)(O,{})})})});function P(e,t){return new Date(e.dt_txt.replace(" ","T")).toLocaleString("ru",{weekday:"long"})==t}function E(e){return e.map((function(e){return{time:new Date(e.dt_txt.replace(" ","T")).toLocaleString("ru",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"}),temp:e.main.temp,feels_like:e.main.feels_like,weather:e.weather[0]}}))}var J=function(e){var t=Object(i.useState)([]),a=Object(o.a)(t,2),c=a[0],s=a[1];return Object(i.useEffect)((function(){S(e.city).then((function(e){s([{day:"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",data:E(e.filter((function(e){return P(e,"\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a")})))},{day:"\u0432\u0442\u043e\u0440\u043d\u0438\u043a",data:E(e.filter((function(e){return P(e,"\u0432\u0442\u043e\u0440\u043d\u0438\u043a")})))},{day:"\u0441\u0440\u0435\u0434\u0430",data:E(e.filter((function(e){return P(e,"\u0441\u0440\u0435\u0434\u0430")})))},{day:"\u0447\u0435\u0442\u0432\u0435\u0440\u0433",data:E(e.filter((function(e){return P(e,"\u0447\u0435\u0442\u0432\u0435\u0440\u0433")})))},{day:"\u043f\u044f\u0442\u043d\u0438\u0446\u0430",data:E(e.filter((function(e){return P(e,"\u043f\u044f\u0442\u043d\u0438\u0446\u0430")})))},{day:"\u0441\u0443\u0431\u0431\u043e\u0442\u0430",data:E(e.filter((function(e){return P(e,"\u0441\u0443\u0431\u0431\u043e\u0442\u0430")})))},{day:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",data:E(e.filter((function(e){return P(e,"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435")})))}])})).catch((function(e){return alert(e)}))}),[]),Object(i.useEffect)((function(){return document.body.classList.add("block-scroll"),function(){return document.body.classList.remove("block-scroll")}}),[]),Object(n.jsx)(G,{setWeekForecast:e.setWeekForecast,city:e.city,week:c})},V=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)({}),l=Object(o.a)(s,2),d=l[0],u=l[1],m=Object(i.useState)(!1),_=Object(o.a)(m,2),j=_[0],f=_[1],b=Object(i.useState)({isOpen:!1,city:null}),h=Object(o.a)(b,2),p=h[0],x=h[1],k=Object(i.useState)([]),g=Object(o.a)(k,2),v=g[0],S=g[1];Object(i.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){y(e.coords.latitude,e.coords.longitude).then((function(e){var t=e.data.main,a=t.temp,n=t.feels_like,i=e.data.name,s=e.data.weather[0],r=s.description,o=s.main;u({temp:a,feels_like:n,name:i,description:r,icon:o}),c(!1)}))}),(function(){alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u0412\u044b \u043d\u0435 \u0434\u0430\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0433\u0435\u043e-\u043f\u043e\u0437\u0438\u0446\u0438\u0438!"),c(!1)}))}),[]),Object(i.useEffect)((function(){(JSON.parse(localStorage.getItem("locations"))||[]).forEach((function(e){return W(e)}))}),[]),Object(i.useEffect)((function(){localStorage.setItem("locations",JSON.stringify(v.map((function(e){return e.name}))))}),[v]);var W=function(e){v.some((function(t){return t.name==e}))?alert("\u0412\u044b \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0433\u043e\u0440\u043e\u0434 ".concat(e)):(c(!0),N(e).then((function(t){var a=t.data.main,n=a.temp,i=a.feels_like,s=t.data.weather[0],o=s.description,l=s.main;S((function(t){return[{temp:n,feels_like:i,name:e,description:o,icon:l,id:1}].concat(Object(r.a)(t))})),c(!1)})).catch((function(t){alert("\u0413\u043e\u0440\u043e\u0434 ".concat(e," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d :("))})))};return Object(n.jsxs)(n.Fragment,{children:[a?Object(n.jsx)(O,{}):Object(n.jsx)(w,{currentGeo:d,setIsSearching:f,isSearching:j,locations:v,deleteCity:function(e){S((function(t){return t.filter((function(t){return t.name!==e}))}))},setWeekForecast:x,isFixed:p.isOpen}),j&&Object(n.jsx)(M,{setIsSearching:f,getWeatherByName:W}),p.isOpen&&Object(n.jsx)(J,{setWeekForecast:x,city:p.city})]})},q=(a(52),function(){return Object(n.jsx)(V,{})});s.a.render(Object(n.jsx)(q,{}),document.getElementById("root"))},8:function(e,t,a){e.exports={weeksForecast:"WeeksForecast_weeksForecast__1kw5A",button:"WeeksForecast_button__F_pq7",close:"WeeksForecast_close__1dsTj",title:"WeeksForecast_title__1AzOD",day:"WeeksForecast_day__1zSlL",dayTitle:"WeeksForecast_dayTitle__2m8Kx",dayItems:"WeeksForecast_dayItems__DdVxN"}},9:function(e,t,a){e.exports={main:"Main_main__3fzSv",modal:"Main_modal__12qLN",show:"Main_show__tU-hz",modal__inner:"Main_modal__inner__35MS-",modalButton:"Main_modalButton__25jSV",form:"Main_form__283FA",input:"Main_input__dhsNj",button:"Main_button__2FQPJ"}}},[[53,1,2]]]);
//# sourceMappingURL=main.03906d2b.chunk.js.map