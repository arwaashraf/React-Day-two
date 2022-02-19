import "./App.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [register, setRegister] = useState(false);
  useEffect(() => {
    if (localStorage && localStorage.getItem("user")) {
      setRegister(true);
    }
  }, []);
  return (
    <>
      {register ? <LoginForm /> : <RegisterForm />}
      <ToDo />
    </>
  );
}

export default App;
