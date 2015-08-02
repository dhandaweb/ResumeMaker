using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ResumeMaker
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            bool retVal = false;

            var con = ConfigurationManager.ConnectionStrings["resumeMakerConnection"].ToString();
            SqlConnection mycon = new SqlConnection(con);
            try
            {
                //SqlCommand cmd = new SqlCommand("Select * from LOGIN where UserName=@UserName & Password=@Password", mycon);
                SqlCommand cmd = new SqlCommand("Select * from LOGIN where UserName=@UserName", mycon);
                
                cmd.Parameters.AddWithValue("@UserName", "Sunny");
                //cmd.Parameters.AddWithValue("@Password", "Sunny123");
                mycon.Open();
                SqlDataReader dr = cmd.ExecuteReader();
                

                if (dr.HasRows)
                {
                    retVal = true;
                }

            }
            catch (Exception)
            {

                mycon.Close();
            }

        }
    }
}