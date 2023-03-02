import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { CheckIcon, UserIcon, LockClosedIcon } from "@heroicons/react/outline";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { observable, makeObservable } from "mobx";

import { observer, inject } from "mobx-react";
@inject("store")
@observer
class Login extends Component {
  @observable email = "";
  @observable password = "";
  @observable fname = "";
  @observable lname = "";
  @observable errorMessage = "";

  constructor() {
    super();
    makeObservable(this);
  }

  onChange = (val) => {
    this.currentPromptOption = val;
    console.log("That", this.currentPromptOption);
  };

  onChangeAny = (val, attr) => {
    this[attr] = val;
    this.errorMessage = "";
  };

  onLogin = async (e) => {
    try {
      e.preventDefault();
      let data = await this.props.store.api
        .post("/auth/signin", {
          email: this.email,
          password: this.password,
        })
        .then(({ data }) => data);
      this.props.store.loginWithDataTokenAndProfile(data);
    } catch (err) {
      console.log(err);
      console.log(err?.response?.data?.message);
      if (err?.response?.data?.message) {
        this.errorMessage = err?.response?.data?.message;
      }
    }
  };

  onSignup = async (e) => {
    try {
      e.preventDefault();
      this.errorMessage = "";
      console.log("signup here");
      let data = await this.props.store.api
        .post("/auth/signup", {
          email: this.email,
          password: this.password,
          fname: this.fname,
          lname: this.lname,
          referral: this.props.store.referral,
        })
        .then(({ data }) => data);
      console.log(`onSignup`, data);
      if (data.token && data.profile) {
        this.props.store.loginWithDataTokenAndProfile(data);
      }
    } catch (err) {
      console.log(err);
      console.log(err?.response?.data?.message);
      if (err?.response?.data?.message) {
        this.errorMessage = err?.response?.data?.message;
      }
    }
  };

  // Currently Selected Input Option

  render() {
    return (
      <>
        <Helmet>
          <title>{`Login - LaunchLab Ai`}</title>
        </Helmet>
        <div className="container mx-auto lg:px-4 py-4 min-h-screen flex flex-col md:items-center md:justify-center">
          <div className="text-center mb-6">
            <Logo />
            <div className="text-3xl md:text-5xl relative font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-600 mb-4">
              LaunchLab<span className="font-normal "> Ai</span>
              <div className="absolute top-0 ml-3 left-full bg-gradient-to-r from-gray-500 to-gray-500 text-white text-sm px-2 py-0.5 hidden md:inline-block rounded-md font-normal ">
                gpt3
              </div>
            </div>
          </div>
          <div
            className={`min-w-full md:min-w-0 bg-white rounded-xl shadow-xl transform transition-all  transition shadow-md hover:shadow-2xl focus:shadow-2xl w-1/2`}
          >
            <div className="align-bottom flex  transform transition-all sm:align-middle transition flex divide-x divide-gray-300 ">
              <NavLink
                to="/login"
                className={`flex-1 justify-center transition py-4 px-4 pr-8 rounded-t-md flex text-${
                  this.props.location.pathname === "/login"
                    ? "gray-800"
                    : "gray-600"
                } font-medium  bg-${
                  this.props.location.pathname === "/login"
                    ? "white"
                    : "gray-300"
                } hover:bg-${
                  this.props.location.pathname === "/login"
                    ? "white"
                    : "gray-100"
                } cursor-pointer`}
              >
                <div
                  className={`transition mr-4  flex-shrink-0 inline-flex items-center justify-center text-sm h-6 w-6 rounded-full bg-${
                    this.props.location.pathname === "/login"
                      ? "green-300"
                      : "gray-200"
                  } text-${
                    this.props.location.pathname === "/login" ? "green" : "gray"
                  }`}
                >
                  <CheckIcon
                    className={`transition h-4 w-4 text-${
                      this.props.location.pathname === "/login"
                        ? "green-600"
                        : "gray-400"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={`flex-1 justify-center transition py-4 px-4 pr-8 rounded-t-md flex text-${
                  this.props.location.pathname === "/signup"
                    ? "gray-800"
                    : "gray-600"
                } font-medium  bg-${
                  this.props.location.pathname === "/signup"
                    ? "white"
                    : "gray-300"
                } hover:bg-${
                  this.props.location.pathname === "/signup"
                    ? "white"
                    : "gray-100"
                } cursor-pointer`}
              >
                <div
                  className={`transition mr-4  flex-shrink-0 inline-flex items-center justify-center text-sm h-6 w-6 rounded-full bg-${
                    this.props.location.pathname === "/signup"
                      ? "green-300"
                      : "gray-200"
                  } text-${
                    this.props.location.pathname === "/signup"
                      ? "green"
                      : "gray"
                  }`}
                >
                  <CheckIcon
                    className={`transition h-4 w-4 text-${
                      this.props.location.pathname === "/signup"
                        ? "green-600"
                        : "gray-400"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                Signup
              </NavLink>
            </div>
            <div className="px-4 py-4 md:px-12 md:py-12">
              {/* Sorru */}
              <Switch>
                <Route path="/login">
                  <Logon
                    landingPageUrl={this.props.store.landingPageUrl}
                    email={this.email}
                    password={this.password}
                    signUp={this.signUpWithGoogle}
                    onChange={this.onChangeAny}
                    onLogin={this.onLogin}
                  />
                </Route>
                <Route path="/signup">
                  <Signup
                    email={this.email}
                    password={this.password}
                    fname={this.fname}
                    lname={this.lname}
                    onChange={this.onChangeAny}
                    onSignup={this.onSignup}
                  />
                </Route>
                <Route>
                  <Redirect to="/login" />
                </Route>
              </Switch>
              {this.errorMessage ? (
                <div className="text-red-600 bg-red-50 rounded-md p-1 text-center mt-4">
                  {this.errorMessage}
                </div>
              ) : null}
            </div>
            <a
              href={`https://launchlab-m94e.onrender.com/`}
              className="block text-center bg-gray-100 text-gray-500 text-sm p-3 rounded-b-lg hover:bg-gray-200 cursor-pointer"
            >
              Back to landing page
            </a>
          </div>
        </div>
      </>
    );
  }
}

const Logon = observer(
  ({ active, email, password, onChange, onLogin, landingPageUrl, signUp }) => {
    return (
      <>
        <form onSubmit={onLogin}>
          <div
            className={`mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-${
              email && password ? "green" : "gray"
            }-300  ${email && password ? "bg-green-300" : "bg-gray-300"} `}
          >
            <LockClosedIcon
              className={`h-8 w-8 ${
                active ? "text-green-700" : "text-gray-500"
              } text-${email && password ? "green-700" : "gray-500"}`}
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center ">
            <div className="text-3xl font-medium text-gray-900">Log in</div>
            <p className="text-lg text-gray-500">Login to your account</p>
            <div className="flex flex-col flex-1">
              <label className="text-gray-400 text-sm block mt-4 inline-block text-left">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => onChange(e.target.value, "email")}
                focus="true"
                type="email"
                className="rounded-md text-lg px-4 py-2  border border-gray-300 "
                placeholder="john@smith.com"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-gray-400 text-sm block mt-4 inline-block text-left">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => onChange(e.target.value, "password")}
                type="password"
                className="rounded-md text-lg px-4 py-2  border border-gray-300 inline-block"
                placeholder="*******"
              />
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="hover:bg-gray-600 font-medium rounded-lg text-lg px-4 py-2 bg-gray-500 text-white mt-4 border border-gray-300 inline-block"
              >
                Log in
              </button>
              {/* <div onClick={signUp} className="hover:bg-gray-600 font-medium rounded-lg text-lg px-4 py-2 bg-gray-500 text-white mt-4 border border-gray-300 inline-block" >
						signUp Google
						</div>
						 */}
              <a
                href={`https://www.launchlab.ai`}
                className="mt-4 text-gray-400 text-sm"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </form>
      </>
    );
  }
);

const Signup = observer(
  ({ active, email, password, fname, lname, onChange, onSignup }) => {
    return (
      <>
        {/* onSignup */}
        <form onSubmit={onSignup}>
          <div
            className={`mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-${
              email && password ? "green" : "gray"
            }-300  ${email && password ? "bg-green-300" : "bg-gray-300"} `}
          >
            <UserIcon
              className={`h-8 w-8 ${
                active ? "text-green-700" : "text-gray-500"
              } text-${email && password ? "green-700" : "gray-500"}`}
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center ">
            <div className="text-3xl font-medium text-gray-900">Sign Up</div>
            <p className="text-lg text-gray-500">Create your account</p>
            <div className="md:flex">
              <div className="flex flex-col min-w-0 md:pr-2 flex-1">
                <label className="text-gray-400 text-sm block mt-4 inline-block text-left">
                  First Name
                </label>
                <input
                  value={fname}
                  onChange={(e) => onChange(e.target.value, "fname")}
                  type="text"
                  className="rounded-md text-lg px-4 py-2  border border-gray-300 inline-block w-auto"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col min-w-0 md:pl-2 flex-1">
                <label className="text-gray-400 text-sm block mt-4 inline-block text-left">
                  Last Name
                </label>
                <input
                  value={lname}
                  onChange={(e) => onChange(e.target.value, "lname")}
                  type="text"
                  className="rounded-md text-lg px-4 py-2  border border-gray-300 inline-block w-auto"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm block mt-4 inline-block text-left">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => onChange(e.target.value, "email")}
                focus="true"
                type="email"
                className="rounded-md text-lg px-4 py-2  border border-gray-300 "
                placeholder="john@smith.com"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm block mt-4 inline-block text-left">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => onChange(e.target.value, "password")}
                type="password"
                className="rounded-md text-lg px-4 py-2  border border-gray-300 inline-block"
                placeholder="*******"
              />
            </div>

            <div className="flex flex-col">
              <button
                type="submit"
                className="hover:bg-green-600 bg-green-500 font-medium rounded-lg text-lg px-4 py-2 bg-gray-200 text-white mt-4 border border-gray-300 inline-block"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
);

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-rocket"
    viewBox="0 0 16 16"
    className="w-20 h-20"
  >
    <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z" />
    <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635.85 0 1.7-.207 2.4-.635.067.03.132.056.196.083.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562l-1.499-1.83ZM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935L12 10.445ZM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199ZM8.009 1.073c.063.04.14.094.226.163.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13c-.781 0-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32.09-.076.17-.135.236-.18Z" />
    <path d="M9.479 14.361c-.48.093-.98.139-1.479.139-.5 0-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0l1.079-1.439Z" />
  </svg>
);

export default withRouter(Login);
