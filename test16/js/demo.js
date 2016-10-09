function  res(x,y,char){
                  if(!isNaN(x)&& typeof!isNaN(y)){
                        if(char=="加"){
                           return x+y;
                        }else if(char=="减"){
                           return x-y;
                        }else if(char=='乘'){
                           return x*y;
                        }else if(char=="除"){
                              if(y!=0){
                                   return x/y;
                              }else{
                                   return "除数不能为0";
                              }
                        }else if(char=="取模"){
                              return x%y;
                        }else{
                              return "不具备您选择的运算";
                        }
		      }else if(x==""||y==""){
                        return "x或者y不能为空";
                  }else{
                        return "x或者y必须为数字"
                  }
            };
		document.write(res(10,0,"除"));