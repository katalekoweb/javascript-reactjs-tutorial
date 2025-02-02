import PropTypes from 'prop-types'

function UserGreating (props) {
    // if (props.isLoggedIn) {
    //     return <h2>Wellcome {props.username} </h2>
    // } 
        
    // return <h2>Please login to continue</h2>

    const welcomeMessage = <h2 className="welcome-message">Wellcome {props.username} </h2>
    const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>
    return props.isLoggedIn ? welcomeMessage : loginPrompt 
                                
}

UserGreating.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreating.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreating