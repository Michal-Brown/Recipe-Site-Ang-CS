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
    public class CategoryController : ApiController
    {
        [HttpGet]
        public List<Category> GetCategories()
        {
            return DB.Categories;
        }
        [HttpPost]
        public Category AddCategory(Category category)
        {
            DB.Categories.Add(category);
            return category;
        }
    }
}
