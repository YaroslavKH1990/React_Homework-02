(this.webpackJsonphomework_2=this.webpackJsonphomework_2||[]).push([[0],{10:function(e,t,n){e.exports={btn:"feedback_btn__3lr7x"}},13:function(e,t,n){e.exports={list__item:"_contactList_list__item__3agKw",btn:"_contactList_btn__27tSE"}},15:function(e,t,n){e.exports={wrapper:"_wrapper_wrapper__3w6Z3"}},2:function(e,t,n){e.exports={form:"_form_form__x5bwm",label:"_form_label__3YV4F",input_first:"_form_input_first__2aA9Y",input_second:"_form_input_second__2LUJ7"}},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(14),i=n.n(r),o=n(3),l=n(4),u=n(5),d=n(7),b=n(6),j=n(10),m=n.n(j),h=function(e){var t=e.allChange;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"titleWrap",children:[Object(a.jsx)("h1",{className:"title",children:"Please leave feedback"}),Object(a.jsxs)("div",{className:"btnWrapper",children:[Object(a.jsx)("button",{name:"good",onClick:t,className:m.a.btn,children:"Good"}),Object(a.jsx)("button",{name:"neutral",onClick:t,className:m.a.btn,children:"Neutral"}),Object(a.jsx)("button",{name:"bad",onClick:t,className:m.a.btn,children:"Bad"})]})]})})},p=function(e){var t=e.onGoodStat,n=e.onNeutralStat,c=e.onBadStat,s=e.onCountTotalFeedback,r=e.onCountPositiveFeedbackPercentage;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"statWrap",children:[Object(a.jsx)("h2",{className:"statistics",children:"Statistics"}),Object(a.jsxs)("p",{className:"good",children:["Good:",t]}),Object(a.jsxs)("p",{className:"neutral",children:["Neutral:",n]}),Object(a.jsxs)("p",{className:"bad",children:["Bad:",c]}),Object(a.jsxs)("p",{className:"total",children:["Total:",s]}),Object(a.jsxs)("p",{className:"percentage",children:["Positive feedback:",r,"%"]})]})})},f=function(e){var t=e.message;return Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"message",children:t})})},_=n(15),O=n.n(_),x=function(e){var t=e.children;return Object(a.jsx)("div",{className:O.a.wrapper,children:t})},v=(c.Component,n(17)),C=n(16),N=n(11),g=n.n(N),k=n(2),F=n.n(k),w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.nameInputId=g.a.generate(),e.numberInputId=g.a.generate(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(o.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.checkContact(e.state.name)&&(e.props.addContact(Object(C.a)({id:g.a.generate()},e.state)),e.reset())},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:F.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:F.a.label,htmlFor:this.nameInputId,children:["Name",Object(a.jsx)("input",{className:F.a.input_first,value:this.state.name,type:"text",name:"name",id:this.nameInputId,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:F.a.label,htmlFor:this.numberInputId,children:["Number",Object(a.jsx)("input",{className:F.a.input_second,value:this.state.number,type:"text",name:"number",id:this.numberInputId,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:F.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),I=n(13),S=n.n(I),y=function(e){var t=e.contacts,n=e.deleteContact;return Object(a.jsx)(a.Fragment,{children:t.map((function(e){return Object(a.jsxs)("li",{className:S.a.list__item,children:[e.name," : ",e.number,Object(a.jsx)("button",{onClick:function(){return n(e.id)},type:"button",className:S.a.btn,children:"Delete"})]},e.id)}))})},W=n(8),P=n.n(W),L=function(e){var t=e.changeFilter,n=e.value;return Object(a.jsx)("label",{children:Object(a.jsx)("input",{onChange:t,value:n,type:"text"})})},A=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){e.setState((function(e){return{contacts:[].concat(Object(v.a)(e.contacts),[t])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.checkContact=function(t){var n=e.state.contacts.find((function(e){return e.name===t}));return n&&alert("".concat(t," is already in contacts.")),!n},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilter=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLocaleLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(c)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this.state,n=t.contacts,c=t.filter;return e=c?this.getFilter():n,Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(x,{children:[Object(a.jsxs)("div",{className:P.a.phonebookWrapper,children:[Object(a.jsx)("h1",{className:P.a.title,children:"Phonebook"}),Object(a.jsx)(w,{checkContact:this.checkContact,addContact:this.addContact,isValidInputContact:this.isValidInputContact})]}),Object(a.jsxs)("div",{className:P.a.contactsWrapper,children:[Object(a.jsx)("h1",{className:"contacts",children:"Contacts"}),Object(a.jsx)("p",{children:"Find contact by name"}),Object(a.jsx)(L,{value:c,changeFilter:this.changeFilter}),Object(a.jsx)("ul",{className:P.a.list,children:Object(a.jsx)(y,{deleteContact:this.deleteContact,contacts:e})})]})]})})}}]),n}(c.Component),B=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(A,{})})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={title:"_phonebook_title__3-WCl",list:"_phonebook_list__1vpdP",phonebookWrapper:"_phonebook_phonebookWrapper__UQP4M"}}},[[31,1,2]]]);
//# sourceMappingURL=main.4bb6e5cc.chunk.js.map