package com.mstglobal.sabreapp;

/**
 * Created by zli29 on 22/6/18.
 */
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.support.annotation.Nullable;

import sabreVoice.SabreVoice;
import sabreVoice.UINotifier;

public class SabreVoiceModule extends ReactContextBaseJavaModule implements UINotifier {
    private static final String TAG = MainApplication.TAG + "_rnModule";

    public static final String NOTIFICATION_TEXT = "SABREVOICE_NOTIFICATION_TEXT";
    public static final String RN_NOTIFICATION = "sabre_native_notification";

    private ReactContext mReactContext;

    public SabreVoiceModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
        SabreVoice.setNotifier(this);
    }

    @Override
    public String getName() {
        return "SabreVoice";
    }

    @ReactMethod
    public void ModuleInit() {
        SabreVoice.init();
    }

    @ReactMethod
    public void TestCall(String msg) {
        SabreVoice.methodCallingDemo(msg);
    }

    @ReactMethod
    public void TestNotify() {
        SabreVoice.notifyDemo();
    }

    @ReactMethod
    public void DemoCallBack(final Callback successCallback) {
        successCallback.invoke("First ret", "Second arg");
    }

    @ReactMethod
    public void StartPTT() {
        SabreVoice.startDemoTask();
    }

    @ReactMethod
    public void StopPTT() {
        SabreVoice.stopDemoTask();
    }

    @ReactMethod
    public boolean IsVoiceModuleRunning() {
        return SabreVoice.isDemoTaskRunning();
    }

    @ReactMethod
    public void ChangePttChannel(final int ch) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                SabreVoice.changePTTChannel(ch);
            }
        }).start();

//        SabreVoice.changePTTChannel(ch);
    }


    @ReactMethod
    public void GetCurrentPTTChannel(Callback returnCallback) {
        int iChannel = -1;
        try {
            iChannel = SabreVoice.getSelectedPTTChannel();
        } catch (Exception e) {
            iChannel = 0;
        }

        returnCallback.invoke(iChannel);
    }

    @ReactMethod
    public void GetCurrentPTTChannelAsyncWait(Promise promise) {
        int iChannel = -1;
        try {
            iChannel = SabreVoice.getSelectedPTTChannel();
        } catch (Exception e) {
            iChannel = 0;
        }

        promise.resolve(iChannel);
    }


    public void SetRnContext(ReactContext reactContext) {
        mReactContext = reactContext;
    }

    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        System.out.println("reactContext=" + reactContext);

        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }


    public void publish(String name, int id, String msg) {
        WritableMap parcel = Arguments.createMap();
        parcel.putInt("id", id);
        parcel.putString("msg", msg);
        sendEvent(mReactContext, name, parcel);
    }

    @ReactMethod
    public void notify(int id, String  msg) {
        publish(RN_NOTIFICATION, id, msg);
        Context ctx = getReactApplicationContext();
        Intent intent = new Intent(ctx, SabreVoiceService.class);
        intent.putExtra(NOTIFICATION_TEXT, msg);
        ctx.startService(intent);
    }



    public boolean isServiceRunning(Class<?> serviceClass) {
        ActivityManager manager = (ActivityManager) getReactApplicationContext().getSystemService(Context.ACTIVITY_SERVICE);
        for (ActivityManager.RunningServiceInfo service : manager.getRunningServices(Integer.MAX_VALUE)) {
            if (serviceClass.getName().equals(service.service.getClassName())) {
                return true;
            }
        }
        return false;
    }

}
