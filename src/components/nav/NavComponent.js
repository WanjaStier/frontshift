import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './nav.css';

export default class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.getListItem = this.getListItem.bind(this);
    this.getTargetInfo = this.getTargetInfo.bind(this);
    this.onItemClicked = this.onItemClicked.bind(this);
    this.onItemMouseOver = this.onItemMouseOver.bind(this);
    this.onItemMouseOut = this.onItemMouseOut.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      isMouseOver: false,
      hasActiveLink: false,
      active: {
        curr: this.getTargetInfo()
      }
    }
  }

  isActiveLink(path, match, location) {
    return location.pathname.includes(path);
  }

  onItemClicked(event) {
    this.setState({
      active: {
        ...this.state.active,
        curr: this.getTargetInfo(event.target)
      }
    });
  }

  onItemMouseOver(event) {
    this.setState({
      isMouseOver: true,
      active: {
        ...this.state.active,
        temp: this.getTargetInfo(event.target)
      }
    });
  }

  onItemMouseOut(event) {
    this.setState({
      isMouseOver: false,
      active: {
        ...this.state.active,
        temp: this.getTargetInfo(event.target)
      }
    });
  }


  getTargetInfo(target) {
    if (!target) {
      return {
        x:  `${document.documentElement.clientWidth}px`,
        width: '100px'
      };
    }
    const style = window.getComputedStyle(target);
    const targetX = target.getBoundingClientRect().left;
    const elX = this.el.getBoundingClientRect().left;
    return {
      x: `${Math.round(targetX - elX)}px`,
      width: style.width
    }
  }


  getListItem(item) {
    const { pathname } = this.props;
    const path = `${this.props.path || ''}/${item.key}`;
    const canRenderSubNav = item.items && pathname && pathname.includes(path);
    return (
      <li className="fs-nav__list-item" key={item.key}>
        <NavLink exact
                 to={path}
                 className='fs-nav__link'
                 isActive={this.isActiveLink.bind(this, path)}
                 onClick={this.onItemClicked}
                 onMouseOver={this.onItemMouseOver}
                 onMouseOut={this.onItemMouseOut}
                 activeClassName='fs-nav__link--active'>
          {item.title}
        </NavLink>
        { canRenderSubNav && <NavComponent pathname={pathname} path={path} items={item.items}/> }
      </li>
    )
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname === '/') {
      this.setState(this.getInitialState());
    }
  }

  render() {
    const highlightStyle = {
      width: this.state.isMouseOver ? this.state.active.temp.width : this.state.active.curr.width,
      left: this.state.isMouseOver ? this.state.active.temp.x : this.state.active.curr.x
    };
    return (
      <div className="fs-nav" ref={(el) => this.el = el} >
        <ul className='fs-nav__list'>
          { this.props.items.map(this.getListItem) }
        </ul>
        <div className="fs-nav__active-highlight"
             style={highlightStyle} />
      </div>
    )
  }
}

NavComponent.propTypes = {
  items: PropTypes.array.isRequired,
  pathname: PropTypes.string,
  path: PropTypes.string
};
