(this["webpackJsonpball-sort-puzzle"]=this["webpackJsonpball-sort-puzzle"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),s=n.n(r),i=n(6),a=n.n(i),u=n(7),c=(n(24),n(8)),l=n(11),f=(n(25),n(26),n(2)),v=n(3),h=n(4),b=n.n(h),d=function(){function e(t){Object(f.a)(this,e),this.value=t,this.next=null,b()(this)}return Object(v.a)(e,[{key:"getValue",value:function(){return this.value}},{key:"getNext",value:function(){return this.next}},{key:"setNext",value:function(e){return this.next=e,this}}]),e}(),p=function(){function e(){Object(f.a)(this,e),this.next=null,this.internalSize=0,b()(this)}return Object(v.a)(e,[{key:"push",value:function(e){var t=new d(e);t.setNext(this.next),this.next=t,this.internalSize+=1}},{key:"top",value:function(){return this.next.getValue()}},{key:"pop",value:function(){var e=this.next;return this.next=e.getNext(),this.internalSize-=1,e.getValue()}},{key:"isEmpty",value:function(){return null===this.next}},{key:"size",value:function(){return this.internalSize}}]),e}(),j=function(){function e(){Object(f.a)(this,e),this.capacity=4,this.stack=new p,b()(this)}return Object(v.a)(e,[{key:"getCapacity",value:function(){return this.capacity}},{key:"isEmpty",value:function(){return this.stack.isEmpty()}},{key:"isFull",value:function(){return this.stack.size()===this.capacity}},{key:"top",value:function(){return this.stack.top()}},{key:"pop",value:function(){return this.stack.pop()}},{key:"push",value:function(e){if(this.isFull())throw Error("Can't push to a full glass");this.stack.push(e)}},{key:"size",value:function(){return this.stack.size()}},{key:"hasOnlySingleColorBalls",value:function(){for(var e=this.getAllBalls(),t=1;t<e.length;t+=1)if(e[t-1]!==e[t])return!1;return!0}},{key:"pushArrayOfBalls",value:function(e){if(e.length+this.stack.size()>this.capacity)throw Error("pushArrayOfBalls can't exceed glass capacity");e.forEach(this.push)}},{key:"getAllBalls",value:function(){for(var e=[];!this.isEmpty();)e.push(this.pop());return e.reverse(),this.pushArrayOfBalls(e),e}},{key:"clone",value:function(){var t=new e(this.capacity);return t.pushArrayOfBalls(this.getAllBalls()),t}},{key:"toString",value:function(){return this.getAllBalls().join(",")}}]),e}();n(33);function O(e){var t=e.color,n=e.onClick;return Object(o.jsx)("div",{className:"Ball",onClick:function(){return n()},style:{backgroundColor:t},role:"button",tabIndex:0,onKeyPress:function(e){"Enter"===e.key&&n()}})}O.defaultProps={onClick:function(){}};var k=O;n(34);function m(e){var t=e.glass,n=e.active,r=e.onClick,s=t.getAllBalls();return Object(o.jsx)("div",{className:"TestTube ".concat(n?"active":""),onClick:function(){return r()},role:"button",tabIndex:0,onKeyPress:function(e){"Enter"===e.key&&r()},children:Object(o.jsx)("div",{className:"BallWrapper",children:s.map((function(e,t){return Object(o.jsx)(k,{color:e},function(e,t){return"".concat(t,":").concat(e)}(e,t))}))})})}m.defaultProps={active:!1,onClick:function(){}};var g=m;n(35);function x(e){var t=e.glasses,n=e.activeGlass,r=e.onTestTubeClick;return Object(o.jsx)("div",{className:"TestTubes",children:t.map((function(e,t){return Object(o.jsx)("div",{className:"TestTubeWrapper",children:Object(o.jsx)(g,{glass:e,active:t===n,onClick:function(){return r(t)}})},function(e,t){return"".concat(t,":").concat(e.toString())}(e,t))}))})}x.defaultProps={activeGlass:-1,onTestTubeClick:function(){}};var y=x;n(36);var C=function(e){var t=e.testTubes,n=e.children;return Object(o.jsxs)("div",{className:"Template",children:[Object(o.jsx)("div",{className:"TestTubesWrapper",children:t}),Object(o.jsx)("div",{className:"SidepanelWrapper",children:n})]})};n(37);var N=function(e){var t=e.children;return Object(o.jsx)("div",{className:"Sidebar",children:t})};n(38);function S(e){var t=e.disabled,n=e.onClick,r=e.text;return Object(o.jsx)("button",{type:"button",className:"Button",disabled:t,onClick:function(){u.a.event({category:"Button Click",action:r,nonInteraction:!1}),n()},children:Object(o.jsx)("span",{children:r})})}S.defaultProps={disabled:!1,onClick:function(){}};var w=S;n(39);function G(e){var t=e.glasses,n=e.colors,r=e.activeGlass,s=e.onTestTubeClick,i=e.onClear,a=e.onAdd,u=e.onRemove,c=e.onColorClick,l=e.onSolve;return Object(o.jsx)(C,{testTubes:Object(o.jsx)(y,{glasses:t,activeGlass:r,onTestTubeClick:function(e){return s(e)}}),children:Object(o.jsx)(T,{colors:n,onClear:function(){return i()},onAdd:function(){return a()},onRemove:function(){return u()},onColorClick:function(e){return c(e)},onSolve:function(){return l()}})})}function T(e){var t=e.colors,n=e.onColorClick,r=e.onAdd,s=e.onClear,i=e.onRemove,a=e.onSolve;return Object(o.jsxs)(N,{children:[Object(o.jsx)("div",{className:"BallWrapper",children:t.map((function(e){return Object(o.jsx)("div",{className:"SingleBallWrapper",children:Object(o.jsx)(k,{color:e,onClick:function(){return n(e)}})},e)}))}),Object(o.jsx)(w,{text:"CLEAR",onClick:function(){return s()}}),Object(o.jsx)(w,{text:"ADD",onClick:function(){return r()}}),Object(o.jsx)(w,{text:"REMOVE",onClick:function(){return i()}}),Object(o.jsx)(w,{text:"SOLVE",onClick:function(){return a()}})]})}G.defaultProps={onTestTubeClick:function(){},onClear:function(){},onAdd:function(){},onRemove:function(){},onColorClick:function(){},onSolve:function(){}},T.defaultProps={onColorClick:function(){},onAdd:function(){},onClear:function(){},onRemove:function(){},onSolve:function(){}};var E=G,B=function(){function e(t,n){Object(f.a)(this,e),this.from=t,this.to=n}return Object(v.a)(e,[{key:"invert",value:function(){return new e(this.to,this.from)}}]),e}();function A(e){var t=e.currentMove,n=e.numberOfMoves,r=e.onNext,s=e.onPrevious,i=e.onRestart;return Object(o.jsxs)(N,{children:[Object(o.jsxs)("p",{children:[t," / ",n]}),Object(o.jsx)(w,{text:"Next",disabled:t>=n,onClick:function(){return r()}}),Object(o.jsx)(w,{text:"Previous",disabled:t<=0,onClick:function(){return s()}}),Object(o.jsx)(w,{text:"Restart",onClick:function(){return i()}})]})}var P=function(e){var t=e.glasses,n=e.moves,r=e.moveIndex,s=e.onNext,i=e.onPrevious,a=e.onRestart;return Object(o.jsx)(C,{testTubes:Object(o.jsx)(y,{glasses:t}),children:Object(o.jsx)(A,{currentMove:r,numberOfMoves:n.length,onNext:function(){return s()},onPrevious:function(){return i()},onRestart:function(){return a()}})})},R=function(){function e(t){Object(f.a)(this,e),this.glasses=t,this.numberOfColors=this.internalCalculateNumberOfColors(),b()(this)}return Object(v.a)(e,[{key:"isGlassComplete",value:function(e){var t=this.internalGetGlass(e);return t.isFull()&&t.hasOnlySingleColorBalls()}},{key:"isComplete",value:function(){var e=this;return this.glasses.filter((function(t,n){return e.isGlassComplete(n)})).length===this.numberOfColors}},{key:"calculateAllPotentialMoves",value:function(){var e=this,t=[];return this.glasses.forEach((function(n,o){n.isFull()||e.internalFindAllGlassIndexesThatCanMoveToGlass(o).forEach((function(e){t.push(new B(e,o))}))})),t}},{key:"moveBall",value:function(e){var t=this.internalGetGlass(e.from).pop();this.internalGetGlass(e.to).push(t)}},{key:"getGlasses",value:function(){return this.glasses}},{key:"clone",value:function(){return new e(this.glasses.map((function(e){return e.clone()})))}},{key:"toString",value:function(){var e=this,t="";return this.glasses.forEach((function(n,o){t+=n.toString(),o!==e.numberOfGlasses-1&&(t+="\n")})),t}},{key:"internalGetGlass",value:function(e){return this.glasses[e]}},{key:"internalCalculateNumberOfColors",value:function(){var e=new Set;return this.glasses.forEach((function(t){t.getAllBalls().forEach((function(t){return e.add(t)}))})),e.size}},{key:"internalFindAllGlassIndexesThatCanMoveToGlass",value:function(e){var t=this.internalGetGlass(e);return this.glasses.map((function(e,t){return{fromGlass:e,fromIndex:t}})).filter((function(t){return t.fromIndex!==e})).filter((function(e){return!e.fromGlass.isEmpty()})).filter((function(e){var n=e.fromGlass;return t.isEmpty()||t.top()===n.top()})).map((function(e){return e.fromIndex}))}}]),e}(),M=n(15),z=n(16),I=n(14),W=function(){function e(t){Object(f.a)(this,e),this.visited=new Set,this.visited.add(t.getHash()),this.stack=new p,this.stack.push(t),b()(this)}return Object(v.a)(e,[{key:"isDone",value:function(){return this.stack.isEmpty()}},{key:"currentNode",value:function(){return this.stack.top()}},{key:"iterate",value:function(){var e=this.stack,t=this.visited;e.pop().getNeighbors().forEach((function(n){var o=n.getHash();t.has(o)||(e.push(n),t.add(o))}))}}]),e}(),D=function(e){Object(z.a)(n,e);var t=Object(I.a)(n);function n(e,o,r){var s;return Object(f.a)(this,n),(s=t.call(this)).board=e,s.previousMove=o,s.previousNode=r,s}return Object(v.a)(n,[{key:"getHash",value:function(){var e=this.board.getGlasses().map((function(e){return e.toString()}));return e.sort(),e.join(";")}},{key:"getNeighbors",value:function(){var e=this,t=this.board;return t.calculateAllPotentialMoves().filter((function(e){return!t.isGlassComplete(e.from)})).filter((function(e){var n=t.getGlasses()[e.from];return!(3===n.size()&&n.hasOnlySingleColorBalls())})).map((function(o){var r=t.clone();return r.moveBall(o),new n(r,o,e)}))}},{key:"getBoard",value:function(){return this.board}},{key:"getMovesToNode",value:function(){var e=[];return null!==this.previousNode&&e.push.apply(e,Object(M.a)(this.previousNode.getMovesToNode())),null!==this.previousMove&&e.push(this.previousMove),e}}]),n}(function(){function e(){Object(f.a)(this,e)}return Object(v.a)(e,[{key:"getHash",value:function(){throw Error("Not implemented")}},{key:"getNeighbors",value:function(){throw Error("Not implemented")}}]),e}());var F=function(e){for(var t=new D(e,null,null),n=new W(t);!n.isDone();){var o=n.currentNode();if(o.getBoard().isComplete())return{isSolvable:!0,moves:o.getMovesToNode()};n.iterate()}return{isSolvable:!1,moves:[]}},L="configuration",H=Object.values({RED:"#c52b23",BLUE:"#3b2fc3",PURPLE:"#722b93",YELLOW:"#f1da58",GREEN:"#78970e",PINK:"#ea5e7b",AQUA:"#55a3e5",GREY:"#636466",BABY:"#61d67d",ORANGE:"#e88c41"});function U(e){var t=new j;return t.pushArrayOfBalls(e.map((function(e){return H[e]}))),t}var V=[U([0,1,0,2]),U([1,3,4,2]),U([5,6,4,4]),U([7,6,3,6]),U([8,5,7,7]),U([0,5,5,1]),U([3,3,2,0]),U([4,6,8,8]),U([7,2,8,1]),U([]),U([])];function K(e){return e.map((function(e){return e.clone()}))}var Y=function(){var e=Object(r.useState)(0),t=Object(c.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(L),a=Object(c.a)(i,2),f=a[0],v=a[1],h=Object(r.useState)([]),b=Object(c.a)(h,2),d=b[0],p=b[1],O=Object(r.useState)(0),k=Object(c.a)(O,2),m=k[0],g=k[1],x=Object(r.useState)([]),y=Object(c.a)(x,2),C=y[0],N=y[1],S=Object(r.useState)(V),w=Object(c.a)(S,2),G=w[0],T=w[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l.a,{}),f===L?Object(o.jsx)(E,{colors:H,glasses:G,activeGlass:n,onTestTubeClick:function(e){s(e)},onClear:function(){T(function(e,t){var n=K(e);return n.splice(t,1,new j),n}(G,n))},onAdd:function(){T(function(e,t){var n=K(e);return n.splice(t+1,0,new j),n}(G,n)),s(n+1)},onRemove:function(){T(function(e,t){var n=K(e);return n.splice(t,1),0===n.length&&n.push(new j),n}(G,n)),s(Math.max(n-1,0))},onColorClick:function(e){T(function(e,t,n){var o=K(e),r=o[t];return r.isFull()||r.push(n),o}(G,n,e))},onSolve:function(){var e=new R(G),t=Date.now(),n=F(e),o=Date.now();u.a.timing({value:o-t,category:"Solver",variable:"DFS",label:"".concat(n.isSolvable?"Solvable":"Unsolvable")}),n.isSolvable?(g(0),p(n.moves),N(K(G)),v("solution")):l.b.error("This board is not solvable...",{position:l.b.POSITION.TOP_RIGHT,autoClose:5e3,hideProgressBar:!0})}}):Object(o.jsx)(P,{glasses:C,moves:d,moveIndex:m,onNext:function(){var e=d[m],t=new R(C);t.moveBall(e),N(t.getGlasses()),g(m+1)},onPrevious:function(){var e=d[m-1],t=new R(C);t.moveBall(e.invert()),N(t.getGlasses()),g(m-1)},onRestart:function(){v(L)}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.initialize("UA-168632958-1",{gaOptions:{siteSpeedSampleRate:100}}),u.a.pageview(window.location.pathname+window.location.search),a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(Y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.68dca6dd.chunk.js.map