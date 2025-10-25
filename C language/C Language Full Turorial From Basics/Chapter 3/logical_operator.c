#include <stdio.h>

int main(){
int a =0;  int b =1;
printf("the value of a and b is %d\n", a&&b);
printf("the value of a and b is %d\n", a||b);
printf("the value of not(a)  is %d", !a);
return 0;
}
// in this operator we use logic these are (&&, ||, !) means AND , OR , NOT (AND is used when both the condition is true) , (OR is used when atleast one condition is true) , (NOT is used in some tricky way it return true if given false and return false if given true)