import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    state = {
        languages: [
            {id: 1, value: "Javascript", xp: 4.4}, 
            {id: 2, value: "SQL", xp: 5}, 
            {id: 3, value: "PHP", xp: 4}, 
            {id: 4, value: "Typescript", xp: 1}
         ],
         frameworks : [
            {id: 1, value: "React", xp: 1.5}, 
            {id: 2, value: "Angular", xp: 1.1}, 
            {id: 3, value: "Codeigniteur", xp: 2.4}, 
            {id: 4, value: "Bootstrap", xp: 1.1}
         ]
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <>
                <div className="languagesFrameworks">
                    <ProgressBar 
                        languages={languages} 
                        className="languagesDisplay"
                        title="languages"
                        ans1="3"
                        ans2="5"
                    />
                    <ProgressBar
                        languages={frameworks}
                        className="frameworksDisplay"
                        title="frameworks & bilbliothèque"
                        ans1="1"
                        ans2="3"
                    />
                </div>
            </>
        );
    }
}

export default Languages;