start 2021-02-16

### React의 기본요소
Component : Html을 클래스처럼 분리하여 관리 할 수 있게 해준다.

Props : 사용자가 조작가능하게 해주는 일종의 parameter
        props가 변경되면 render 함수가 재호출 된다.
        Read-only 속성을 지닌다.

State : Component 내부적으로 사용하여 사용성을 높이는 요소
        상위 Component의 state는 하위 Component에서 사용 가능
        state가 변경되면 render 함수가 재호출 된다.
        setState를 통해 state를 변경하여야 react가 즉시 인식할수있다.
shouldComponentUpdate()
### Immuatable
#### Array의 push와 concat
push => 원본을 수정
concat => 복제본을 만들어 수정
재사용성을 위해 Component에 shouldComponentUpdate()를 사용할 경우
concat이 유리하다.
push를 사용하려는 경우 Array.from() 을 사용하여 기존 Array를 복제한후
비교할 수 있도록 하자.

