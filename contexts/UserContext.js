import React, 
{
    createContext,
    useState
} from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
    let [username, setGlobalUsername] = useState('');

    return (
        <UserContext.Provider value={{ username, setGlobalUsername }}>
            { props.children }
        </UserContext.Provider>
    );
};

export default UserContext;

export { UserProvider };
