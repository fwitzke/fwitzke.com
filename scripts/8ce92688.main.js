"use strict";var app=angular.module("witzke",[]);app.controller("ExperienceCtrl",["$scope","$http","$location",function(a,b,c){a.experiences=[];var d=c.absUrl()+"experiences.json";b.get(d).success(function(b){a.experiences=b})}]),app.filter("period",function(){return function(a){return a.start+" - "+a.end}});