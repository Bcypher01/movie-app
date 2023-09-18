import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => {
  return (
    <div className="grid place-items-center mt-16">
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <rect x="6" y="358" rx="2" ry="2" width="183" height="13" />
        <rect x="6" y="337" rx="2" ry="2" width="50" height="9" />
        <rect x="0" y="60" rx="2" ry="2" width="200" height="256" />
        <rect x="7" y="379" rx="2" ry="2" width="30" height="15" />
        <rect x="147" y="378" rx="2" ry="2" width="30" height="15" />
      </ContentLoader>
    </div>
  );
};

export default Loader;
