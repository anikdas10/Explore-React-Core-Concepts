
export default function Friend({friend}){
    const styles ={
        border:'2px solid red',
        marginTop:'5px',
        borderRadius:"10px"
    }
    const {name , email, username}=friend
    return(
        <div style={styles}>
            <h4>Name: {name} </h4>
        <p>Email: {email} </p>
        <p>Username: {username} </p>
        </div>
    )
}