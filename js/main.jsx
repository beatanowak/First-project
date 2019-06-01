import React from 'react';
import ReactDOM from 'react-dom';
require('../css/logowanie.css');


document.addEventListener('DOMContentLoaded', function(){

    class Buttons extends React.Component {

        // handleClick = () => {
        //     console.log("Clicked");
        // };


        render(){
            return (
                <div style={{color: 'black', fontSize: '25px'}}>
                    Działa
                    {/*<div className="main-box">*/}
                    {/*    <div className="login-page">*/}
                    {/*        <div className="welcome-text-div">*/}
                    {/*            <h1 className="welcome-text">Witaj na stronie <span*/}
                    {/*                className="her-name">Kasi</span> i <span className="his-name">Tomka</span></h1>*/}
                    {/*        </div>*/}

                    {/*        <form action="" method='post' className="guestLogin">*/}
                    {/*            <div className="log-info">*/}
                    {/*                <p className="log-info-text"><span className="log-in-text">Podaj hasło,</span> aby*/}
                    {/*                    wejść na stronę</p>*/}
                    {/*            </div>*/}
                    {/*            <div className="login-row">*/}
                    {/*                <div className="password-box">*/}
                    {/*                    <input type="password" name="password" className="password-control"*/}
                    {/*                           placeholder="Password" autoComplete="on" required/>*/}
                    {/*                </div>*/}
                    {/*                <div className="btn-box">*/}
                    {/*                    <button type="submit" className="btn">*/}
                    {/*                        Przejdź dalej*/}
                    {/*                    </button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="info-container">*/}
                    {/*                <div className="error-message">*/}
                    {/*                </div>*/}
                    {/*                <div className="success-message">*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </form>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            )
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        ReactDOM.render(
            <Buttons />,
            document.getElementById('app')
        );
    });



});
