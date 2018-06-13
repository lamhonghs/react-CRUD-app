import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  push
} from 'react-router-redux';

import { createStructuredSelector } from 'reselect';
import {
  errorSelector, initialValuesSelector, isSuccessSelector,
  loadingSelector,
} from "../../../redux/selectors/posts.selectors";
import {
  createPost,
  detailPost,
  updatePost,
  postClearCache,
} from '../../../redux/actions/posts/posts.actions';


class PostsCreate extends PureComponent {

  componentDidMount() {
    if (this.isEditMode()) {
      this.props.detailPostStart(this.props.match.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isCreateSuccess) {
      this.props.goToListPage();
    }
  }

  componentWillUnmount() {
    this.props.postClearCache();
  }
  isEditMode = () => {
    return this.props.match && this.props.match.params &&
      typeof this.props.match.params.id !== 'undefined';
  }
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <label>{ label }</label>
        <div>
          <input { ...input } placeholder={ label } type={ type }/>
          { touched && error && <span>{ error }</span> }
        </div>
      </div>
    );
  };
  createPost = (formValues) => {
    if (this.isEditMode()) {
      const payload = {
        id: this.props.match.params.id,
        ...formValues,
      }
      this.props.updatePostStart(payload);
    } else {
      this.props.createPostStart(formValues);
    }
  };

  render() {
    const {
      error, handleSubmit, pristine, reset, submitting, loading,
    } = this.props;
    if (loading) {
      return <div> ...Loading... </div>
    }
    return (
      <div>
        <form onSubmit={ handleSubmit(this.createPost) } className="form">
          <Field
            name="title"
            type="text"
            component={ this.renderField }
            label="Title"
          />
          <Field
            name="description"
            type="text"
            component={ this.renderField }
            label="Description"
          />
          { error && <strong>{ error }</strong> }
          <div>
            <button type="submit" disabled={ pristine || submitting }>
              { this.isEditMode() ? 'UPDATE' : 'CREATE' }
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector(
  {
    createPostError: errorSelector,
    loading: loadingSelector,
    isCreateSuccess: isSuccessSelector,
    initialValues: initialValuesSelector,
  }
)

export const mapDispatchToProps = (dispatch) => {
  return {
    createPostStart: (payload) => {
      dispatch(createPost.start(payload));
    },
    updatePostStart: (payload) => {
      dispatch(updatePost.start(payload));
    },
    detailPostStart: (payload) => {
      dispatch(detailPost.start(payload));
    },
    goToListPage: () => {
      dispatch(push('/'));
    },
    postClearCache: () => {
      dispatch(postClearCache());
    },
  };
};
const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  return errors
}

let PostCreateForm = reduxForm({
  form: 'postsCreate',
  validate,
  enableReinitialize: true,
})(PostsCreate);
PostCreateForm = connect(mapStateToProps, mapDispatchToProps)(PostCreateForm);
export default PostCreateForm;
