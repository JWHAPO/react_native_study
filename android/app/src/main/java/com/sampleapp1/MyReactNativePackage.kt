package com.sampleapp1

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import com.sampleapp1.module.TestModule
import java.util.Collections


class MyReactNativePackage: ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList()
        modules.add(TestModule(reactContext))
        return modules
    }

    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return Collections.emptyList();
    }
}