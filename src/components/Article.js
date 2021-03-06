import React, {Component, PureComponent} from 'react';
import CommnetsList from './CommnetsList';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './Article/article.css'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen:PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen;
    // }

    render() {
        const {article, toggleOpen} = this.props;
        console.log('----- rendering Article');
        return (
            <div>
                <h3 onClick={toggleOpen}>{ article.title }</h3>
                <a href="#" onClick={this.deleteComment}></a>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    { this.getBody() }
                </CSSTransitionGroup>
            </div>
        )
    }

    deleteComment = () => {
        this.props.article.comments.splice(0, 1);
        this.setState({});
        console.log(this.setState);
    };

    setArticleRef = (articleRef) => console.log('article ref', articleRef);

    getBody() {
        const {article, isOpen} = this.props;

        if (!isOpen) return null;

        return (
            <div>
                <p>{ article.text }</p>
                <CommnetsList comments={article.comments} key = {article.comments.length}/>
            </div>
        )
    }
}

export default Article;
