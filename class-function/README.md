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