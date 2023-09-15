import CourseNames from "../../CourseNames/CourseNames";
import PropTypes from 'prop-types'

const Cart = ({courses, credit, remainingCredit, totalPrice}) => {
    return (
        <div className="bg-base-100 shadow-xl pl-6 py-6 pr-2 text-left">
            <h2 className="text-[#2F80ED] font-bold text-lg md:text-2xl lg:text-sm">Credit Hour Remaining {remainingCredit}hr</h2>
            <br /><hr /> <br />
            <h2 className="font-bold text-lg md:text-2xl lg:text-base">Course Name</h2>
            <ol className="list-decimal pl-6 ">
                <CourseNames courses={courses}></CourseNames>

            </ol>
            <br /><hr /> <br />
            <h2 className="font-semibold text-[#1c1b1bcc] text-lg md:text-2xl lg:text-sm">Total Credit Hour: {credit}</h2>
            <br /><hr /> <br />
            <h2 className="font-semibold text-[#1c1b1bcc] text-lg md:text-2xl lg:text-sm">Total Price: {totalPrice} USD</h2>
            
        </div>
    );
};

Cart.propTypes = {
    courses: PropTypes.array,
    credit: PropTypes.number,
    remainingCredit: PropTypes.number,
    totalPrice: PropTypes.number
}

export default Cart;

