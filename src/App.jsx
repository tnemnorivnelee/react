import { useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [domain, setDomain] = useState('naver.com');

  const domains = ['naver.com', 'gmail.com', 'hanmail.com', 'kakao.com'];

  console.log('App', id);

  const onChangeEmail = (e) => {
    console.log('beforeChange', id); // ''
    setId(e.target.value);
    console.log('afterChange', id); // ''
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
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
        <input type='password' />
        <button>로그인</button>
      </div>
      <div>회원가입</div>
    </>
  );
}

export default App;
