import React from 'react'
import '../css/Home.css'
import {useState ,useEffect, useRef} from 'react'


/* props 로 가져온것 setIndex, scrollPageNavigate */
const Home = (props) => {
  const goToAboutPage = (event)=>{
    event.preventDefault();

    props.setIndex(1);
  }
  const [typingText, setTypingText] = useState("");

  /* 타이핑 효과 */
  const letters = [
    "효율적인",
    "창의적인",
    "도전적인",
    "책임있는",
    "성장하는"
  ]
  
  const speed = 100; /* 타이핑되는 속도 */
  let i = 0;
  // 타이핑 효과
  const typing = async () => {  
    await wait(500);
    const letter = letters[i].split("");
    while (letter.length) {
      await wait(speed);
      /* 그냥 typingText + letter.shift() 하면 useState인 typingText 가 계속 '' 로만되서 한글자씩밖에 set안됨 아래와 같이 해야함  */
      await setTypingText( typingText => [...typingText , letter.shift()]);
    }
    
    // 잠시 대기
    await wait(1500);
    
    // 지우는 효과
    await remove();
  }

  // 글자 지우는 효과
  const remove = async () => {
    const letter = letters[i].split("");
    
    while (letter.length) {
      await wait(speed);
      
      letter.pop();
      await setTypingText(letter.join(""));
    }
    
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
  }

  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
    

  /* 스크롤 액션 */
  const HomeRef = useRef();

  /* 핸들러 달아주기 */
  const wheelHandler = (e) =>{
    e.preventDefault();
    const { deltaY } = e;

    if(deltaY > 0){
      /* 스크롤내릴때 */
      console.log("scroll Down");
      props.setIndex(1);
    }
  }

  useEffect(()=>{
    // 초기 타이핑 실행
    typing();
    // const HomeRefCurrent = HomeRef.current;
    // setTimeout(() => {
    //   HomeRefCurrent.addEventListener("wheel", wheelHandler);
    //   return () => {
    //     HomeRefCurrent.removeEventListener("wheel", wheelHandler);
    //   };
    // },1000)
  },[])


  return (
    <div ref={HomeRef} className='Home contents_inner'>
      <div className="HomeLeftWrap">
        <h1 className='HomeTextMyName Jamsil'>{'강진수 :)'}</h1>
        {
          <div className="TypingTextWrap">
            <h1 className='TypingTextEffectText Jamsil'>{typingText} </h1>
            <h1 className='TypingTextDeveloper Jamsil'> 개발자</h1>
          </div>
        }
        <div className="HomePointBar"></div>
        <div className="HomeTextHelloWrap">
          <h4 className='HomeTextHello'>안녕하세요.</h4>
          <h4 className='HomeTextHello'>무궁한 아이디어를 코드로 승화하며</h4>
          <h4 className='HomeTextHello'>도전을 즐기는 프론트엔드 개발자가 되고싶습니다</h4>
        </div>
        <div className="HomeTextSubTextWrap">
          <p className='HomeTextSubText'>지금부터 제가 가진 역량과</p>
          <p className='HomeTextSubText'>완성한 작업물을 소개해 드리겠습니다.</p>
        </div>
        <img className='HomePointArrow' src="/image/Home/PointArrow.png" alt="" />
        <button onClick={(event)=>(goToAboutPage(event))} className='HomeMoreButton'>더 알아보기</button>
      </div>
      <div className="HomeRightWrap">
        <div className="HomeRightImageWrap">
          <img className='HomeRightImage' src="/image/Home/homeHumanImage.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home