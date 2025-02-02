import PropTypes from "prop-types"

function Student (props) {

    return (
        <div className="student">
            <div> Name: {props.name} </div>
            <div> Age: {props.age} </div>
            <div>Is student: {props.isStudent ? 'Yes' : 'No'} </div>
        </div>
    )

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student