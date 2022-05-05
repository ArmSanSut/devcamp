import React from "react"
class ProfileClassComp extends React.Component {
    render() {
      console.log(this.props)
      return (<><p>Firstname : {this.props.firstname}</p>
        <p>Lastname : {this.props.lastname}</p>
        <p>Student Id : {this.props.id}</p>
        <div>{this.props.children}</div></>)
    }
  }
  export default ProfileClassComp;