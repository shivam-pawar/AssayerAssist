import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRef, useState } from "react";
import { validateData } from "../utils/helperMethods";
import { addUserDetails } from "../slices/userDetails";
import { useDispatch } from "react-redux";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const dispatch = useDispatch();
  const handleLogin = () => {
    const validationMessage: any = validateData(
      emailRef?.current?.value,
      passwordRef?.current?.value
    );
    setErrorMessage(validationMessage);
    if (validationMessage) return;

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        dispatch(addUserDetails(authUser));

        localStorage.setItem("user", JSON.stringify(authUser));

        location.reload();
      })
      .catch((error) => {
        const errorCode: any = error.code;
        const errorMessage: any = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      <div
        className="lg:w-1/2 bg-cover bg-center h-1/2 lg:h-screen mt-4 lg:mt-0"
        style={{
          backgroundImage: `url('/assets/login.jpg')`,
          display: "block",
        }}
      ></div>

      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded shadow-lg w-full lg:w-[80%]">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Login
            </h2>
          </div>
          <form onSubmit={(e: any) => e.preventDefault()}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                ref={emailRef}
                id="username"
                name="username"
                className="w-full p-2 border rounded"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                ref={passwordRef}
                id="password"
                name="password"
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
              />
              <p className="text-red-600 font-medium">{errorMessage}</p>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                onClick={handleLogin}
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
