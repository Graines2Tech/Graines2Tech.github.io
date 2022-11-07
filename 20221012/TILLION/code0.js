gdjs.Sc_232ne_32sans_32titreCode = {};
gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDdecorObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDdecorObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDbananeObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDbananeObjects2= [];
gdjs.Sc_232ne_32sans_32titreCode.GDsalutObjects1= [];
gdjs.Sc_232ne_32sans_32titreCode.GDsalutObjects2= [];
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
gdjs.copyArray(runtimeScene.getObjects("lucienetauguste"), gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("moutard"), gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1);
gdjs.copyArray(runtimeScene.getObjects("salut"), gdjs.Sc_232ne_32sans_32titreCode.GDsalutObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1[i].addPolarForce(180, 250, 0);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDsalutObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDsalutObjects1[i].addPolarForce(180, 250, 0);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects1[i].addPolarForce(180, 250, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lucienetauguste"), gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1[i].addPolarForce(0, 250, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("moutard"), gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1);

gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1.length;i<l;++i) {
    if ( gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1[i].getX() < -(200) ) {
        gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = true;
        gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1[k] = gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1[i];
        ++k;
    }
}
gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1.length = k;}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1 */
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1[i].setX(2300);
}
}}

}


{


gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = false;
{
gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if (gdjs.Sc_232ne_32sans_32titreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("banane"), gdjs.Sc_232ne_32sans_32titreCode.GDbananeObjects1);
{for(var i = 0, len = gdjs.Sc_232ne_32sans_32titreCode.GDbananeObjects1.length ;i < len;++i) {
    gdjs.Sc_232ne_32sans_32titreCode.GDbananeObjects1[i].addPolarForce(0, 900, 0);
}
}}

}


};

gdjs.Sc_232ne_32sans_32titreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDlucienetaugusteObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDmoutardObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDdecorObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDdecorObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDbananeObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDbananeObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDsalutObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDsalutObjects2.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects1.length = 0;
gdjs.Sc_232ne_32sans_32titreCode.GDNewSpriteObjects2.length = 0;

gdjs.Sc_232ne_32sans_32titreCode.eventsList0(runtimeScene);

return;

}

gdjs['Sc_232ne_32sans_32titreCode'] = gdjs.Sc_232ne_32sans_32titreCode;
