import React from 'react';

class CardDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.loadApiDetails();
  }

  async loadApiDetails() {
    // const { id, name } = this.props.match.params;
    this.setState(
      async () => {
        const apiDetails = await api.getCategories();
        this.setState({
          product: apiDetails,
        });
      },
    );
  }

  render() {
    const { thumbnail, name, price } = this.state.product;

    return (
      <div data-testid="product-detail-name">
        <img src={ thumbnail } alt="product thumbnail" />
        <p>{ name }</p>
        <p>{ price }</p>
      </div>
    );
  }
}

export default CardDetails;
