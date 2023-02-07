import './App.css';
import React, { useState } from 'react';

function App() {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [todo, setTodo] = useState([{ id: 0, title: '집', content: '1', isDone: false }]);
const [done, setDone] = useState([{ id: 1, title: '집', content: '2', isDone: true }]);
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
setTodo([...todo, { id: Date.now(), title: title, content: content, isDone: false }]);
alert('추가');
};

//삭제
const clickRemoveButtonHandler = (item) => {
console.log(item);
// item의 아이디 값만 넘겨줬었음
item.isDone === false
? setTodo(todo.filter((filterItem) => filterItem.id !== item.id))
: setDone(done.filter((filterItem) => filterItem.id !== item.id));
alert(item.id);
};

const clickDoneButtonHandler = (item) => {
const copy = [...done];
item.isDone = !item.isDone;
setTodo(todo.filter((filterItem) => filterItem.id !== item.id));
setDone([item, ...copy]);
alert('완료');
};

const clickfalseButtonHandler = (item) => {
const copy = [...todo];
item.isDone = !item.isDone;
setDone(done.filter((filterItem) => filterItem.id !== item.id));
setTodo([item, ...copy]);
alert('완료');
};

return (
<div>
<div className="topContainer">
<div>My Todo List</div>
<div>React</div>
</div>
<div className="title">
제목 &nbsp;
<input value={title} onChange={handleTitleChange} className="inputter" type="text" /> &nbsp; 내용 &nbsp;
<input value={content} onChange={handleContentChange} className="inputter" type="text" /> &nbsp;
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
<button onClick={() => clickRemoveButtonHandler(item)} className="deleteButton">
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
<button onClick={() => clickRemoveButtonHandler(item)} className="deleteButton">
삭제하기
</button>
&nbsp;
<button onClick={() => clickfalseButtonHandler(item)} className="completeButton">
done추가
</button>
</div>

// <div key={index} className="largeBo
))}
</div>
</div>
);
}

export default App;