import React from 'react';

const ProgressBar = (props) => {

    console.log(props)
    return (
        <>
            <div className={props.className}>
                <h3>{props.title}</h3>
                <div className="years">
                    <span>Années d'experience</span>
                    <span>{props.ans1} ans</span>
                    <span>{props.ans2} ans</span>
                </div>
                <div>
                    {
                        props.languages.map((item) => {
                            let xpYears = props.ans2;
                            let progressBar = item.xp / xpYears * 100 +'%';

                            return (
                                <div key={item.id} className="languagesList">
                                    <li>{item.value}</li>
                                    <div className="progressBar" style={{width:progressBar}}>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default ProgressBar;