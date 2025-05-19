import { memo } from "react";

function EmailInput({
  errors,
  domain,
  id,
  idRef,
  onChangeEmail,
  onChangeDomain,
}) {
  const domains = ['naver.com', 'gmail.com', 'hanmail.com', 'kakao.com'];

  return (
    <div>
      <label htmlFor='id' style={{ display: 'inline-block', width: '80px' }}>
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
      {errors.idError && <div style={{ color: 'red' }}>{errors.idError}</div>}
    </div>
  );
}

export default memo(EmailInput);