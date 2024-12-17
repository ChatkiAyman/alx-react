import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct year and footer copy", () => {
    const wrapper = shallow(<Footer />);
    const year = getFullYear();
    const footerCopy = getFooterCopy();
    expect(wrapper.text()).toContain(`Copyright ${year} - ${footerCopy}`);
  });

  it("does not display the contact link when the user is logged out", () => {
    const contextValue = { user: { isLoggedIn: false } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").exists()).toBe(false);
  });

  it("displays the contact link when the user is logged in", () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.find("a").text()).toBe("Contact us");
  });
});
