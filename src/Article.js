import React, {Component} from 'react';
import CommnetsList from './CommnetsList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
    defaultOpen: PropTypes.bool
  }

  render() {
    const { article, toggleOpen } = this.props;
    return (
          <div>
            <h3 onClick = {this.handleClick}>{ article.title }</h3>
            { this.getBody() }
          </div>
    )
  }

  getBody(){
    const { article, toggleOpen } = this.props
    if (!this.state.isOpen) return null;
    return (
      <div>
        <p>{ this.props.article.text }</p>
        <CommnetsList comments = {this.props.article.comments}/>
      </div>
    )
  }
}

export default Article;
