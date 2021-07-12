/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","ojs/ojdatasource-common","ojs/ojmodel","ojs/ojknockout-model"],function(a,f,b){a.qb=function(a){this.Fa=a;this.current=0;this.Init();this.Mf=[];this.SL(10)};o_("CollectionPagingDataSource",a.qb,a);a.b.ga(a.qb,a.Xi,"oj.CollectionPagingDataSource");a.qb.prototype.Init=function(){a.qb.r.Init.call(this)};a.b.g("CollectionPagingDataSource.prototype.Init",{Init:a.qb.prototype.Init});a.qb.prototype.yJ=function(){return this.Yw()?this.tm:this.totalSize()-this.current};
a.qb.prototype.Nq=function(){this.Mf=Array(this.yJ());var a=this;return this.Fa.Yr(this.current,this.current+this.Mf.length).then(function(b){for(var e=0;e<b.length;e++)a.Mf[e]=b[e];a.Px();a.wi=a.$+a.Mf.length-1})};a.qb.prototype.Px=function(){if(void 0!==this.Uj){this.Uj.removeAll();for(var b=0;b<this.Mf.length;b++)this.Uj.push(a.Ha.map(this.Mf[b]))}};a.qb.prototype.Dm=function(){return this.Mf};a.b.g("CollectionPagingDataSource.prototype.getWindow",{Dm:a.qb.prototype.Dm});a.qb.prototype.Oy=function(){void 0===
this.Uj&&(this.Uj=b.observableArray(),this.Px());return this.Uj};a.b.g("CollectionPagingDataSource.prototype.getWindowObservable",{Oy:a.qb.prototype.Oy});a.qb.prototype.getPage=function(){return this.Kc};a.b.g("CollectionPagingDataSource.prototype.getPage",{getPage:a.qb.prototype.getPage});a.qb.prototype.setPage=function(b,c){c=c||{};b=parseInt(b,10);try{a.qb.r.handleEvent.call(this,a.bc.D.BEFOREPAGE,{page:b,previousPage:this.Kc})}catch(e){return Promise.reject(null)}this.pageSize=null!=c.pageSize?
c.pageSize:this.pageSize;c.startIndex=b*this.pageSize;var f=this.Kc;this.Kc=b;this.$=c.startIndex;var h=this;return new Promise(function(b,d){h.Ie(c).then(function(){a.qb.r.handleEvent.call(h,a.bc.D.PAGE,{page:h.Kc,previousPage:f});b(null)},function(){h.Kc=f;h.$=h.Kc*h.pageSize;d(null)})})};a.b.g("CollectionPagingDataSource.prototype.setPage",{setPage:a.qb.prototype.setPage});a.qb.prototype.getStartItemIndex=function(){return this.$};a.b.g("CollectionPagingDataSource.prototype.getStartItemIndex",
{getStartItemIndex:a.qb.prototype.getStartItemIndex});a.qb.prototype.getEndItemIndex=function(){return this.wi};a.b.g("CollectionPagingDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.qb.prototype.getEndItemIndex});a.qb.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.pageSize)};a.b.g("CollectionPagingDataSource.prototype.getPageCount",{getPageCount:a.qb.prototype.getPageCount});a.qb.prototype.fetch=function(a){var b=a||{};if(void 0!==b.pageSize&&void 0!==
b.startIndex){if(!this.Yw())return this.OC(null),Promise.resolve();this.tm=b.startIndex+b.pageSize;var e=this;return this.Nq().then(function(){e.OC(null)})}return this.Ie(a)};a.b.g("CollectionPagingDataSource.prototype.fetch",{fetch:a.qb.prototype.fetch});a.qb.prototype.Ie=function(a){var b=a||{};void 0!==b.startIndex&&(this.current=b.startIndex);void 0!==b.pageSize&&(this.tm=this.pageSize=b.pageSize);var e=this;return new Promise(function(a){try{e.Fa.fetch({success:function(){e.Nq().then(function(){e.OC(b);
a({data:e.Dm(),startIndex:e.current})})}})}catch(d){e.Nq().then(function(){e.OC(b);a({data:e.Dm(),startIndex:e.current})})}})};a.qb.prototype.OC=function(a){a=a||{};a.silent||this.handleEvent("sync",{data:this.Dm(),startIndex:this.current});a.success&&a.success()};a.qb.prototype.handleEvent=function(b,c){return a.qb.r.handleEvent.call(this,b,c)};a.qb.prototype.Yw=function(){return this.current+this.tm<this.totalSize()};a.qb.prototype.SL=function(a){this.tm=this.pageSize=a};a.qb.prototype.size=function(){var a=
this.Dm();return a?a.length:0};a.b.g("CollectionPagingDataSource.prototype.size",{size:a.qb.prototype.size});a.qb.prototype.totalSize=function(){return this.Fa.length};a.b.g("CollectionPagingDataSource.prototype.totalSize",{totalSize:a.qb.prototype.totalSize});a.qb.prototype.totalSizeConfidence=function(){return"actual"};a.b.g("CollectionPagingDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.qb.prototype.totalSizeConfidence});a.qb.prototype.getCapability=function(){return null};a.b.g("CollectionPagingDataSource.prototype.getCapability",
{getCapability:a.qb.prototype.getCapability})});