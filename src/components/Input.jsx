export default function Input({
  id,
  text,
  ref,
  onChange,
  value,
  error,
  type = 'text',
}) {
  return (
    <div>
      <label htmlFor={id} style={{ display: 'inline-block', width: '80px' }}>
        {text}
      </label>
      <input ref={ref} type={type} id={id} value={value} onChange={onChange} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}
