<script>
var returnValue={};
function setReturnValue(key, value){
    returnValue[key] = value;
   window.location="jscall://callNextCmd";
}

function iosEventListener(desc, category, action, label){

}

function callObjectiveCFromJavascript(num){
      var cmd = [
"jscall://callNative__staticCall//class__UIApplication//retkey__sharedApplication//rettype__nativeObj//sharedApplication__",
"jscall://callNative__nativeObjsharedApplication//class__UIApplication//retkey__appDele//rettype__nativeObj//delegate__",
"jscall://callNative__nativeObjappDele//class__AppDelegate//retkey__advertiseWrapper//rettype__nativeObj//advertiseWrapper__",
"jscall://callNative__nativeObjadvertiseWrapper//class__AdvertiseWrapper//retkey__//rettype__//loadInterstitialAd__",
"jscall://callNative__nativeObjappDele//class__AppDelegate//retkey__applicationDocumentsDirectory//rettype__string//applicationDocumentsDirectory__",
 "jscall://callNative__staticCall//class__JSRunTestClass//retkey__testDictionary//rettype__dictionary//testDictionary__dictionary,,stringhi,,stringhellow,,stringnumber,,int12345",
 "jscall://callNative__staticCall//class__JSRunTestClass//retkey__testArray//rettype__array//testArray__array,,stringhi,,stringhellow,,int12345",
 "jscall://callNative__staticCall//class__JSRunTestClass//retkey__testNumInt//rettype__intNumberObj//testNumInt__",
 "jscall://callNative__staticCall//class__JSRunTestClass//retkey__testNumBool//rettype__boolNumberObj//testNumBool__",
 "jscall://callNative__staticCall//class__JSRunTestClass//retkey__testInt//rettype__int//testInt__",
 "jscall://callNative__staticCall//class__JSRunTestClass//retkey__testMultipleParam//rettype__string//testMultipleParam__123//b__abc//c__array,,stringhi,,stringhellow",
"jscall://callNative__self//__//retkey__selfRuncount//rettype__int//readInt__runCount//defaultValue__0",
"jscall://callNative__self//__//retkey__advertiseModulePriority//rettype__string//readString__stringadvertiseModulePriority//defaultValue__stringadmob iad applovin mopub",
 "jscall://callNative__staticCall//class__Util//retkey__arrDeninedDomain//rettype__array//getDeninedDomainList__",
"jscall://callNative__staticCall//class__Util//retkey__getRunCount//rettype__intNumberObj//getRunCount__",
                         "jscall://callNative__staticCall//class__Util//retkey__locale//rettype__string//getCurrentLocale__",
                         "jscall://callNative__staticCall//class__Util//retkey__useragent//rettype__int//getUserAgentIndex__",
                         "jscall://callNative__UtilSaveString//key__testValue//value__test",
                         "jscall://callNative__UtilSaveInt//key__testInt//value__1",
                         "jscall://callNative__staticCall//class__Util//rettype__string//getCurrentLocale__",
                         "jscall://callNative__callback//key__callbackName//value__1"
                      ];
      if(cmd.length >= num){
          window.location=cmd[num];
     }
     else{
          alert('complete');
     }
 }

</script>
