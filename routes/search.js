var express = require('express');
var router = express.Router();
router.post('/', function(req,res){
  content = '' +
  '<div class="row">'+
  '<div class="col-lg-3">'+  
  '<input type="radio"  name="project" /> <font size="4">  Project </font> <br>'+
  '<input type="radio"  name="normal_disease" /> <font size="4"> Normal   </font>'+
  '<input type="radio"  name="normak_disease" /> <font size="4"> Disease  </font><br>'+
  '<input type="radio"  name="age" /> <font size="4"> Age      </font><br>'+
  '<input type="radio"  name="hand"/> <font size="4"> L Hand   </font>'+
  '<input type="radio"  name="hand" /> <font size="4"> R Hand   </font><br>'+
  '<input type="radio"  name="organ"/> <font size="4"> Organ    </font><br>'+
  '<input type="radio"  name="species" /> <font size="4"> Species   </font><br>'+
  '<input type="radio"  name="scan_date" /> <font size="4"> Scan Date </font><br>'+
  '<input type="radio"  name="t1" /> <font size="4"> T1       </font>'+
  '<input type="radio"  name="T2" /> <font size="4"> T2       </font>'+
  '<input type="radio"  name="dsi" /> <font size="4"> DSI      </font>'+
  '<input type="radio"  name="fmri" /> <font size="4"> fMRI     </font>'+
  '<input type="radio"  name="task_fmri" /> <font size="4"> Task fMRI </font><br>'+
  '<input class="btn btn-xs btn-primary btn-block" style="font-size:15pt; width:70px;height:30px" type="submit" value="search"/>'+
  '</div>'+
  '</div>';
	

  res.send(content);
});
module.exports = router;
