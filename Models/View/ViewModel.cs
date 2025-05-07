using Newtonsoft.Json;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace AppDownloadListWeb.Models.View
{
    public class ViewModel
    {

        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }

        
    }
}