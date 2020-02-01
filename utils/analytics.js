import ReactGA from "react-ga";
export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize("UA-114127926-3");
};
export const logPageView = () => {
  console.log(
    `Logging pageview for ${window.location.pathname +
      window.location.search}  `
  );
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
export const logEvent = (category = "", action = "", label = "") => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
