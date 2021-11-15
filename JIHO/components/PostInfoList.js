import React, { Component } from 'react';
import PostInfo from './PostInfo';

class PostInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }
  

  render() {
    console.log('render PostInfoList');
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(
      info => (
        <PostInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PostInfoList;