var express = require('express');
var router = express.Router();
var mongo = require('mongodb');                                                                                     
var monk = require('monk');
var db_name = 'MedicineDB';
var db = monk('localhost:27017/' + db_name);
var collection = db.get('medicine_collection');

router.post('/', function(req,res){
  content = '' +
  '<div class="row">'+
    '<div class="col-lg-5">'+  
        '<input type="radio"  name="project" value="Project"/> <font size="4">  Project </font> <br>'+
        '<input type="radio"  name="normal_disease" value="Normal"/> <font size="4"> Normal   </font>'+
        '<input type="radio"  name="normak_disease" value="Disease"/> <font size="4"> Disease  </font><br>'+
        '<input type="radio"  name="age" value="Age"/> <font size="4"> Age      </font><br>'+
        '<input type="radio"  name="hand" value="LHand"/> <font size="4"> L Hand   </font>'+
        '<input type="radio"  name="hand" value="RHand"/> <font size="4"> R Hand   </font><br>'+
        '<input type="radio"  name="organ" value="Organ"/> <font size="4"> Organ    </font><br>'+
        '<input type="radio"  name="species" value="Species"/> <font size="4"> Species   </font><br>'+
        '<input type="radio"  name="scan_date" value="ScanDate"/> <font size="4"> Scan Date </font><br>'+
        '<input type="radio"  name="t1" value="T1"/> <font size="4"> T1       </font>'+
        '<input type="radio"  name="T2" value="T2"/> <font size="4"> T2       </font>'+
        '<input type="radio"  name="dsi" value="DSI"/> <font size="4"> DSI      </font>'+
        '<input type="radio"  name="fmri" value="fMRI"/> <font size="4"> fMRI     </font>'+
        '<input type="radio"  name="task_fmri" value="TaskfMRI"/> <font size="4"> Task fMRI </font><br>'+
        '<input class="btn btn-xs btn-primary btn-block" style="font-size:15pt; width:70px;height:30px" type="submit" value="search" onclick="Search();"/>'+
    '</div>'+
    '<div class="col-lg-7">'+
      '<div class="row row-officanvas row-offcanvas-right">'+
        '<div class="col-xs-12 col-sm-9" style="overflow: hidden;">#HTML_Search'+  
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
  res.send(content);
});
module.exports = router;
