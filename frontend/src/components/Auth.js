import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("signin");

  const authenticateSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mr-10">
          <h1>Please {auth} </h1>
        </div>
        <form>
          <div className="mt-4 p-6">
            <label className="mr-2 uppercase font-bold">email</label>
            <input
              className="w-[40vw] h-10 text-center"
              type="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="mr-2 uppercase font-bold">password</label>
            <input
              className="w-[40vw] h-10 text-center"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {auth === "signin" ? (
              <h1 onClick={() => setAuth("signup")}>Dont have an account ?</h1>
            ) : (
              <h6 onClick={() => setAuth("signin")}>
                Already have an account ?
              </h6>
            )}
            <button onClick={authenticateSubmit}>{auth}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
