exports.id=121,exports.ids=[121],exports.modules={13729:(e,t,r)=>{let s,l,a;var o=Object.create,i=Object.defineProperty,n=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,h=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of p(t))c.call(e,l)||l===r||i(e,l,{get:()=>t[l],enumerable:!(s=n(t,l))||s.enumerable});return e},d=(e,t,r)=>(h(e,"symbol"!=typeof t?t+"":t,r),r),b={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(b,{default:()=>O}),e.exports=y(i({},"__esModule",{value:!0}),b);var f=(a=null!=(s=r(28964))?o(u(s)):{},y(!l&&s&&s.__esModule?a:i(a,"default",{value:s,enumerable:!0}),s)),m=r(41344),g=r(28076);let P="https://connect.facebook.net/en_US/sdk.js",v="fbAsyncInit";class O extends f.Component{constructor(){super(...arguments),d(this,"callPlayer",m.callPlayer),d(this,"playerID",this.props.config.playerId||`facebook-player-${(0,m.randomString)()}`),d(this,"mute",()=>{this.callPlayer("mute")}),d(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){if(t){(0,m.getSDK)(P,"FB",v).then(e=>e.XFBML.parse());return}(0,m.getSDK)(P,"FB",v).then(e=>{e.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),e.Event.subscribe("xfbml.render",e=>{this.props.onLoaded()}),e.Event.subscribe("xfbml.ready",e=>{"video"===e.type&&e.id===this.playerID&&(this.player=e.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")})})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){let{attributes:e}=this.props.config;return f.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}d(O,"displayName","Facebook"),d(O,"canPlay",g.canPlay.facebook),d(O,"loopOnEnded",!0)}};