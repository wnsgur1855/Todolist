import './App.css';
import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todo, setTodo] = useState([
    { id: 0, title: '0', content: '0', isDone: false },
    { id: 1, title: '1', content: '1', isDone: false },
    { id: 2, title: '2', content: '2', isDone: false },
  ]);
  const [done, setDone] = useState([
    { id: 3, title: '3', content: '3', isDone: true },
    { id: 4, title: '4', content: '4', isDone: true },
  ]);

  //title
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //content
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  //추가
  const handleAdd = () => {
    setTodo([...todo, { id: todo.length + 1, title: title, content: content, isDone: false }]);
    alert('추가');
  };
  //삭제
  const todoDel = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const doneDel = (id) => {
    setDone(done.filter((item) => item.id !== id));
  };
  //취소
  // const clickDoneButtonHandler = (item) => {
  //   setTodo(todo.splice((item, 1)));
  //   console.log(item);
  //   setDone([...todo,{item:item,isDone:true}]);
  //   alert('완료');
  // };
  //done추가

  //done추가
  const clickDoneButtonHandler = (item) => {
    const find = todo.filter((value) => value.id !== item.id);
    setTodo(find);
    setDone([
      ...done,
      {
        id: item.id,
        title: item.title,
        content: item.content,
        isDone: !item.done,
      },
    ]);
    console.log(item, find);
    alert('완료');
  };

  //done취소
  const clickfalseButtonHandler = (item) => {
    const find = done.filter((value) => value.id !== item.id);
    setDone(find);
    setTodo([
      ...todo,
      {
        id: item.id,
        title: item.title,
        content: item.content,
        isDone: !item.done,
      },
    ]);
    alert('완료');
  };
  console.log(todo, done);
  return (
    <div>
      <div className="topContainer">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="title">
        제목 &nbsp;
        <input value={title} onChange={handleTitleChange} className="inputter" type="text" /> &nbsp;
        내용 &nbsp;
        <input
          value={content}
          onChange={handleContentChange}
          className="inputter"
          type="text"
        />{' '}
        &nbsp;
        <button onClick={handleAdd} className="Buttonman">
          추가
        </button>
      </div>
      <div className="largelargebox">
        {' '}
        큰큰박스
        <h2 className="Workingbox">Working..🔥</h2>
        <div className="largeBox">
          {todo.map((item, index) => (
            <div key={index} className="componentStyle">
              <div className="boxTitle">{item.title}</div>
              <h6 className="boxContent">{item.content}</h6>
              <button onClick={() => todoDel(index)} className="deleteButton">
                삭제하기
              </button>
              &nbsp;
              <button onClick={() => clickDoneButtonHandler(item)} className="completeButton">
                done추가
              </button>
            </div>
          ))}
        </div>
        <h2 className="Workingbox">done..🔥</h2>
        {done.map((item, index) => (
          <div key={index} className="componentStyle">
            <div className="boxTitle">{item.title}</div>
            <h6 className="boxContent">{item.content}</h6>
            <button onClick={() => doneDel(item.id)} className="deleteButton">
              삭제하기
            </button>
            &nbsp;
            <button onClick={() => clickfalseButtonHandler(item)} className="completeButton">
              done추가
            </button>
          </div>

          // <div key={index} className="largeBox">
          //   <div className="componentStyle">
          //     <div className="boxTitle">{item.title}</div>
          //     <h6 className="boxContent">{item.content}</h6>
          //     <button className="deleteButton">삭제하기</button>
          //     &nbsp;
          //     <button className="completeButton">추가</button>
          //   </div>
          // </div>;
        ))}
      </div>
    </div>
  );
}

export default App;
