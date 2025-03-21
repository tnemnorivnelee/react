import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [domain, setDomain] = useState('naver.com');

  const domains = ['naver.com', 'gmail.com', 'hanmail.com'];

  return (
    <>
      <div>
        <div>
          <input type='text' />
          {domain === '' ? null : <span>@</span>}
          <select name='' id=''>
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
