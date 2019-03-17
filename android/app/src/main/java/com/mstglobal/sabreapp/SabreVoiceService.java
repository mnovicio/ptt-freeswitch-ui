package com.mstglobal.sabreapp;

import android.app.ActivityManager;
import android.app.Notification;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.IBinder;
import android.provider.SyncStateContract;
import android.support.v7.app.NotificationCompat;
import android.util.Log;

import java.security.SecureRandom;

import sabreVoice.SabreVoice;
import sabreVoice.UINotifier;


public class SabreVoiceService extends Service {
    private static final String TAG = MainApplication.TAG+"_service";
    private static final int NOTIFICATION_ID = 0x54637;

    public SabreVoiceService() {
    }

    private Notification buildNotification(String title, String text) {
        Intent appLaunchIntent = new Intent(getApplicationContext(), MainActivity.class);
        PendingIntent contentIntent = PendingIntent.getActivity(getApplicationContext(), 0, appLaunchIntent, 0);
        return new Notification.Builder(this)
                .setSmallIcon(R.drawable.ic_sabre_small_icon)
                .setContentTitle(title)
                .setContentText(text)
                .setContentIntent(contentIntent)
                .setPriority(Notification.PRIORITY_HIGH)
                .build();

    }

    public void onCreate() {
        Log.d(TAG, "onCreate()");

        // start new thread and you your work there
        new Thread(runSabreVoiceTasks).start();

        // start the service in foreground mode, such that it will not
        // be restarted when UI is closed
        // TODO: choose proper text when service is firstly started.
        startForeground(NOTIFICATION_ID, buildNotification(
                "SabreVoice is connected",
                "Connected to PTT channel 1"));
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.d(TAG, "onStartCommand()");
        Bundle extra = intent.getExtras();
        if (extra != null) {
            if (extra.get(SabreVoiceModule.NOTIFICATION_TEXT) != null) {
                String msg = extra.get(SabreVoiceModule.NOTIFICATION_TEXT).toString();
                startForeground(NOTIFICATION_ID, buildNotification(
                        "SabreVoice is connected", msg));
                Log.i(TAG, "intent msg -> "+ msg);
            }
        }
        return START_STICKY;
    }

    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
        throw new UnsupportedOperationException("Not yet implemented");
    }

    @Override
    public void onDestroy () {
        Log.d(TAG, "onDestroy()");
    }

    public static String byteArrayToHexString(byte[] array) {
        StringBuffer hexString = new StringBuffer();
        for (byte b : array) {
            int intVal = b & 0xff;
            if (intVal < 0x10)
                hexString.append("0");
            hexString.append(Integer.toHexString(intVal));
        }
        return hexString.toString();
    }

    private Runnable runSabreVoiceTasks = new Runnable() {
        @Override
        public void run() {
            SabreVoice.init();
            SabreVoice.startDemoTask();
//            SecureRandom random = new SecureRandom();
//            byte bytes[] = new byte[8];

//            while(true) {
////              for (int i = 0; i < 10; i++) {
//                try {
//                    random.nextBytes(bytes);
//                    Log.d(TAG, "service message: " + byteArrayToHexString(bytes));
//                    Thread.sleep(5000);
//                } catch (Exception ex) {
//                    Log.d(TAG, "Thread.sleep() exception");
//                }
//            }
        }
    };

    private Runnable runOtherTasks = new Runnable() {
        @Override
        public void run() {

        }
    };
}
