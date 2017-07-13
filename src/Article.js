import React, {Component} from 'react';
import CommnetsList from './CommnetsList';
import PropTypes from 'prop-types';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
  }

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }

  }
  render() {
    const { article } = this.props;
    return (
          <div>
            <h3 onClick = {this.handleClick}>{ article.title }</h3>
            { this.getBody() }
          </div>
    )
  }

  getBody(){

    if (!this.state.isOpen) return null;

    return (
      <div>
        <p>{ this.props.article.text }</p>
        <CommnetsList comments = {this.props.article.comments}/>
      </div>
    )
  }

  handleClick = (ev) => {
    ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

// function Article(props) {
//   const { article } = props;
//   return (
//     <div>
//       <h3>{ article.title }</h3>
//       <p>{ article.text }</p>
//     </div>
//   )
// }

export default Article;
