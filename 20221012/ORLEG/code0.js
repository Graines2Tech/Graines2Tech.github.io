gdjs.Sc_232ne_32sans_32titreCode = {};
gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDDECORObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDDECORObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDMECHANTSObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDMECHANTSObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects2= [];

gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0 = {val:false};


gdjs.Sc_232ne_32sans_32titreCode.eventsList0 = function(runtimeScene) {

{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("jeanedouard"), gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1[i].addPolarForce(180, 250, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jeanedouard"), gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i].addPolarForce(0, 250, 0);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1[i].getX() < -(222) ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1[i].setX(5000);
}
}}

}


{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GAMEOVER"), gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jeanedouard"), gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i].getX() < -(200) ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GAMEOVER"), gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jeanedouard"), gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i].getY() > 700 ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GAMEOVER"), gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1[i].hide(false);
}
}}

}


};

gdjs.Sc_232ne_32sans_32titreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDjeanedouardObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDobstacleObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDDECORObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDDECORObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDMECHANTSObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDMECHANTSObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDGAMEOVERObjects2.length = 0;

gdjs.Sc_232ne_32sans_32titreCode.eventsList0(runtimeScene);

return;

}

gdjs['Sc_232ne_32sans_32titreCode'] = gdjs.Sc_232ne_32sans_32titreCode;
