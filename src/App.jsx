import { useState } from 'react';
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
  const [domain, setDomain] = useState('naver.com');
  const [password, setPassword] = useState('');
  const [fullEmail, setFullEmail] = useState('');
  // 파생상태 가급적 사용하지 않는 것을 추천

  const domains = ['naver.com', 'gmail.com', 'hanmail.com', 'kakao.com'];

  console.log('App', id);

  const onChangeEmail = (e) => {
    setId(e.target.value);
    setFullEmail(`${e.target.value}@${domain}`);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
    setFullEmail(`${id}@${e.target.value}`);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => {
    console.log(fullDomain, password);
  };

  return (
    <>
      <div>
        <div>
          <input type='text' value={id} onChange={onChangeEmail} />
          {domain === '' ? null : <span>@</span>}
          <select name='' id='' value={domain} onChange={onChangeDomain}>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
            <option value=''>직접입력</option>
          </select>
        </div>
        <input type='password' value={password} onChange={onChangePassword} />
        <div>{fullDomain}</div>
        <button onClick={onLogin}>로그인</button>
      </div>
      <div>회원가입</div>
    </>
  );
}

export default App;
