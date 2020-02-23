(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),o=(n(0),n(465)),i={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},s={id:"version-1.x/status-bar",title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-1.x/status-bar.md",permalink:"/docs/1.x/status-bar",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-1.x/status-bar.md",version:"1.x",sidebar_label:"Different status bar configuration based on route",sidebar:"version-1.x/docs",previous:{title:"iPhone X support",permalink:"/docs/1.x/handling-iphonex"},next:{title:"Custom Android back button behavior",permalink:"/docs/1.x/custom-android-back-button-handling"}},c=[{value:"StackNavigator and DrawerNavigator",id:"stacknavigator-and-drawernavigator",children:[]},{value:"TabNavigator",id:"tabnavigator",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),Object(o.b)("h2",{id:"stacknavigator-and-drawernavigator"},"StackNavigator and DrawerNavigator"),Object(o.b)("p",null,"This is a simple task when using the StackNavigator or DrawerNavigator. You can simply render the ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'class Screen1 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: \'#6a51ae\' }]}>\n        <StatusBar\n          barStyle="light-content"\n          backgroundColor="#6a51ae"\n        />\n        <Text style={[styles.paragraph, { color: \'#fff\' }]}>\n          Light Screen\n        </Text>\n        <Button\n          title="Next screen"\n          onPress={() => this.props.navigation.navigate(\'Screen2\')}\n          color={isAndroid ? "blue" : "#fff"}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n\nclass Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: \'#ecf0f1\' }]}>\n        <StatusBar\n          barStyle="dark-content"\n          backgroundColor="#ecf0f1"\n        />\n        <Text style={styles.paragraph}>\n          Dark Screen\n        </Text>\n        <Button\n          title="Next screen"\n          onPress={() => this.props.navigation.navigate(\'Screen1\')}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default StackNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n}, {\n  headerMode: 'none',\n});\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"./assets/statusbar/statusbar-stack-demo.gif",alt:"StackNavigator with different StatusBar configs"}))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export default DrawerNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n});\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"./assets/statusbar/statusbar-drawer-demo.gif",alt:"DrawerNavigator with different StatusBar configs"}))),Object(o.b)("h2",{id:"tabnavigator"},"TabNavigator"),Object(o.b)("p",null,"If you're using a TabNavigator it's a bit more complex because the screens on all of your tabs are rendered at once - that means that the last ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),Object(o.b)("p",null,"To fix this we'll have to do two things"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Only use the ",Object(o.b)("inlineCode",{parentName:"li"},"StatusBar")," component on our initial screen. This allows us to ensure the correct ",Object(o.b)("inlineCode",{parentName:"li"},"StatusBar")," config is used."),Object(o.b)("li",{parentName:"ol"},"Leverage the events system in React Navigation and ",Object(o.b)("inlineCode",{parentName:"li"},"StatusBar"),"'s implicit API to change the ",Object(o.b)("inlineCode",{parentName:"li"},"StatusBar")," configuration when a tab becomes active.")),Object(o.b)("p",null,"First, the new ",Object(o.b)("inlineCode",{parentName:"p"},"Screen2.js")," will no longer use the ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n        <Text style={styles.paragraph}>\n          Dark Screen\n        </Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen1')}\n        />\n        {/* <Button\n          title=\"Toggle Drawer\"\n          onPress={() => this.props.navigation.navigate('DrawerToggle')}\n        /> */}\n      </SafeAreaView>\n    );\n  }\n}\n")),Object(o.b)("p",null,"Then, in both ",Object(o.b)("inlineCode",{parentName:"p"},"Screen1.js")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Screen2.js")," we'll set up a listener to change the ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," configuration when that tab ",Object(o.b)("inlineCode",{parentName:"p"},"didFocus"),". We'll also make sure to remove the listener when the ",Object(o.b)("inlineCode",{parentName:"p"},"TabNavigator")," has been unmounted."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class Screen1 extends React.Component {\n  componentDidMount() {\n    this._navListener = this.props.navigation.addListener('didFocus', () => {\n      StatusBar.setBarStyle('light-content');\n      isAndroid && StatusBar.setBackgroundColor('#6a51ae');\n    });\n  }\n\n  componentWillUnmount() {\n    this._navListener.remove();\n  }\n\n  ...\n}\n\nclass Screen2 extends React.Component {\n  componentDidMount() {\n    this._navListener = this.props.navigation.addListener('didFocus', () => {\n      StatusBar.setBarStyle('dark-content');\n      isAndroid && StatusBar.setBackgroundColor('#ecf0f1');\n    });\n  }\n\n  componentWillUnmount() {\n    this._navListener.remove();\n  }\n\n  ...\n}\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"./assets/statusbar/statusbar-tab-demo.gif",alt:"TabNavigator with different StatusBar configs"}))),Object(o.b)("p",null,"The code used for these demos is available as a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/r1iuFP6Ez"}),"Snack"),"."))}u.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,g=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(g,s({ref:t},l,{components:n})):r.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);