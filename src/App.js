import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



  let [글제목, 글제목변경] = useState(['여자 코트 추천', '대전 우동 맛집', '리액트독학']);
  let [따봉, 따봉변경] = useState (0);

  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] =  useState(0);

  let [입력값, 입력값변경] = useState('');


  function 반복UI() {

    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<p>안녕~</p>);
    }

    return 어레이
    
  }
  
  


  let posts = '대전 고기 맛집';

  // function 제목바꾸기() {
  //   var newArray = [...글제목];  
  //   newArray[0] = '남자 코트 추천';
  //   글제목변경 ( newArray );
  // }

  return (
    <div className="App">
        <div className="black-nav">
          <div style={ { color:'red', fontSize: '30px' } }>개발 Blog</div>
        </div>
        {/* <button onClick={ 제목바꾸기}>이건 버튼!</button> */}
        <div className="list">
            <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> { 글제목[1] } </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> { 글제목[2] } </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>

        { 반복UI () }

        <profile />

      {/* 삼항연산자 : 조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드 */}

      {

      글제목.map(function(글, i){
        return (
          <div className="list" key={i}>
            <h3 onClick={ ()=>{ 누른제목변경(i) } }> { 글 } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        )
      })

      }
      {/* <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
       <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
       <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button> */}


      {/* <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> ← 사용자가 입력한 값을 가져오는 방법. 콘솔로그 찍어보삼 */}

      <div className="publish">
        <input onChange={ (e)=>{입력값변경(e.target.value)} } />
        <button onClick={ ()=>{
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);     /* unshift() 라는 함수는 array의 맨 앞에 추가하고 싶을 때  */
          글제목변경( arrayCopy );
          } }> 저장</button>
      </div>

       <button onClick={ ()=> {modal변경(!modal) } }>버튼이다~~~~~~</button>
       {
         modal === true
         ? <Modal 글제목={글제목} 누른제목={누른제목}> </Modal>
         : null
       }


    </div>
  );

  class profile extends React.Component {
    constructor(){
      super();
    }
  
    render() {
      return(
        <div>프로필 영역입니다잉</div>
      )
    }
  }

}





function Modal(props){ 
  return(
    <div className="modal">
        <h2>{ props.글제목[props.누른제목] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
