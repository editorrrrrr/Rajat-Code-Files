#include <stdio.h>

int main(){
int length,breadth,height;
printf("Enter the value of length \n");
scanf("%d",&length);

printf("Enter the value of breadth \n");
scanf("%d",&breadth);

printf("Enter the value of height \n");
scanf("%d",&height);

printf("The value/area of this rectangle is %d",length*breadth+height);
      return 0;
}