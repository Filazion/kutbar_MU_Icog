import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home_Sidebar extends Component{
    state = { }
    render(){
        return(
            // Sidebar
            <div class="col-lg-3 menu-items">
                <ul class="list-group list-group-flush">
                    <a href="...">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Connection
                            <span class="badge badge-primary badge-pill">14</span>
                        </li>
                    </a>
                                        
                    <Link to={{pathname:'/job_and_compition'}}>
                        <li activeClassName="active" class="list-group-item d-flex justify-content-between align-items-center">
                            Job and Competition
                            <span class="badge badge-primary badge-pill">2</span>
                        </li>
                    </Link>
                                        
                    <a href="...">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Forum
                            <span class="badge badge-primary badge-pill"></span>
                        </li>
                    </a>
                                        
                    <a href="...">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Message
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                    </a>
                                        
                    <a href="...">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Ethiopianism
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                    </a>
                                        
                    <a href="../Pages/Docs.php">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Docs
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                    </a>
                                        
                    <Link to={{pathname:'/Company'}}>
                        <li activeClassName="active" class="list-group-item d-flex justify-content-between align-items-center">
                            Partner Institutions
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                    </Link>
                                        
                    <a href="...">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            Real Estate
                            <span class="badge badge-primary badge-pill">1</span>
                        </li>
                    </a>
                                        
                </ul>
            </div>
            // End of Sidebar
        );
    }
}

export default Home_Sidebar;