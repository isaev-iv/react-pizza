import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="141" cy="121" r="110" />
    <rect x="0" y="308" rx="10" ry="10" width="280" height="74" />
    <rect x="0" y="421" rx="10" ry="10" width="90" height="27" />
    <rect x="125" y="412" rx="25" ry="25" width="152" height="45" />
    <rect x="0" y="263" rx="10" ry="10" width="280" height="25" />
  </ContentLoader>
);

export default Skeleton;
