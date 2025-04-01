import { useRef, useState } from 'react';
import './App.css';

// function veryHeavyComputation() {
//   let result = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     result += i;
//   }
//   return result;
// }

function App() {
  // const [id, setId] = useState(veryHeavyComputation);
  const [id, setId] = useState('');
  // 두번째 렌더링 호출 때 초기값 완전 무시, set으로 설정된 값으로..
  const idRef = useRef(null); // {current: null }로 초기화됨
  const passwordRef = useRef(null); // {current: null }로 초기화됨
  const [domain, setDomain] = useState('naver.com');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  // const [fullEmail, setFullEmail] = useState('');
  // 파생상태 가급적 사용하지 않는 것을 추천

  const domains = ['naver.com', 'gmail.com', 'hanmail.com', 'kakao.com'];

  console.log('App', id);

  const onChangeEmail = (e) => {
    setId(e.target.value);
    // setFullEmail(`${e.target.value}@${domain}`);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
    // setFullEmail(`${id}@${e.target.value}`);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => {
    if (!id.trim()) {
      setErrors({ ...errors, idError: '아이디를 입력해주세요' });
      // document.getElementById('id').focus();
      idRef.current.focus();
      return;
    }
    if (!password.trim()) {
      setErrors({ passwordError: '비밀번호를 입력해주세요' });
      // document.getElementById('password').focus();
      passwordRef.current.focus();
      return;
    }
    setErrors({});
    console.log(fullDomain, password);
  };

  return (
    <>
      <div style={{ textAlign: 'left' }} className='login-form'>
        <div>
          <label
            htmlFor='id'
            style={{ display: 'inline-block', width: '80px' }}
          >
            아이디
          </label>
          <input ref={idRef} type='text' value={id} onChange={onChangeEmail} />
          {domain === '' ? null : <span>@</span>}
          <select name='' id='' value={domain} onChange={onChangeDomain}>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
            <option value=''>직접입력</option>
          </select>
          {errors.idError && (
            <div style={{ color: 'red' }}>{errors.idError}</div>
          )}
        </div>
        <div>
          <label
            htmlFor='password'
            style={{ display: 'inline-block', width: '80px' }}
          >
            비밀번호
          </label>
          <input
            ref={passwordRef}
            type='password'
            id='password'
            value={password}
            onChange={onChangePassword}
          />
        </div>
        {errors.passwordError && (
          <div style={{ color: 'red' }}>{errors.passwordError}</div>
        )}
        {/* <div>{fullDomain}</div> */}
        <button onClick={onLogin}>로그인</button>
      </div>
      <div>회원가입</div>
    </>
  );
}

export default App;
