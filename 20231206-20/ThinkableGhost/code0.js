gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDparoiObjects1= [];
gdjs.Untitled_32sceneCode.GDparoiObjects2= [];
gdjs.Untitled_32sceneCode.GDparoiObjects3= [];
gdjs.Untitled_32sceneCode.GDjoueurObjects1= [];
gdjs.Untitled_32sceneCode.GDjoueurObjects2= [];
gdjs.Untitled_32sceneCode.GDjoueurObjects3= [];
gdjs.Untitled_32sceneCode.GDballe0Objects1= [];
gdjs.Untitled_32sceneCode.GDballe0Objects2= [];
gdjs.Untitled_32sceneCode.GDballe0Objects3= [];
gdjs.Untitled_32sceneCode.GDballe1Objects1= [];
gdjs.Untitled_32sceneCode.GDballe1Objects2= [];
gdjs.Untitled_32sceneCode.GDballe1Objects3= [];
gdjs.Untitled_32sceneCode.GDballe2Objects1= [];
gdjs.Untitled_32sceneCode.GDballe2Objects2= [];
gdjs.Untitled_32sceneCode.GDballe2Objects3= [];
gdjs.Untitled_32sceneCode.GDballe3Objects1= [];
gdjs.Untitled_32sceneCode.GDballe3Objects2= [];
gdjs.Untitled_32sceneCode.GDballe3Objects3= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe0Objects2Objects = Hashtable.newFrom({"balle0": gdjs.Untitled_32sceneCode.GDballe0Objects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe1Objects1Objects = Hashtable.newFrom({"balle1": gdjs.Untitled_32sceneCode.GDballe1Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("joueur"), gdjs.Untitled_32sceneCode.GDjoueurObjects2);
gdjs.Untitled_32sceneCode.GDballe0Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe0Objects2Objects, (( gdjs.Untitled_32sceneCode.GDjoueurObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDjoueurObjects2[0].getPointX("")), 0, "");
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("joueur"), gdjs.Untitled_32sceneCode.GDjoueurObjects1);
gdjs.Untitled_32sceneCode.GDballe1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe1Objects1Objects, (( gdjs.Untitled_32sceneCode.GDjoueurObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDjoueurObjects1[0].getPointX("")), 0, "");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe0Objects1Objects = Hashtable.newFrom({"balle0": gdjs.Untitled_32sceneCode.GDballe0Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe0Objects1Objects = Hashtable.newFrom({"balle0": gdjs.Untitled_32sceneCode.GDballe0Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe1Objects1Objects = Hashtable.newFrom({"balle1": gdjs.Untitled_32sceneCode.GDballe1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe1Objects1Objects = Hashtable.newFrom({"balle1": gdjs.Untitled_32sceneCode.GDballe1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe1Objects1Objects = Hashtable.newFrom({"balle1": gdjs.Untitled_32sceneCode.GDballe1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe2Objects1Objects = Hashtable.newFrom({"balle2": gdjs.Untitled_32sceneCode.GDballe2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe2Objects1Objects = Hashtable.newFrom({"balle2": gdjs.Untitled_32sceneCode.GDballe2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe2Objects1Objects = Hashtable.newFrom({"balle2": gdjs.Untitled_32sceneCode.GDballe2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe3Objects1Objects = Hashtable.newFrom({"balle3": gdjs.Untitled_32sceneCode.GDballe3Objects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("joueur"), gdjs.Untitled_32sceneCode.GDjoueurObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDjoueurObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDjoueurObjects1[i].getX() <= 774 ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDjoueurObjects1[k] = gdjs.Untitled_32sceneCode.GDjoueurObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDjoueurObjects1.length = k;}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDjoueurObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDjoueurObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDjoueurObjects1[i].addPolarForce(0, 150, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("joueur"), gdjs.Untitled_32sceneCode.GDjoueurObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDjoueurObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDjoueurObjects1[i].getX() >= 377 ) {
        gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDjoueurObjects1[k] = gdjs.Untitled_32sceneCode.GDjoueurObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDjoueurObjects1.length = k;}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDjoueurObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDjoueurObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDjoueurObjects1[i].addPolarForce(180, 150, 0);
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.random(1));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("balle0"), gdjs.Untitled_32sceneCode.GDballe0Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe0Objects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe0Objects1Objects, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDballe0Objects1 */
gdjs.Untitled_32sceneCode.GDballe1Objects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Untitled_32sceneCode.GDballe0Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDballe0Objects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((( gdjs.Untitled_32sceneCode.GDballe0Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDballe0Objects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDballe0Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDballe0Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe1Objects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("balle1"), gdjs.Untitled_32sceneCode.GDballe1Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe1Objects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe1Objects1Objects, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDballe1Objects1 */
gdjs.Untitled_32sceneCode.GDballe2Objects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Untitled_32sceneCode.GDballe1Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDballe1Objects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((( gdjs.Untitled_32sceneCode.GDballe1Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDballe1Objects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDballe1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDballe1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe2Objects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("balle2"), gdjs.Untitled_32sceneCode.GDballe2Objects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe2Objects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe2Objects1Objects, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDballe2Objects1 */
gdjs.Untitled_32sceneCode.GDballe3Objects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Untitled_32sceneCode.GDballe2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDballe2Objects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber((( gdjs.Untitled_32sceneCode.GDballe2Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDballe2Objects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDballe2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDballe2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDballe3Objects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), "");
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDparoiObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDparoiObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDparoiObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDjoueurObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDjoueurObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDjoueurObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDballe0Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDballe0Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDballe0Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDballe1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDballe1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDballe1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDballe2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDballe2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDballe2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDballe3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDballe3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDballe3Objects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
