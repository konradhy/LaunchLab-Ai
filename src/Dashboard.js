import React, { Component } from "react";
import { Link } from "react-router-dom";
import { computed } from "mobx";
import MainBody from "./Components/Body";
import { Helmet } from "react-helmet";

import { observer, inject } from "mobx-react";
@inject("store")
@observer
class Body extends Component {
  //first i get and define the permissions function, and extend it so that it can be used,
  //by tools in the tool category. And then I attach it to certain tools

  @computed get permissions() {
    return this.props.store.tools.filter((tool) =>
      tool.permissions.some((r) =>
        this.props.store.profile.permissions.includes(r)
      )
    );
  }

  @computed get beta() {
    return this.permissions.filter((tool) => tool.category === "Beta");
  }

  @computed get personal() {
    return this.permissions.filter((tool) => tool.category === "Personal");
  }

  @computed get business() {
    return this.permissions.filter((tool) => tool.category === "Business");
  }

  @computed get social() {
    return this.permissions.filter((tool) => tool.category === "Social");
  }

  @computed get content() {
    return this.permissions.filter((tool) => tool.category === "Content");
  }

  @computed get programming() {
    return this.permissions.filter((tool) => tool.category === "Programming");
  }

  @computed get legal() {
    return this.permissions.filter((tool) => tool.category === "Legal");
  }

  @computed get financial() {
    return this.permissions.filter((tool) => tool.category === "Financial");
  }

  @computed get events() {
    return this.permissions.filter((tool) => tool.category === "Events");
  }

  @computed get errands() {
    return this.permissions.filter((tool) => tool.category === "Errands");
  }

  render() {
    return (
      <>
        <Helmet>
          <title>{`Tools - LaunchLab`}</title>
        </Helmet>
        <MainBody className="px-4 py-4 md:px-28 md:py-8 lg:py-12 ">
          {this.content.length ? (
            <>
              <Title title="Written Content" />
              <Grid>
                {this.content.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}

          {this.events.length ? (
            <>
              <Title title="Events" />
              <Grid>
                {this.events.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}

          {this.financial.length ? (
            <>
              <Title title="Financial" />
              <Grid>
                {this.financial.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}

          {this.errands.length ? (
            <>
              <Title title="Errands" />
              <Grid>
                {this.financial.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}

          {this.legal.length ? (
            <>
              <Title title="Legal" />
              <Grid>
                {this.legal.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}

          {this.business.length ? (
            <>
              <Title title="Business" />
              <Grid>
                {this.business.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}

          {this.programming.length ? (
            <>
              <Title title="Programming" />
              <Grid>
                {this.programming.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}

          {this.personal.length ? (
            <>
              <Title title="Personal" />
              <Grid>
                {this.personal.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}

          {this.social.length ? (
            <>
              <Title title="Online" />
              <Grid>
                {this.social.map((tool, index) => (
                  <Tool
                    key={index}
                    group={tool.category}
                    title={tool.title}
                    to={tool.to}
                    Icon={tool.Icon}
                    desc={tool.desc}
                    fromColor={tool.fromColor}
                    toColor={tool.toColor}
                  />
                ))}
              </Grid>
              <Divider />
            </>
          ) : null}
        </MainBody>
      </>
    );
  }
}

export const Divider = () => (
  <div className="divide-y-2 divide-dashed divide-gray-300 py-8 md:py-12">
    {" "}
    <div></div>
    <div></div>
  </div>
);

export const Title = ({ title }) => (
  <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 md:mb-6">
    {title}
  </h2>
);

export const Grid = ({ children }) => (
  <div className="grid grid-cols-1 gap-8 mt-4 lg:grid-cols-2 xl:grid-cols-3 ">
    {children}
  </div>
);

export const Tool = ({ Icon, title, desc, to, group, fromColor, toColor }) => (
  <Link to={to || "/"} className="flex relative ">
    <div
      className={`bg-white flex-1 rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 cursor-pointer border border-gray-300 md:flex relative transform hover:scale-105  hover:text-black`}
    >
      <div className="p-4">
        <div
          className={`uppercase tracking-wide text-sm text-${
            fromColor ? fromColor : "green-500"
          } font-semibold leading-none`}
        >
          {group || "New"}
        </div>
        <div
          href="#"
          className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none"
        >
          {title}
        </div>
        <p className="mt-1 pr-1 text-sm ">{desc} </p>
      </div>
    </div>
  </Link>
);

export default Body;

/* TLDR. This page sets the main Tool Categories as they appear on the main dashboard. 
   I think the first part checks if you have permission (paid user) to view a tool. 
   The second part renders the tool category dashboard page and their children
 */

/*This code is a React component that renders a page displaying tools available to a user based on 
their permission settings. The component uses the MobX library to manage state, and the 
React Router library to handle navigation. It also uses the Helmet library to set the page title. 
The component renders a header, followed by a series of sections for each type of tool available, 
which are generated from an array of objects stored in the MobX store. 

Each tool is rendered as a link to its page, with a short description, an icon, 
and a color-coded label indicating its type. At the end of each section, 
a divider is rendered to separate it from the next section.*/

/* You can't just add a new category. First you must. 
How to create a category
1. Create a tool in src->tools that uses the category
2. Update it in @computer
3. Update it in what's rendered

How to create a Tool

How to embed
*/
