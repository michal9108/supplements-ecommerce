import { Link } from "react-router-dom";
import H2 from "./H2";
import { AuthFormType } from "./types";

export default function AuthForm({
  title,
  buttonText,
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
}: AuthFormType) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <H2 color="black-900">BB</H2>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
            >
              {buttonText}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {title === "Sign up to your new account" ? (
            <>
              Already a user?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-primary-300 hover:text-primary-300"
              >
                Log in
              </Link>
            </>
          ) : (
            <>
              You don't have an account ?{" "}
              <Link
                to="/signup"
                className="font-semibold leading-6 text-primary-300 hover:text-primary-300"
              >
                Sign up here
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
