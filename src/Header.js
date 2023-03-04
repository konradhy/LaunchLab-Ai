import React, { Component } from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { computed } from "mobx";
import { NavLink } from "react-router-dom";
import {
  SwitchHorizontalIcon,
  ScaleIcon,
  DatabaseIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

import { IconDashboard, IconFeatures } from "./Icons";

import { useLocation } from "react-router-dom";
import Body from "./Components/Body";
import { withRouter } from "react-router-dom";

function HeaderExpand(props) {
  const location = useLocation();
  return (
    <SuperHeader active={location.pathname === "/" ? true : false}>
      {props.children}
    </SuperHeader>
  );
}

@inject("store")
@observer
class SidebarCompontent extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.pathname === "/signup") {
      this.props.history.push("/");
    }
    if (this.props.location.pathname === "/login") {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.shortcutHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.shortcutHandler);
  }
  shortcutHandler = (e) => {
    if (e.keyCode === 75 && e.ctrlKey) {
      e.preventDefault();
      // select all text in input with id q
      document.getElementById("q").focus();
      document.getElementById("q").select();
    }
  };

  onKeyUp = (e) => {
    if (this.props.location.pathname !== "/search") {
      this.props.history.push("/search");
    }
    if (e.keyCode === 8) {
      if (this.props.store.toolsKeyword === "") {
        this.props.history.push("/");
      }
    }
  };

  @computed get fromColor() {
    if (this.props.store.profile.credits <= 0) {
      return "bg-red-200 text-red-600";
    }
    if (this.props.store.profile.status === "trialing") {
      return "";
    }
    if (this.props.store.profile.status === "active") {
      return "";
    }
    if (this.props.store.profile.status === "incomplete") {
      return "";
    }
    return "bg-red-200 text-red-600";
  }

  render() {
    return (
      <>
        <Textarea
          readOnly
          name="copy-textarea"
          id="copy-textarea"
          value={this.props.store.copyToClipboardText}
        />
        <HeaderExpand>
          <Body className="px-4 py-4 md:px-28 md:py-8 lg:py-12 flex items-center flex-1">
            <div className="mr-4">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <div>
              <div className="text-4xl relative font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-600 inline-block">
                LaunchLab<span className="font-normal "> AI</span>
                <div className="absolute top-0 ml-3 left-full bg-gradient-to-br from-gray-500 to-gray-500 text-white text-sm px-2 py-0.5 rounded-md font-normal hidden md:flex">
                  GPT-3.5
                </div>
              </div>
              <div className="hidden md:block text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 inline-block">
                Eradicating poverty using the magic of AI
              </div>
              <div className="flex">
                <div
                  className={`items-center flex inline-flex ${
                    this.props.store.profile.credits
                      ? " bg-gray-100 text-gray-500"
                      : " bg-red-100 text-red-500"
                  } text-sm rounded-md px-3 py-1 font-medium my-2 mr-2`}
                >
                  <DatabaseIcon className="w-4 h-4 mr-2" />
                  {this.props.store.profile.credits}&nbsp;
                  <span className="hidden lg:block">credits remain</span>
                </div>
              </div>
            </div>
          </Body>
        </HeaderExpand>
        <div className="border-b border-gray-300 bg-white shadow-sm ">
          <div className="container flex mx-auto px-4 md:px-28 flex select-none">
            <NavLink
              to="/"
              exact
              tabIndex={-1}
              onClick={() => (this.props.store.toolsKeyword = "")}
              activeClassName="bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
              className="text-lg flex py-3 px-6 lg:py-4 lg:px-8 cursor-pointer hover:bg-gray-100 rounded-t-md font-medium transition items-center"
            >
              <IconDashboard className="w-7 h-7 lg:mr-4 transition" />
              <div className="hidden lg:block">AI Tools</div>
            </NavLink>
            <div
              style={{
                padding:
                  "0px 0px 0px .5rem" /*this div creates issues when the page is minimized  */,
              }}
            >
              <NavLink
                to="/coming-soon"
                exact
                tabIndex={-1}
                onClick={() => (this.props.store.toolsKeyword = "")}
                activeClassName="bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
                className="text-lg flex py-3 px-6 lg:py-4 lg:px-8 cursor-pointer hover:bg-gray-100 rounded-t-md font-medium transition items-center"
              >
                <IconFeatures className="w-7 h-7 lg:mr-4 transition" />
                <div className="hidden lg:block">Coming Soon</div>
              </NavLink>
            </div>

            <div className="relative text-gray-400 focus-within:text-green-500 flex flex-1 ">
              <label
                htmlFor="q"
                className="absolute inset-y-0 left-0 top-0 bottom-0 hidden md:flex items-center lg:pl-2 "
              >
                <div
                  type="submit"
                  className="p-2 focus:outline-none focus:shadow-outline "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 transition"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </label>
              <Input
                type="search"
                tabIndex={-1}
                id="q"
                name="q"
                className="py-4 pl-4 md:pl-14 text-xl focus:outline-none focus:bg-white focus:text-gray-900 transition flex flex-1 w-full"
                placeholder="Search...  [Shortcut: Ctrl + K]"
                autoComplete="off"
                value={this.props.store.toolsKeyword}
                onChange={this.props.store.onChangeToolsKeyword}
                onKeyUp={this.onKeyUp}
              />
            </div>
            <NavLink
              to="/my-profile"
              exact
              tabIndex="-1"
              activeClassName="bg-green-100 hover:bg-green-200 text-green-800 transition"
              className={`text-lg flex py-3 px-6 xl:py-4 xl:px-8 cursor-pointer ${this.fromColor} hover:bg-gray-100 rounded-t-md font-medium transition items-center`}
            >
              <UserCircleIcon className="w-7 h-7 lg:mr-4 transition" />
              <div className="hidden lg:block"> My Profile</div>
            </NavLink>
          </div>
        </div>
        {this.props.children}
      </>
    );
  }
}

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

const Input = styled.input``;

const Textarea = styled.textarea`
  position: fixed;
  right: -9990px;
  top: -9990px;
`;

// transition:ease-in-out 0.5s margin-top;
// 	transition-delay:0.05s;

const SuperHeader = styled.div`
  height: 150px;
  background: white;
  margin-top: ${(props) => (props.active ? "0px" : "-150px")};
  display: ${(props) => (props.hidden ? "hidden" : "flex")};
  background-image: url(${require("./pattern-dots.svg").default});
  background-size: auto 50%;
  background-position: 20px 20px;
  background-repeat: no-repeat;
  position: relative;
`;

export default withRouter(SidebarCompontent);
