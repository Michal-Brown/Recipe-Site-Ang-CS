using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FinalProjectVS.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Login(string password, string name)
        {
            User tempUser = DB.Users.FirstOrDefault(user => user.Name == name);
            if (tempUser == null)
                return NotFound();
            if (tempUser.Password != password)
                return Conflict(); // ircorrect password

            return Ok();
        }
        [HttpPost]
        public IHttpActionResult Register(User user)
        {
            User tempUser = DB.Users.FirstOrDefault(u => u.Email == user.Email);
            if (tempUser == null)
            {
                User newUser = new User(user.Name, user.Address, user.Email, user.Password);
                DB.Users.Add(tempUser);
                return Created("User added succesfully", tempUser);
            }
            return Conflict();
        }

    }

}
