// High-order components must use the spreading operator
// to pass the props down to the real one.
/* eslint-disable react/jsx-props-no-spreading */
import React, { useLayoutEffect, useState } from 'react';
import { breakpoint } from '../ui/theme/partials/device';

const defaultMediaQueries = {
  mediaIsPhone: false,
  mediaIsTablet: false,
  mediaIsLaptop: false,
  mediaIsDesktop: false
};

const defaultScreenSize = {
  height: window.innerHeight,
  width: window.innerWidth
};

export function withMediaQueries(LazyComp) {
  const WithMediaQueries = (props) => {
    const [mediaQueries, setMediaQueries] = useState(defaultMediaQueries);
    const [screenSizes, setScreenSizes] = useState(defaultScreenSize);

    useLayoutEffect(() => {
      function updateSize() {
        setMediaQueries({
          ...mediaQueries,
          mediaIsPhone: window.innerWidth < breakpoint.tabletL,
          mediaIsDesktop: window.innerWidth >= breakpoint.tabletL
        });

        setScreenSizes({
          ...screenSizes,
          height: window.innerHeight,
          width: window.innerWidth
        });
      }

      window.addEventListener('resize', updateSize);
      updateSize();

      return () => window.removeEventListener('resize', updateSize);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <LazyComp {...props} {...mediaQueries} {...screenSizes} />
    );
  };

  WithMediaQueries.displayName = `WithMediaQueries(${LazyComp.displayName || LazyComp.name || 'Component'})`;

  return WithMediaQueries;
}