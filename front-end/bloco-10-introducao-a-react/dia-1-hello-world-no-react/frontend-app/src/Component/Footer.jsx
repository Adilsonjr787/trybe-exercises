import React from "react";

class Footer extends React.Component {
    render() {
        const message = 'E isso é só o começo...';
        return (
            <footer className="footer">
                <h1>{message}</h1>
            </footer>
            
        );
    }
}

export default Footer;