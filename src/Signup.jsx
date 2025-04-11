import { useRef, useState } from 'react';
import './App.css';
import EmailInput from './components/EmailInput';
import Input from './components/input';

function Signup() {
  const nicknameRef = useRef(null); // {current: null }로 초기화됨
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState('');
  const phoneRef = useRef(null); // {current: null }로 초기화됨
  const passwordRef = useRef(null); // {current: null }로 초기화됨
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [domain, setDomain] = useState('naver.com');
  const idRef = useRef(null); // {current: null }로 초기화됨
  const [nickname, setNickname] = useState('');

  console.log('App', id);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeEmail = (e) => {
    setId(e.target.value);
    // setFullEmail(`${e.target.value}@${domain}`);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
    // setFullEmail(`${id}@${e.target.value}`);
  };

  const onLogin = () => {
    if (!id.trim()) {
      setErrors({ ...errors, idError: '아이디를 입력해주세요' });
      // document.getElementById('id').focus();
      idRef.current.focus();
      return;
    }
    if (!nickname.trim()) {
      setErrors({ passwordError: '비밀번호를 입력해주세요' });
      // document.getElementById('password').focus();
      nicknameRef.current.focus();
      return;
    }
    setErrors({});
  };

  return (
    <>
      <div style={{ textAlign: 'left' }} className='login-form'>
        <EmailInput
          errors={errors}
          domain={domain}
          id={id}
          idRef={idRef}
          onChangeEmail={onChangeEmail}
          onChangeDomain={onChangeDomain}
        />
        <Input
          id='password'
          text='비밀번호'
          ref={passwordRef}
          onChange={onChangePassword}
          value={password}
          error={errors.passwordError}
          type='password'
        />
        <Input
          id='nickname'
          text='닉네임'
          ref={nicknameRef}
          onChange={onChangeNickname}
          value={nickname}
          error={errors.nickname}
        />
        <Input
          id='phone'
          text='전화번호'
          ref={phoneRef}
          onChange={onChangePhone}
          value={phone}
          error={errors.phoneError}
        />
        <button onClick={onLogin}>전화번호</button>
      </div>

      <div>로그인</div>
    </>
  );
}

export default Signup;
