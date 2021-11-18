import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    name: '',
    Consultation: '',
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      Consultation: '',
      title: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="제목"
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
        <textarea
          placeholder="상담내용"
          value={this.state.Consultation}
          onChange={this.handleChange}
          name="Consultation"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PostForm;