import React from "react";


class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio crashed:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-semibold text-white mb-4">
            Something went wrong
          </h1>

          <p className="text-gray-400 max-w-md mb-8">
            An unexpected error occurred while loading the portfolio.
            Please refresh the page or try again later.
          </p>

          <button
            onClick={this.handleReload}
            className="px-6 py-3 border border-white/20 text-white hover:border-white transition"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Error;
