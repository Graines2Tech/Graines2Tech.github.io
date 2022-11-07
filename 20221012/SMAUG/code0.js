gdjs.Sc_232ne_32sans_32titreCode = {};
gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDlaveObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDlaveObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects2= [];

gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0 = {val:false};


gdjs.Sc_232ne_32sans_32titreCode.eventsList0 = function(runtimeScene) {

{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Soja"), gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("alien"), gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1);
gdjs.copyArray(runtimeScene.getObjects("barbapapa"), gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1[i].addPolarForce(180, 250, 0);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1[i].addPolarForce(180, 250, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Soja"), gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1[i].addPolarForce(0, 250, 0);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("barbapapa"), gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1[i].getX() < -(200) ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1[i].setX(2000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("alien"), gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1[i].getX() < -(200) ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1[i].setX(2000);
}
}}

}


{


{
}

}


};

gdjs.Sc_232ne_32sans_32titreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDSojaObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDbarbapapaObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDlaveObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDlaveObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDalienObjects2.length = 0;

gdjs.Sc_232ne_32sans_32titreCode.eventsList0(runtimeScene);

return;

}

gdjs['Sc_232ne_32sans_32titreCode'] = gdjs.Sc_232ne_32sans_32titreCode;
