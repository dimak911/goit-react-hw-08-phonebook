"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[588],{4588:function(e,a,r){r.r(a);var i=r(885),n=r(5705),s=r(2797),l=r(6015),t=r(803),o=r(4565),d=r(9917),m=r(9541),c=r(1087),u=r(8584),h=r(5985),p=r(2791),x=r(184);a.default=function(){var e=(0,u.YA)(),a=(0,i.Z)(e,2),r=a[0],w=a[1],g=w.isSuccess,f=w.isError,v=(0,n.TA)({initialValues:{email:"1test@test.com",password:"1qaz2wsX"},validationSchema:s.Ry({email:s.Z_().email("Must be a valid email").max(255).required("Email is required"),password:s.Z_().max(255).required("Password is required")}),onSubmit:function(e){var a=e.email,i=e.password;r({email:a,password:i})}}),b=v.handleSubmit,y=v.touched,S=v.errors,j=v.handleBlur,Z=v.handleChange,k=v.values,B=v.isSubmitting,_=v.setSubmitting;return(0,p.useEffect)((function(){(g||f)&&_(!1),g&&h.Am.success("Login is successful"),f&&h.Am.error("Something went wrong. Try again.")}),[f,g,_]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(l.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,x.jsx)(t.Z,{maxWidth:"sm",children:(0,x.jsxs)("form",{onSubmit:b,children:[(0,x.jsxs)(l.Z,{sx:{my:3},children:[(0,x.jsx)(o.Z,{color:"textPrimary",variant:"h4",children:"Sign in"}),(0,x.jsx)(o.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Sign in on the internal platform"})]}),(0,x.jsx)(d.Z,{error:Boolean(y.email&&S.email),fullWidth:!0,helperText:y.email&&S.email,label:"Email Address",margin:"normal",name:"email",onBlur:j,onChange:Z,type:"email",value:k.email,variant:"outlined"}),(0,x.jsx)(d.Z,{error:Boolean(y.password&&S.password),fullWidth:!0,helperText:y.password&&S.password,label:"Password",margin:"normal",name:"password",onBlur:j,onChange:Z,type:"password",value:k.password,variant:"outlined"}),(0,x.jsx)(l.Z,{sx:{py:2},children:(0,x.jsx)(m.Z,{color:"primary",disabled:B,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In Now"})}),(0,x.jsxs)(o.Z,{color:"textSecondary",variant:"body2",children:["Don't have an account? ",(0,x.jsx)(c.rU,{to:"/register",children:"Sign Up"})]})]})})})})}}}]);
//# sourceMappingURL=588.97b234c0.chunk.js.map