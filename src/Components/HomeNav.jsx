import React, {Component} from 'react';


class HomeNav extends Component{
    state = { }
    render(){
        return(
            <div class="default-header">
		        <div class="navbar navbar-expand navbar-expand-sm navbar-expand-xs sticky-top contanier-fluid w-100">
                    <div class="navbar-wrapper ml-3">
                        <a class="navbar-brand text-light" href="...">KUTBAR<span class="h6">.COM</span></a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mt-2 mr-5 mt-lg-0" >
                            <li class="nav-item mr-4 mt-2">
                                {/* Search Form in the Navigation Header */}
                                <form method="" action="">
                                    <div class="input-group" id="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1"><img src="../Images/Search_Icon.png" class="" /></span>
                                        </div>
                                        <input type="text" name="search-key-word" placeholder="Search" class="form-control" aria-describedby="basic-addon1" aria-label="Search" />
                                    </div>
                                </form>
                                {/* End of the Search Form */}
                            </li>
                            {/* container for the Sysmbols of Message, Connection and Notification */}
                                <li class="nav-item mr-4 mt-1">
                                    <a class="nav-link" href="#"><img src="../Images/message.png" alt="Message Icon on Homepage" class="img-responsive nav-icon-symbol nav-icon-symbol-message" /><span class="badge">1</span></a>
                                </li>
                                <li class="nav-item mr-4 mt-1">
                                    <a class="nav-link" href="#"><img src="../Images/connections.png" alt="Connection Icon on Homepage" class="img-responsive nav-icon-symbol nav-icon-symbol-connection" /><span class="badge">1</span></a>
                                </li>
                                <li class="nav-item mr-4 mt-1">
                                    <a class="nav-link" href="#"><img src="../Images/notifications.png" alt="Notification Icon on Homepage" class="img-responsive nav-icon-symbol nav-icon-symbol-notification" /><span class="badge">1</span></a>
                                </li>
                            <li class="nav-item dropdown show">
                                <a href="#" class="nav-link dropdown-toggle text-light" id="navBarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../Images/profile.jpg" alt="Profile Image on Home Page" class="img-responsive avatar-img" /></a>
                                <div class="dropdown-menu dropdown-menu-right mt-1" aria-labelledby="navBarDropdown">
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
                                                <img src="../Images/profile.jpg" class="img-responsive avatar-img-profile" />
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
	        </div>
        );
    }
}
