namespace DutchTreat.Services
{
    public interface IMailService
    {
        void SendMessage(string to, string subject, string body);
        void SendMessage(string v1, string v2);
    }
}