int bombillo = 12;
int espera = 1000;



void setup()
{
  pinMode(bombillo, OUTPUT);
 
}

void loop()
{
  digitalWrite(bombillo, HIGH);
  delay(espera);
  digitalWrite(bombillo, LOW);
  delay(espera *3);
}
