import React, { Component } from "react";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="60" fill="#395C83"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9898 9.54245L17.0962 22.4361L20.6317 25.9716L27.5496 19.0537L27.4944 51.2531L32.4943 51.2617L32.5494 19.1731L39.3479 25.9716L42.8834 22.4361L29.9898 9.54245Z" fill="#F3ECE6"/>
            </svg>
          </div>
        )}
      </div>
    );
  }
}
