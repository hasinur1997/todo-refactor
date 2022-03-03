function TodoItem(props) {

    const {title, complete, id, onComplete, onDelete} = props;

    // Complete Check
    const _onCompleteCheck = (event) => {
        console.log("Complete Check" + id)
        onComplete(id)
    }

    // Delete functionality
    const _onDelete = () => {
        if (window.confirm("Are you sure want to delete this ?")) {
            onDelete(id)
        }
    }
    
    // Render Checkbox
    const _renderCheckbox = () => {
        const attrs = {};
        attrs.checked = complete ? true : false;
    
        return (
          <div className="col-2 todo-item__checkbox">
            <input
              type="checkbox"
              className="form-control"
              onChange={_onCompleteCheck}
              {...attrs}
            />
          </div>
        );
      }
    
    // Render title
    const _renderTitle = () => {    
        return (
          <div className="col-7 todo-item__title">
            <h3>{title}</h3>
          </div>
        );
    }

    // Render delete button
    const _renderDeleteButton = () => {
        return (
            <div className="col-2">
                <button 
                    className="btn btn-danger"
                    onClick={_onDelete}
                >
                    Delete
                </button>
            </div>
        )
    }

    return (
        <li className="list-group-item todo-item">
            <div className="row">
                {_renderCheckbox()}
                {_renderTitle()}
                {_renderDeleteButton()}
            </div>
        </li> 
    )
}

export default TodoItem;

