import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppBrowserRouterArray from "./AppBrowserRouter";
import UserContext, { defaultUser } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState(defaultUser);
  //
  console.log("App user: ", user);
  //
  return (
    <Routes>
      <UserContext.Provider value={{ user, setUser }}>
        {AppBrowserRouterArray.forEach((routerArrayItem) => {
          return (
            <Route
              path={routerArrayItem.path}
              element={routerArrayItem.element}
              allowedRoles={routerArrayItem.allowedRoles}
            />
          );
        })}
      </UserContext.Provider>
    </Routes>
  );
}

export default App;