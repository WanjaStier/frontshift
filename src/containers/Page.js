import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function Page(Component) {
  return class PageProxy extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: true
      }
    }

    getFirstChild(props) {
      return React.Children.toArray(props.children)[0] || null;
    }
    render() {
      return (
        <ReactCSSTransitionGroup
          component={this.getFirstChild}
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName="slide-in">
          <div className='fs-app__page'>
           <Component {...this.props} />
          </div>
        </ReactCSSTransitionGroup>
      )
    }
  }
}
