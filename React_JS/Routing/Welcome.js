import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>WELCOME PAGE</h1>
            <Route path="/welcome/newUser">
                <p>Welcome to new user...!</p>
            </Route>
        </section>
    ) 
}

export default Welcome;