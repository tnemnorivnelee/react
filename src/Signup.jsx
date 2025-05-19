import { useRef, useState } from "react";
import "./App.css";
import EmailInput from "./components/EmailInput";
import Input from "./components/input";
import useEmailInput from "./hooks/useEmailInput";
import useInput from "./hooks/useInput";

function Signup() {
  const [nickname, nicknameRef, onChangeNickname] = useInput("");
  const [phone, phoneRef, onChangePhone] = useInput("");
  const [password, passwordRef, onChangePassword] = useInput("");
  const counterRef = useRef(0);
  const [errors, setErrors] = useState({});
  const { id, idRef, onChangeEmail, domain, onChangeDomain } = useEmailInput();

  const onLogin = () => {
    counterRef.current += 1;

    if (!id.trim()) {
      setErrors({ ...errors, idError: "아이디를 입력해주세요" });
      // document.getElementById('id').focus();
      idRef.current.focus();
      return;
    }
    if (!nickname.trim()) {
      setErrors({ passwordError: "비밀번호를 입력해주세요" });
      // document.getElementById('password').focus();
      nicknameRef.current.focus();
      return;
    }
    setErrors({});
  };



  // 함수의 참조를 유지하고 싶으면 useCallback을 사용해야 한다.
  // useMemo는 값(객체)의 참조를 유지하고 싶을 때 사용한다.

  return (
    <>
      <div style={{ textAlign: "left" }} className="login-form">
        <EmailInput
          errors={errors}
          domain={domain}
          id={id}
          idRef={idRef}
          onChangeEmail={onChangeEmail}
          onChangeDomain={onChangeDomain}
        />
        <Input
          id="password"
          text="비밀번호"
          ref={passwordRef}
          onChange={onChangePassword}
          value={password}
          error={errors.passwordError}
          type="password"
        />
        <Input
          id="nickname"
          text="닉네임"
          ref={nicknameRef}
          onChange={onChangeNickname}
          value={nickname}
          error={errors.nickname}
        />
        <Input
          id="phone"
          text="전화번호"
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
