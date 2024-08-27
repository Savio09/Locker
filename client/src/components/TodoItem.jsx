function TodoItem({ supplyId, checked, onCheckboxChange, task, projId }) {
  const handleCheckboxChange = () => {
    onCheckboxChange(projId, supplyId);
    console.log(supplyId);
  };

  return (
    <div className="task">
      <div className="round">
        <input
          type="checkbox"
          name={supplyId}
          checked={checked}
          onChange={handleCheckboxChange}
          id={`checkbox-${supplyId}`}
        />
        <label htmlFor={`checkbox-${supplyId}`}></label>
      </div>
      <p>{task.task}</p>
    </div>
  );
}

export default TodoItem;
