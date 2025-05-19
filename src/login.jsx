import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./App.css";
import EmailInput from "./components/EmailInput";
import Input from "./components/input";
import useEmailInput from "./hooks/useEmailInput";
import useInput from "./hooks/useInput";

function Login() {
  const [password, passwordRef, onChangePassword] = useInput("");
  const { id, idRef, onChangeEmail, domain, onChangeDomain } = useEmailInput();
  const counterRef = useRef(0);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => {
    counterRef.current += 1;

    if (!id.trim()) {
      setErrors({ ...errors, idError: "아이디를 입력해주세요" });
      // document.getElementById('id').focus();
      idRef.current.focus();
      return;
    }
    if (!password.trim()) {
      setErrors({ passwordError: "비밀번호를 입력해주세요" });
      // document.getElementById('password').focus();
      passwordRef.current.focus();
      return;
    }
    setErrors({});
    console.log(fullDomain, password);
  };

  const onSignup = () => {
    navigate("/signup");
  }

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
        {errors.passwordError && (
          <div style={{ color: "red" }}>{errors.passwordError}</div>
        )}
        {/* <div>{fullDomain}</div> */}
        <button onClick={onLogin}>로그인</button>
      </div>
      <button onClick={onSignup}>회원가입</button>
    </>
  );
}

export default Login;
