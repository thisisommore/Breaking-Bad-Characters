"use client";
import React, { ErrorInfo, ReactNode } from "react";
import styled from "styled-components";
import InfoCard from "./InfoCard";

const Container = styled.div`
  margin: 0 20px;
  display: flex;
  justify-content: center;
`;

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError)
      return (
        <Container>
          <InfoCard error={true} className="large">
            Something went wrong
          </InfoCard>
        </Container>
      );

    return this.props.children;
  }
}
