const AddPersonForm = (props) => {
    return (
      <form onSubmit={props.formSubmitAction}>
        <div>
          Name: <input value={props.newName} onChange={props.handleNameEntry} />
        </div>
        <div>
          Number: <input value={props.newNumber} onChange={props.handleNumberEntry} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    )
}

export default AddPersonForm