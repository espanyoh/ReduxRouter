import React, {Component} from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
    componentWillMount() {
        console.log('xxxxxx');
        this.props.fetchPosts();
    }
  render() {
    return (
      <div>   
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}> </Col>
                    <Col xs={6} md={4} className="text-xs-right"> <Button bsStyle="primary" href="/posts/new">Primary</Button> </Col>
                </Row>
            </Grid>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ fetchPosts }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);

//export default connect(null, { fetchPosts: fetchPosts})(PostsIndex);

export default connect(null, { fetchPosts })(PostsIndex);