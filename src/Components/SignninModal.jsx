import React, { Component } from 'react';
import SignInImage from '../Assets/signin_image.png';


class SigninModal extends Component{
    state = { }
    render(){
        return(
            // Modal Sign in form
            <div class="modal fade signin_modal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content modal-body">
                        <div class="row mx-0 p-lg-4">
                            <div class="col-lg-6">
                                <img src={SignInImage} alt="Sign in Image" class="w-100" />
                            </div>
                            <div class="col-lg-6 mt-lg-3">
                                <header class="h4 mb-lg-4 text-primary">SIGN IN</header>
                                <form action="" method="">
                                    <div class="form-group mt-lg-4">
                                        <input class="form-control" placeholder="Username" name="signin-username" type="text" />  
                                    </div>
                                    <div class="form-group mt-lg-4">
                                        <input class="form-control" placeholder="Password" name="signin-password" type="password"  />
                                    </div>
                                    <div class="form-check mt-lg-4">
                                        <input type="checkbox" class="form-check-input" name="signin-remember" id="signin-remember" />
                                        <label class="form-check-label" for="signin-remember">Remember Password</label>
                                    </div>
                                    <div class="form-group mt-lg-3">
                                        <label>Forgot Password? <a class="text-primary" href="...">Click Here</a></label>
                                    </div>
                                    <input class="btn btn-primary btn-block mt-lg-4" value="Sign In" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // End of Modal
        );
    }
}

export default SigninModal