import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* export class AppComponent{

  showAlert(id:any)
  {
    alert('bjfdjfjh'  + id);
  }
  colorval= 'blue';
  subTittle="This is example of interpolation";
  opName = 13;

  user=
  {
    userName:'Rajshree patel',
    firstName:'Rajshree',
    lastName:'patel',
    userId: 23,
    DOB: '07/23/2021',
    salary: 2000
   };

   placeholdrVal="Enter name";
 fullName:string ="";

} */
 export class AppComponent{
  colorval= 'blue';
  classname= 'one';
  classname1= 'two';
}

/* export class AppComponent
{
 isvalid:boolean=true;
changevalue(valid:any)
{
  this.isvalid=valid;
}
} */

//ngfor example
 /* export class AppComponent
{
Students:any[]=[
  {
    'name':'Rajshree patel'
   },
   {
    'name':'Sonali kumari'
   },
   {
    'name':'Bhola kumar'
   },
   {
    'name':'Shams Qamer'
   },
   {
    'name':'Aditya kumar'
   }
];
}
 */

//ngfor with track
/* export class AppComponent
{
    students:any[];
    constructor()
    {
      this.students=[
        {
        studentid:122,
        name:"Raj",
        gender:"female",
        age:21,
        cource:"btech"  
        },
        
          {
            studentid:212,
            name:"Son",
            gender:"female",
            age:23,
            cource:"btech"  
          },
            {
              studentid:33,
              name:"Bholu",
              gender:"male",
              age:24,
              cource:"btech"  
            },
             {
               studentid:43,
                name:"Aadi",
                gender:"male",
                age:25,
                cource:"btech"  
              }
      ];
    }
 
     getmorestudents():void{

      this.students=[
        {
        studentid:122,
        name:"Raj",
        gender:"female",
        age:21,
        cource:"btech"  
        },
        
          {
            studentid:212,
            name:"Son",
            gender:"female",
            age:23,
            cource:"btech"  
          },
            {
              studentid:33,
              name:"Bholu",
              gender:"male",
              age:24,
              cource:"btech"
            },  
            {
                studentid:43,
                name:"Aadi",
                gender:"male",
                age:25,
                cource:"btech"  
                },
                {
                  studentid:50,
                  name:"shams",
                  gender:"male",
                  age:26,
                  cource:"btech"  
                  }
      ];
    }
trackbystudentid(index:number,student:any):string{
  return student.studentid;
}
  }  */



  //groupby in ngfor
 /* export class AppComponent
  {
    Contrydetails:any[]=[
      {
      'country':'India',
      'people':[
        {
        'name':'Rajshree'
        },
        {
          'name':'Sonali'
          },
          {
            'name':'Bholu'
            }
      ]
    },
    {
      'country':'USA',
      'people':[
        {
        'name':'Aadi'
        },
        {
          'name':'Shams'
          },
          {
            'name':'Prity'
            }
      ]
    },
    ];
  } 


 */
  //ngswitch example
   /* export class AppComponent
  {
  public choose="";
  setvalue(drp:any)
  {
    this.choose=drp.target.value;
  }
  }  */