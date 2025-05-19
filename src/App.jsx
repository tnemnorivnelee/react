import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Link to="/signup">회원가입</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default App;
