import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

 /*  this.props.onFormSubmit refers to the prop tht was passed to searchbar , i.e. termsubmit callback */
  onFormSubmit = event => {
    event.preventDefault();
   /* equivalent to ontermsubmit(this.state.term) */
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
