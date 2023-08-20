// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, selectItem} = props
  const {id, suggestion} = eachItem

  const onClickSelectItem = () => {
    selectItem(id)
  }

  return (
    <div className="Suggestions-list">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onClickSelectItem}
      />
    </div>
  )
}

export default SuggestionItem
