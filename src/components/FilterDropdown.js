import React from 'react';

export default class FilterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.listener = this.listener.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.listener);
  }

  listener(event) {
    const { closeInactiveDropdowns } = this.props;

    closeInactiveDropdowns(event, this.wrapperRef, ['something'], 'filterDropdown');
  }


  render() {
    return (
      <div
        className="dropdown-active"
        ref={ this.wrapperRef }
      >
        <p className="item">first</p>
        <p className="item">second</p>
      </div>
    );
  }
}
