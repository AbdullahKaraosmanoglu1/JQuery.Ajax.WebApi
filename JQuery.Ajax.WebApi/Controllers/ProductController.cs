using JQuery.Ajax.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JQuery.Ajax.WebApi.Controllers
{
    public class ProductController : ApiController
    {
        ProductDbEntities db = new ProductDbEntities();

        public string Post(Product product)
        {
            db.Product.Add(product);
            db.SaveChanges();
            return "ürün eklendi";
        }
    }
}
