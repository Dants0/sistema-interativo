import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Envelope, Eye, EyeClosed, LockSimple } from 'phosphor-react'
import logo from '../../assets/imgs/logo.svg'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })

  const [passwordShown, setPasswordShown] = useState(false);

  const [loading, setLoading] = useState(false);
  let nav = useNavigate()

  useEffect(() => {
    if (!loading && localStorage.getItem('token') !== null) {
      nav('/home')
    }
  }, [loading, nav])

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (credentials.username !== 'admin' && credentials.password !== '123') {
      alert('Credentials incorrect.')
    } else {
      setTimeout(() => {
        localStorage.setItem('token', 'token');
        setLoading(false);
        console.log('Redirecionado...')
      }, 2000)
      setLoading(true)
      alert('Credentials correct.')
    }
    return console.log(credentials.username, credentials.password)
  }

  const showPassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <>
      <div className={styles.container_login}>
        <header>
          <img src={logo} alt="Login_Logo" className={styles.login_logo} />
        </header>
        <div className={styles.container_form_user}>
          <div className={styles.box_user}>
            <Envelope size={26} color="#1e58b6" weight="thin" />
            <input type="text" className={styles.login_user} placeholder='Usuário' name='username' onChange={handleChange} />
          </div>
          <div className={styles.box_user}>
            <LockSimple size={26} color="#1e58b6" weight="thin" />
            <input type={passwordShown ? "text" : "password"} className={styles.login_user} placeholder='Senha' name='password' onChange={handleChange} />
            {
              passwordShown ? <Eye size={26} color="#1e58b6" weight="thin" onClick={showPassword} className={styles.eyes} /> : <EyeClosed size={26} color="#1e58b6" weight="thin" onClick={showPassword} className={styles.eyes} />
            }
          </div>
        </div>
        <button onClick={validate} className={styles.btn_validate}>Login</button>
      </div>
    </>
  )
}

export default Login