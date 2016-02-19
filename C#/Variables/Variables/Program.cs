using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Variables
{
    class Program
    {
        //Task 7
        static void ConcatStrangeThings()
        {
            int x = 5;
            string y = "19";
            int c = x + Int32.Parse(y);

            Console.WriteLine(c);
            

        }

        //Task  8
        static void Apple()
        {
            double apple = 252;
            double appleInBasket = 47;
            double baskets = apple / appleInBasket;

            Console.WriteLine(Math.Ceiling(baskets));
            

        }

        //Task 9
        static void MobileSms()
        {
            double credit = 146.5;
            double cost = 4.75;
            double sms = credit / cost;

            Console.WriteLine(Math.Floor(sms));
        }


        static void Main(string[] args)
        {
            //ConcatStrangeThings();

            //Apple();

            MobileSms();

            Console.ReadLine();
        }
    }
}
