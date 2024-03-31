export function Item(props) {
    return (
    <div className='todo'>
    <p>{props.item}</p>
    <button
      onClick={props.onDelete}
    >
      Delete
    </button>
  </div>
    )
}