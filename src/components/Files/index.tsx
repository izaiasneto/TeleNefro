import React from 'react';
import { AiFillFileAdd} from 'react-icons/ai';
import { FaFileDownload, FaTrashAlt, FaFileAlt} from 'react-icons/fa';

import { Container, Content, File } from './styles';

const Files: React.FC = ({ }) => {
    return (
        <Container>
            <header>
                <AiFillFileAdd />
                <h1>Arquivos</h1>
            </header>

            <Content>
                <File>
                   <div>
                        <FaFileAlt />
                        <p>Arquivo</p>
                   </div>

                   <div>
                       <FaFileDownload />
                       <FaTrashAlt />
                   </div>
                    
                </File>
                <File>
                   <div>
                        <FaFileAlt />
                        <p>Arquivo</p>
                   </div>

                   <div>
                       <FaFileDownload />
                       <FaTrashAlt />
                   </div>
                    
                </File>
                <File>
                   <div>
                        <FaFileAlt />
                        <p>Arquivo</p>
                   </div>

                   <div>
                       <FaFileDownload />
                       <FaTrashAlt />
                   </div>
                    
                </File>
                <File>
                   <div>
                        <FaFileAlt />
                        <p>Arquivo</p>
                   </div>

                   <div>
                       <FaFileDownload />
                       <FaTrashAlt />
                   </div>
                    
                </File>
                <File>
                   <div>
                        <FaFileAlt />
                        <p>Arquivo</p>
                   </div>

                   <div>
                       <FaFileDownload />
                       <FaTrashAlt />
                   </div>
                    
                </File>
                <File>
                   <div>
                        <FaFileAlt />
                        <p>Arquivo</p>
                   </div>

                   <div>
                       <FaFileDownload />
                       <FaTrashAlt />
                   </div>
                    
                </File>
                <File>
                   <div>
                        <FaFileAlt />
                        <p>Arquivo</p>
                   </div>

                   <div>
                       <FaFileDownload />
                       <FaTrashAlt />
                   </div>
                    
                </File>
                <File>
                   <div>
                        <FaFileAlt />
                        <p>Arquivo</p>
                   </div>

                   <div>
                       <FaFileDownload />
                       <FaTrashAlt />
                   </div>
                    
                </File>
            </Content>
        </Container>     
    )
};

export default Files;