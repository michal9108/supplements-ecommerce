"use strict";
((o,version)=>{
    window.acceleratedData=window.acceleratedData || o;
    Object.keys(o).forEach(k=>!window.acceleratedData[k]&&(window.acceleratedData[k]=o[k]));
    if ((window.acceleratedData.version||0)<version) Object.assign(window.acceleratedData, {
        version,
        startTime:new Date().getTime(),
        log: function() {
            if (!arguments.length) return this.logs.forEach(l=>console.info(l));
            let b={startTime: (new Date().getTime())-this.startTime, log: [...arguments]};
            if ((typeof '' === typeof arguments[0]) && (this.data[arguments[0]]||{}).enable_DEBUG) console.log('%cXLR8D:\n', "font-size: 32px;",...b.log);
            this.logs.push(b);
        },
        run: function(i) {return this.data[i]},
        add: function(o) {for (let i in o) {if (!!this.data[i] && !!this.data[i].initOnce) continue;this.inject(o[i].inject);this.data[i]=Object.assign(this.template(i),o[i]);this.setBodyClass(i).catch(this.log.bind(this));this.run(i).init(i)}},
        inject: function(o){typeof o===typeof {} && Object.keys(o).forEach(tag=>o[tag].forEach(k=>this.runAt(k.parentSelector||'head',([p])=>p.appendChild(Object.assign(document.createElement(tag),delete k.parentSelector,k)))))},
        preserveClass: function(className,selector){
            this.digest(`${selector}-${className}`).then(function(hash){
                this.runAt(selector,function([target]){
                    target.classList.toggle(className,true);
                    if (!!this.tmp[`pC_${hash}`]) {this.tmp[`pC_${hash}`].disconnect(); delete this.tmp[`pC_${hash}`];}
                    (this.tmp[`pC_${hash}`]=new MutationObserver(m=>m.forEach(m=>!(m.target.className.match(className)||'').length && m.target.classList.add(className)))).observe(target,{attributes:!0,attributeFilter:['class']});
                }.bind(this));
            }.bind(this)).catch(this.log.bind(this));
        },
        setBodyClass: async function(testName){
            if (this.data[testName].disableBodyClassSetting) return;
            try { document.body.classList.toggle(testName,true) } catch (e) { }
            this.runAt('body', this.preserveClass.bind(this,testName,'body'));
            new MutationObserver(m=>!!m.find(m=>!![...m.addedNodes].find(el=>/^body$/i.test(el.nodeName))) && this.preserveClass(testName,'body')).observe(document,{childList:!0,subtree:!0});
        },
        runAt: function(selector,callback,interval){
            (async function(){
                let b=(((window.Kameleoon||{}).API||{}).Core||{}).runWhenElementPresent;
                if (!!b) {
                    for (let i=0;i<20;i++) {if (!!document.body) break; await new Promise(r=>setTimeout(r,50))}
                    return b(selector,callback,interval);
                } else { for (let i=0;i<100;i++) {let c=document.querySelectorAll(selector);if (!!c.length) return callback([...c]);await new Promise(r=>setTimeout(r,interval||100));}this.log(`Selector "${selector}" wasn't found`); }
            }.bind(this))().catch(this.log.bind(this));
        }, 
        runIf: function(condition,callback,interval){
            (async function(){
                if (!!window.Kameleoon) return Kameleoon.API.Core.runWhenConditionTrue(condition,callback,interval);
                else { for (let i=0;i<200;i++) {if (!!condition()) return callback();await new Promise(r=>setTimeout(r,interval||100));}this.log(`Condition "${condition.valueOf()}" wasn't detected`); }
            }.bind(this))().catch(this.log.bind(this));
        },
        digest: async string=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(string)))).map((b)=>b.toString(16).padStart(2,'0')).join(''),
        getCookie: s=>(new Map((document.cookie||'').split(';').map(e=>e.trim().split('=')))).get(s),
        redirect: url=>(((window.Kameleoon||{}).API||{}).Core||{processRedirect:window.location.assign.bind(window.location)}).processRedirect(url),
        cache: async function(url,caheSuffix='',json=!0,opts){
            if (!url) throw new Error(`no url provided`);
            let b=await this.digest(url+caheSuffix);
            let c=!!json?JSON.parse(window.sessionStorage.getItem(b)):window.sessionStorage.getItem(b);
            if (!!c) return c;
            let error;
            c=await fetch(url,opts||{}).then(r=>r.ok? r[json?'json':'text']():Promise.reject()).catch(e=>(error=e));
            if (!c) throw error||(new Error(`Can't get data from ${url}`));
            if (!!json) c.__acc_cache_item=b;
            window.sessionStorage.setItem(b,!!json?JSON.stringify(c):c);
            return c;
        },
        sendAnalytics(data) {
            if (!data || typeof data !== typeof {}) return this.log(`sendAnalytics: no data object provided as argument`);
            let interval=200;
            let destinations=new Map([
                ['ga', ga=>{this.runIf(()=>!!window.ga, ()=>{
                    let data = ga.find(i=>!!i&&(typeof i === typeof {})); if (!data) return;
                    window.ga(`send`, data);
                    let gaID = ga.find(i=>!!i&&(typeof i === typeof '')); if (!!gaID) {!Object.keys(window.gaData||{}).includes(gaID)&&window.ga('create', gaID, 'auto', gaID);window.ga(`${gaID}.send`, data);}
                },interval);}],
                ['gtag', gtag=>{this.runIf(()=>!!window.gtag,()=>window.gtag('event',...gtag),interval)}],
                ['kameleoon', kameleoon=>{window.kameleoonQueue = window.kameleoonQueue || []; window.kameleoonQueue.push(()=>window.Kameleoon.API.Goals.processConversion(...kameleoon));}]
            ]);
            for ( let destination in data) (typeof data[destination] === typeof [])&&(destinations.get(destination)||this.log.bind(this,`sendAnalytics: no predifined destination found for "${destination}"`))(data[destination]);
        },
        cssVar: (o,v,p)=>(p||document.querySelector(`:root`)).style.setProperty(`${/^--\w/.test(o)?o:o.replace(/^-*/,'--')}`.toLowerCase(),v),
        template: function(__testName) {
            return {
                __testName,
                disableBodyClassSetting:!1,
                initOnce: !0,
                enable_DEBUG: !!(((window.Kameleoon||{}).Internals||{}).runtime||{}).simulationMode,
                runAt: this.runAt.bind(window.acceleratedData),
                runIf: this.runIf.bind(window.acceleratedData),
                error: this.log.bind(window.acceleratedData, __testName),
                preserveClass: this.preserveClass.bind(window.acceleratedData),
                injectElement: this.inject.bind(window.acceleratedData),
                digest: this.digest,
                getCookie: this.getCookie,
                redirect: this.redirect,
                cache: this.cache,
                cssVar: this.cssVar,
                sendAnalytics: this.sendAnalytics.bind(window.acceleratedData)
            }
        }
    });
    let c=window.acceleratedDataQueue || [];
    window.acceleratedDataQueue=new Proxy([],{set(t, p, v) {
        try { isNaN(+p)||window.acceleratedData.add(v); } catch(e) { window.acceleratedData.log('Test start Error:', e, v) }
        return Reflect.set(t,p,null);
    }});
    for (let b of c) window.acceleratedDataQueue.push(b);
})({data:{},logs:[],tmp:{}}, 2023113001);