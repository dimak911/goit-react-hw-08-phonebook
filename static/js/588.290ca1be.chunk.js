"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[588],{4588:function(e,a,r){r.r(a);var i=r(885),n=r(5705),s=r(2797),l=r(6015),t=r(803),o=r(4565),d=r(9917),m=r(9541),c=r(1087),u=r(8584),h=r(5985),p=r(2791),x=r(5048),w=r(188),g=r(184);a.default=function(){var e=(0,u.YA)(),a=(0,i.Z)(e,2),r=a[0],f=a[1],v=f.data,b=f.isSuccess,y=f.isError,S=(0,x.I0)(),j=(0,n.TA)({initialValues:{email:"1test@test.com",password:"1qaz2wsX"},validationSchema:s.Ry({email:s.Z_().email("Must be a valid email").max(255).required("Email is required"),password:s.Z_().max(255).required("Password is required")}),onSubmit:function(e){var a=e.email,i=e.password;r({email:a,password:i})}}),Z=j.handleSubmit,k=j.touched,B=j.errors,_=j.handleBlur,q=j.handleChange,A=j.values,C=j.isSubmitting,E=j.setSubmitting;return(0,p.useEffect)((function(){(b||y)&&E(!1),b&&(h.Am.success("Login is successful"),S((0,w.KL)(v))),y&&h.Am.error("Something went wrong. Try again.")}),[v,S,y,b,E]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(l.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,g.jsx)(t.Z,{maxWidth:"sm",children:(0,g.jsxs)("form",{onSubmit:Z,children:[(0,g.jsxs)(l.Z,{sx:{my:3},children:[(0,g.jsx)(o.Z,{color:"textPrimary",variant:"h4",children:"Sign in"}),(0,g.jsx)(o.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Sign in on the internal platform"})]}),(0,g.jsx)(d.Z,{error:Boolean(k.email&&B.email),fullWidth:!0,helperText:k.email&&B.email,label:"Email Address",margin:"normal",name:"email",onBlur:_,onChange:q,type:"email",value:A.email,variant:"outlined"}),(0,g.jsx)(d.Z,{error:Boolean(k.password&&B.password),fullWidth:!0,helperText:k.password&&B.password,label:"Password",margin:"normal",name:"password",onBlur:_,onChange:q,type:"password",value:A.password,variant:"outlined"}),(0,g.jsx)(l.Z,{sx:{py:2},children:(0,g.jsx)(m.Z,{color:"primary",disabled:C,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In Now"})}),(0,g.jsxs)(o.Z,{color:"textSecondary",variant:"body2",children:["Don't have an account? ",(0,g.jsx)(c.rU,{to:"/register",children:"Sign Up"})]})]})})})})}}}]);
//# sourceMappingURL=588.290ca1be.chunk.js.map