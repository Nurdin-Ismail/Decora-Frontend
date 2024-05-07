import React, { useEffect, useState } from 'react'

import forward from '../../forward.png'
// import codes from '../../countryCodes.txt'

export default function User({user, updated, setupdated}) {
  const [current, setcurrent] = useState('Account Information')
  const [firstname, setfirstname] = useState()
  const [lastname, setlastname] = useState()
  const [passChecked, setpasschecked] = useState(false)
  const [emailChecked, setemailchecked] = useState(false)
  const [code, setcode] = useState('(+254)')
  const [number, setnumber] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [confirm, setconfirm] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmNewPassword, setConfirmNewPassword] = useState()

  const countryCallingCodes = [
    ["(+93)", "Afghanistan"],
    ["(+355)", "Albania"],
    ["(+213)", "Algeria"],
    ["(+1684)", "American Samoa"],
    ["(+376)", "Andorra"],
    ["(+244)", "Angola"],
    ["(+1264)", "Anguilla"],
    ["(+672)", "Antarctica"],
    ["(+1268)", "Antigua and Barbuda"],
    ["(+54)", "Argentina"],
    ["(+374)", "Armenia"],
    ["(+297)", "Aruba"],
    ["(+61)", "Australia"],
    ["(+43)", "Austria"],
    ["(+994)", "Azerbaijan"],
    ["(+1242)", "Bahamas"],
    ["(+973)", "Bahrain"],
    ["(+880)", "Bangladesh"],
    ["(+1246)", "Barbados"],
    ["(+375)", "Belarus"],
    ["(+32)", "Belgium"],
    ["(+501)", "Belize"],
    ["(+229)", "Benin"],
    ["(+1441)", "Bermuda"],
    ["(+975)", "Bhutan"],
    ["(+591)", "Bolivia"],
    ["(+387)", "Bosnia and Herzegovina"],
    ["(+267)", "Botswana"],
    ["(+55)", "Brazil"],
    ["(+246)", "British Indian Ocean Territory"],
    ["(+673)", "Brunei Darussalam"],
    ["(+359)", "Bulgaria"],
    ["(+226)", "Burkina Faso"],
    ["(+257)", "Burundi"],
    ["(+855)", "Cambodia"],
    ["(+237)", "Cameroon"],
    ["(+1)", "Canada"],
    ["(+238)", "Cape Verde"],
    ["(+1345)", "Cayman Islands"],
    ["(+236)", "Central African Republic"],
    ["(+235)", "Chad"],
    ["(+56)", "Chile"],
    ["(+86)", "China"],
    ["(+61)", "Christmas Island"],
    ["(+61)", "Cocos (Keeling) Islands"],
    ["(+57)", "Colombia"],
    ["(+269)", "Comoros"],
    ["(+242)", "Democratic Republic of the Congo"],
    ["(+243)", "Congo"],
    ["(+682)", "Cook Islands"],
    ["(+506)", "Costa Rica"],
    ["(+225)", "Cote D'Ivoire"],
    ["(+385)", "Croatia"],
    ["(+53)", "Cuba"],
    ["(+357)", "Cyprus"],
    ["(+420)", "Czech Republic"],
    ["(+45)", "Denmark"],
    ["(+253)", "Djibouti"],
    ["(+1767)", "Dominica"],
    ["(+1809)", "Dominican Republic"],
    ["(+593)", "Ecuador"],
    ["(+20)", "Egypt"],
    ["(+503)", "El Salvador"],
    ["(+240)", "Equatorial Guinea"],
    ["(+291)", "Eritrea"],
    ["(+372)", "Estonia"],
    ["(+251)", "Ethiopia"],
    ["(+500)", "Falkland Islands (Malvinas)"],
    ["(+298)", "Faroe Islands"],
    ["(+679)", "Fiji"],
    ["(+358)", "Finland"],
    ["(+33)", "France"],
    ["(+594)", "French Guiana"],
    ["(+689)", "French Polynesia"],
    ["(+241)", "Gabon"],
    ["(+220)", "Gambia"],
    ["(+995)", "Georgia"],
    ["(+49)", "Germany"],
    ["(+233)", "Ghana"],
    ["(+350)", "Gibraltar"],
    ["(+30)", "Greece"],
    ["(+299)", "Greenland"],
    ["(+1473)", "Grenada"],
    ["(+590)", "Guadeloupe"],
    ["(+1671)", "Guam"],
    ["(+502)", "Guatemala"],
    ["(+224)", "Guinea"],
    ["(+245)", "Guinea-Bissau"],
    ["(+592)", "Guyana"],
    ["(+509)", "Haiti"],
    ["(+39)", "Holy See (Vatican City State)"],
    ["(+504)", "Honduras"],
    ["(+852)", "Hong Kong"],
    ["(+36)", "Hungary"],
    ["(+354)", "Iceland"],
    ["(+91)", "India"],
    ["(+62)", "Indonesia"],
    ["(+98)", "Islamic Republic of Iran"],
    ["(+964)", "Iraq"],
    ["(+353)", "Ireland"],
    ["(+972)", "Israel"],
    ["(+39)", "Italy"],
    ["(+1876)", "Jamaica"],
    ["(+81)", "Japan"],
    ["(+962)", "Jordan"],
    ["(+7)", "Kazakhstan"],
    ["(+254)", "Kenya"],
    ["(+686)", "Kiribati"],
    ["(+383)", "Kosovo"],
    ["(+850)", "Democratic People's Republic of Korea"],
    ["(+82)", "Republic of Korea"],
    ["(+965)", "Kuwait"],
    ["(+996)", "Kyrgyzstan"],
    ["(+856)", "Lao People's Democratic Republic"],
    ["(+371)", "Latvia"],
    ["(+961)", "Lebanon"],
    ["(+266)", "Lesotho"],
    ["(+231)", "Liberia"],
    ["(+218)", "Libyan Arab Jamahiriya"],
    ["(+423)", "Liechtenstein"],
    ["(+370)", "Lithuania"],
    ["(+352)", "Luxembourg"],
    ["(+853)", "Macao"],
    ["(+389)", "The Former Yugoslav Republic of Macedonia"],
    ["(+261)", "Madagascar"],
    ["(+265)", "Malawi"],
    ["(+60)", "Malaysia"],
    ["(+960)", "Maldives"],
    ["(+223)", "Mali"],
    ["(+356)", "Malta"],
    ["(+692)", "Marshall Islands"],
    ["(+596)", "Martinique"],
    ["(+222)", "Mauritania"],
    ["(+230)", "Mauritius"],
    ["(+269)", "Mayotte"],
    ["(+52)", "Mexico"],
    ["(+691)", "Federated States of Micronesia"],
    ["(+373)", "Moldova, Republic of"],
    ["(+377)", "Monaco"],
    ["(+976)", "Mongolia"],
    ["(+382)", "Montenegro"],
    ["(+1664)", "Montserrat"],
    ["(+212)", "Morocco"],
    ["(+258)", "Mozambique"],
    ["(+95)", "Myanmar (Burma)"],
    ["(+264)", "Namibia"],
    ["(+674)", "Nauru"],
    ["(+977)", "Nepal"],
    ["(+31)", "Netherlands"],
    ["(+599)", "Netherlands Antilles"],
    ["(+687)", "New Caledonia"],
    ["(+64)", "New Zealand"],
    ["(+505)", "Nicaragua"],
    ["(+227)", "Niger"],
    ["(+234)", "Nigeria"],
    ["(+683)", "Niue"],
    ["(+672)", "Norfolk Island"],
    ["(+1670)", "Northern Mariana Islands"],
    ["(+47)", "Norway"],
    ["(+968)", "Oman"],
    ["(+92)", "Pakistan"],
    ["(+680)", "Palau"],
    ["(+970)", "State of Palestine"],
    ["(+507)", "Panama"],
    ["(+675)", "Papua New Guinea"],
    ["(+595)", "Paraguay"],
    ["(+51)", "Peru"],
    ["(+63)", "Philippines"],
    ["(+48)", "Poland"],
    ["(+351)", "Portugal"],
    ["(+1787)", "Puerto Rico"],
    ["(+974)", "Qatar"],
    ["(+262)", "Reunion"],
    ["(+40)", "Romania"],
    ["(+7)", "Russian Federation"],
    ["(+250)", "Rwanda"],
    ["(+290)", "Saint Helena"],
    ["(+1869)", "Saint Kitts and Nevis"],
    ["(+1758)", "Saint Lucia"],
    ["(+508)", "Saint Pierre and Miquelon"],
    ["(+1784)", "Saint Vincent and the Grenadines"],
    ["(+685)", "Samoa"],
    ["(+378)", "San Marino"],
    ["(+239)", "Sao Tome and Principe"],
    ["(+966)", "Saudi Arabia"],
    ["(+221)", "Senegal"],
    ["(+381)", "Serbia"],
    ["(+248)", "Seychelles"],
    ["(+232)", "Sierra Leone"],
    ["(+65)", "Singapore"],
    ["(+421)", "Slovakia"],
    ["(+386)", "Slovenia"],
    ["(+677)", "Solomon Islands"],
    ["(+252)", "Somalia"],
    ["(+27)", "South Africa"],
    ["(+995)", "South Georgia and the South Sandwich Islands"],
    ["(+34)", "Spain"],
    ["(+94)", "Sri Lanka"],
    ["(+249)", "Sudan"],
    ["(+597)", "Suriname"],
    ["(+47)", "Svalbard and Jan Mayen"],
    ["(+268)", "Swaziland"],
    ["(+46)", "Sweden"],
    ["(+41)", "Switzerland"],
    ["(+963)", "Syrian Arab Republic"],
    ["(+886)", "Taiwan, Province of China"],
    ["(+992)", "Tajikistan"],
    ["(+255)", "Tanzania, United Republic of"],
    ["(+66)", "Thailand"],
    ["(+670)", "Timor-Leste"],
    ["(+228)", "Togo"],
    ["(+690)", "Tokelau"],
    ["(+676)", "Tonga"],
    ["(+1868)", "Trinidad and Tobago"],
    ["(+216)", "Tunisia"],
    ["(+90)", "Turkey"],
    ["(+993)", "Turkmenistan"],
    ["(+1649)", "Turks and Caicos Islands"],
    ["(+688)", "Tuvalu"],
    ["(+256)", "Uganda"],
    ["(+380)", "Ukraine"],
    ["(+971)", "United Arab Emirates"],
    ["(+44)", "United Kingdom"],
    ["(+1)", "United States"],
    ["(+598)", "Uruguay"],
    ["(+998)", "Uzbekistan"],
    ["(+678)", "Vanuatu"],
    ["(+58)", "Venezuela"],
    ["(+84)", "Viet Nam"],
    ["(+1284)", "Virgin Islands, British"],
    ["(+1340)", "Virgin Islands, U.S."],
    ["(+681)", "Wallis and Futuna"],
    ["(+212)", "Western Sahara"],
    ["(+967)", "Yemen"],
    ["(+260)", "Zambia"],
    ["(+263)", "Zimbabwe"]
];



  useEffect(() => {
    if(user){
      setfirstname(user.name.split(' ')[0])
      setlastname(user.name.split(' ')[1])
      setemail(user.email.replace('example.net', 'gmail.com'))
      setpassword(user.password)
      setnumber(user.contacts)
    }

  }, [user])

  function handleSubmit(e){
    e.preventDefault()

    let inputs = [{firstname : firstname}, {lastname : lastname}, {email : email}, {contacts : number}, {password : newPassword}]
    let changed = inputs.map((input) => {
      if(Object.values(input)[0] == firstname){

        if(firstname != user.name.split(' ')[0]){
          return input

        }

      }else if(Object.values(input)[0] == lastname){

        if(lastname != user.name.split(' ')[1]){
          return input

        }

        
      }else if(Object.values(input)[0] == email){

        if(email != user.email.replace('example.net', 'gmail.com')){
          return input
        }
        
      }else if(Object.values(input)[0] == number){
        return input
      }else if(Object.values(input)[0] == newPassword){
        return input
      }
    })

    let changed2 = changed.filter((item) => {
      if(item != undefined){
        if(Object.values(item)[0] != undefined){
          return item
        }
      }
    } )

    let obj ={

    }

    changed2.map((item) => {
      if(Object.keys(item)[0] == 'firstname' || Object.keys(item)[0] == 'lastname'){
        Object.assign(obj, {username: firstname + ' ' + lastname})

      }else{
        Object.assign(obj, item)
      }
      
    })
    

        console.log(changed, obj)


    function handleEmail(obj){
      console.log(confirm)

      if(confirm == user.password){
        //patch request
        fetch(`http://127.0.0.1:5555/user/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)

         })
        .then(response => {
            if(response.ok){

              setupdated(updated + 1)

              return response.json()
        
        
            }
        })
        .then(res => console.log(res))
      }else{
        //incorrect password
        console.log('incorrect password')
      }

    }

    function handlePasssword(obj){

      if(confirm == user.password){
        if(newPassword === confirmNewPassword){
          //patch request
          fetch(`http://127.0.0.1:5555/user/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)

         })
        .then(response => {
            if(response.ok){

              setupdated(updated + 1)

              return response.json()
        
        
            }
        })
        .then(res => console.log(res))

        }else{
          //passwords don't match
          console.log("passwords don't match");
        }
        
      }else{
        //incorrect password
          console.log("incorrect password");

      }



    }

    function handleEmailAndPassword(obj){

      if(confirm == user.password){
        if(newPassword === confirmNewPassword){
          //patch request
          fetch(`http://127.0.0.1:5555/user/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)

         })
        .then(response => {
            if(response.ok){

              setupdated(updated + 1)

              return response.json()
        
        
            }
        })
        .then(res => console.log(res))


        }else{
          //passwords don't match
        }
        
      }else{
        //incorrect password
      }



    }


    if(emailChecked && passChecked){
      handleEmailAndPassword(obj)
      console.log(obj, 'both checked')
    }else if(emailChecked){
      handleEmail(obj)
      console.log(obj, 'only email')

    }else if(passChecked){
      handlePasssword(obj)
      console.log(obj, 'only password')

    }else{

      fetch(`http://127.0.0.1:5555/user/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)

         })
        .then(response => {
            if(response.ok){

              setupdated(updated + 1)

              return response.json()
        
        
            }else{
              return response
            }
        })
        .then(res => console.log(res))

            console.log(obj, 'either names or contacts or both')


    }



  }

  function handleButtonChange(target){
    if(target == 'Account Information' && user){
      return <div className=' px-8  bg-gray-100 grid h-[490px] grid-rows-[20%_30%_50%]'>

        <h1 className=' text-4xl font-[200] grid center-start '>Account Information</h1>

        <div className=' grid grid-cols-2 border-black border-b-[1px]'>

          <div className='flex flex-col '>

            <h1 className=' font-semibold text-xl'>Contact Information</h1>
            <h1 className=' text-[17px]'>{user.name}</h1>
            <h1>{user.email.replace('example.net', 'gmail.com')}</h1>
            <h1 className='  text-sky-600 cursor-pointer select-none w-9' 
            onClick={() => {
              setcurrent('Edit Information')
              setemailchecked(true)
            }
            }>Edit</h1>



            

          </div>

          <div className='flex flex-col '>

            <h1 className='font-semibold text-xl'>Newsletter</h1>
            <p>You aren't subscribed to our newsletter</p>
            <h1 className='  text-sky-600 cursor-pointer select-none w-9' onClick={() => setcurrent('Edit Information')}>Edit</h1>


          </div>

        </div>
        <div className=' '>

          <div className='my-5 flex items-center justify-between'>
                      <h1 className=' text-4xl font-[200]  '>Address Book</h1>
                      <h1 className='  text-sky-600 cursor-pointer select-none  w-24' 
                      onClick={() => setcurrent('Adress')
                      }>View all</h1>

          </div>


          <div className='grid grid-cols-2  '>
            <div className='flex flex-col center-start'>

              <h1 className=' font-semibold text-xl'>Default Billing Adress</h1>

              <p>You have not set a default billing adress</p>
              <h1 className='  text-sky-600 cursor-pointer select-none  w-24' onClick={() => setcurrent('Adress')}>Edit Adress</h1>



            

          </div>

          <div className='flex flex-col center-start'>

            <h1 className=' font-semibold text-xl'>Default Shipping Adress</h1>

              <p>You have not set a default shipping adress</p>
              <h1 className='  text-sky-600 cursor-pointer select-none  w-24' onClick={() => setcurrent('Adress')}>Edit Adress</h1>




          </div>
          </div>

        </div>

      </div>

    }else if(target == 'Adress' && user){
      return <h1>
        Adress
      </h1>

    }else if(target == 'Edit Information' && user){
      return <div className='bg-gray-100 h-[470px]'>

        <form onSubmit={(e) => {
          

          handleSubmit(e)
        } }>
          <div className=' flex justify-evenly pt-5'>
            <input type="text" value={firstname} className=' bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-medium outline-none' onChange={(e) => setfirstname(e.target.value)}/>
            <input type="text" value={lastname} className=' bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-medium outline-none' onChange={(e) => setlastname(e.target.value)}/>
          </div>

          <div className=' flex flex-col mx-20 mt-5 '>
            <div className='flex justify-around w-[14%] items-center'>
            <input type="checkbox" id='email' className=' w-4 h-4' checked={emailChecked} onChange={() => setemailchecked(!emailChecked)} />
            <label htmlFor="email">Change Email</label>
            </div>

            <div className='flex justify-around w-[17%] items-center'>
            <input type="checkbox"  className=' w-4 h-4'  id='password' checked={passChecked} onChange={() => {
              setpasschecked(!passChecked)
            }}/>
            <label htmlFor="password">Change Password</label>
            </div>
          </div>

          <div className=' flex items-center justify-between mx-6 mt-8'>
            {countryCallingCodes ? 

            <select name="" id="" value={code} className='text-center py-4 px-3 border-black border-b-[2px] outline-none focus:outline-none ' onChange={(e) => {
              setcode(e.target.value)
            }}>
              {countryCallingCodes.map((item) => {
                return <option className='text-center' value={item[0]}>{ item[1]}</option>
              })}
            </select>
            
            :
          
            null}

            <div className='flex items-center '>
              <h1 className=' pr-2 mr-3 ml-20  border-black border-b-[2px] pb-2 pt-2 text-lg font-semibold'>{code.replace('(', '').replace(')', '')}</h1>
              <input type="tel" maxlength='11' placeholder='Mobile Number'  className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none' value={number}  onChange={(e) => {
              
               
                  setnumber(e.target.value)
                
              
              }}/>
          </div>

          

          </div>

          <div>
            {emailChecked ? 

            passChecked ? 

            // Are both checked? Do this

            <div>

                            <h1 className='ml-6 my-5 font-extralight text-2xl'>Change Email & Password</h1>


              <div>
                <div className=' flex justify-between mx-6'>
                <input 
                type="email" 
                placeholder='Change email' 
                required 
                className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none'
                value={email}
                onChange={(e) => {
                  setemail(e.target.value)
                }}
                />
                <input type="password" value={confirm} placeholder='Confirm Password' required className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none' 
                onChange={(e) => {
                  setconfirm(e.target.value)

                }}/>
              </div>
              </div>
              <div className='grid  grid-cols-2 mx-6 gap-6'>
                <input type="password" value={newPassword} placeholder='New Password' required className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none' 
                onChange={(e) => {
                  setNewPassword(e.target.value)

                }}/>
              <input type="password" value={confirmNewPassword} placeholder='Confirm New Password' required className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none' 
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value)

                }}/>
              </div>

               
              

            </div>
            
            : 

            // Is only email checked? Do this

            <div className=' mt-5'>

              <h1 className='ml-6 mb-2 font-extralight text-2xl'>Change Email</h1>
              <div className=' flex justify-between mx-6'>
                <input 
                type="email" 
                placeholder='Change email' 
                required 
                className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none'
                value={email}
                onChange={(e) => {
                  setemail(e.target.value)
                }}
                />
                <input type="password" value={confirm} placeholder='Confirm Password' required className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none' 
                onChange={(e) => {
                  setconfirm(e.target.value)

                }}/>
              </div>

            </div>
            : 
            passChecked ?

            // is passowrd checked? do this 

            <div className=''>

                                          <h1 className='ml-6 my-5 font-extralight text-2xl'>Change Email & Password</h1>


              <div className='grid  grid-cols-2 mx-6'>
                <input type="password" value={confirm} placeholder='Current Password' required className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none' 
                onChange={(e) => {
                  setconfirm(e.target.value)

                }}/>
              <input type="password" value={newPassword} placeholder='New Password' required className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none' 
                onChange={(e) => {
                  setNewPassword(e.target.value)

                }}/>
              <input type="password" value={confirmNewPassword} placeholder='Confirm New Password' required className='bg-transparent w-[500px] border-black border-b-[2px] pb-2 pt-2 text-lg font-thin outline-none' 
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value)

                }}/>
              </div>
              

            </div>
            
            : 
            
            null
            }

            <button 
               className='button-23 my-10 mx-6 '
               > <input type="submit" value={'Save'}  /></button>
          </div>
        </form>


      </div>
      
    }else if(target == 'Orders' && user){
      return <h1>Orders</h1>
      
    }else if(target == 'Wishlist' && user){
      return <h1>Wishlist</h1>
      
    }

  }





  return (
    <div className='italiana'>
      <div className='h-[100vh] grid grid-cols-[30%_70%] gap-5'>

        <div className=' grid item-center-end'>

          <div className='  h-[70%] w-[50%] sticky top-4 overflow-x-hidden '>
            <ul className=' grid gap-2 select-none'>
              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Account Information' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Account Information' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Account Information' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Account Information')

                        }}>
                        Account Information

                    </div>
              </li>

              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Adress' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Adress' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Adress' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Adress')

                        }}>
                        Adress

                    </div>
              </li>

              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Edit Information' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Edit Information' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Edit Information' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Edit Information')

                        }}>
                        Edit Information

                    </div>
              </li>

              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Orders' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Orders' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Orders' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Orders')

                        }}>
                        Orders

                    </div>
              </li>

              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Wishlist' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Wishlist' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Wishlist' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Wishlist')

                        }}>
                        Wishlist

                    </div>
              </li>

              
            </ul>

          </div>

        </div>

        <div className='  grid mt-[15vh]'>


          <div className='  w-[1070px] h-[70%]'>
            {handleButtonChange(current)}


          </div>

        </div>


      </div>
    </div>
  )
}
