import React from 'react'

export default (OriginalComponent) => class DecorateComponent extends React.Comment {
  state = {
      isOpen: false
  };

  render(){
    return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
  }

  toggleOpen = () => {
      this.setState({
          isOpen: !this.state.isOpen
      })
  }
}
