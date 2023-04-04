import Spinner from 'react-bootstrap/Spinner';

export const Loading = () => {
    return (
        <Spinner animation="border" variant="success">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}