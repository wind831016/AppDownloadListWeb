
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web.Mvc;

namespace AppDownloadListWeb.Controllers
{
    public class BaseController : Controller
    {
        internal Dictionary<string, object> GetDict(DataTable dt)
        {
            return dt.AsEnumerable()
              .ToDictionary<DataRow, string, object>(row => row.Field<string>(0),
                                        row => row.Field<object>(1));
        }
    }
}