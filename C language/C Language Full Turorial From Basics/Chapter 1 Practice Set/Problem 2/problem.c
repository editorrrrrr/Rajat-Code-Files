#include <stdio.h>

int main()
{
    int r =5 ,
    height = 8;
   

    printf("the value of circle with radius %d is %f \n", r, 3.14 * r * r);
    printf("the value of circle with radius %d , height %d is %f ", r, height, 3.14 * r * r*height);

    return 0;
}