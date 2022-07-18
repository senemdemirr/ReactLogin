import React from 'react'
import style from './style.module.css'
import {useFormik} from 'formik'
import validationSchema from '../validations'
import {Link} from 'react-router-dom'
import axios from 'axios'


function Signup() {
  const {handleSubmit , handleChange , handleBlur , values, errors,touched} = useFormik({
    initialValues:{
      email:'',
      password:'',
      passwordConfirm:'',
      username:''
    },
    onSubmit : values => {
      console.log(values)
      axios.post(`${process.env.REACT_APP_API_URL}/users`, {
        "email" : values.email,
        "password": values.password,
        "username":values.username
      }).then((response) => {
        console.log(`${response.data.email} email adresi için kayıt oluşturuldu`);

      }).catch((err) => {
        console.log(err)
      });
    },
    validationSchema,

  })
  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit}>
        <label>Email</label>
        <input
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        />

        {errors.email && touched.email &&(
          <div className={style.error}>
            {errors.email}
          </div>
        )}
        <br />
        

        <label>Username</label>
        <input
        name='username'
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        />

        {errors.username && touched.username &&(
          <div className={style.error}>
            {errors.username}
          </div>
        )}
        <br />
        

        <label>Password</label>
        <input
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        />

        {errors.password && touched.password &&(
          <div className={style.error}>
            {errors.password}
          </div>
        )}
        <br />
        

        <label>Confirm password</label>
        <input 
        name='passwordConfirm'
        value={values.passwordConfirm}
        onChange={handleChange}
        onBlur={handleBlur}
        />

        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className={style.error}>
            {errors.passwordConfirm}
          </div>
        )}
        <br />
        

        <button className={style.buton} type='submit'> Sign up</button>
      </form>
      <Link to='/'>Back to Log in</Link>
    </div>
  )
}

export default Signup