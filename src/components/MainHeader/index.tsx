import React from 'react';

import { useAuth } from '../../hooks/auth';
import { Container, Profile, Welcome } from './styles';
import semAvatar from '../../assets/semavatar.png';

import { FiPower } from 'react-icons/fi'

const MainHeader: React.FC = () => {

    const { signOut, user } = useAuth();

    return (
        <Container>
            <Profile>
                <Welcome>
                    { user.avatar ? (
                        <img src={semAvatar}/>
                     ) : ( 
                        <img src={user.avatar}/> 
                        )
                    }
                    
                    <div>
                        <strong>Dr(a). {user.name}</strong>
                        <p>Nefrologista</p>
                    </div>
                </Welcome>
            </Profile>
            <button
                type="button" 
                onClick={signOut}
            >
                <FiPower />
            </button>
            
        </Container>     
    )
};

export default MainHeader;