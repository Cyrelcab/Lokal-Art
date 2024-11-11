const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="relative w-full md:w-1/2">
        <div
          className="bg-image w-full flex bg-blue-100 p-8 md:p-0 h-screen"
          style={{ aspectRatio: "16/9" }}
        ></div>
        <div className="absolute top-8 left-8">
          <img src="/images/logo.png" alt="LokalArt Logo" className="w-48" />
        </div>
      </div>

      {/*login field*/}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-8">Login</h1>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                {/* Add eye icon for password visibility toggle */}
                👁️
              </button>
            </div>

            <button className="w-full py-2 px-4 bg-cyan-400 text-white rounded-full hover:bg-cyan-500 transition-colors">
              Login
            </button>

            <p className="text-center mt-4">
              Don't have an account?{" "}
              <a href="/signup" className="text-cyan-400 hover:underline">
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
