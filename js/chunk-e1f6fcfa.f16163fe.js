(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1f6fcfa"],{"20fd":function(t,n,i){"use strict";var a=i("d9f6"),e=i("aebd");t.exports=function(t,n,i){n in t?a.f(t,n,e(0,i)):t[n]=i}},"52ab":function(t,n,i){},"549b":function(t,n,i){"use strict";var a=i("d864"),e=i("63b6"),o=i("241e"),s=i("b0dc"),r=i("3702"),c=i("b447"),l=i("20fd"),d=i("7cd6");e(e.S+e.F*!i("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var n,i,e,u,f=o(t),p="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,g=void 0!==b,v=0,m=d(f);if(g&&(b=a(b,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&r(m))for(n=c(f.length),i=new p(n);n>v;v++)l(i,v,g?b(f[v],v):f[v]);else for(u=m.call(f),i=new p;!(e=u.next()).done;v++)l(i,v,g?s(u,b,[e.value,v],!0):e.value);return i.length=v,i}})},"54a1":function(t,n,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"5f86":function(t,n,i){"use strict";var a=i("c503"),e=i.n(a);e.a},"623b":function(t,n,i){},"774e":function(t,n,i){t.exports=i("d2d5")},"82b7":function(t,n,i){"use strict";var a=i("52ab"),e=i.n(a);e.a},9549:function(t,n,i){"use strict";var a=i("623b"),e=i.n(a);e.a},"95d5":function(t,n,i){var a=i("40c3"),e=i("5168")("iterator"),o=i("481b");t.exports=i("584a").isIterable=function(t){var n=Object(t);return void 0!==n[e]||"@@iterator"in n||o.hasOwnProperty(a(n))}},c503:function(t,n,i){},c8bb:function(t,n,i){t.exports=i("54a1")},d2d5:function(t,n,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},f75a:function(t,n,i){"use strict";i.r(n);var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getListDataMore,expression:"getListDataMore"}],attrs:{id:"index","infinite-scroll-disabled":"lock","infinite-scroll-immediate-check":"false","infinite-scroll-distance":"0"}},[i("music-banner",{attrs:{json:t.bannerJson}}),i("div",{staticClass:"recommend"},[i("div",{staticClass:"recommen-title"},[t._v("echo每日推荐")]),i("div",{staticClass:"playAll",on:{click:t.playAll}},[i("div",{staticClass:"my-icon-arrow playAll-icon"}),i("div",{staticClass:"playAll-label",attrs:{type:"default"}},[t._v("一键播放")])]),i("music-list",{attrs:{json:t.listJson}})],1),i("bottom-loading",{attrs:{loading:t.loading}})],1)},e=[],o=i("a745"),s=i.n(o);function r(t){if(s()(t)){for(var n=0,i=new Array(t.length);n<t.length;n++)i[n]=t[n];return i}}var c=i("774e"),l=i.n(c),d=i("c8bb"),u=i.n(d);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return l()(t)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){return r(t)||f(t)||p()}var b=i("cebc"),g=i("2f62"),v=i("365c"),m=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"banner"}},[i("mt-swipe",{staticClass:"swiper",attrs:{auto:0}},t._l(t.json,function(t,n){return i("mt-swipe-item",{key:n,staticClass:"swiper-item"},[i("router-link",{attrs:{to:{path:"detail",query:{id:t.sound.id}}}},[i("img",{attrs:{src:t.sound.pic_640}})])],1)}),1)],1)},y=[],_={props:{json:{type:Array,default:function(){return[]},required:!0}}},A=_,j=(i("82b7"),i("2877")),w=Object(j["a"])(A,m,y,!1,null,"e82dbca2",null),O=w.exports,k=i("b7aa"),T=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"loading-container"},["loading"===t.loading?i("span",{staticClass:"loading"},[i("mt-spinner",{attrs:{type:"triple-bounce",color:"#6ed56c"}})],1):"nothing"===t.loading?i("span",{staticClass:"nothing"},[t._v("没有更多了T T~")]):"error"===t.loading?i("span",{staticClass:"error"},[t._v("出错啦T T~")]):t._e()])},x=[],L={props:{loading:{type:[String,Boolean],default:"",required:!0}}},D=L,J=(i("5f86"),Object(j["a"])(D,T,x,!1,null,"f7d38712",null)),C=J.exports,E={name:"index",components:{MusicBanner:O,MusicList:k["a"],BottomLoading:C},data:function(){return{bannerJson:[],listJson:[],page:1,loading:!1,lock:!1}},computed:Object(b["a"])({},Object(g["e"])(["audio"])),mounted:function(){this.getBannerData(),this.getListData()},activated:function(){this.loading||(this.lock=!1)},beforeRouteLeave:function(t,n,i){this.lock=!0,i()},methods:Object(b["a"])({},Object(g["d"])(["SET_AUDIO_DATA","SET_PLAY_MODE","SET_PLAY_LIST"]),{getBannerData:function(){var t=this;Object(v["a"])().then(function(n){t.bannerJson=n.data})},getListData:function(){var t=this;this.$indicator.open(),this.page=1,Object(v["c"])(this.page).then(function(n){t.listJson=n.data,t.page=2,t.$indicator.close()})},getListDataMore:function(){var t=this;this.lock=!0,this.loading="loading",Object(v["c"])(this.page).then(function(n){var i;n.data&&n.data.length>0?((i=t.listJson).push.apply(i,h(n.data)),t.page++,t.loading=!1,t.lock=!1):t.loading="nothing"}).catch(function(){t.loading="error",t.lock=!1})},playAll:function(){this.SET_PLAY_LIST(this.listJson),this.$toast("已添加到播放列表"),this.audio.data&&this.listJson[0].sound.id===this.audio.data.sound.id?(this.audio.ele.load(),this.audio.ele.play()):this.SET_AUDIO_DATA(this.listJson[0])}})},S=E,I=(i("9549"),Object(j["a"])(S,a,e,!1,null,null,null));n["default"]=I.exports}}]);