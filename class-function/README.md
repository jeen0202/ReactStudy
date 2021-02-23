# React의 Class sytle 과 Function sytle
## Class vs Function
### class
    render 함수를 통해 값을 반환
    props 사용시 this.props 사용
### function
    스스로가 render 함수
    props를 매개변수로 받아 사용
## Hook
    기존버전과의 호환을 깨지않으면서 Class에서만 사용가능했던 기능(state등)을 사용가능하게 해주는 신규기능
### Hook을 사용한 State 생성    
    Hook기능을 통해 function style에서도 state를 사용할 수 있다.
    React.useState() 를 사용하여 state객체를 생성하지 않고 state를 사용할 수 있다.
### Hook을 사용한 life cycle 구현
#### (참고)Class style의 life cycle
 그림첨부    
    Hook을 사용하여 Life Cycle을 구현할 때는 React.useEffect()를 사용한다.
    useEffect() 기본적으로 Class의 componentDidMount() 와 componentDidUpdate()를 합쳐놓은 역할을 한다.
    useEffect()의 반환함수를 통해 cleanup(component 재실행시 퇴장하면서 수행)을 할 수 있다.
    effect 내부의 element를 감지하여 변화가 있을때만 useEffect()를 실행하여 성능을 향상 시킬 수 도 있다.
    useEffect의 조건을 지정해, componentDidMount, ComponentWillUnMount를 단독수행하는 함수를 만들 수 있다.

