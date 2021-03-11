export const breakpoint = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  tabletL: 1024,
  laptop: 1024,
  desktop: 1480
};

const size = {
  mobileS: `${breakpoint.mobileS}px`,
  mobileM: `${breakpoint.mobileM - 1}px`,
  mobileL: `${breakpoint.mobileL - 1}px`,
  tablet: `${breakpoint.tablet - 1}px`,
  tabletL: `${breakpoint.tabletL}px`,
  laptop: `${breakpoint.laptop - 1}px`,
  desktop: `${breakpoint.desktop - 1}px`
};

const device = {
  mobileS: `(min-width: ${size.mobileM})`,
  mobileM: `(min-width: ${size.mobileL})`,
  mobileL: `(min-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tabletL})`,
  tabletL: `(min-width: ${size.laptop})`,
  laptop: `(min-width: ${size.desktop})`,
  desktop: `(min-width: calc(${size.desktop}) + 1px)`
};

export default device;
