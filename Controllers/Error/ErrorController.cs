using System.Web.Mvc;

namespace AppDownloadListWeb.Controllers.Error
{
    public class ErrorController : BaseController
    {
        public ActionResult NotFound()
        {
            Response.StatusCode = 404;
            return View("NotFound"); 
        }

        public ActionResult ServerError()
        {
            Response.StatusCode = 500;
            return View("ServerError"); 
        }
    }
}