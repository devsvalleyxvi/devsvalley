---
title: Testing Siri Integration with the New Siri Command Addon
date: 2019-01-10
tags:
  - Apple
  - Siri
  - Addon
---

![puzzle-addons](https://blog.testproject.io/wp-content/uploads/2019/12/puzzle-addons.jpg)

One of iOS’s commonly used features is the voice-controlled AI assistant named “Siri.” Siri can be used for lots of things, including integration with your own apps via SiriKit, to provide voice-activated shortcuts. It’s therefore important to be able to test Siri and its integration with your devices. Appium makes this possible via a special executeScript command, “mobile: siriCommand”, which takes a single parameter (namely the “voice” command that Siri should receive). This triggers an internal API that makes it as if Siri received the command via the user’s voice (though no actual audio is involved with this method). For more information about Appium and Siri, check out my post on Appium Pro.

My new Siri Command for iOS Addon basically provides access to this Appium + iOS feature. As expected, it’s a global (not element-specific action) that runs only on iOS device tests. And it takes a single string parameter. You can put anything in here that you like; in my testing, I used the example “What is two plus two?” to trigger Siri’s internal logic to answer a math question. The response shows up on the screen in two parts: First a reformulation of the question (“2 + 2 =“) and then the answer itself (“4”). The fact that these show up on the screen (and not just via audio output) and are moreover backed by accessibility IDs makes it easy to verify that Siri’s response to my command was appropriate.

The source code for this addon is open source, up on [GitHub](https://github.com/testproject-io/addons/tree/master/siri). You can see that its implementation is quite simple, since all it does is leverage the TestProject SDK to acquire the correct parameter from the TestProject user, and then pass this in to the “mobile: siriCommand” Appium command using the Appium driver object provided by the TestProject SDK.
