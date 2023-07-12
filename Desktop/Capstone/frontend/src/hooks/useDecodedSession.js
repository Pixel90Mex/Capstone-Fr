import jwt_decode from "jwt-decode";

const useDecodedSession = () => {
    const session = JSON.parse(localStorage.getItem("session"));

        const decodedSession = jwt_decode(session)
        return decodedSession;
};

export default useDecodedSession;