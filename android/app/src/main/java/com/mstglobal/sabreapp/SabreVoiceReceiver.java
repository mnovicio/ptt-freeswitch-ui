package com.mstglobal.sabreapp;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class SabreVoiceReceiver extends BroadcastReceiver {
    private static final String TAG = MainApplication.TAG + "_bReceiver";

    @Override
    public void onReceive(Context context, Intent intent) {
        // TODO: This method is called when the BroadcastReceiver is receiving
        // an Intent broadcast.
//        throw new UnsupportedOperationException("Not yet implemented");

        Log.i(TAG, "intent receiver send start intent");
        context.startService(new Intent(context, SabreVoiceService.class));
    }
}
