import React from 'react';
import PostFormShell from './PostFormShell';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PostHome from './PostHome';
import Texts from './Texts';
import Words from './Words';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded:false,
    }
  }
  render(){
    return (
      <Router>
        <PostFormShell>
          <div>
            <Routes>
            <Route exact path="/" element={<PostHome />}/>
              <Route exact path="/texts" element={<Texts/>}/>
              <Route exact path="/words" element={<Words/>}/>
              </Routes>
          </div>
        </PostFormShell>
      </Router>
      );
  }
}

export default PostForm;