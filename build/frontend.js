(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,n=window.React;var r=e.n(n);const o=window.ReactDOM;var a=e.n(o);class s extends r().Component{render(){return(0,t.createElement)("div",{className:"trends-widget-container"})}}class c extends n.Component{constructor(e){super(e),this.onChange=this.onChange.bind(this)}render(){const{countries:e}=this.props.countryData;return(0,t.createElement)("div",{className:"googleTrends-codedeyo-containers--trends-header"},(0,t.createElement)("div",{className:"googleTrends-codedeyo-containers--trends-header--entry"},(0,t.createElement)("div",{className:"googleTrends-codedeyo-containers--trends-header--flex"},(0,t.createElement)("div",{className:"googleTrends-codedeyo-containers--trends-header--left"},(0,t.createElement)("div",null,(0,t.createElement)("p",null,"Daily Search Trends")),(0,t.createElement)("div",null,(0,t.createElement)("input",{type:"text",className:"googleTrends-codedeyo-containers--trends-header--input",placeholder:"Enter a search term",name:"searchKeyword",onChange:this.onChange}),(0,t.createElement)("span",{className:"googleTrends-codedeyo-containers--trends-header--close",onClick:this.props.clearSearchKeyword},"x"))),(0,t.createElement)("div",{className:"googleTrends-codedeyo-containers--trends-header--right"},(0,t.createElement)("select",{name:"country",onChange:this.onChange},e.map(((e,n)=>(0,t.createElement)("option",{key:n,value:e.code},e.name)))))),(0,t.createElement)("div",null,(0,t.createElement)("a",{href:"javascript:;",className:"googleTrends-codedeyo-containers--trends-header--reload",onClick:this.props.reload},"↻ Reload Content"))))}onChange(e){const{name:t,value:n}=e.target;this.props.updateCountry({[t]:n})}}const d=c;class i extends r().Component{constructor(e){super(e),this.state={country:"NG",countries:[{name:"Nigeria",code:"NG"},{name:"United States",code:"US"},{name:"United Kingdom",code:"GB"},{name:"Australia",code:"AU"},{name:"Canada",code:"CA"},{name:"South Africa",code:"ZA"}],isOnline:navigator.onLine,error:null,searchKeyword:""}}componentDidMount(){this.initIframe(),window.addEventListener("online",this.handleConnectionChange),window.addEventListener("offline",this.handleConnectionChange)}componentWillUnmount(){window.removeEventListener("online",this.handleConnectionChange),window.removeEventListener("offline",this.handleConnectionChange)}componentDidUpdate(e,t){if(t.isOnline!==this.state.isOnline)if(this.state.isOnline){this.initIframe();try{wp.data.dispatch("core/notices").createNotice("success","Google Trends: You are back online!",{type:"snackbar",isDismissible:!0})}catch(e){}}else try{wp.data.dispatch("core/notices").createNotice("error","Google Trends: You are offline!",{type:"snackbar",isDismissible:!0})}catch(e){}}handleConnectionChange=()=>{this.setState({isOnline:navigator.onLine})};updateCountry=({country:e,searchKeyword:t})=>{if(this.setState({country:e||this.state.country,searchKeyword:t||this.state.searchKeyword}),t)return""===t?void this.initIframe(this.state.country):(document.querySelector(".googleTrends-codedeyo-containers--trends-header--close").style.display="inline-block",void this.loadGoogleTrendsChart(t));this.initIframe(e)};loadGoogleTrendsChart(e){let t=document.querySelector(".trends-widget-container");try{this.checkForOldIframe(),trends.embed.renderExploreWidgetTo(t,"TIMESERIES",{comparisonItem:[{keyword:e,geo:this.state.country,time:"today 12-m"}],category:0,property:""},{exploreQuery:`q=${e}&geo=${this.state.country}&date=today 12-m`,guestPath:"https://trends.google.com:443/trends/embed/"})}catch(e){var n=e.message;try{wp.data.dispatch("core/notices").createNotice("error","Google Trends: Something went wrong. Please try again!",{type:"snackbar",isDismissible:!0})}catch(e){}this.setState({error:n})}}checkForOldIframe(){let e=document.querySelector(".trends-widget-container");var t=e.querySelector("iframe");t&&e.removeChild(t)}initIframe(e=null){let t=document.querySelector(".trends-widget-container");try{e?t.querySelector("iframe").src=`https://trends.google.com:443/trends/embed/dailytrends?geo=${e}&guestPath=https://trends.google.com:443/trends/embed/`:(this.checkForOldIframe(),trends.embed.renderWidgetTo(t,"dailytrends","",{geo:this.state.country,guestPath:"https://trends.google.com:443/trends/embed/"}))}catch(e){var n=e.message;try{wp.data.dispatch("core/notices").createNotice("error","Google Trends: Something went wrong. Please try again!",{type:"snackbar",isDismissible:!0})}catch(e){}this.setState({error:n})}}clearSearchKeyword=()=>{let e=document.querySelector(".googleTrends-codedeyo-containers--trends-header--input"),t=document.querySelector(".googleTrends-codedeyo-containers--trends-header--close");e.value="",t.style.display="none",this.setState({searchKeyword:""}),this.initIframe(this.state.country)};reload=()=>{this.initIframe(this.state.country)};render(){const{isOnline:e,error:n}=this.state;return(0,t.createElement)("div",{className:"googleTrends-codedeyo-containers"},e?(0,t.createElement)(t.Fragment,null,n?(0,t.createElement)("div",{className:"googleTrends-codedeyo-containers--trends--offline"},(0,t.createElement)("p",null,"Error: ",n),(0,t.createElement)("p",null,(0,t.createElement)("a",{href:"https://adeleyeayodeji.com",target:"_blank",rel:"noopener noreferrer"},"Contact Us, if you need help"))):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(d,{countryData:this.state,updateCountry:this.updateCountry,clearSearchKeyword:this.clearSearchKeyword,reload:this.reload}),(0,t.createElement)(s,null))):(0,t.createElement)("div",{className:"googleTrends-codedeyo-containers--trends--offline"},(0,t.createElement)("p",null,"You are offline. Please check your internet connection and try again.")))}}document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("google-trends-wp-container");e&&a().render((0,t.createElement)(i,null),e)}))})();