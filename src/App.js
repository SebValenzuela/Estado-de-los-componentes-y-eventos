import { useState } from "react";
import Alert from "./components/Alert";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [alert, setAlert] = useState ({
    mensaje : "",
    color : ""
  });

  return (
    <div className="container">
      <Login setAlert={setAlert} />

      {alert.mensajes != "" ? <Alert color={alert.color}>{alert.mensaje}</Alert> : null}
    </div>
  );
}

export default App;