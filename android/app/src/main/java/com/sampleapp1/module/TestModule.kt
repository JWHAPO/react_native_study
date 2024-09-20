package com.sampleapp1.module

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class TestModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    override fun getName(): String {
        return "TestModule"
    }

    @ReactMethod
    open fun myNativeMethod(message:String, promise: Promise){
        promise.resolve("Received message: $message")
    }


}