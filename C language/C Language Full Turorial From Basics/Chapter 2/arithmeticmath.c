#include <stdio.h>

int main(){
float a =5;
int b =2;
float c = a/b;
int d = 13.6;
printf("The value of c is %f\n",c);
printf("The value of d is %d",d);
     return 0;
}


// the value which will not run is like b*c = z; it will not run as it invalid to compiler and many more like it which is not be able to compile within second bcz of wrong code that's why you always need to write carefully the code otherwise your condition will be same like me 


// a important thing is if u need to calculate the math equation and specially the division then you need to checkout that you have write variable ex - [int and float] bcz if you only write [int] then it will only compile the equation and not the full eq bcz it will only compile the primary value not the exact value.if you write the decimal value in any variable then it will automatically demotion the decimal value 
//  now the next important thing is {Operators Precedence} the sequence in this is {*/%} pehle ye chalega and then {+-} ye chalega and last {=} ye chalega if i say this condition in one line which will be [Operator of higher priority are evaluated first in the absence of parenthesis]

// [Operator Associativity] = when operators of equal priority are present in an expression , the tie is taken care of by associativity ex - x*y/z = (x*y)/z , x/y*z = (x/y)*z  follows left to right associativity 