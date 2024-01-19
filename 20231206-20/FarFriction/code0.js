gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDparoiObjects1= [];
gdjs.Untitled_32sceneCode.GDparoiObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDobstaclreObjects1= [];
gdjs.Untitled_32sceneCode.GDobstaclreObjects2= [];
gdjs.Untitled_32sceneCode.GDballs1Objects1= [];
gdjs.Untitled_32sceneCode.GDballs1Objects2= [];
gdjs.Untitled_32sceneCode.GDballs2Objects1= [];
gdjs.Untitled_32sceneCode.GDballs2Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs1Objects1Objects = Hashtable.newFrom({"balls1": gdjs.Untitled_32sceneCode.GDballs1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs1Objects1Objects = Hashtable.newFrom({"balls1": gdjs.Untitled_32sceneCode.GDballs1Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs2Objects1Objects = Hashtable.newFrom({"balls2": gdjs.Untitled_32sceneCode.GDballs2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs2Objects1Objects = Hashtable.newFrom({"balls2": gdjs.Untitled_32sceneCode.GDballs2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs2Objects1Objects = Hashtable.newFrom({"balls2": gdjs.Untitled_32sceneCode.GDballs2Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("balls1"), gdjs.Untitled_32sceneCode.GDballs1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs1Objects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs1Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDballs1Objects1 */
gdjs.Untitled_32sceneCode.GDballs2Objects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.Untitled_32sceneCode.GDballs1Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDballs1Objects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Untitled_32sceneCode.GDballs1Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDballs1Objects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDballs1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDballs1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs2Objects1Objects, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDballs2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDballs2Objects1[i].getBehavior("Physics2").setShapeScale(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("balls2"), gdjs.Untitled_32sceneCode.GDballs2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs2Objects1Objects, "Physics2", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDballs2Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDballs2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDballs2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDballs2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDparoiObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDparoiObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDobstaclreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDobstaclreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDballs1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDballs1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDballs2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDballs2Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
