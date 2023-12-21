import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container">
                    <Link to="home" class="navbar-brand">Logo</Link>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="aboutus">AboutUs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="contactus">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="courses">Courses</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="counterexample">Counter</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="lifecycle">Lifecycle demo</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="lifecyclexample">Lifecycle Example</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="employeesearch">Employee Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="propsdrilling">PropsDrilling</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="eventhandling">EventHandling</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="job">Job</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar