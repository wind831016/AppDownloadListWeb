using AppDownloadListWeb.Models.View;
using AppDownloadListWeb.Models.View.Home;
using System.Web.Mvc;

namespace AppDownloadListWeb.Controllers
{
    public class LoginController : BaseController
    {
        public ActionResult Index() { 
            return View();
        }
    }
}