import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const BreadCrumbs = () => {
  const location = useLocation();
  const breadcrumbView = () => {
    const { pathname } = location;
    console.log(pathname)

    const pathnames = pathname.split("/").filter((item) => item);
    console.log(pathnames)
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <Breadcrumb.Item key={routeTo}>
                {isLast ? name : <Link to={routeTo}>{name}</Link>}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </>
    );
  };
  return <>{breadcrumbView()}</>;
};

export default BreadCrumbs;
