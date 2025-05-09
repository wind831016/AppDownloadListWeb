using AppDownloadListWeb.Models.View;
using AppDownloadListWeb.Models.View.Home;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AppDownloadListWeb.Controllers
{
    public class BackstageHomeController : BaseController
    {
        public ActionResult Index() { 
            return View();
        }
    }
}