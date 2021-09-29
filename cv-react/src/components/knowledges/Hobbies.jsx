import React from 'react';

const Hobbies = () => {
    return (
        <>
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                    <li className="hobby">
                        <i className="fas fa-table-tennis"></i>
                        <span> Tennis de table</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-running"></i>
                        <span> Randonnées</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-gamepad"></i>
                        <span> Jeux video</span>
                    </li>
                    <li className="hobby">
                    <i class="fas fa-video"></i>
                        <span> Cinéma</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-beer"></i>
                        <span> Biere</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Hobbies;