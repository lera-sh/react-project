import React from 'react';
import data from '../cardData.json';
import '../styles/Homepage.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      dataCards: data
    };
  }

  search = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      Object.values(item).join(' ').toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ searchTerm: value, dataCards: filteredData });
  };

  render() {
    const { dataCards } = this.state;
    return (
      <section className="home-page">
        <h1>World&apos;s Most Beautiful Destinations</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search here..."
            value={this.state.searchTerm}
            onChange={this.search}
          />
        </div>
        <div data-testid="card-container" className="card-container">
          {dataCards.map((val) => {
            return (
              <div data-testid="card" className="card" key={val.id}>
                <div className="img-container">
                  <img className="card-img" src={val.img} alt="" />
                </div>
                <h3 className="card-title">{val.title}</h3>
                <p className="card-descr">{val.descr}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Homepage;
