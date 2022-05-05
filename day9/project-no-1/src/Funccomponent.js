const ProfileFuncComp = (props) => {
    console.log(props)
    return (<><p>Firstname : {props.firstname}</p>
      <p>Lastname : {props.lastname}</p>
      <p>Student id : {props.id}</p>
      <div>{props.children}</div></>)
  }

// const DataStudent = (props) => {
//     return (
//         <>
//             <p>Student Id : {props.id}</p>
//         </>
//     )
// }

export default ProfileFuncComp;
// export default DataStudent;