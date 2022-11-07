gdjs.Sc_232ne_32sans_32titreCode = {};
gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDlined2Objects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDlined2Objects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDpaysageObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDpaysageObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDviandeObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDviandeObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects2= [];

gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0 = {val:false};


gdjs.Sc_232ne_32sans_32titreCode.eventsList0 = function(runtimeScene) {

{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("lined"), gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("herbe"), gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1[i].addPolarForce(180, 250, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lined"), gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1[i].addPolarForce(0, 250, 0);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("herbe"), gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1[i].getX() < -(200) ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1[i].setX(2000);
}
}}

}


};

gdjs.Sc_232ne_32sans_32titreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDlinedObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDlined2Objects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDlined2Objects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDherbeObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDpaysageObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDpaysageObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDviandeObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDviandeObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects2.length = 0;

gdjs.Sc_232ne_32sans_32titreCode.eventsList0(runtimeScene);

return;

}

gdjs['Sc_232ne_32sans_32titreCode'] = gdjs.Sc_232ne_32sans_32titreCode;
