import React from 'react';

import { Container, Profile, Add, Welcome } from './styles';

const MainHeader: React.FC = () => {
    return (
        <Container>
            <Add>
                <a href="#">+</a>
            </Add>
            <Profile>
                <Welcome>
                    <img src="https://avatars3.githubusercontent.com/u/41602936?s=460&u=87ad6fc81be492184eaeaae98cbf2b92934b205f&v=4"/>
                    <div>
                        <strong>Izaias</strong>
                        <p>Nefrologista</p>
                    </div>
                </Welcome>
            </Profile>
        </Container>     
    )
};

export default MainHeader;