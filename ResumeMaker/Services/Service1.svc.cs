using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Text;

namespace ResumeMaker.Services
{
    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class Service1
    {
        // To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
        // To create an operation that returns XML,
        //     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
        //     and include the following line in the operation body:
        //         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";
        [OperationContract]
        [WebGet]
        public string GetCredentials()
        {
            // Add your operation implementation here
              return "Sunny";
        }
        [OperationContract]
        [WebGet]
        public bool DataBaseConnection(string username, string password)
        {
            bool retVal=false ;
             
            var con = ConfigurationManager.ConnectionStrings["resumeMakerConnection"].ToString();
            SqlConnection mycon = new SqlConnection(con);
            try
            {
                SqlCommand cmd = new SqlCommand("Select * from login where UserName=@UserName AND Password=@Password", mycon);
                cmd.Parameters.AddWithValue("@UserName", username);
                cmd.Parameters.AddWithValue("@Password", password);
                mycon.Open();
                SqlDataReader dr = cmd.ExecuteReader();
               
                if (dr.HasRows) {
                    retVal = true;
                }

            }
            catch (Exception)
            {
               
                mycon.Close();
            }

            return retVal;
        }

        [OperationContract]
        [WebGet]
        public string NewRegistration(string username, string password)
        {
            string retVal = "fail";

            var con = ConfigurationManager.ConnectionStrings["resumeMakerConnection"].ToString();
            SqlConnection mycon = new SqlConnection(con);
            try
            {

                SqlCommand cmd = new SqlCommand("insert into login (UserName,PassWord) Values(UserName=@UserName,Password=@Password)", mycon);
                cmd.Parameters.AddWithValue("@UserName", username);
                cmd.Parameters.AddWithValue("@Password", password);
                mycon.Open();
                cmd.ExecuteNonQuery();
                retVal = "sucess";
                //SqlDataReader dr = cmd.ExecuteReader();

                //if (dr.HasRows)
                //{
                //    retVal = "sucess";
                //}

            }
            catch (Exception)
            {

                mycon.Close();
            }

            return retVal;
        }
         
        // Add more operations here and mark them with [OperationContract]
    }
}
