import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class PostsNew extends Component {
  


    render(){
        return <div>Create Form 


        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={ '' }
            placeholder="Enter text"
          />
          <FormControl.Feedback />
        </FormGroup>

        </div>
    }
}

export default PostsNew;