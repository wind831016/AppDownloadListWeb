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
    public class HomeController : BaseController
    {
        public ActionResult Index() //string Index()//
        {

            //DataTable dt1 = new DataTable();
            //DataColumn dt1_img = new DataColumn("img", typeof(string));
            //dt1.Columns.Add(dt1_img);
            //DataRow dt1newRow = dt1.NewRow();
            //dt1newRow["img"] = "/Image/section.png";
            //dt1.Rows.Add(dt1newRow);
            //DataRow dt1newRow1 = dt1.NewRow();
            //dt1newRow1["img"] = "/Image/section1.png";
            //dt1.Rows.Add(dt1newRow1);
            //DataRow dt1newRow2 = dt1.NewRow();
            //dt1newRow2["img"] = "/Image/section2.png";
            //dt1.Rows.Add(dt1newRow2);

            //dynamic model_1 = this.GetDict(dt1);


            //Dictionary<string, object> temp = new Dictionary<string, object>();
            //temp.Add("Name", "金朝钱");
            //temp["Age"] = 31;
            //temp["Birthday"] = DateTime.Now;

           

            //dynamic obj = new System.Dynamic.ExpandoObject();

            //foreach (KeyValuePair<string, object> item in temp)
            //{
            //    ((IDictionary<string, object>)model_1).Add(item.Key, item.Value);
            //}

            //Response.Write(string.Format("Name:{0}", obj.GetType().GetProperty("name").GetValue(obj, null).ToString()));



            //return JsonConvert.SerializeObject(temp);
            return View();
        }
    }
}