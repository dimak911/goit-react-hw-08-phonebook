"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[50],{50:function(e,a,r){r.r(a);var n=r(885),i=r(5705),l=r(2797),o=r(6015),s=r(803),t=r(4565),m=r(9917),d=r(9541),u=r(1087),c=r(8584),h=r(2791),x=r(5985),p=r(184);a.default=function(){var e=(0,c.MK)(),a=(0,n.Z)(e,2),r=a[0],w=a[1],g=w.isSuccess,v=w.isError,f=(0,i.TA)({initialValues:{name:"",email:"",password:""},validationSchema:l.Ry({name:l.Z_().max(255).required("First name is required"),email:l.Z_().email("Must be a valid email").max(255).required("Email is required"),password:l.Z_().max(255).required("Password is required")}),onSubmit:function(e){var a=e.name,n=e.email,i=e.password;r({name:a,email:n,password:i})}}),b=f.handleSubmit,y=f.touched,Z=f.errors,j=f.handleBlur,S=f.handleChange,B=f.values,C=f.isSubmitting,_=f.setSubmitting;return(0,h.useEffect)((function(){(g||v)&&_(!1),g&&x.Am.success("User created"),v&&x.Am.error("Something went wrong. Try again.")}),[v,g,_]),(0,p.jsx)(o.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%"},children:(0,p.jsx)(s.Z,{maxWidth:"sm",children:(0,p.jsxs)("form",{onSubmit:b,children:[(0,p.jsxs)(o.Z,{sx:{my:3},children:[(0,p.jsx)(t.Z,{color:"textPrimary",variant:"h4",children:"Create a new account"}),(0,p.jsx)(t.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Use your email to create a new account"})]}),(0,p.jsx)(m.Z,{error:Boolean(y.name&&Z.name),fullWidth:!0,helperText:y.name&&Z.name,label:"Name",margin:"normal",name:"name",onBlur:j,onChange:S,value:B.name,variant:"outlined"}),(0,p.jsx)(m.Z,{error:Boolean(y.email&&Z.email),fullWidth:!0,helperText:y.email&&Z.email,label:"Email Address",margin:"normal",name:"email",onBlur:j,onChange:S,type:"email",value:B.email,variant:"outlined"}),(0,p.jsx)(m.Z,{error:Boolean(y.password&&Z.password),fullWidth:!0,helperText:y.password&&Z.password,label:"Password",margin:"normal",name:"password",onBlur:j,onChange:S,type:"password",value:B.password,variant:"outlined"}),(0,p.jsx)(o.Z,{sx:{py:2},children:(0,p.jsx)(d.Z,{color:"primary",disabled:C,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign Up Now"})}),(0,p.jsxs)(t.Z,{color:"textSecondary",variant:"body2",children:["Have an account? ",(0,p.jsx)(u.rU,{to:"/login",children:"Sign In"})]})]})})})}}}]);
//# sourceMappingURL=50.69590635.chunk.js.map