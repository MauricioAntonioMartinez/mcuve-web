import React from "react";

export const withModals = (WrappedComponent: React.FC) => (props: any) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <WrappedComponent {...props} />
        </>
      );
    }
  };
};
