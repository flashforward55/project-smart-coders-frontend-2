"use strict";(self.webpackChunkproject_smart_coders_frontend_2=self.webpackChunkproject_smart_coders_frontend_2||[]).push([[892],{88892:function(e,s,a){a.r(s),a.d(s,{default:function(){return I}});var i,r,n,o,t=a(65451),l=a(33310),d=a(29439),m=a(72791),c=a(55705),p=a(8007),h=a(59434),u=a(57689),x=a(88683),w=a(69273),j=a(3710),y=a(29569),g=a(67107),R=a(44507),f=a(46989),b=a(17834),v=a(65218),Z=a(80184),k=(0,g.Z)({palette:{primary:{main:"#8D9698"}}}),E=p.Ry().shape({email:p.Z_().email("This is an ERROR email").required("Please enter your email").matches(/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/),password:p.Z_().min(8,"Need to be more than 8 symbols!").required("Please enter your password").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/)}),O=function(){var e=(0,u.s0)(),s=(0,h.I0)(),a=(0,m.useState)(!1),i=(0,d.Z)(a,2),r=i[0],n=i[1],o=(0,m.useState)(!1),l=(0,d.Z)(o,2),p=l[0],g=l[1],O=(0,b.Z)(),T=O.isLoading,P=O.isLoggedIn,L=O.error,_=(0,m.useState)(!1),C=(0,d.Z)(_,2),S=C[0],I=C[1];return(0,m.useEffect)((function(){L.status&&S&&(401===L.status||403===L.status?n(!0):(0,v.Am)(L.message))}),[L.message,L.status,S]),(0,Z.jsxs)(x.PQ,{children:[(0,Z.jsx)(x.eb,{children:"Log In"}),(0,Z.jsx)(c.J9,{initialValues:{email:"",password:""},validateOnChange:!1,validateOnBlur:!0,validationSchema:E,onSubmit:function(a,i){var r=i.resetForm;I(!0),s((0,w.x4)({email:a.email,password:a.password})),P&&(r(),e("/calendar"))},children:function(e){var s=e.errors,a=e.touched;return(0,Z.jsxs)(Z.Fragment,{children:[T&&(0,Z.jsx)(f.a,{}),(0,Z.jsxs)(x.Gq,{children:[(0,Z.jsxs)(x.IT,{children:[(0,Z.jsx)(x.eH,{htmlFor:"email",$validate:("Please enter your email"===s.email&&a.email?"empty":(s.email&&("This is an ERROR email"===s.email||s.email.includes("match"))||r)&&"error")||a.email&&"okay",children:"Email"}),(0,Z.jsxs)(x.RL,{$validate:("Please enter your email"===s.email&&a.email?"empty":(s.email&&("This is an ERROR email"===s.email||s.email.includes("match"))||r)&&"error")||a.email&&"okay",children:[(0,Z.jsx)(x.ob,{name:"email",type:"email",placeholder:"nadiia@gmail.com"}),(s.email&&("This is an ERROR email"===s.email||s.email.includes("match"))||r)&&(0,Z.jsx)(x.xL,{children:(0,Z.jsx)(t.W.ErrorAuth,{})}),a.email&&!s.email&&!r&&(0,Z.jsx)(x.xL,{children:(0,Z.jsx)(t.W.GoodAuth,{})})]}),"Please enter your email"===s.email&&a.email&&(0,Z.jsx)(x.Oy,{children:s.email})||s.email&&("This is an ERROR email"===s.email||s.email.includes("match"))&&(0,Z.jsx)(x.BD,{children:"This is an ERROR email"})||r&&(0,Z.jsx)(x.BD,{children:"Email or password is uncorrect"})||a.email&&(0,Z.jsx)(x.ow,{children:"This is an CORRECT email"})]}),(0,Z.jsxs)(x.IT,{children:[(0,Z.jsx)(x.eH,{htmlFor:"password",$validate:("Please enter your password"===s.password&&a.password?"empty":(s.password&&a.password||r)&&"error")||a.password&&"okay",children:"Password"}),(0,Z.jsxs)(x.RL,{$validate:("Please enter your password"===s.password&&a.password?"empty":(s.password&&a.password||r)&&"error")||a.password&&"okay",children:[(0,Z.jsx)(x.ob,{name:"password",type:p?"text":"password",placeholder:"\u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \u2022"}),(0,Z.jsx)(x.qM,{type:"button",onClick:function(){g(!p)},children:(0,Z.jsx)(R.Z,{theme:k,children:p?(0,Z.jsx)(y.Z,{color:"primary"}):(0,Z.jsx)(j.Z,{color:"primary"})})})]}),"Please enter your password"===s.password&&a.password&&(0,Z.jsx)(x.Oy,{children:s.password})||s.password&&s.password.includes("password must match the following")&&a.password&&(0,Z.jsx)(x.le,{children:"Password should contain at least 1 number and 1 letter"})||s.password&&a.password&&(0,Z.jsx)(x.BD,{children:s.password})||r&&(0,Z.jsx)(x.BD,{children:"Email or password is uncorrect"})||a.password&&(0,Z.jsx)(x.ow,{children:"This is an CORRECT password"})]}),(0,Z.jsxs)(x.Sn,{type:"submit",children:["Log In",(0,Z.jsx)(t.W.LoginWhiteIcon,{})]})]})]})}})]})},T=a(30168),P=a(76487),L=P.default.div(i||(i=(0,T.Z)(["\n  margin: 0 auto;\n  width: 100%;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: var(--LogReg-Bckg-Color);\n  position: relative;\n"]))),_=P.default.div(r||(r=(0,T.Z)(["\n  position: absolute;\n  top: 50%;              \n  left: 50%;         \n  width: 100%;\n  padding: 0 15px;       \n  transform: translate(-50%, -50%);\n  margin: 0 auto;\n"]))),C=P.default.picture(n||(n=(0,T.Z)(["\n  position: absolute;\n  bottom: 19px;\n  right: 60px;\n"]))),S=P.default.img(o||(o=(0,T.Z)(["\n  display:none;\n  @media (min-width: 1440px) {\n    display:block;\n  }\n"]))),I=function(){return(0,Z.jsxs)(L,{children:[(0,Z.jsxs)(_,{children:[(0,Z.jsx)(O,{}),(0,Z.jsx)(l.E,{path:"/register",text:"Sign Up"})]}),(0,Z.jsxs)(C,{children:[(0,Z.jsx)("source",{srcSet:"".concat(t.M.loginx1," 1x, ").concat(t.M.loginx2," 2x"),type:"image/jpg",media:"(min-width: 1440px)"}),(0,Z.jsx)(S,{srcSet:"".concat(t.M.loginx1," 1x, ").concat(t.M.loginx2," 2x"),alt:"Quickly come in and write down your tasks for the day!"})]})]})}}}]);
//# sourceMappingURL=892.cc0133fb.chunk.js.map