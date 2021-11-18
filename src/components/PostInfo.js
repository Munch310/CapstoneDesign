import React, { Component } from 'react';

class PostInfo extends Component {
  static defaultProps = {
    info: {
      name: '이름',
      title: '010-0000-0000',
      Consultation : '상담내용',
      id: 0
    },
  }

  state = {
    // 우리는 수정 버튼을 눌렀을 떄 editing 값을 true 로 설정해줄것입니다.
    // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
    // input 형태로 보여주게 됩니다.
    editing: false,
    // input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
    // 설정합니다
    name: '',
    title: '',
    Consultation: '',
  }

  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  // editing 값을 반전시키는 함수입니다
  // true -> false, false -> true
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  }

  // input 에서 onChange 이벤트가 발생 될 때
  // 호출되는 함수입니다
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }


  componentDidUpdate(prevProps, prevState) {
    // 여기서는, editing 값이 바뀔 때 처리 할 로직이 적혀있습니다.
    // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
    // 수정을 적용할땐, input 의 값들을 부모한테 전달해줍니다.

    const { info, onUpdate } = this.props;
    if(!prevState.editing && this.state.editing) {
      // editing 값이 false -> true 로 전환 될 때
      // info 의 값을 state 에 넣어준다
      this.setState({
        name: info.name,
        Consultation: info.Consultation,
        title: info.title
      })
    }

    if (prevState.editing && !this.state.editing) {
      // editing 값이 true -> false 로 전환 될 때
      onUpdate(info.id, {
        name: this.state.name,
        Consultation: this.state.Consultation,
        title: this.state.title
      });
    }
  }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const { editing } = this.state;

    
    if (editing) { // 수정모드
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="title"
              placeholder="제목"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="Consultation"
              placeholder="내용"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }


    // 일반모드
    const {
      name, title, Consultation
    } = this.props.info;
    
    return (
      <div style={style}>
        <div><b>작성자 : {name}</b></div>
        <div>제목 : {title}</div>
        <div>상담내용 : {Consultation}</div>
        
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PostInfo;