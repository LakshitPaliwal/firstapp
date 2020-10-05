// <!Doctype>
// <html>
// <head>
//   <style>
//     .fishes
//     {
//       position:absolute;
//       top: 10px;
//       left: 10px;
//       z-index: 1;
//     }
//     .fish
//     {
//       position:absolute;
//       top: 15px;
//       left: 15px;
//       z-index: 2;
//     }
//   </style>
// </head>
// <body>
//   <img class="fishes" src="img_snow_wide.jpg"  >
//   <img class="fish"   src="http://www.corelangs.com/css/box/img/ontop2.png" style="width:15%;">
// </body>
// </html>
 import React ,{Component} from 'react';

 class LiveIcon extends Component{
   render(){
     return(
       <div>
          <img className="liveIcon"   src="http://www.corelangs.com/css/box/img/ontop2.png" />
       </div>
     )
   }
 }
export default LiveIcon;
