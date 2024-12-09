import React, { useState } from "react";

function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function addActivity() {
    setListData([...listData, activity]);
    setActivity("");
    console.log(listData);
  }
  function removeActivity(i) {
    const updatedlistdata = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updatedlistdata);
  }
  return (
    <>
      <div className="container">
        <div className="header">Todo List</div>
        <p />
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />

        <button onClick={addActivity}>Add</button>
        <p className="list_heading"> Here is your list {":)"}</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div>{data}</div>
                  <div>
                    <button onClick={() => removeActivity(i)}>Remove</button>
                  </div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Todo;
