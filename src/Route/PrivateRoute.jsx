import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

    let { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center min-h-[600px]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;