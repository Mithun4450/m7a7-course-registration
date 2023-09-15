import CourseNames from "../../CourseNames/CourseNames";
import PropTypes from 'prop-types'

const Cart = ({courses}) => {
    return (
        <div>
            <h2 className="font-bold">Course Name</h2>
            <ol className="list-decimal">
                <CourseNames courses={courses}></CourseNames>

            </ol>
            
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.array,
}

export default Cart;

