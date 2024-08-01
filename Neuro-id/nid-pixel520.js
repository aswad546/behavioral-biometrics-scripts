if(window.nidLoaded!=true){
    window.nidConfig=window.nidConfig||{
        "errorLogging": true,
        "autoStart": false,
        "targetSelectors": [
            "input",
            "textarea",
            "button",
            "select",
            "a"
        ],
        "captureOrientationData": false,
        "requestTimeout": 4000,
        "eventQueueFlushInterval": 6000,
        "eventQueueThrottleWait": 100,
        "eventQueueFlushSize": 300,
        "eventQueueRetryCount": 5,
        "eventQueueRetryPacketsBeforeNum": 3,
        "bindWith": "auto",
        "cookieDomain": "",
        "cookieExpires": 31536000000,
        "windowResizeThrottleWait": 100,
        "windowScrollThrottleWait": 60,
        "deviceMotionThrottleWait": 30,
        "deviceOrientationThrottleWait": 30,
        "siteId": "form_pixel520",
        "key": "key_live_Z7ukOV0AzxL7YZXgkWl705M2",
        "advancedDeviceKeyEndpoint": "https://receiver.neuroid.cloud/a",
        "advancedDeviceEndpoint": "https://advanced.neuro-id.com",
        "collectorEndpoint": "https://receiver.neuroid.cloud/c"
    };(function(d,
    n){
        {
            n.nid=n.nid||function(){
                {
                    (n.nid.q=n.nid.q||[]).push(arguments)
                }
            },
            n.nid.q=n.nid.q||[];var d=document,
            h=d.head||d.getElementsByTagName('head')[
                0
            ],
            s=d.createElement('script');s.async=true,
            s.src='https://scripts.neuro-id.com/nid-adv-5.2.6.js',
            h.appendChild(s);n.nid.q=[
                [
                    'setVariable',
                    'jsConfig',
                    7
                ],
                [
                    'setVariable',
                    'selfHosted',
                    'false'
                ]
            ].concat(n.nid.q);
        }
    })(document,
    window);window.nidLoaded=true;
}else{
    window.nid('log',
    'log',
    'NID Track JS attempt');
}
