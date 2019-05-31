import React, {Component} from 'react';
import MessageIcon from '../Assets/message.png';
import ConnectionIcon from '../Assets/connections.png';
import NotificationIcon from '../Assets/notifications.png';
import ProfileImage from '../Assets/profile.jpg';


class HomeNavWithOutSearch extends Component{
    state = { 
        isOpen: false
    };
    toggleopen = () => this.setState({isOpen: !this.state.isOpen});

    render(){
        const menuClass = `dropdown-menu dropdown-menu-right${this.state.isOpen ? " show" : ""}`;
        return(
            // Top Navigation
            <div class="navbar navbar-expand navbar-expand-sm navbar-expand-xs sticky-top contanier-fluid w-100">
                <div class="navbar-wrapper ml-3">
                    <a class="navbar-brand text-light" href="...">KUTBAR<span class="h6">.COM</span></a>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mr-5 mt-lg-0">
                        {/* Container for the Systmbols of Message, Connection and Notification */}
                        <li class="nav-item mr-4 mt-1">
                            <a class="nav-link" href="..."><img src={MessageIcon} alt="Message Icon on Homepage" class="img-responsive nav-icon-symbol nav-icon-symbol-message" /><span class="badge badge-light">1</span></a>
                        </li>
                        <li class="nav-item mr-4 mt-1">
                            <a class="nav-link" href="..."><img src={ConnectionIcon} alt="Connection Icon on Homepage" class="img-responsive nav-icon-symbol nav-icon-symbol-connection" /><span class="badge badge-light">1</span></a>
                        </li>
                        <li class="nav-item mr-4 mt-1">
                            <a class="nav-link" href="..."><img src={NotificationIcon} alt="Notification Icon on Homepage" class="img-responsive nav-icon-symbol nav-icon-symbol-notification" /><span class="badge badge-light">1</span></a>
                        </li>
                        <li class="nav-item dropdown show" onClick={this.toggleopen}>
                            <a class="nav-link dropdown-toggle text-light" id="navBarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={ProfileImage} alt="Home Page" class="img-responsive avatar-img" /></a>
                            <div class={menuClass} aria-labelledby="navBarDropdown">
                                <a href="..." class="dropdown-item">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="text-black mt-2">
                                                <p>@LeulMak
                                                    <br />
                                                    <small>Student</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-4 ml-4 mt-0">
                                            <img src={ProfileImage} alt="Dropdown-profile" class="img-responsive avatar-img-profile" />
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="..." class="dropdown-item">View Profile</a>
                                <a href="..." class="dropdown-item">Manage Profile</a>
                                <a href="..." class="dropdown-item">Help Center</a>
                                <a href="..." class="dropdown-item">Log Out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            // End of Top Navigation
        );
    }
}

export default HomeNavWithOutSearch