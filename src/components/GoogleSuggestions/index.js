// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  selectItem = id => {
    const {searchResults} = this.props
    const updatedTodosList = searchResults.filter(
      eachTodo => eachTodo.id !== id,
    )
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachDest =>
      eachDest.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="Main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo-icon"
        />
        <div className="suggestions-box">
          <input
            type="search"
            placeholder="Search Google"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <ul className="List-container">
            {updatedTodosList.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
                selectItem={selectItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
