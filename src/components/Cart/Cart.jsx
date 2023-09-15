import CourseNames from "../../CourseNames/CourseNames";
import PropTypes from 'prop-types'

const Cart = ({courses, credit, remainingCredit}) => {
    return (
        <div>
            <h2 className="text-[#2F80ED] font-bold">Credit Hour Remaining:{remainingCredit}hr</h2>
            <br /><hr /> <br />
            <h2 className="font-bold">Course Name</h2>
            <ol className="list-decimal">
                <CourseNames courses={courses}></CourseNames>

            </ol>
            <br /><hr /> <br />
            <h2 className="font-bold text-[#1c1b1bcc]">Total Credit Hour: {credit}</h2>
            <br /><hr /> <br />
            <h2 className="font-bold text-[#1c1b1bcc]">Total Price: {credit} USD</h2>
            
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.array,
    credit: PropTypes.number,
    remainingCredit: PropTypes.number
}

export default Cart;

