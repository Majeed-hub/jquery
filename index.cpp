#include<stdio.h>

void main(){

    int i;
    int arr[200];

    for(i=0; i<200; i++){
        if(i>=0 && i<= 75){
            arr[i]=3;
        }
        else if(i>=76 && i<=150){
            arr[i]=4;
        }
        else{
            arr[i]=5;
        }
    }
    getch();
}