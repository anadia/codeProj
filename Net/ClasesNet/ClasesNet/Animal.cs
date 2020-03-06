namespace ClasesNet
{
    public class Animal
    {
        // Constructor con varias Propiedades:
        public Animal(string raza, int noPatas, string color)
        {
            Raza = raza;
            NoPatas = noPatas;
            Color = color;
        }
    }
    
    public string Raza { get; set; }
    public string NoPatas { get; set; }
    public string Color { get; set; }
    
}

