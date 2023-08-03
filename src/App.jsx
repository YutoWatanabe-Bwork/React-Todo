import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  //リストの入力内容は動的なのでuseStateを使用
  const [incompleteTodos, setIncompleteTodos] = useState(["完了"]);
  const [completeTodos, setComplete] = useState(["未完了"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {
            //map関数
            incompleteTodos.map((todo) => {
              return (
                //keyの値を設定することで
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              );
            })
          }
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key="todo" className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
