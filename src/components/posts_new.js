import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  


    render(){

      const {fields: {title, categories, content}, handleSubmit } = this.props;

        return  <form onSubmit={handleSubmit(this.props.createPost)}>
          <h3>Create A New Post</h3>

          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label> Title </label>
            <input type="text" className="form-control" {...title}/>
            <div className="text-help">
              {title.touched ? title.error : ''}
            </div>
          </div>
          
          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label> Categories </label>
            <input type="text" className="form-control" {...categories} />
            <div className="text-help">
              {categories.touched ? categories.error : ''}
            </div>
          </div>

          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label> Content </label>
            <textarea className="form-control" {...content} />
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
          </div>
          <button type="summit" className="btn btn-primary" > Submit </button>
        </form>
    }
}


function validate(values){
  const errors = {};
  console.log('call validate :'+values);
  if(!values.title){
    errors.title = 'Enter a title';
  }
  
  if(!values.categories){
    errors.categories = 'Enter a Categories';
  }
  
  if(!values.content){
    errors.content = 'Enter a Content';
  }
  return errors;
}

//reduxForm can inject action same as "connect"

// connect : first args is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapstateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostNewForm',
  fields:['title','categories','content'],
  validate
}, null , { createPost})(PostsNew)

// user types something in...record it on application state (here what reduxForm done)
// state === {
//   form: {
//     PostNewForm:{
//       title:'...',
//       categories:'...',
//       content:'...'
//     }
//   }
// }