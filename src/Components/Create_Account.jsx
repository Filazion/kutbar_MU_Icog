import React, { Component } from 'react';


class create_account extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-4 offset-1 my-5">
            <div class="h3 text-primary my-5 text-bold">Create Account</div>
            <div class="card-text my-3 w-75">
              <p>
                Creating Kutbar Account won\'t take more than a minute. If you
                already have an account, Please Sign In.{" "}
              </p>
            </div>
            <div class="card-text my-3 w-75">
              <p class="text-primary">
                If you are the member of Institutions attached here, Please use
                the Premium Membership. Click Here To View The List{" "}
              </p>
            </div>
          </div>
          <div class="col-6">
            <div class="form my-5 offset-2">
              <form action="create.php" method="POST">
                <div class="col-10">
                  <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input
                      name="fullname"
                      type="text"
                      id="fullname"
                      class="form-control form-rounded"
                      placeholder="Enter Full Name"
                    />
                    <span class="validateerror" id="validatename" />
                  </div>
                  <div class="form-group">
                    <label for="Email">Email</label>
                    <input
                      type="email"
                      id="email"
                      class="form-control form-rounded"
                      placeholder="johnsmith@gmail.com"
                    />
                    <span class="validateerror" id="validateemail" />
                  </div>
                  <div class="form-group">
                    <label for="phonenumber">Phone Number</label>
                    <input
                      type="text"
                      id="phonenumber"
                      class="form-control form-rounded"
                      placeholder="+251911223344"
                    />
                    <span class="validateerror" id="validatephonenumber" />
                  </div>
                  <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input
                      type="text"
                      id="fullname"
                      class="form-control form-rounded"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="birthdate">Birth Date</label>
                    <input
                      type="text"
                      id="birthdate"
                      class="form-control form-rounded"
                      placeholder="dd/mm/yy"
                    />
                  </div>
                  <div class="form-group">
                    <label for="membership">Membership</label>
                    <select
                      class="form-control form-rounded selectoption"
                      id="membership"
                    >
                      <option value="" selected disabled>
                        Select Membership
                      </option>
                      <option>Premium Membership</option>
                      <option>Free Membership</option>
                    </select>
                  </div>
                  <div class="row justify-content-end">
                    <div class="col-4">
                      <div class="form-group offset-md-5">
                        <input
                          type="submit"
                          class="btn btn-md btn-primary submitButton form-rounded pr-5 pb-1 pt-1 pl-5"
                          id="Login-button-style"
                          value="Next"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default create_account;
