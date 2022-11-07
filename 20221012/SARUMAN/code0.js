gdjs.Sc_232ne_32sans_32titreCode = {};
gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDMapObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDMapObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects2= [];

gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition2IsTrue_0 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_1 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_1 = {val:false};
gdjs.Sc_232ne_32sans_32titreCode.condition2IsTrue_1 = {val:false};


gdjs.Sc_232ne_32sans_32titreCode.mapOfGDgdjs_46Sc_95232ne_9532sans_9532titreCode_46GDDinoObjects1Objects = Hashtable.newFrom({"Dino": gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1});
gdjs.Sc_232ne_32sans_32titreCode.mapOfGDgdjs_46Sc_95232ne_9532sans_9532titreCode_46GDArthurObjects1Objects = Hashtable.newFrom({"Arthur": gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1});
gdjs.Sc_232ne_32sans_32titreCode.eventsList0 = function(runtimeScene) {

{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
{gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_1 = gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0;
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1.val = false;
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_1.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1.val ) {
{
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}
gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_1.val = true && gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1.val && gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_1.val;
}
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Platforme"), gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1[i].addPolarForce(180, 250, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
{gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_1 = gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0;
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1.val = false;
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1.length = k;}if ( gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1.val ) {
{
gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}
gdjs.Sc_232ne_32sans_32titreCode.conditionTrue_1.val = true && gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_1.val && gdjs.Sc_232ne_32sans_32titreCode.condition1IsTrue_1.val;
}
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1[i].addPolarForce(0, 250, 0);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platforme"), gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1[i].getX() < -(460) ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1[i].setX(2100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arthur"), gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1[i].getX() < -(460) ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1[i].setX(2100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arthur"), gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dino"), gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Sc_232ne_32sans_32titreCode.mapOfGDgdjs_46Sc_95232ne_9532sans_9532titreCode_46GDDinoObjects1Objects, gdjs.Sc_232ne_32sans_32titreCode.mapOfGDgdjs_46Sc_95232ne_9532sans_9532titreCode_46GDArthurObjects1Objects, false, runtimeScene, false);
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}}

}


{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Arthur"), gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1[i].addPolarForce(180, 250, 0);
}
}}

}


{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1[i].hide();
}
}}

}


};

gdjs.Sc_232ne_32sans_32titreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDDinoObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDPlatformeObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDMapObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDMapObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDArthurObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewTextObjects2.length = 0;

gdjs.Sc_232ne_32sans_32titreCode.eventsList0(runtimeScene);

return;

}

gdjs['Sc_232ne_32sans_32titreCode'] = gdjs.Sc_232ne_32sans_32titreCode;
