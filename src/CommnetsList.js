import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommnetsList(props) {
    const { comments, isOpen } = props;
    return (
      <div>
          <a href="#" onClick={toggleOpen}>{isOpen ? 'close' : 'open'} comments</a>
          {this.getBody()}
      </div>
    )
}

function getBody({ comments, isOpen }) {
  if (!isOpen) return null;
  if (!comments.length) return <span> No comments yet</span>
  return (
      <ul>
          {comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>)}
      </ul>
  )
}

CommnetsList.defaulProps = {comments: []};





export default toggleOpen(CommentList)
