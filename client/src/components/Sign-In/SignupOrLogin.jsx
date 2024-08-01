import React, { useEffect, useState } from "react";

export default function SignupOrLogin({
  setuser,
  setuserid,
  isloggedIn,
  setisLoggedIn,
}) {
  const [login, setlogin] = useState(true);
  const [signup, setsignup] = useState(false);
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [signUpEmail, setsignupEmail] = useState();
  const [signupPass, setsignupPass] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [users, setusers] = useState();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000//users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);
  // useEffect(() => {
  //   console.log("kanu");
  // }, [isloggedIn]);

  // console.log(users[0]);

  function handleLoginSubmit(e) {
    e.preventDefault();
    if (users) {
      // console.log(users);
      let user = users.filter(
        (user) => user.email == email && user.password == password
      );
      console.log(user);
      if (user.length != 0) {
        localStorage.setItem("isloggedIn", true);
        localStorage.setItem("userid", JSON.stringify(user[0].id));
        window.location.replace("/user");
      }
    }
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    if (signupPass == confirmPassword) {
      let user = users.filter((user) => user.email == signUpEmail);

      if (user && user.length == 0) {
        let obj = {
          username: firstname + " " + lastname,
          email: signUpEmail,
          password: signupPass,
        };
        fetch("http://127.0.0.1:5555/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((res) => {
            if (res) {
              let user = res;

              localStorage.setItem("userid", JSON.stringify(user.id));
              localStorage.setItem("user", JSON.stringify(user));
              localStorage.setItem("isloggedIn", true);

              window.location.replace("/user");
            }
          })
          .catch((e) => console.log(e));
      } else {
        console.log("already a user like this");
      }
    }
  }

  return (
    <div className='grid h-[85vh] '>
      <div className='grid grid-cols-2 place-self-center'>
        <div className='flex flex-col px-4 gap-12  h-[40vh] w-[30vw] border-r-[#919090] border-r-[1px]'>
          <div className='flex flex-col gap-2'>
            <h1 className='grid place-self-center text-5xl  font-serif  font-[200]'>
              Login to your Account
            </h1>
          </div>

          <div>
            <form
              className='flex flex-col gap-2'
              onSubmit={(e) => handleLoginSubmit(e)}
            >
              <div className='grid grid-rows-2 gap-5'>
                <input
                  type='email'
                  required
                  placeholder='Email Address'
                  className=' h-[4vh] border-[#d3d3d3] border-[1px] focus:bg-[#f3ebff]  focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif '
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type='password'
                  required
                  placeholder='Password'
                  className=' h-[4vh] border-[#d3d3d3] border-[1px] focus:bg-[#f3ebff] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif '
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              <div>
                <input type='checkbox' id='remember' name='' className='mr-2' />
                <label htmlFor='remember'>Remember me?</label>
              </div>

              <button className='button-23 my-7 hover:bg-[#673094] hover:text-white '>
                {" "}
                <input type='submit' value={"Save"} />
              </button>
            </form>
          </div>
        </div>

        <div className='px-4 flex flex-col gap-10'>
          <h1 className='grid place-self-center text-5xl  font-serif  font-[200]'>
            Signup to create an Account
          </h1>

          <form action='' onSubmit={(e) => handleSignupSubmit(e)}>
            <div className='grid grid-rows-3 gap-7'>
              <div className='grid grid-cols-2 gap-2'>
                <input
                  type='text'
                  required
                  placeholder='Firstname'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:bg-[#f3ebff]  focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif '
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                />
                <input
                  type='text'
                  required
                  placeholder='Lastname'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:bg-[#f3ebff]  focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif '
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </div>
              <div className='grid'>
                <input
                  type='email'
                  required
                  placeholder='Email Address'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:bg-[#f3ebff]  focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif '
                  value={signUpEmail}
                  onChange={(e) => setsignupEmail(e.target.value)}
                />
              </div>
              <div className='grid grid-cols-2 gap-2'>
                <input
                  type='password'
                  required
                  placeholder='Password'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:bg-[#f3ebff]  focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif '
                  value={signupPass}
                  onChange={(e) => setsignupPass(e.target.value)}
                />
                <input
                  type='password'
                  required
                  placeholder='Confirm Password'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:bg-[#f3ebff]  focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif '
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>

              <button className='button-23 my-7 hover:bg-[#673094] hover:text-white '>
                {" "}
                <input type='submit' value={"Save"} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
